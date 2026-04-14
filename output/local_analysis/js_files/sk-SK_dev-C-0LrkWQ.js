const e = "SK",
  t = "sk",
  a = "sk-SK",
  r = "lidl.sk",
  l = "EUR",
  n = "€",
  s = "00",
  c = ".",
  d = "DD.MM.YYYY",
  o = "HH:mm",
  i = 100,
  m = 9999999,
  u = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:20",
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
    vatNumber: "min-length:0|max-length:12|required"
  },
  g = {
    location: "required|min-length:0|max-length:35",
    postNumber: "numeric",
    packstationNumber: ""
  },
  k = {
    postNumber: ""
  },
  p = {
    vatNumber: "AA#########",
    phoneNumber: "!9########",
    birthdate: "00.00.0000",
    postalCode: "### ##"
  },
  b = "+421",
  x = !0,
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
  A = "",
  v = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  w = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl-shop.sk/c/newsletter/s10000210",
    sources: {
      phone: "/images/localized/SK/sk/teaser/newsletter-sm.jpg",
      tablet: "/images/localized/SK/sk/teaser/newsletter-md.jpg",
      desktop: "/images/localized/SK/sk/teaser/newsletter-md.jpg"
    }
  }],
  V = "6LcB3NQqAAAAALWs2dAvAvYWtjWHEM78GutFJpDO",
  C = "",
  S = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  q = "dev",
  I = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  K = {
    country: "SK",
    language: "sk",
    locale: a,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: d,
    timeFormat: o,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: k,
    addressMasks: p,
    phoneNumberPrefix: b,
    logEnabled: x,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: v,
    teasers: w,
    recaptchaSiteKey: V,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: S,
    env: "dev",
    apiKeyApe: I
  };
export {
  p as addressMasks, u as addressValidationRules, I as apiKeyApe, e as country, l as currency, c as currencySeparator, n as currencySymbol, d as dateFormat, K as
  default, s as doubleZeroDecimals, q as env, S as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, a as locale, x as logEnabled, N as logMaxStack, A as newsletterIframeUrl, y as optInBox, k as parcelDeliveryMasks, g as parcelDeliveryRules, b as phoneNumberPrefix, V as recaptchaSiteKey, C as rmsThreatMetrixOrgId, m as salutationThreshold, r as storeName, w as teasers, o as timeFormat, v as userWerk
};