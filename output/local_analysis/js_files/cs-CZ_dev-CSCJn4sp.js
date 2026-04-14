const e = "CZ",
  t = "cs",
  a = "cs-CZ",
  l = "lidl.cz",
  n = "CZK",
  r = "Kč",
  c = "",
  s = ".",
  d = "DD.MM.YYYY",
  o = "HH:mm",
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
  p = {
    postNumber: ""
  },
  b = {
    vatNumber: "AA#########",
    phoneNumber: "### ### ###",
    birthdate: "00.00.0000",
    postalCode: "### ##"
  },
  x = "+420",
  k = !0,
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
  A = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  w = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.cz/c/newsletter/s10004464",
    sources: {
      phone: "/images/localized/CZ/cs/teaser/newsletter-sm.png",
      tablet: "/images/localized/CZ/cs/teaser/newsletter-md.png",
      desktop: "/images/localized/CZ/cs/teaser/newsletter-md.png"
    }
  }],
  v = "6LcB3NQqAAAAALWs2dAvAvYWtjWHEM78GutFJpDO",
  V = null,
  I = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  q = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  M = "dev",
  Z = {
    country: "CZ",
    language: "cs",
    locale: a,
    storeName: l,
    currency: "CZK",
    currencySymbol: "Kč",
    doubleZeroDecimals: "",
    currencySeparator: ".",
    dateFormat: d,
    timeFormat: o,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: p,
    addressMasks: b,
    phoneNumberPrefix: x,
    logEnabled: k,
    logMaxStack: "20",
    optInBox: C,
    newsletterIframeUrl: null,
    userWerk: A,
    teasers: w,
    recaptchaSiteKey: v,
    rmsThreatMetrixOrgId: null,
    apiKeyApe: I,
    googleMapsApiKey: q,
    env: "dev"
  };
export {
  b as addressMasks, u as addressValidationRules, I as apiKeyApe, e as country, n as currency, s as currencySeparator, r as currencySymbol, d as dateFormat, Z as
  default, c as doubleZeroDecimals, M as env, q as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, a as locale, k as logEnabled, N as logMaxStack, y as newsletterIframeUrl, C as optInBox, p as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, v as recaptchaSiteKey, V as rmsThreatMetrixOrgId, m as salutationThreshold, l as storeName, w as teasers, o as timeFormat, A as userWerk
};