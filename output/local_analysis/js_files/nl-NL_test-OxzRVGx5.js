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
  b = {
    postNumber: ""
  },
  p = {
    vatNumber: "AA#########",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: "#### AA"
  },
  x = "",
  k = !0,
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
  C = {
    channelIdWeb: "lidlnl",
    channelIdAndroid: "lidlnl-app",
    channelIdIOS: "lidlnl-app"
  },
  V = null,
  I = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  q = "",
  v = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  R = "test",
  M = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  w = {
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
    parcelDeliveryMasks: b,
    addressMasks: p,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: null,
    userWerk: C,
    teasers: null,
    recaptchaSiteKey: I,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: v,
    env: R,
    apiKeyApe: M
  };
export {
  p as addressMasks, m as addressValidationRules, M as apiKeyApe, e as country, n as currency, c as currencySeparator, r as currencySymbol, o as dateFormat, w as
  default, d as doubleZeroDecimals, R as env, v as googleMapsApiKey, s as hardAddressValidationThreshold, l as language, t as locale, k as logEnabled, N as logMaxStack, A as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, I as recaptchaSiteKey, q as rmsThreatMetrixOrgId, u as salutationThreshold, a as storeName, V as teasers, i as timeFormat, C as userWerk
};