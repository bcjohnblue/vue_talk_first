import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";

Vue.use(VueI18n);

// Ready translated locale messages
const messages = {
  en: {
    message: {
      name: "Name"
    },
    ...enLocale
  },
  tw: {
    message: {
      name: "姓名"
    },
    ...zhLocale
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "tw", // set locale
  messages // set locale messages
});

export default i18n;
