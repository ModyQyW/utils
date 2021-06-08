import faker from 'faker';

export const fakerLocale = (
  locale:
    | 'az'
    | 'ar'
    | 'cz'
    | 'de'
    | 'de_AT'
    | 'de_CH'
    | 'en'
    | 'en_AU'
    | 'en_AU_ocker'
    | 'en_BORK'
    | 'en_CA'
    | 'en_GB'
    | 'en_IE'
    | 'en_IND'
    | 'en_US'
    | 'en_ZA'
    | 'es'
    | 'es_MX'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'fr_CA'
    | 'fr_CH'
    | 'ge'
    | 'hy'
    | 'hr'
    | 'id_ID'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb_NO'
    | 'ne'
    | 'nl'
    | 'nl_BE'
    | 'pl'
    | 'pt_BR'
    | 'pt_PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh_CN'
    | 'zh_TW' = 'en',
) => {
  faker.locale = locale;
};

export const fakerSeed = (seed: number) => faker.seed(seed);

export const fakerAddress = () => faker.address;

export const fakerAddressZipCode = () => faker.address.zipCode();

export const fakerAddressZipCodeByState = (state: string) =>
  faker.address.zipCodeByState(state);

export const fakerAddressCity = () => faker.address.city();

export const fakerAddressCityPrefix = () => faker.address.cityPrefix();

export const fakerAddressCitySuffix = () => faker.address.citySuffix();

export const fakerAddressCityName = () => faker.address.cityName();

export const fakerAddressStreetName = () => faker.address.streetName();

export const fakerAddressStreetAddress = () => faker.address.streetAddress();

export const fakerAddressStreetSuffix = () => faker.address.streetSuffix();

export const fakerAddressStreetPrefix = () => faker.address.streetPrefix();

export const fakerAddressSecondaryAddress = () =>
  faker.address.secondaryAddress();

export const fakerAddressCounty = () => faker.address.county();

export const fakerAddressCountry = () => faker.address.country();

export const fakerAddressCountryCode = () => faker.address.countryCode();

export const fakerAddressState = () => faker.address.state();

export const fakerAddressStateAbbr = () => faker.address.stateAbbr();

export const fakerAddressLatitude = () => faker.address.latitude();

export const fakerAddressLongitude = () => faker.address.longitude();

export const fakerAddressDirection = () => faker.address.direction();

export const fakerAddressCardinalDirection = () =>
  faker.address.cardinalDirection();

export const fakerAddressOrdinalDirection = () =>
  faker.address.ordinalDirection();

export const fakerAddressNearbyGPSCoordinate = () =>
  faker.address.nearbyGPSCoordinate();

export const fakerAddressTimeZone = () => faker.address.timeZone();

export const fakerCommerce = () => faker.commerce;

export const fakerCommerceColor = () => faker.commerce.color();

export const fakerCommerceDepartment = () => faker.commerce.department();

export const fakerCommerceProductName = () => faker.commerce.productName();

export const fakerCommercePrice = () => faker.commerce.price();

export const fakerCommerceProductAdjective = () =>
  faker.commerce.productAdjective();

export const fakerCommerceProductMaterial = () =>
  faker.commerce.productMaterial();

export const fakerCommerceProduct = () => faker.commerce.product();

export const fakerCommerceProductDescription = () =>
  faker.commerce.productDescription();

export const fakerCompany = () => faker.company;

export const fakerCompanySuffixes = () => faker.company.suffixes();

export const fakerCompanyCompanyName = () => faker.company.companyName();

export const fakerCompanyCompanySuffix = () => faker.company.companySuffix();

export const fakerCompanyCatchPhrase = () => faker.company.catchPhrase();

export const fakerCompanyBs = () => faker.company.bs();

export const fakerCompanyCatchPhraseAdjective = () =>
  faker.company.catchPhraseAdjective();

export const fakerCompanyCatchPhraseDescriptor = () =>
  faker.company.catchPhraseDescriptor();

