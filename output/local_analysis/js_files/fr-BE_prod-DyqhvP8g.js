const e = "BE",
  t = "fr",
  a = "fr-BE",
  r = "lidl.be",
  l = "EUR",
  n = "€",
  o = "00",
  d = ".",
  i = "DD.MM.YYYY",
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
  f = {
    channelIdWeb: "lidlbe-fr",
    channelIdAndroid: "lidlbe-fr-app",
    channelIdIOS: "lidlbe-fr-app"
  },
  V = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.be/fr/communication/newsletter/abonner",
    sources: {
      phone: "/images/localized/BE/fr/teaser/newsletter-sm.png",
      tablet: "/images/localized/BE/fr/teaser/newsletter-md.png",
      desktop: "/images/localized/BE/fr/teaser/newsletter-md.png"
    }
  }],
  A = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  C = "",
  E = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  q = "prod",
  I = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  S = {
    country: "BE",
    language: "fr",
    locale: a,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: i,
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
    userWerk: f,
    teasers: V,
    recaptchaSiteKey: A,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: E,
    env: q,
    apiKeyApe: I
  };
export {
  p as addressMasks, u as addressValidationRules, I as apiKeyApe, e as country, l as currency, d as currencySeparator, n as currencySymbol, i as dateFormat, S as
  default, o as doubleZeroDecimals, q as env, E as googleMapsApiKey, c as hardAddressValidationThreshold, t as language, a as locale, x as logEnabled, N as logMaxStack, w as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, k as phoneNumberPrefix, A as recaptchaSiteKey, C as rmsThreatMetrixOrgId, m as salutationThreshold, r as storeName, V as teasers, s as timeFormat, f as userWerk
};