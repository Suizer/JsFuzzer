const e = "DE",
  a = "de",
  t = "de-DE",
  l = "lidl.de",
  r = "EUR",
  n = "€",
  d = "00",
  o = ".",
  c = "DD.MM.YYYY",
  i = "HH:mm",
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
  p = {
    vatNumber: "",
    phoneNumber: "+###################",
    birthdate: "00.00.0000",
    postalCode: "#####"
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
  C = "https://form.lidl.de/form/provide/7860/?lang=de-DE&fc_Origin=SubForm-OrderConfirmationPage-DE",
  V = {
    channelIdWeb: "lidlde",
    channelIdAndroid: "lidlde-app",
    channelIdIOS: "lidlde-app"
  },
  A = null,
  q = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  D = "1lc506lh",
  E = 39,
  v = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  I = "test",
  R = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  f = {
    country: "DE",
    language: "de",
    locale: t,
    storeName: l,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: c,
    timeFormat: i,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: b,
    addressMasks: p,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: C,
    userWerk: V,
    teasers: null,
    recaptchaSiteKey: q,
    rmsThreatMetrixOrgId: D,
    cashbackCartValueThreshold: 39,
    googleMapsApiKey: v,
    env: I,
    apiKeyApe: R
  };
export {
  p as addressMasks, u as addressValidationRules, R as apiKeyApe, E as cashbackCartValueThreshold, e as country, r as currency, o as currencySeparator, n as currencySymbol, c as dateFormat, f as
  default, d as doubleZeroDecimals, I as env, v as googleMapsApiKey, s as hardAddressValidationThreshold, a as language, t as locale, k as logEnabled, N as logMaxStack, C as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, q as recaptchaSiteKey, D as rmsThreatMetrixOrgId, m as salutationThreshold, l as storeName, A as teasers, i as timeFormat, V as userWerk
};