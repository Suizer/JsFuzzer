const e = "BE",
  t = "nl",
  l = "nl-BE",
  a = "lidl.be",
  n = "EUR",
  r = "€",
  d = "00",
  i = ".",
  c = "DD.MM.YYYY",
  o = "HH:mm",
  s = 100,
  m = 9999999,
  u = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:40",
    lastName: "required|min-length:2|max-length:40",
    additionalInformation: "min-length:0|max-length:40",
    postalCode: "required|min-length:0",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:10",
    countryCode: "required",
    company: "min-length:0|max-length:40",
    phoneNumber: "min-length:0|max-length-without-whitespace:20",
    birthdate: "birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "min-length:0|max-length:12|required"
  },
  g = {
    postalCode: "required|min-length:0|max-length-without-whitespace:4",
    location: "min-length:0|max-length:35",
    postNumber: "numeric",
    packstationNumber: ""
  },
  p = {
    postNumber: ""
  },
  b = {
    vatNumber: "AA##########",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: "####"
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
      shouldRender: !0
    }
  },
  A = "",
  w = {
    channelIdWeb: "lidlbe-nl",
    channelIdAndroid: "lidlbe-nl-app",
    channelIdIOS: "lidlbe-nl-app"
  },
  v = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.be/nl/communicatie/newsletter/inschrijven",
    sources: {
      phone: "/images/localized/BE/nl/teaser/newsletter-sm.png",
      tablet: "/images/localized/BE/nl/teaser/newsletter-md.png",
      desktop: "/images/localized/BE/nl/teaser/newsletter-md.png"
    }
  }],
  E = "6LcB3NQqAAAAALWs2dAvAvYWtjWHEM78GutFJpDO",
  C = "",
  V = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  q = "dev",
  I = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  M = {
    country: "BE",
    language: "nl",
    locale: l,
    storeName: a,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: c,
    timeFormat: o,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: p,
    addressMasks: b,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: w,
    teasers: v,
    recaptchaSiteKey: E,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: V,
    env: "dev",
    apiKeyApe: I
  };
export {
  b as addressMasks, u as addressValidationRules, I as apiKeyApe, e as country, n as currency, i as currencySeparator, r as currencySymbol, c as dateFormat, M as
  default, d as doubleZeroDecimals, q as env, V as googleMapsApiKey, s as hardAddressValidationThreshold, t as language, l as locale, k as logEnabled, N as logMaxStack, A as newsletterIframeUrl, y as optInBox, p as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, E as recaptchaSiteKey, C as rmsThreatMetrixOrgId, m as salutationThreshold, a as storeName, v as teasers, o as timeFormat, w as userWerk
};