const e = "BE",
  t = "nl",
  l = "nl-BE",
  a = "lidl.be",
  n = "EUR",
  r = "€",
  o = "00",
  i = ".",
  d = "DD.MM.YYYY",
  s = "HH:mm",
  c = 100,
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
  b = {
    postNumber: ""
  },
  p = {
    vatNumber: "AA##########",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: "####"
  },
  k = "",
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
      shouldRender: !0
    }
  },
  w = "",
  V = {
    channelIdWeb: "lidlbe-nl",
    channelIdAndroid: "lidlbe-nl-app",
    channelIdIOS: "lidlbe-nl-app"
  },
  A = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.be/nl/communicatie/newsletter/inschrijven",
    sources: {
      phone: "/images/localized/BE/nl/teaser/newsletter-sm.png",
      tablet: "/images/localized/BE/nl/teaser/newsletter-md.png",
      desktop: "/images/localized/BE/nl/teaser/newsletter-md.png"
    }
  }],
  C = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  E = "",
  q = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  I = "prod",
  S = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  v = {
    country: "BE",
    language: "nl",
    locale: l,
    storeName: a,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: d,
    timeFormat: s,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: b,
    addressMasks: p,
    phoneNumberPrefix: "",
    logEnabled: x,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: V,
    teasers: A,
    recaptchaSiteKey: C,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: q,
    env: I,
    apiKeyApe: S
  };
export {
  p as addressMasks, u as addressValidationRules, S as apiKeyApe, e as country, n as currency, i as currencySeparator, r as currencySymbol, d as dateFormat, v as
  default, o as doubleZeroDecimals, I as env, q as googleMapsApiKey, c as hardAddressValidationThreshold, t as language, l as locale, x as logEnabled, N as logMaxStack, w as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, k as phoneNumberPrefix, C as recaptchaSiteKey, E as rmsThreatMetrixOrgId, m as salutationThreshold, a as storeName, A as teasers, s as timeFormat, V as userWerk
};