const e = "NL",
  a = "nl",
  l = "nl-NL",
  t = "lidl.nl",
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
  x = {
    vatNumber: "AA#########",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: "#### AA"
  },
  p = "",
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
  q = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  v = "",
  I = "AIzaSyAE9xPtOM9HeK2LMvcyE5sTfUPpvrN4CkA",
  M = "qa",
  R = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  E = {
    country: "NL",
    language: "nl",
    locale: l,
    storeName: t,
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
    addressMasks: x,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: null,
    userWerk: C,
    teasers: null,
    recaptchaSiteKey: q,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: I,
    env: "qa",
    apiKeyApe: R
  };
export {
  x as addressMasks, m as addressValidationRules, R as apiKeyApe, e as country, n as currency, c as currencySeparator, r as currencySymbol, o as dateFormat, E as
  default, d as doubleZeroDecimals, M as env, I as googleMapsApiKey, s as hardAddressValidationThreshold, a as language, l as locale, k as logEnabled, N as logMaxStack, A as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, p as phoneNumberPrefix, q as recaptchaSiteKey, v as rmsThreatMetrixOrgId, u as salutationThreshold, t as storeName, V as teasers, i as timeFormat, C as userWerk
};