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
  b = {
    postNumber: ""
  },
  p = {
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
  w = "",
  A = {
    channelIdWeb: "lidlbe-nl",
    channelIdAndroid: "lidlbe-nl-app",
    channelIdIOS: "lidlbe-nl-app"
  },
  C = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.be/nl/communicatie/newsletter/inschrijven",
    sources: {
      phone: "/images/localized/BE/nl/teaser/newsletter-sm.png",
      tablet: "/images/localized/BE/nl/teaser/newsletter-md.png",
      desktop: "/images/localized/BE/nl/teaser/newsletter-md.png"
    }
  }],
  V = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  E = "",
  v = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  I = "test",
  q = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  R = {
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
    parcelDeliveryMasks: b,
    addressMasks: p,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: A,
    teasers: C,
    recaptchaSiteKey: V,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: v,
    env: I,
    apiKeyApe: q
  };
export {
  p as addressMasks, u as addressValidationRules, q as apiKeyApe, e as country, n as currency, i as currencySeparator, r as currencySymbol, c as dateFormat, R as
  default, d as doubleZeroDecimals, I as env, v as googleMapsApiKey, s as hardAddressValidationThreshold, t as language, l as locale, k as logEnabled, N as logMaxStack, w as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, V as recaptchaSiteKey, E as rmsThreatMetrixOrgId, m as salutationThreshold, a as storeName, C as teasers, o as timeFormat, A as userWerk
};