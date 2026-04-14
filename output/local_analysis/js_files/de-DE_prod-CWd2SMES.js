const e = "DE",
  t = "de",
  a = "de-DE",
  r = "lidl.de",
  l = "EUR",
  n = "€",
  d = "00",
  o = ".",
  i = "DD.MM.YYYY",
  c = "HH:mm",
  s = 100,
  m = 9999999,
  u = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:35",
    lastName: "required|min-length:2|max-length:35",
    additionalInformation: "min-length:0|max-length:35",
    postalCode: "required|min-length:0",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:10",
    countryCode: "required",
    company: "required|min-length:0|max-length:40",
    phoneNumber: "min-length:0|max-length-without-whitespace:20",
    birthdate: "required|birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "exact-length:11"
  },
  g = {
    postalCode: "required|min-length:0|max-length-without-whitespace:5",
    location: "min-length:0|max-length:35",
    postNumber: "required|min-length:6|max-length:10|numeric",
    packstationNumber: ""
  },
  b = {
    postNumber: "##########"
  },
  k = {
    vatNumber: "",
    phoneNumber: "+###################",
    birthdate: "00.00.0000",
    postalCode: "#####"
  },
  p = "",
  x = !1,
  N = "20",
  y = {
    ratings: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !0
    },
    newsletter: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !0
    },
    termsAndConditions: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !1
    },
    companyTerms: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !1
    }
  },
  V = "https://form.lidl.de/form/provide/7860/?lang=de-DE&fc_Origin=SubForm-OrderConfirmationPage-DE",
  C = {
    channelIdWeb: "lidlde",
    channelIdAndroid: "lidlde-app",
    channelIdIOS: "lidlde-app"
  },
  q = null,
  A = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  D = "1lc506lh",
  E = 39,
  S = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  I = "prod",
  v = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  f = {
    country: "DE",
    language: "de",
    locale: a,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: i,
    timeFormat: c,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: b,
    addressMasks: k,
    phoneNumberPrefix: "",
    logEnabled: x,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: V,
    userWerk: C,
    teasers: null,
    recaptchaSiteKey: A,
    rmsThreatMetrixOrgId: D,
    cashbackCartValueThreshold: 39,
    googleMapsApiKey: S,
    env: I,
    apiKeyApe: v
  };
export {
  k as addressMasks, u as addressValidationRules, v as apiKeyApe, E as cashbackCartValueThreshold, e as country, l as currency, o as currencySeparator, n as currencySymbol, i as dateFormat, f as
  default, d as doubleZeroDecimals, I as env, S as googleMapsApiKey, s as hardAddressValidationThreshold, t as language, a as locale, x as logEnabled, N as logMaxStack, V as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, p as phoneNumberPrefix, A as recaptchaSiteKey, D as rmsThreatMetrixOrgId, m as salutationThreshold, r as storeName, q as teasers, c as timeFormat, C as userWerk
};