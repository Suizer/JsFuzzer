const e = "NL",
  l = "nl",
  t = "nl-NL",
  a = "lidl.nl",
  n = "EUR",
  r = "€",
  o = "-",
  d = ".",
  c = "DD.MM.YYYY",
  i = "HH:mm",
  s = 100,
  u = 9999999,
  m = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:35",
    lastName: "required|min-length:2|max-length:35",
    additionalInformation: "min-length:0|max-length:35",
    postalCode: "required|min-length:0",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:10",
    countryCode: "required",
    company: "min-length:0|max-length:40",
    phoneNumber: "min-length:0|max-length-without-whitespace:20",
    birthdate: "birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "required|min-length:0|max-length:12"
  },
  g = {
    postalCode: "required|min-length:0|max-length-without-whitespace:6",
    location: "min-length:0|max-length:35",
    postNumber: "numeric",
    packstationNumber: ""
  },
  k = {
    postNumber: ""
  },
  x = {
    vatNumber: "AA#########",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: "#### AA"
  },
  b = "",
  p = !1,
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
  A = null,
  V = {
    channelIdWeb: "lidlnl",
    channelIdAndroid: "lidlnl-app",
    channelIdIOS: "lidlnl-app"
  },
  C = null,
  q = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  I = "",
  S = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  v = "prod",
  w = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  M = {
    country: "NL",
    language: "nl",
    locale: t,
    storeName: a,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "-",
    currencySeparator: ".",
    dateFormat: c,
    timeFormat: i,
    hardAddressValidationThreshold: 100,
    salutationThreshold: u,
    addressValidationRules: m,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: k,
    addressMasks: x,
    phoneNumberPrefix: "",
    logEnabled: p,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: null,
    userWerk: V,
    teasers: null,
    recaptchaSiteKey: q,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: S,
    env: v,
    apiKeyApe: w
  };
export {
  x as addressMasks, m as addressValidationRules, w as apiKeyApe, e as country, n as currency, d as currencySeparator, r as currencySymbol, c as dateFormat, M as
  default, o as doubleZeroDecimals, v as env, S as googleMapsApiKey, s as hardAddressValidationThreshold, l as language, t as locale, p as logEnabled, N as logMaxStack, A as newsletterIframeUrl, y as optInBox, k as parcelDeliveryMasks, g as parcelDeliveryRules, b as phoneNumberPrefix, q as recaptchaSiteKey, I as rmsThreatMetrixOrgId, u as salutationThreshold, a as storeName, C as teasers, i as timeFormat, V as userWerk
};