export const fakerCompanyCatchPhraseNoun = () =>
  faker.company.catchPhraseNoun();

export const fakerCompanyBsAdjective = () => faker.company.bsAdjective();

export const fakerCompanyBsBuzz = () => faker.company.bsBuzz();

export const fakerCompanyBsNoun = () => faker.company.bsNoun();

export const fakerDatabase = () => faker.database;

export const fakerDatabaseColumn = () => faker.database.column();

export const fakerDatabaseType = () => faker.database.type();

export const fakerDatabaseCollation = () => faker.database.collation();

export const fakerDatabaseEngine = () => faker.database.engine();

export const fakerDatatype = () => faker.datatype;

export const fakerDatatypeNumber = () => faker.datatype.number();

export const fakerDatatypeFloat = () => faker.datatype.float();

export const fakerDatatypeDatetime = () => faker.datatype.datetime();

export const fakerDatatypeString = () => faker.datatype.string();

export const fakerDatatypeUuid = () => faker.datatype.uuid();

export const fakerDatatypeBoolean = () => faker.datatype.boolean();

export const fakerDatatypeHexaDecimal = () => faker.datatype.hexaDecimal();

export const fakerDatatypeJson = () => faker.datatype.json();

export const fakerDatatypeArray = () => faker.datatype.array();

export const fakerDate = () => faker.date;

export const fakerDatePast = () => faker.date.past();

export const fakerDateFuture = () => faker.date.future();

export const fakerDateBetween = (
  from: string | number | Date,
  to: string | Date,
) => faker.date.between(from, to);

export const fakerDateRecent = () => faker.date.recent();

export const fakerDateSoon = () => faker.date.soon();

export const fakerDateMonth = () => faker.date.month();

export const fakerDateWeekday = () => faker.date.weekday();

export const fakerFake = (string: string) => faker.fake(string);

export const fakerFinance = () => faker.finance;

export const fakerFinanceAccount = () => faker.finance.account();

export const fakerFinanceAccountName = () => faker.finance.accountName();

export const fakerFinanceRoutingNumber = () => faker.finance.routingNumber();

export const fakerFinanceMask = () => faker.finance.mask();

export const fakerFinanceAmount = () => faker.finance.amount();

export const fakerFinanceTransactionType = () =>
  faker.finance.transactionType();

export const fakerFinanceCurrencyCode = () => faker.finance.currencyCode();

export const fakerFinanceCurrencyName = () => faker.finance.currencyName();

export const fakerFinanceCurrencySymbol = () => faker.finance.currencySymbol();

export const fakerFinanceBitcoinAddress = () => faker.finance.bitcoinAddress();

export const fakerFinanceLitecoinAddress = () =>
  faker.finance.litecoinAddress();

export const fakerFinanceCreditCardNumber = () =>
  faker.finance.creditCardNumber();

export const fakerFinanceCreditCardCVV = () => faker.finance.creditCardCVV();

export const fakerFinanceEthereumAddress = () =>
  faker.finance.ethereumAddress();

export const fakerFinanceIban = () => faker.finance.iban();

export const fakerFinanceBic = () => faker.finance.bic();

export const fakerFinanceTransactionDescription = () =>
  faker.finance.transactionDescription();

export const fakerGit = () => faker.git;

export const fakerGitBranch = () => faker.git.branch();

export const fakerGitCommitEntry = () => faker.git.commitEntry();

export const fakerGitCommitMessage = () => faker.git.commitMessage();

export const fakerGitCommitSha = () => faker.git.commitSha();

export const fakerGitShortSha = () => faker.git.shortSha();

export const fakerHacker = () => faker.hacker;

export const fakerHackerAbbreviation = () => faker.hacker.abbreviation();

export const fakerHackerAdjective = () => faker.hacker.adjective();

export const fakerHackerNoun = () => faker.hacker.noun();

