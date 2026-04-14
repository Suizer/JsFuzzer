const e = "NL",
  l = "nl",
  t = "nl-NL",
  a = "lidl.nl",
  n = "EUR",
  r = "€",
  d = "-",
  c = ".",
  o = "DD.MM.YYYY",
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
  p = {
    postNumber: ""
  },
  b = {
    vatNumber: "AA#########",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: "#### AA"
  },
  x = "",
  N = !0,
  k = "20",
  A = {
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
  y = null,
  v = {
    channelIdWeb: "lidlnl",
    channelIdAndroid: "lidlnl-app",
    channelIdIOS: "lidlnl-app"
  },
  C = null,
  V = "6LcB3NQqAAAAALWs2dAvAvYWtjWHEM78GutFJpDO",
  q = "",
  I = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  M = "dev",
  R = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  E = {
    country: "NL",
    language: "nl",
    locale: t,
    storeName: a,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "-",
    currencySeparator: ".",
    dateFormat: o,
    timeFormat: i,
    hardAddressValidationThreshold: 100,
    salutationThreshold: u,
    addressValidationRules: m,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: p,
    addressMasks: b,
    phoneNumberPrefix: "",
    logEnabled: N,
    logMaxStack: "20",
    optInBox: A,
    newsletterIframeUrl: null,
    userWerk: v,
    teasers: null,
    recaptchaSiteKey: V,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: I,
    env: "dev",
    apiKeyApe: R
  };
export {
  b as addressMasks, m as addressValidationRules, R as apiKeyApe, e as country, n as currency, c as currencySeparator, r as currencySymbol, o as dateFormat, E as
  default, d as doubleZeroDecimals, M as env, I as googleMapsApiKey, s as hardAddressValidationThreshold, l as language, t as locale, N as logEnabled, k as logMaxStack, y as newsletterIframeUrl, A as optInBox, p as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, V as recaptchaSiteKey, q as rmsThreatMetrixOrgId, u as salutationThreshold, a as storeName, C as teasers, i as timeFormat, v as userWerk
};