const e = "CZ",
  t = "cs",
  a = "cs-CZ",
  l = "lidl.cz",
  r = "CZK",
  n = "Kč",
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
  b = {
    postNumber: ""
  },
  p = {
    vatNumber: "AA#########",
    phoneNumber: "### ### ###",
    birthdate: "00.00.0000",
    postalCode: "### ##"
  },
  x = "+420",
  k = !0,
  C = "20",
  N = {
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
  A = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.cz/c/newsletter/s10004464",
    sources: {
      phone: "/images/localized/CZ/cs/teaser/newsletter-sm.png",
      tablet: "/images/localized/CZ/cs/teaser/newsletter-md.png",
      desktop: "/images/localized/CZ/cs/teaser/newsletter-md.png"
    }
  }],
  V = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  I = null,
  Z = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  v = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  q = "test",
  M = {
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
    parcelDeliveryMasks: b,
    addressMasks: p,
    phoneNumberPrefix: x,
    logEnabled: k,
    logMaxStack: "20",
    optInBox: N,
    newsletterIframeUrl: null,
    userWerk: w,
    teasers: A,
    recaptchaSiteKey: V,
    rmsThreatMetrixOrgId: null,
    apiKeyApe: Z,
    googleMapsApiKey: v,
    env: q
  };
export {
  p as addressMasks, u as addressValidationRules, Z as apiKeyApe, e as country, r as currency, s as currencySeparator, n as currencySymbol, d as dateFormat, M as
  default, c as doubleZeroDecimals, q as env, v as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, a as locale, k as logEnabled, C as logMaxStack, y as newsletterIframeUrl, N as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, V as recaptchaSiteKey, I as rmsThreatMetrixOrgId, m as salutationThreshold, l as storeName, A as teasers, o as timeFormat, w as userWerk
};