export const fakerHackerVerb = () => faker.hacker.verb();

export const fakerHackerIngverb = () => faker.hacker.ingverb();

export const fakerHackerPhrase = () => faker.hacker.phrase();

export const fakerHelpers = () => faker.helpers;

export const fakerHelpersRandomize = () => faker.helpers.randomize();

export const fakerHelpersSlugify = () => faker.helpers.slugify();

export const fakerHelpersReplaceSymbolWithNumber = () =>
  faker.helpers.replaceSymbolWithNumber();

export const fakerHelpersReplaceSymbols = () => faker.helpers.replaceSymbols();

export const fakerHelpersReplaceCreditCardSymbols = () =>
  faker.helpers.replaceCreditCardSymbols();

export const fakerHelpersRepeatString = (
  string: string,
  number?: number | undefined,
) => faker.helpers.repeatString(string, number);

export const fakerHelpersRegexpStyleStringParse = (string: string) =>
  faker.helpers.regexpStyleStringParse(string);

export const fakerHelpersShuffle = () => faker.helpers.shuffle();

export const fakerHelpersMustache = (
  string: string,
  data: {
    [key: string]: string | ((substring: string, ...args: any[]) => string);
  },
) => faker.helpers.mustache(string, data);

export const fakerHelpersCreateCard = () => faker.helpers.createCard();

export const fakerHelpersContextualCard = () => faker.helpers.contextualCard();

export const fakerHelpersUserCard = () => faker.helpers.userCard();

export const fakerHelpersCreateTransaction = () =>
  faker.helpers.createTransaction();

export const fakerImage = () => faker.image;

export const fakerImageImage = () => faker.image.image();

export const fakerImageAvatar = () => faker.image.avatar();

export const fakerImageImageUrl = () => faker.image.imageUrl();

export const fakerImageAbstract = () => faker.image.abstract();

export const fakerImageAnimals = () => faker.image.animals();

export const fakerImageBusiness = () => faker.image.business();

export const fakerImageCats = () => faker.image.cats();

export const fakerImageCity = () => faker.image.city();

export const fakerImageFood = () => faker.image.food();

export const fakerImageNightlife = () => faker.image.nightlife();

export const fakerImageFashion = () => faker.image.fashion();

export const fakerImagePeople = () => faker.image.people();

export const fakerImageNature = () => faker.image.nature();

export const fakerImageSports = () => faker.image.sports();

export const fakerImageTechnics = () => faker.image.technics();

export const fakerImageTransport = () => faker.image.transport();

export const fakerImageDataUri = () => faker.image.dataUri();

export const fakerInternet = () => faker.internet;

export const fakerInternetAvatar = () => faker.internet.avatar();

export const fakerInternetEmail = () => faker.internet.email();

export const fakerInternetExampleEmail = () => faker.internet.exampleEmail();

export const fakerInternetUserName = () => faker.internet.userName();

export const fakerInternetProtocol = () => faker.internet.protocol();

export const fakerInternetUrl = () => faker.internet.url();

export const fakerInternetDomainName = () => faker.internet.domainName();

export const fakerInternetDomainSuffix = () => faker.internet.domainSuffix();

export const fakerInternetDomainWord = () => faker.internet.domainWord();

export const fakerInternetIp = () => faker.internet.ip();

export const fakerInternetIpv6 = () => faker.internet.ipv6();

export const fakerInternetPort = () => faker.internet.port();

export const fakerInternetUserAgent = () => faker.internet.userAgent();

export const fakerInternetColor = () => faker.internet.color();

export const fakerInternetMac = () => faker.internet.mac();

export const fakerInternetPassword = () => faker.internet.password();

export const fakerLorem = () => faker.lorem;

export const fakerLoremWord = () => faker.lorem.word();

export const fakerLoremWords = () => faker.lorem.words();

export const fakerLoremSentence = () => faker.lorem.sentence();

