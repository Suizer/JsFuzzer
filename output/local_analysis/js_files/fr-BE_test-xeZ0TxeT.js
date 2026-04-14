const e = "BE",
  t = "fr",
  a = "fr-BE",
  r = "lidl.be",
  l = "EUR",
  n = "€",
  d = "00",
  o = ".",
  i = "DD.MM.YYYY",
  c = "HH:mm",
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
  f = "",
  w = {
    channelIdWeb: "lidlbe-fr",
    channelIdAndroid: "lidlbe-fr-app",
    channelIdIOS: "lidlbe-fr-app"
  },
  A = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.be/fr/communication/newsletter/abonner",
    sources: {
      phone: "/images/localized/BE/fr/teaser/newsletter-sm.png",
      tablet: "/images/localized/BE/fr/teaser/newsletter-md.png",
      desktop: "/images/localized/BE/fr/teaser/newsletter-md.png"
    }
  }],
  C = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  V = "",
  E = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  I = "test",
  q = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  v = {
    country: "BE",
    language: "fr",
    locale: a,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: i,
    timeFormat: c,
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
    userWerk: w,
    teasers: A,
    recaptchaSiteKey: C,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: E,
    env: I,
    apiKeyApe: q
  };
export {
  p as addressMasks, u as addressValidationRules, q as apiKeyApe, e as country, l as currency, o as currencySeparator, n as currencySymbol, i as dateFormat, v as
  default, d as doubleZeroDecimals, I as env, E as googleMapsApiKey, s as hardAddressValidationThreshold, t as language, a as locale, k as logEnabled, N as logMaxStack, f as newsletterIframeUrl, y as optInBox, b as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, C as recaptchaSiteKey, V as rmsThreatMetrixOrgId, m as salutationThreshold, r as storeName, A as teasers, c as timeFormat, w as userWerk
};