import { Injectable } from '@angular/core';
import { Culture } from './model/culture';

@Injectable()
export class Constants {
  get DarkModeKey(): string {
    return 'isDark';
  }

  get RoutineKey(): string {
    return 'routine';
  }

  get ModalHeaderKey(): string {
    return 'modalHeader';
  }

  get SettingKey(): string {
    return 'settings';
  }

  get Cultures(): Culture[] {
    return JSON.parse(`[{"Name":"Divehi","Id":"Maldivian"},{"Name":"Sinhala","Id":"si"},
    {"Name":"Afrikaans","Id":"af"},{"Name":"Amharic","Id":"am"},{"Name":"Arabic - Algeria","Id":"ar-dz"},
    {"Name":"Arabic - Bahrain","Id":"ar-bh"},{"Name":"Arabic - Egypt","Id":"ar-eg"},{"Name":"Arabic - Iraq","Id":"ar-iq"},
    {"Name":"Arabic - Jordan","Id":"ar-jo"},{"Name":"Arabic - Kuwait","Id":"ar-kw"},{"Name":"Arabic - Lebanon","Id":"ar-lb"},
    {"Name":"Arabic - Libya","Id":"ar-ly"},{"Name":"Arabic - Morocco","Id":"ar-ma"},{"Name":"Arabic - Oman","Id":"ar-om"},
    {"Name":"Arabic - Qatar","Id":"ar-qa"},{"Name":"Arabic - Saudi Arabia","Id":"ar-sa"},{"Name":"Arabic - Syria","Id":"ar-sy"},
    {"Name":"Arabic - Tunisia","Id":"ar-tn"},{"Name":"Arabic - United Arab Emirates","Id":"ar-ae"},{"Name":"Arabic - Yemen","Id":"ar-ye"},
    {"Name":"Assamese","Id":"as"},{"Name":"Azeri - Cyrillic","Id":"az-az"},{"Name":"Azeri - Latin","Id":"az-az"},
    {"Name":"Belarusian","Id":"be"},{"Name":"Bulgarian","Id":"bg"},{"Name":"Bengali - Bangladesh","Id":"bn"},
    {"Name":"Bengali - India","Id":"bn"},{"Name":"Tibetan","Id":"bo"},{"Name":"Bosnian","Id":"bs"},{"Name":"Catalan","Id":"ca"},
    {"Name":"Czech","Id":"cs"},{"Name":"Welsh","Id":"cy"},{"Name":"Danish","Id":"da"},{"Name":"German - Austria","Id":"de-at"},
    {"Name":"German - Germany","Id":"de-de"},{"Name":"German - Liechtenstein","Id":"de-li"},{"Name":"German - Luxembourg","Id":"de-lu"},
    {"Name":"German - Switzerland","Id":"de-ch"},{"Name":"Greek","Id":"el"},{"Name":"English - Australia","Id":"en-au"},
    {"Name":"English - Belize","Id":"en-bz"},{"Name":"English - Canada","Id":"en-ca"},{"Name":"English - Caribbean","Id":"en-cb"},
    {"Name":"English - Great Britain","Id":"en-gb"},{"Name":"English - India","Id":"en-in"},{"Name":"English - Ireland","Id":"en-ie"},
    {"Name":"English - Jamaica","Id":"en-jm"},{"Name":"English - New Zealand","Id":"en-nz"},{"Name":"English - Philippines","Id":"en-ph"},
    {"Name":"English - Southern Africa","Id":"en-za"},{"Name":"English - Trinidad","Id":"en-tt"},
    {"Name":"English - United States","Id":"en-us"},{"Name":"Spanish - Argentina","Id":"es-ar"},{"Name":"Spanish - Bolivia","Id":"es-bo"},
    {"Name":"Spanish - Chile","Id":"es-cl"},{"Name":"Spanish - Colombia","Id":"es-co"},{"Name":"Spanish - Costa Rica","Id":"es-cr"},
    {"Name":"Spanish - Dominican Republic","Id":"es-do"},{"Name":"Spanish - Ecuador","Id":"es-ec"},
    {"Name":"Spanish - El Salvador","Id":"es-sv"},{"Name":"Spanish - Guatemala","Id":"es-gt"},{"Name":"Spanish - Honduras","Id":"es-hn"},
    {"Name":"Spanish - Mexico","Id":"es-mx"},{"Name":"Spanish - Nicaragua","Id":"es-ni"},{"Name":"Spanish - Panama","Id":"es-pa"},
    {"Name":"Spanish - Paraguay","Id":"es-py"},{"Name":"Spanish - Peru","Id":"es-pe"},{"Name":"Spanish - Puerto Rico","Id":"es-pr"},
    {"Name":"Spanish - Spain (Traditional)","Id":"es-es"},{"Name":"Spanish - Uruguay","Id":"es-uy"},
    {"Name":"Spanish - Venezuela","Id":"es-ve"},{"Name":"Estonian","Id":"et"},{"Name":"Basque","Id":"eu"},
    {"Name":"Farsi - Persian","Id":"fa"},{"Name":"Finnish","Id":"fi"},{"Name":"Faroese","Id":"fo"},{"Name":"French - Belgium","Id":"fr-be"},
    {"Name":"French - Canada","Id":"fr-ca"},{"Name":"French - France","Id":"fr-fr"},{"Name":"French - Luxembourg","Id":"fr-lu"},
    {"Name":"French - Switzerland","Id":"fr-ch"},{"Name":"Gaelic - Ireland","Id":"gd-ie"},{"Name":"Gaelic - Scotland","Id":"gd"},
    {"Name":"Guarani - Paraguay","Id":"gn"},{"Name":"Gujarati","Id":"gu"},{"Name":"Hebrew","Id":"he"},{"Name":"Hindi","Id":"hi"},
    {"Name":"Croatian","Id":"hr"},{"Name":"Hungarian","Id":"hu"},{"Name":"Armenian","Id":"hy"},{"Name":"Indonesian","Id":"id"},
    {"Name":"Icelandic","Id":"is"},{"Name":"Italian - Italy","Id":"it-it"},{"Name":"Italian - Switzerland","Id":"it-ch"},
    {"Name":"Japanese","Id":"ja"},{"Name":"Kazakh","Id":"kk"},{"Name":"Khmer","Id":"km"},{"Name":"Kannada","Id":"kn"},
    {"Name":"Korean","Id":"ko"},{"Name":"Kashmiri","Id":"ks"},{"Name":"Latin","Id":"la"},{"Name":"Lao","Id":"lo"},
    {"Name":"Lithuanian","Id":"lt"},{"Name":"Latvian","Id":"lv"},{"Name":"Maori","Id":"mi"},{"Name":"FYRO Macedonia","Id":"mk"},
    {"Name":"Malayalam","Id":"ml"},{"Name":"Mongolian","Id":"mn"},{"Name":"Mongolian","Id":"mn"},{"Name":"Marathi","Id":"mr"},
    {"Name":"Malay - Brunei","Id":"ms-bn"},{"Name":"Malay - Malaysia","Id":"ms-my"},{"Name":"Maltese","Id":"mt"},
    {"Name":"Burmese","Id":"my"},{"Name":"Norwegian - Bokml","Id":"no-no"},{"Name":"Nepali","Id":"ne"},
    {"Name":"Dutch - Belgium","Id":"nl-be"},{"Name":"Dutch - Netherlands","Id":"nl-nl"},{"Name":"Norwegian - Nynorsk","Id":"no-no"},
    {"Name":"Oriya","Id":"or"},{"Name":"Punjabi","Id":"pa"},{"Name":"Polish","Id":"pl"},{"Name":"Portuguese - Brazil","Id":"pt-br"},
    {"Name":"Portuguese - Portugal","Id":"pt-pt"},{"Name":"Raeto-Romance","Id":"rm"},{"Name":"Romanian - Moldova","Id":"ro-mo"},
    {"Name":"Romanian - Romania","Id":"ro"},{"Name":"Russian","Id":"ru"},{"Name":"Russian - Moldova","Id":"ru-mo"},
    {"Name":"Sanskrit","Id":"sa"},{"Name":"Sorbian","Id":"sb"},{"Name":"Sindhi","Id":"sd"},{"Name":"Slovak","Id":"sk"},
    {"Name":"Slovenian","Id":"sl"},{"Name":"Somali","Id":"so"},{"Name":"Albanian","Id":"sq"},{"Name":"Serbian - Cyrillic","Id":"sr-sp"},
    {"Name":"Serbian - Latin","Id":"sr-sp"},{"Name":"Swedish - Finland","Id":"sv-fi"},{"Name":"Swedish - Sweden","Id":"sv-se"},
    {"Name":"Swahili","Id":"sw"},{"Name":"Tamil","Id":"ta"},{"Name":"Telugu","Id":"te"},{"Name":"Tajik","Id":"tg"},
    {"Name":"Thai","Id":"th"},{"Name":"Turkmen","Id":"tk"},{"Name":"Setsuana","Id":"tn"},{"Name":"Turkish","Id":"tr"},
    {"Name":"Tsonga","Id":"ts"},{"Name":"Tatar","Id":"tt"},{"Name":"Ukrainian","Id":"uk"},{"Name":"Urdu","Id":"ur"},
    {"Name":"Uzbek - Cyrillic","Id":"uz-uz"},{"Name":"Uzbek - Latin","Id":"uz-uz"},{"Name":"Vietnamese","Id":"vi"},
    {"Name":"Xhosa","Id":"xh"},{"Name":"Yiddish","Id":"yi"},{"Name":"Chinese - China","Id":"zh-cn"},
    {"Name":"Chinese - Hong Kong SAR","Id":"zh-hk"},{"Name":"Chinese - Macau SAR","Id":"zh-mo"},{"Name":"Chinese - Singapore","Id":"zh-sg"},
    {"Name":"Chinese - Taiwan","Id":"zh-tw"},{"Name":"Zulu","Id":"zu"}]`);
  }
}
