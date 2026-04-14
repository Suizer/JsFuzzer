const e = "CZ",
  t = "cs",
  a = "cs-CZ",
  l = "lidl.cz",
  r = "CZK",
  n = "Kč",
  s = "",
  c = ".",
  o = "DD.MM.YYYY",
  d = "HH:mm",
  i = 100,
  m = 9999999,
  u = {
    salutation: "",
    firstName: "required|min-length:2|max-length:35",
    lastName: "required|min-length:2|max-length:35",
    additionalInformation: "min-length:0|max-length:35",
    postalCode: "required|min-length:0",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:10",
    countryCode: "required",
    company: "min-length:0|max-length:40",
    phoneNumber: "exact-length-without-whitespace:9",
    birthdate: "birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "required|min-length:0|max-length:12"
  },
  g = {
    postalCode: "required|min-length:0|max-length-without-whitespace:5",
    location: "min-length:0|max-length:35",
    postNumber: "numeric",
    packstationNumber: ""
  },
  k = {
    postNumber: ""
  },
  p = {
    vatNumber: "AA#########",
    phoneNumber: "### ### ###",
    birthdate: "00.00.0000",
    postalCode: "### ##"
  },
  x = "+420",
  b = !1,
  N = "20",
  C = {
    ratings: {
      analyticsEventName: "",
      checkboxCheckedValue: !1,
      checkboxNotCheckedValue: !0,
      checkboxPreselectedValue: !0,
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
  w = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  V = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.cz/c/newsletter/s10004464",
    sources: {
      phone: "/images/localized/CZ/cs/teaser/newsletter-sm.png",
      tablet: "/images/localized/CZ/cs/teaser/newsletter-md.png",
      desktop: "/images/localized/CZ/cs/teaser/newsletter-md.png"
    }
  }],
  A = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  q = null,
  I = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  S = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  v = "prod",
  Z = {
    country: "CZ",
    language: "cs",
    locale: a,
    storeName: l,
    currency: "CZK",
    currencySymbol: "Kč",
    doubleZeroDecimals: "",
    currencySeparator: ".",
    dateFormat: o,
    timeFormat: d,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: k,
    addressMasks: p,
    phoneNumberPrefix: x,
    logEnabled: b,
    logMaxStack: "20",
    optInBox: C,
    newsletterIframeUrl: null,
    userWerk: w,
    teasers: V,
    recaptchaSiteKey: A,
    rmsThreatMetrixOrgId: null,
    apiKeyApe: I,
    googleMapsApiKey: S,
    env: v
  };
export {
  p as addressMasks, u as addressValidationRules, I as apiKeyApe, e as country, r as currency, c as currencySeparator, n as currencySymbol, o as dateFormat, Z as
  default, s as doubleZeroDecimals, v as env, S as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, a as locale, b as logEnabled, N as logMaxStack, y as newsletterIframeUrl, C as optInBox, k as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, A as recaptchaSiteKey, q as rmsThreatMetrixOrgId, m as salutationThreshold, l as storeName, V as teasers, d as timeFormat, w as userWerk
};