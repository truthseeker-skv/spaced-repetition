import { Note } from '~/entities/note';
import { DecksStore } from '~/stores/decks-store';
import { ModelsStore } from '~/stores/models-store';
import { NotesStore } from '~/stores/notes-store';


const ENGLISH_DESC_NAME = 'English::Frequent words';
const ENGLISH_MODEL_NAME = ENGLISH_DESC_NAME;

class Exporter {
  decks = new DecksStore();
  models = new ModelsStore();
  notes = new NotesStore();

  async run() {
    const decks = await this.decks.getDeckNames();
    let targetDescId: number | null = decks ? decks[ENGLISH_DESC_NAME] : null;

    if (!targetDescId) {
      targetDescId = await this.decks.createDeck(ENGLISH_DESC_NAME);
    }

    const models = await this.models.getModelNames();
    let targetModelId: number | null = models ? models[ENGLISH_MODEL_NAME] : null;

    if (!targetModelId) {
      targetModelId = await this.models.createModel({
        modelName: ENGLISH_MODEL_NAME,
        inOrderFields: ['Front', 'Back'],
        cardTemplates: [{
          Name: 'Frequent english words (test)',
          Front: '{{Front}}',
          Back: '{{Back}}',
        }],
        css: `
        @font-face {
font-family: 'Roboto';
}
* {
font-family: Roboto, sans-serif;
}
[class$='content-wrapper'] > div,
[class$='content-wrapper'] > div > div,
[class$='card-padding'] > div > div {
display: flex !important;
width: 100% !important;
}
[class$='divider'] {
margin: 36px 0 !important;
}
img[src*='#thumbnail'] {
max-width: 120px !important;
max-height: 120px !important;
width: auto !important;
height: auto !important;
margin-right: 24px !important;
}
.efBtHl{height:40px;width:100%;padding:0 8px;font-size:16px;border:1px solid #5a5a5a;border-radius:4px;background:#444;color:#eaeaea;font-weight:600;outline:none;}/*!sc*/
data-styled.g1[id="sc-bdfBwQ"]{content:"efBtHl,"}/*!sc*/
.jzWozp{position:relative;padding:32px 0;}/*!sc*/
.jzWozp::before{position:absolute;content:'';top:50%;width:100%;border-bottom:1px dashed rgb(56,56,56);box-sizing:border-box;}/*!sc*/
data-styled.g2[id="sc-gsTCUz"]{content:"jzWozp,"}/*!sc*/
.iPlJBj{display:none;}/*!sc*/
[class$='-card-container'] .sc-dlfnbm{display:block;}/*!sc*/
[class$='-card-padding'] .sc-dlfnbm{display:none;}/*!sc*/
data-styled.g3[id="sc-dlfnbm"]{content:"iPlJBj,"}/*!sc*/
.eHopzz{max-width:140px;max-height:140px;width:auto;height:auto;float:left;margin:0 24px 16px 0;}/*!sc*/
.eHopzz[src=""]{display:none;}/*!sc*/
data-styled.g4[id="sc-hKgILt"]{content:"eHopzz,"}/*!sc*/
.kjfunV{position:relative;}/*!sc*/
.kjfunV::after{content:'…';color:#d6d6d6;background:#444444;border-radius:4px;padding:0 4px;}/*!sc*/
data-styled.g5[id="sc-eCssSg"]{content:"kjfunV,"}/*!sc*/
.eKFiXl{border-bottom:1px dashed #a0894d;}/*!sc*/
data-styled.g6[id="sc-jSgupP"]{content:"eKFiXl,"}/*!sc*/
.cuTFVy{padding:24px 36px;margin:8px 0 24px;border-left:4px solid #828282;border-radius:4px;background:rgba(90,90,90,0.2);}/*!sc*/
data-styled.g7[id="sc-gKsewC"]{content:"cuTFVy,"}/*!sc*/
.fhyMYh{margin:0 0 24px !important;color:rgba(256,256,256,0.7) !important;-webkit-text-decoration:underline !important;text-decoration:underline !important;font-weight:bold !important;}/*!sc*/
data-styled.g8[id="sc-iBPRYJ"]{content:"fhyMYh,"}/*!sc*/
.eIWCaM{position:relative;margin-bottom:8px;font-size:15px;line-height:24px;color:#ffffff;}/*!sc*/
.eIWCaM::before{position:absolute;left:-8px;content:'- ';color:#acacac;}/*!sc*/
.ghgVop{position:relative;margin-bottom:8px;font-size:15px;line-height:24px;color:#ffffff;color:#a99c7f;font-size:14px;}/*!sc*/
.ghgVop::before{position:absolute;left:-8px;content:'- ';color:#acacac;}/*!sc*/
data-styled.g9[id="sc-fubCfw"]{content:"eIWCaM,ghgVop,"}/*!sc*/
.dZznvp{max-width:100% !important;width:100% !important;outline:none !important;margin-top:16px;}/*!sc*/
data-styled.g10[id="sc-pFZIQ"]{content:"dZznvp,"}/*!sc*/
.hFikgL{position:relative;outline:none;z-index:0;}/*!sc*/
data-styled.g11[id="sc-jrAGrp"]{content:"hFikgL,"}/*!sc*/
.igOeyD{position:relative;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%;display:block;}/*!sc*/
.igOeyD::after{position:absolute;content:'';left:-2px;right:-2px;top:-4px;bottom:-4px;border-radius:4px;background:#444444;cursor:pointer;z-index:1;}/*!sc*/
data-styled.g12[id="sc-kEjbxe"]{content:"igOeyD,"}/*!sc*/
.ccBGdf{display:none;}/*!sc*/
.ccBGdf:checked + .sc-kEjbxe::after{display:none;}/*!sc*/
data-styled.g13[id="sc-iqHYGH"]{content:"ccBGdf,"}/*!sc*/
.hzMtRn{position:relative;display:inline;font-style:italic;font-size:20px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#acacac;}/*!sc*/
.hzMtRn::before,.hzMtRn::after{content:'/';}/*!sc*/
data-styled.g14[id="sc-crrsfI"]{content:"hzMtRn,"}/*!sc*/
.exYatC{position:relative;display:inline-block;margin-right:4px;}/*!sc*/
.exYatC:last-child{margin-right:0;}/*!sc*/
.exYatC::before{content:'🇬🇧';}/*!sc*/
.kPDhUP{position:relative;display:inline-block;margin-right:4px;}/*!sc*/
.kPDhUP:last-child{margin-right:0;}/*!sc*/
.kPDhUP::before{content:'🇺🇸';}/*!sc*/
data-styled.g15[id="sc-dQppl"]{content:"exYatC,kPDhUP,"}/*!sc*/
.ldRGit{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:24px;width:24px;border-radius:50%;box-sizing:border-box;overflow:hidden;background:white;}/*!sc*/
data-styled.g16[id="sc-bqyKva"]{content:"ldRGit,"}/*!sc*/
.eVzVbL{position:absolute;left:-4px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);height:40px;min-width:150px;}/*!sc*/
data-styled.g17[id="sc-kstrdz"]{content:"eVzVbL,"}/*!sc*/
.qryWW{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:2px solid #d12c40;border-radius:50%;box-sizing:border-box;box-shadow:0 1px 2px 1px #222;background:#efefef;}/*!sc*/
.qryWW > .sc-bqyKva{opacity:0;z-index:1;}/*!sc*/
.qryWW > .sc-dQppl{top:50%;left:50%;-webkit-transform:translate(calc(-50% + 1px),-50%);-ms-transform:translate(calc(-50% + 1px),-50%);transform:translate(calc(-50% + 1px),-50%);position:absolute;font-size:20px;}/*!sc*/
.fVFlgp{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:2px solid #d12c40;border-radius:50%;box-sizing:border-box;box-shadow:0 1px 2px 1px #222;background:#efefef;-webkit-filter:grayscale(80%);filter:grayscale(80%);box-shadow:none;}/*!sc*/
.fVFlgp > .sc-bqyKva{opacity:0;z-index:1;}/*!sc*/
.fVFlgp > .sc-dQppl{top:50%;left:50%;-webkit-transform:translate(calc(-50% + 1px),-50%);-ms-transform:translate(calc(-50% + 1px),-50%);transform:translate(calc(-50% + 1px),-50%);position:absolute;font-size:20px;}/*!sc*/
data-styled.g18[id="sc-hBEYos"]{content:"qryWW,fVFlgp,"}/*!sc*/
.cHUGkF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
data-styled.g19[id="sc-fodVxV"]{content:"cHUGkF,"}/*!sc*/
.dlKGkA{display:inline-block;font-size:24px;line-height:28px;font-weight:600;margin-right:8px;}/*!sc*/
data-styled.g20[id="sc-fFubgz"]{content:"dlKGkA,"}/*!sc*/
.cguUwu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:16px;}/*!sc*/
.cguUwu > .sc-hBEYos{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;top:2px;margin-right:4px;}/*!sc*/
.cguUwu > .sc-crrsfI{margin-left:8px;}/*!sc*/
data-styled.g21[id="sc-bkzZxe"]{content:"cguUwu,"}/*!sc*/
.lgkNFN{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}/*!sc*/
.lgkNFN > .sc-jrAGrp{margin-left:48px;margin-bottom:8px;}/*!sc*/
data-styled.g22[id="sc-idOhPF"]{content:"lgkNFN,"}/*!sc*/
.ibEuAT{display:inline-block;font-size:18px;margin-bottom:8px;color:#cacaca;font-weight:bold;-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
data-styled.g23[id="sc-dIUggk"]{content:"ibEuAT,"}/*!sc*/
.kQDszT{position:relative;color:#d7c083;}/*!sc*/
.kQDszT:first-child{margin-bottom:4px;}/*!sc*/
.kQDszT::before{position:absolute;top:6px;left:-48px;content:'2nd: ';font-size:14px;font-weight:bold;color:#acacac;font-style:italic;-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
.fZnvlW{position:relative;color:#d7c083;}/*!sc*/
.fZnvlW:first-child{margin-bottom:4px;}/*!sc*/
.fZnvlW::before{position:absolute;top:6px;left:-48px;content:'3rd: ';font-size:14px;font-weight:bold;color:#acacac;font-style:italic;-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
data-styled.g24[id="sc-hHftDr"]{content:"kQDszT,fZnvlW,"}/*!sc*/
.iMjmAS{display:inline-block;position:relative;font-size:10px;color:#acacac;font-style:italic;line-height:16px;}/*!sc*/
data-styled.g25[id="sc-dmlrTW"]{content:"iMjmAS,"}/*!sc*/
.kiYkxB{position:relative;font-style:italic;font-size:13px;color:#ff3332;}/*!sc*/
data-styled.g26[id="sc-kfzAmx"]{content:"kiYkxB,"}/*!sc*/
.dFFapA{display:inline-block;position:relative;min-width:16px;min-height:16px;width:16px;height:16px;font-size:10px;color:#2ea6d5;font-style:italic;-webkit-text-decoration:underline;text-decoration:underline;box-sizing:border-box;}/*!sc*/
data-styled.g27[id="sc-fKFyDc"]{content:"dFFapA,"}/*!sc*/
.LBlHO{display:block;position:relative;padding-left:16px;line-height:24px;font-size:16px;}/*!sc*/
.LBlHO::before{position:relative;left:0;top:1px;content:'‣ ';color:#cacaca;clear:both;}/*!sc*/
.LBlHO .sc-fKFyDc{top:-2px;margin-right:4px;}/*!sc*/
.LBlHO > .sc-dmlrTW{bottom:2px;margin-right:8px;}/*!sc*/
.iWYztY{display:block;position:relative;padding-left:16px;line-height:24px;font-size:16px;}/*!sc*/
.iWYztY::before{position:relative;left:0;top:1px;content:'‣ ';color:#ffcc4d;clear:both;}/*!sc*/
.iWYztY .sc-fKFyDc{top:-2px;margin-right:4px;}/*!sc*/
.iWYztY > .sc-dmlrTW{bottom:2px;margin-right:8px;}/*!sc*/
data-styled.g28[id="sc-bBXqnf"]{content:"LBlHO,iWYztY,"}/*!sc*/
.jgmiJN{padding:0 0 0 8px !important;margin:0 0 0 16px !important;border-left:2px solid #444444;}/*!sc*/
data-styled.g30[id="sc-cxFLnm"]{content:"jgmiJN,"}/*!sc*/
.eNmUBD{position:relative;padding:0 0 0 8px;margin:0;list-style:none;font-size:14px;line-height:22px;color:#acacac;font-style:italic;}/*!sc*/
.eNmUBD:last-child{margin-bottom:8px;}/*!sc*/
.eNmUBD::before{position:absolute;top:0;left:0;content:'⁃ ';}/*!sc*/
data-styled.g31[id="sc-lmoMRL"]{content:"eNmUBD,"}/*!sc*/
.csLNXp{margin-bottom:24px;}/*!sc*/
.csLNXp > .sc-kfzAmx{font-size:16px;}/*!sc*/
data-styled.g33[id="sc-giIncl"]{content:"csLNXp,"}/*!sc*/
.lHwX{margin-top:8px;margin-bottom:16px;}/*!sc*/
.lHwX > .sc-dmlrTW{text-transform:uppercase;-webkit-text-decoration:underline;text-decoration:underline;margin-bottom:4px;color:#cacaca;font-weight:600;}/*!sc*/
data-styled.g34[id="sc-ezrdKe"]{content:"lHwX,"}/*!sc*/
.cNGsRF{position:relative;width:100%;}/*!sc*/
data-styled.g35[id="sc-bYEvPH"]{content:"cNGsRF,"}/*!sc*/
.jnErIV{width:100%;color:white;}/*!sc*/
data-styled.g36[id="sc-kLgntA"]{content:"jnErIV,"}/*!sc*/
.kvPYnS{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2px 0;border-bottom:1px solid #444444;margin-bottom:16px;}/*!sc*/
data-styled.g37[id="sc-iktFzd"]{content:"kvPYnS,"}/*!sc*/
.iCiOCX{position:relative;padding:8px 0;}/*!sc*/
.iCiOCX::after{content:'Irregular verb';font-size:12px;font-style:italic;color:#acacac;}/*!sc*/
data-styled.g38[id="sc-jJEJSO"]{content:"iCiOCX,"}/*!sc*/
.ekCDaR{line-height:24px;color:#acacac;font-size:12px;margin-right:16px;}/*!sc*/
.ekCDaR__freq_lower{color:#fa3332;}/*!sc*/
.ekCDaR__freq_medium{color:#ffcc4d;}/*!sc*/
.ekCDaR__freq_high{color:#0fca04;}/*!sc*/
data-styled.g39[id="sc-hiSbYr"]{content:"ekCDaR,"}/*!sc*/
        `
      });
    }

    const note = new Note('union');
    note.deckName = ENGLISH_DESC_NAME;
    note.modelName = ENGLISH_MODEL_NAME;
    note.fields = {
      Front: `
    <div class='sc-kLgntA jnErIV'>
        <div class='sc-iktFzd kvPYnS'>
            <div class='sc-hiSbYr ekCDaR'>
                <span>F:</span>
                <span class='sc-hiSbYr ekCDaR__freq sc-hiSbYr ekCDaR__freq_high'> 191.13</span>
            </div>
        </div>
        <img src='' class='sc-hKgILt eHopzz' />
        <div class='sc-iJuUWI fyDXRD'>
            <div></div>
            <div>
                <div class='sc-giIncl csLNXp'>
                    <div class='sc-kfzAmx kiYkxB'>[noun]</div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>JOINING</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf LBlHO'><span class='sc-fKFyDc dFFapA'>B2</span>the act or the state of being joined together</div>
                            </div>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf LBlHO'>(in the American Civil War) the states that did not separate from the United States</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>WORKERS</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf LBlHO'><span class='sc-fKFyDc dFFapA'>B1</span>a
                                    trade <span class='sc-eCssSg kjfunV'></span> UK</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>THINGS JOINED</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf LBlHO'>The <span class='sc-eCssSg kjfunV'></span> of two people refers to marriage.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='sc-dlfnbm iPlJBj'>
            <div class='sc-gsTCUz jzWozp'></div><input class='sc-bdfBwQ efBtHl' />
        </div>
    </div>
        `,
      Back: `
    <div class='sc-kLgntA jnErIV'>
        <div class='sc-fodVxV cHUGkF'>
            <span class='sc-fFubgz dlKGkA'>union</span>
            <div class='sc-bkzZxe cguUwu'>
                <div class='sc-hBEYos qryWW'><span class='sc-bqyKva ldRGit'><audio controls='' class='sc-kstrdz eVzVbL'><source src='https://dictionary.cambridge.org/media/english/uk_pron/u/uku/ukuni/ukunins008.mp3'/></audio></span><span class='sc-dQppl exYatC'></span></div>
                <div class='sc-hBEYos qryWW'><span class='sc-bqyKva ldRGit'><audio controls='' class='sc-kstrdz eVzVbL'><source src='https://dictionary.cambridge.org/media/english/us_pron/u/uni/union/union.mp3'/></audio></span><span class='sc-dQppl kPDhUP'></span></div><span class='sc-crrsfI hzMtRn'>ˈjuː.nj.ən</span>
            </div>
        </div>
        <div class='sc-gsTCUz jzWozp'></div>
        <div class='sc-iJuUWI fyDXRD'>
            <div>
                <div class='sc-giIncl csLNXp'>
                    <div class='sc-kfzAmx kiYkxB'>[noun]</div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>JOINING</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'><span class='sc-fKFyDc dFFapA'>B2</span>the act or the state of being joined together</div>
                                <ul class='sc-cxFLnm jgmiJN'>
                                    <li class='sc-lmoMRL eNmUBD'>Meanwhile the debate on European political and monetary <span class='sc-jSgupP eKFiXl'>union</span> continues.</li>
                                    <li class='sc-lmoMRL eNmUBD'>Formal She believes that the <span class='sc-jSgupP eKFiXl'>union</span> (= marriage) of man and woman in holy matrimony is for ever.</li>
                                </ul>
                            </div>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>(in the American Civil War) the states that did not separate from the United States</div>
                                <ul class='sc-cxFLnm jgmiJN'></ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>WORKERS</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'><span class='sc-fKFyDc dFFapA'>B1</span>a
                                    trade <span class='sc-jSgupP eKFiXl'>union</span> UK</div>
                                <ul class='sc-cxFLnm jgmiJN'>
                                    <li class='sc-lmoMRL eNmUBD'>The electricians&#x27; <span class='sc-jSgupP eKFiXl'>union</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>THINGS JOINED</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>The <span class='sc-jSgupP eKFiXl'>union</span> of two people refers to marriage.</div>
                                <ul class='sc-cxFLnm jgmiJN'></ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>POLITICAL UNIT</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>a political unit made up of two or more separate units such as states</div>
                                <ul class='sc-cxFLnm jgmiJN'></ul>
                            </div>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>In the American Civil War, the <span class='sc-jSgupP eKFiXl'>Union</span> refers to the states that did not separate from the United States.</div>
                                <ul class='sc-cxFLnm jgmiJN'></ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>ORGANIZATION</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>a labor <span class='sc-jSgupP eKFiXl'>union</span></div>
                                <ul class='sc-cxFLnm jgmiJN'></ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='sc-ezrdKe lHwX'><span class='sc-dmlrTW iMjmAS'>unknown</span>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>an organization that represents the people who work in a particular industry, protects their rights and may agree pay, working conditions, etc. with their employers</div>
                                <ul class='sc-cxFLnm jgmiJN'>
                                    <li class='sc-lmoMRL eNmUBD'>&quot;No date has yet been set for a strike, the <span class='sc-jSgupP eKFiXl'>union</span> said in a statement to the press this morning.</li>
                                    <li class='sc-lmoMRL eNmUBD'>The <span class='sc-jSgupP eKFiXl'>union</span>s are on strike over wage concerns.</li>
                                    <li class='sc-lmoMRL eNmUBD'>The political activity of each affiliated <span class='sc-jSgupP eKFiXl'>union</span> is highly regulated by statute.</li>
                                    <li class='sc-lmoMRL eNmUBD'>A <span class='sc-jSgupP eKFiXl'>union</span> spokesman/delegate/negotiator</li>
                                    <li class='sc-lmoMRL eNmUBD'>Public-sector/public-employee/state-worker <span class='sc-jSgupP eKFiXl'>union</span>s</li>
                                    <li class='sc-lmoMRL eNmUBD'>Civil-service/white-collar/blue-collar <span class='sc-jSgupP eKFiXl'>union</span>s</li>
                                    <li class='sc-lmoMRL eNmUBD'>Join/belong to a <span class='sc-jSgupP eKFiXl'>union</span> The new generation of workers is less likely to join a <span class='sc-jSgupP eKFiXl'>union</span>.</li>
                                </ul>
                            </div>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>a group of two or more countries that work together or that have the same government</div>
                                <ul class='sc-cxFLnm jgmiJN'>
                                    <li class='sc-lmoMRL eNmUBD'>The European <span class='sc-jSgupP eKFiXl'>Union</span></li>
                                </ul>
                            </div>
                            <div class='sc-iwyYcG'>
                                <div class='sc-bBXqnf iWYztY'>the act of joining two or more things together, or the state of being joined together</div>
                                <ul class='sc-cxFLnm jgmiJN'>
                                    <li class='sc-lmoMRL eNmUBD'>Both bosses had a financial interest in making the merger work, as the success of the <span class='sc-jSgupP eKFiXl'>union</span> of their two companies showed.</li>
                                    <li class='sc-lmoMRL eNmUBD'>Economic/political/monetary <span class='sc-jSgupP eKFiXl'>union</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='sc-gsTCUz jzWozp'></div>
        <div class='sc-gKsewC cuTFVy'>
            <h4 class='sc-iBPRYJ fhyMYh'>playphrase</h4>
            <div class='sc-fubCfw eIWCaM'>Western <span class='sc-jSgupP eKFiXl'>Union</span>.</div>
            <div class='sc-fubCfw ghgVop'>Вестерн Юнион.</div>
            <video controls='' class='sc-pFZIQ dZznvp'>
                <source src='https://images.puzzle-english.com/video_pieces/mp4/12/9229.mp4' />
            </video>
        </div>
        <div class='sc-gKsewC cuTFVy'>
            <h4 class='sc-iBPRYJ fhyMYh'>Holly Tapp Sings You Know I&#x27;m No Good / Холли Тэпп поёт &#x27;Ты знаешь, что во мне нет ничего хорошего &#x27;</h4>
            <div class='sc-fubCfw eIWCaM'>Sweet re<span class='sc-jSgupP eKFiXl'>union</span> Jamaica and Spain</div>
            <div class='sc-fubCfw ghgVop'>Сладкое воссоединение Ямайки и Испании,</div>
            <video controls='' class='sc-pFZIQ dZznvp'>
                <source src='https://images.puzzle-english.com/video_pieces/mp4/14902/12.mp4' />
            </video>
        </div>
    </div>
        `,
    };


    const noteIds = await this.notes.addNotes(note);

    console.log('NotesIds: ', noteIds);

    const modelsNames = await this.models.getModelNames();

    console.log('Models names: ', modelsNames);

    const notes = await this.notes.findNotes('');

    console.log('Notes: ', notes);

    console.log('NotesInfo: ', await this.notes.getNotesInfo(notes || []));

    console.log('descs: ', decks);
  }
}

async function main() {
  const exp = new Exporter();
  exp.run();
}

main();