export const fakerLoremSlug = () => faker.lorem.slug();

export const fakerLoremSentences = () => faker.lorem.sentences();

export const fakerLoremParagraph = () => faker.lorem.paragraph();

export const fakerLoremParagraphs = () => faker.lorem.paragraphs();

export const fakerLoremText = () => faker.lorem.text();

export const fakerLoremLines = () => faker.lorem.lines();

export const fakerMusic = () => faker.music;

export const fakerMusicGenre = () => faker.music.genre();

export const fakerName = () => faker.name;

export const fakerNameFirstName = () => faker.name.firstName();

export const fakerNameLastName = () => faker.name.lastName();

export const fakerNameMiddleName = () => faker.name.middleName();

export const fakerNameFindName = () => faker.name.findName();

export const fakerNameJobTitle = () => faker.name.jobTitle();

export const fakerNameGender = () => faker.name.gender();

export const fakerNamePrefix = () => faker.name.prefix();

export const fakerNameSuffix = () => faker.name.suffix();

export const fakerNameTitle = () => faker.name.title();

export const fakerNameJobDescriptor = () => faker.name.jobDescriptor();

export const fakerNameJobArea = () => faker.name.jobArea();

export const fakerNameJobType = () => faker.name.jobType();

export const fakerPhone = () => faker.phone;

export const fakerPhonePhoneNumber = () => faker.phone.phoneNumber();

export const fakerPhonePhoneNumberFormat = () =>
  faker.phone.phoneNumberFormat();

export const fakerPhonePhoneFormats = () => faker.phone.phoneFormats();

export const fakerRandom = () => faker.random;

export const fakerRandomArrayElement = () => faker.random.arrayElement();

export const fakerRandomArrayElements = () => faker.random.arrayElements();

export const fakerRandomObjectElement = () => faker.random.objectElement();

export const fakerRandomWord = () => faker.random.word();

export const fakerRandomWords = () => faker.random.words();

export const fakerRandomImage = () => faker.random.image();

export const fakerRandomLocale = () => faker.random.locale();

export const fakerRandomAlpha = () => faker.random.alpha();

export const fakerRandomAlphaNumeric = () => faker.random.alphaNumeric();

export const fakerSystem = () => faker.system;

export const fakerSystemFileName = () => faker.system.fileName();

export const fakerSystemCommonFileName = () => faker.system.commonFileName();

export const fakerSystemMimeType = () => faker.system.mimeType();

export const fakerSystemCommonFileType = () => faker.system.commonFileType();

export const fakerSystemCommonFileExt = () => faker.system.commonFileExt();

export const fakerSystemFileType = () => faker.system.fileType();

export const fakerSystemFileExt = () => faker.system.fileExt();

export const fakerSystemDirectoryPath = () => faker.system.directoryPath();

export const fakerSystemFilePath = () => faker.system.filePath();

export const fakerSystemSemver = () => faker.system.semver();

export const fakerTime = () => faker.time;

export const fakerTimeRecent = () => faker.time.recent();

export const fakerUnique = (
  method: (...args: any) => any,
  args?: any,
  opts?:
    | {
        maxTime?: number | undefined;
        maxRetries?: number | undefined;
      }
    | undefined,
) => faker.unique(method, args, opts);

export const fakerVehicle = () => faker.vehicle;

export const fakerVehicleVehicle = () => faker.vehicle.vehicle();

export const fakerVehicleManufacturer = () => faker.vehicle.manufacturer();

export const fakerVehicleModel = () => faker.vehicle.model();

export const fakerVehicleType = () => faker.vehicle.type();

export const fakerVehicleFuel = () => faker.vehicle.fuel();

export const fakerVehicleVin = () => faker.vehicle.vin();

export const fakerVehicleColor = () => faker.vehicle.color();

export const fakerVehicleVrm = () => faker.vehicle.vrm();

export const fakerVehicleBicycle = () => faker.vehicle.bicycle();
