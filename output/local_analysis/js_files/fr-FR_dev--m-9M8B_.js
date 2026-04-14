const e = "FR",
  t = "fr",
  a = "fr-FR",
  r = "lidl.fr",
  l = "EUR",
  n = "€",
  c = "00",
  d = ".",
  s = "DD.MM.YYYY",
  o = "HH:mm",
  i = 100,
  u = 9999999,
  m = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:35",
    lastName: "required|min-length:1|max-length:35",
    additionalInformation: "min-length:0|max-length:35",
    postalCode: "required",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:5",
    countryCode: "required",
    company: "min-length:2|max-length:35",
    phoneNumber: "required|exact-length-without-whitespace:10",
    birthdate: "required|birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "required|exact-length:13"
  },
  g = {
    postalCode: "required|exact-length-without-whitespace:5",
    location: "min-length:0|max-length:35|required",
    postNumber: "numeric",
    packstationNumber: ""
  },
  p = {
    postNumber: ""
  },
  b = {
    vatNumber: "FR###########",
    phoneNumber: "##########",
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
      shouldRender: !0
    },
    companyTerms: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !1
    }
  },
  R = "",
  A = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  C = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.fr/c/inscription-a-la-newsletter/s10017563",
    sources: {
      phone: "/images/localized/FR/fr/teaser/newsletter-sm.png",
      tablet: "/images/localized/FR/fr/teaser/newsletter-md.png",
      desktop: "/images/localized/FR/fr/teaser/newsletter-md.png"
    }
  }],
  w = "6LcB3NQqAAAAALWs2dAvAvYWtjWHEM78GutFJpDO",
  v = ["PARCEL_LOCKER", "PARCEL_SHOP", "HOME_DELIVERY"],
  V = 0,
  q = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  E = "dev",
  f = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  I = {
    country: "FR",
    language: "fr",
    locale: a,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: s,
    timeFormat: o,
    hardAddressValidationThreshold: 100,
    salutationThreshold: u,
    addressValidationRules: m,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: p,
    addressMasks: b,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: A,
    teasers: C,
    recaptchaSiteKey: w,
    deliveryOptionsOrder: v,
    cashbackCartValueThreshold: 0,
    googleMapsApiKey: q,
    env: "dev",
    apiKeyApe: f
  };
export {
  b as addressMasks, m as addressValidationRules, f as apiKeyApe, V as cashbackCartValueThreshold, e as country, l as currency, d as currencySeparator, n as currencySymbol, s as dateFormat, I as
  default, v as deliveryOptionsOrder, c as doubleZeroDecimals, E as env, q as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, a as locale, k as logEnabled, N as logMaxStack, R as newsletterIframeUrl, y as optInBox, p as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, w as recaptchaSiteKey, u as salutationThreshold, r as storeName, C as teasers, o as timeFormat, A as userWerk
};