import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

type LanguageCode = 'es' | 'en';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    TranslatePipe,
  ],
})
export class HomePage {
  private readonly translate = inject(TranslateService);
  private readonly defaultLang: LanguageCode = 'es';
  private readonly supportedLangs: LanguageCode[] = ['es', 'en'];

  currentLang: LanguageCode = this.getInitialLanguage();

  readonly languages = [
    {
      code: 'es',
      labelKey: 'LANGUAGES.ES',
    },
    {
      code: 'en',
      labelKey: 'LANGUAGES.EN',
    },
  ] satisfies Array<{ code: LanguageCode; labelKey: string }>;

  readonly buttons = [
    {
      id: 'start',
      labelKey: 'HOME.BUTTONS.START',
    },
    {
      id: 'info',
      labelKey: 'HOME.BUTTONS.INFO',
    },
    {
      id: 'settings',
      labelKey: 'HOME.BUTTONS.SETTINGS',
    },
  ];

  constructor() {
    this.translate.addLangs(this.supportedLangs);
    this.applyLanguage(this.currentLang);
  }

  changeLanguage(lang: string) {
    if (!this.isSupportedLanguage(lang)) {
      return;
    }

    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.applyLanguage(lang);
  }

  private getInitialLanguage(): LanguageCode {
    const savedLang = localStorage.getItem('lang');

    return this.isSupportedLanguage(savedLang) ? savedLang : this.defaultLang;
  }

  private isSupportedLanguage(lang: string | null): lang is LanguageCode {
    return this.supportedLangs.includes(lang as LanguageCode);
  }

  private applyLanguage(lang: LanguageCode) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
}