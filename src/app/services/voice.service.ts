import { Injectable } from '@angular/core';
import { of } from 'rxjs';

declare var webkitSpeechRecognition: any;

@Injectable()
export class VoiceService {
  vSearch = new webkitSpeechRecognition();
  talk = new SpeechSynthesisUtterance();

  Text = '';

  obs = of(this.Text);

  constructor() {
    this.vSearch.continuous = false;
    this.vSearch.interimresults = false;
    this.vSearch.lang = 'en-US';
    this.vSearch.onresult = (e) => {
      console.log(e.results[0][0].transcript);
      this.Text = e.results[0][0].transcript;
    };

    this.talk.lang = 'en-US';
    this.talk.volume = 100;
    this.talk.rate = 1;
    this.talk.pitch = -10;
  }

  GetText(): void {
    this.vSearch.start();
  }

  Speak(msg: string): void {
    this.talk.text = 'msg';
    window.speechSynthesis.speak(this.talk);
  }
}
