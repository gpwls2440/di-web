import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { graphqlBaseClient } from 'src/graphqlClient';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/**
 * @typedef {Object} AdminMenuList
 * @property {Array<(AdminMenuType|null|undefined)>} [adminMenuList] - 메뉴 리스트
 * @property {Array<(Error|null|undefined)>} [errors]
 */

/**
 * @typedef {Object} AdminMenuType
 * @property {string} code - 메뉴 CODE
 * @property {string} id - The ID of the object
 * @property {string} name - 메뉴명
 * @property {number} order - 정렬순번
 */

/**
 * @typedef {Object} AdminUser
 * @property {AdminUserType} [adminUser] - 관리자 계정 상세정보
 * @property {Array<(Error|null|undefined)>} [errors]
 */

/**
 * @typedef {Object} AdminUserType
 * @property {FunctionAuth} functionAuth - 기능권한
 * @property {string} id - The ID of the object
 * @property {boolean} isActive - 사용 여부
 * @property {Array<(MenuAuth|null|undefined)>} menuAuth - 메뉴권한
 * @property {string} name - 이름
 * @property {OrganizationType} organization - 소속
 * @property {string} phone - 전화번호
 * @property {string} uid - 관리자 ID
 */

/**
 * @typedef {Object} AdminUsers
 * @property {Array<(AdminUserType|null|undefined)>} [adminUsers] - 관리자 유저 리스트
 * @property {Array<(Error|null|undefined)>} [errors]
 */

/**
 * @typedef {Object} BaseDate
 * @property {number} [end] - 종료일
 * @property {number} [start] - 시작일
 */

/**
 * @typedef {("BUY"|"SELL")} BuySellEnum
 */

/**
 * @typedef {Object} CancelMyStrategyEditing
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} CashItem
 * @property {number} [price] - 금액
 * @property {number} [weight] - 종목 비중(%)
 */

/**
 * @typedef {Object} CreateMyStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {string} [myStrategyId]
 */

/**
 * @typedef {Object} CreateMyStrategyByReadyMade
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {string} myStrategyId
 */

/**
 * @typedef {Object} CreateThemeStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} CreatedAdminUser
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} CumulativeReturn
 * @property {CumulativeReturnType} [cumulativeReturn] - 누적 수익률
 * @property {Array<(Error|null|undefined)>} [errors]
 */

/**
 * @typedef {Object} CumulativeReturnType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<(ReturnChartItem|null|undefined)>} [chart] - 누적 수익률 차트
 * @property {ReturnInfoItem} [info] - 누적 수익률 항목 정보
 */

/**
 * @typedef {Object} DeleteAdminUser
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} DeleteMyStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} DeleteMyStrategyHistory
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} DeleteSelectedThemeGroup
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} DeleteStrategies
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * 대가들의 전략 상세
 * @typedef {Object} DetailedMasterStrategyType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<(UniverseEnum|null|undefined)>} [benchmarks] - 벤치마크
 * @property {string} description - 전략소개
 * @property {Array<(string|null|undefined)>} [factors] - 전략특징
 * @property {string} [img] - 대가의 이미지
 * @property {string} name - 전략명
 * @property {number} [recentRebalancingDate] - 최근 리밸런싱일, unixtimestamp
 * @property {StrategyReturnType} [returnRate] - 수익률(%)
 * @property {string} shortDescription - 짧은 전략소개
 * @property {SimulationOptionType} [simulationOption] - 시뮬레이션 옵션
 * @property {Array<(string|null|undefined)>} [src] - 전략출처
 */

/**
 * @typedef {Object} DetailedMyStrategy
 * @property {DetailedMyStrategyType} [detailedMyStrategy]
 * @property {Array<(Error|null|undefined)>} [errors]
 */

/**
 * @typedef {Object} DetailedMyStrategyType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {RiskAssessmentItem} [benchmark] - 벤치마크 수익률
 * @property {Array<(UniverseEnum|null|undefined)>} [benchmarks] - 벤치마크 리스트
 * @property {ExchangeRateInfo} [createdExchangeRateInfo] - 생성 당시 환율 정보
 * @property {ExchangeRateInfo} [exchangeRateInfo] - 환율 정보
 * @property {ForwardSummary} [forwardSummary] - 모의투자 요약정보
 * @property {ForwardSummary} [forwardSummaryExchange] - 모의투자 요약정보 - 환율적용
 * @property {RiskAssessmentItem} [myStrategy] - 내 전략 수익률
 * @property {string} name - 전략명
 * @property {RiskAssessmentItem} [strategy] - 기초전략 수익률
 */

/**
 * @typedef {Object} DetailedStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {DetailedStrategyUnion} [strategy]
 */

/**
 * 테마, 섹터/산업 상세
 * @typedef {Object} DetailedStrategyType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<(UniverseEnum|null|undefined)>} [benchmarks] - 벤치마크
 * @property {string} description - 전략소개
 * @property {string} name - 전략명
 * @property {number} [recentRebalancingDate] - 최근 리밸런싱일, unixtimestamp
 * @property {Array<(RepresentativeProduct|null|undefined)>} [representativeHoldings] - 대표 종목
 * @property {SectorEnum} [representativeSector] - 대표 섹터
 * @property {StrategyReturnType} [returnRate] - 수익률(%)
 * @property {SimulationOptionType} [simulationOption] - 시뮬레이션 옵션
 */

/**
 * @typedef {(DetailedMasterStrategyType|DetailedStrategyType)} DetailedStrategyUnion
 */

/**
 * @typedef {Object} Drawdown
 * @property {DrawdownType} [drawdown] - drawdown
 * @property {Array<(Error|null|undefined)>} [errors]
 */

/**
 * @typedef {Object} DrawdownType
 * @property {Array<(ReturnChartItem|null|undefined)>} [chart] - drawdown 차트
 */

/**
 * @typedef {Object} DuplicateMyStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {string} [myStrategyId]
 */

/**
 * @typedef {Object} Error
 * @property {string} [field]
 * @property {JSONString} [info]
 * @property {KbError} key
 * @property {string} [message]
 */

/**
 * @typedef {Object} ExceededMaxCnt
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} exceededMaxCnt - 최대 개수 초과 여부
 */

/**
 * @typedef {Object} ExchangeRateInfo
 * @property {number} [baseDate] - 기준일
 * @property {number} [exchangeRate] - 환율
 */

/**
 * @typedef {Object} Exposure
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {ExposureType} [exposure]
 */

/**
 * @typedef {Object} ExposureItem
 * @property {Array<(WeightItem|null|undefined)>} [holdings]
 * @property {Array<(WeightItem|null|undefined)>} [industries]
 * @property {Array<(WeightItem|null|undefined)>} [sectors]
 */

/**
 * @typedef {Object} ExposureType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {ExposureItem} [strategy] - 베이스 전략 익스포저
 */

/**
 * @typedef {Object} FactorDefaultValueInfo
 * @property {boolean} [isChecked] - 사용자가 선택한 팩터 여부
 * @property {number} [max] - 사용자가 설정한 최대값
 * @property {number} [min] - 사용자가 설정한 최소값
 */

/**
 * @typedef {Object} FactorInfo
 * @property {string} name - 팩터명
 * @property {string} value - 사용자가 설정한 팩터의 값
 */

/**
 * @typedef {Object} FactorInputItem
 * @property {string} cmName - 팩터 cm_name
 * @property {number} max - max
 * @property {number} min - min
 */

/**
 * @typedef {Object} FactorItem
 * @property {string} cmName - cm명
 * @property {Array<(string|null|undefined)>} [comments] - 팩터 설명글 주석 리스트
 * @property {FactorDefaultValueInfo} [defaultValueInfo] - 팩터 기본값 정보
 * @property {string} [description] - 팩터 설명글
 * @property {string} displayName - display 팩터명
 * @property {HistogramItem} [histogramData] - 히스토그램 데이터
 * @property {boolean} ignoreNegative - 음수제외 여부
 * @property {number} img - 팩터 설명 이미지
 * @property {number} max - 팩터 최대값
 * @property {number} min - 팩터 최소값
 * @property {FactorStyleEnum} style - 팩터 스타일
 * @property {string} type - 팩터 타입(value: 싱글팩터, ratio:스타일팩터)
 */

/**
 * An enumeration.
 * @typedef {("BETA"|"DIVIDEND"|"LIQUIDITY"|"MASTER"|"MOMENTUM"|"QUALITY"|"SCORE"|"SIZE"|"STYLE"|"SURPRISE"|"VALUE"|"VOLATILITY")} FactorStyleEnum
 */

/**
 * @typedef {Object} FactorStyleItem
 * @property {string} [description] - 팩터 설명글
 * @property {string} [name] - 팩터 스타일명
 * @property {FactorStyleEnum} [style] - 팩터 스타일
 */

/**
 * @typedef {Object} FactorValueItem
 * @property {number} [max] - 최대값
 * @property {number} [min] - 최소값
 */

/**
 * @typedef {Object} Factors
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(FactorsType|null|undefined)>} [factors]
 */

/**
 * @typedef {Object} FactorsType
 * @property {Array<(FactorItem|null|undefined)>} [factors] - 해당 스타일에 속한 팩터들
 * @property {FactorStyleItem} [style] - 팩터 스타일 정보
 */

/**
 * @typedef {Object} ForwardSummary
 * @property {number} [gainOrLossExchange] - 환손익
 * @property {number} [gainOrLossValuation] - 평가손익
 * @property {number} [investmentAmount] - 투자금액
 * @property {BaseDate} [period] - 투자기간
 * @property {number} [valuationAmount] - 평가금액
 */

/**
 * @typedef {Object} FunctionAuth
 * @property {boolean} strategyEditFullAccess - 전략편집 완전수정 여부
 */

/**
 * @typedef {Object} FunctionAuthInput
 * @property {boolean} strategyEditFullAccess - 전략편집 완전수정 권한 여부
 */

/**
 * The `GenericScalar` scalar type represents a generic
 * GraphQL scalar value that could be:
 * String, Boolean, Int, Float, List or Object.
 * @typedef {*} GenericScalar
 */

/**
 * @typedef {("HIGH"|"LOW"|"MIDDLE")} GradeEnum
 */

/**
 * @typedef {Object} HistogramItem
 * @property {FactorValueItem} [factorRange] - 팩터 최소 최대 값
 * @property {FactorValueItem} [high] - 상위 20% min, max 값
 * @property {FactorValueItem} [low] - 상위 60% min, max 값
 * @property {FactorValueItem} [middle] - 상위 40% min, max 값
 * @property {FactorValueItem} [range] - 히스토그램 범위
 * @property {Array<(number|null|undefined)>} [stickCounts] - 히스토그램 막대별 개수 리스트
 */

/**
 * @typedef {Object} HoldingPosition
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {HoldingPositionType} [holdingPosition]
 */

/**
 * @typedef {Object} HoldingPositionAll
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {HoldingPositionAllType} [holdingPositionAll]
 */

/**
 * @typedef {Object} HoldingPositionAllType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {CashItem} [cash] - 현금 정보
 * @property {Array<(HoldingPositionItem|null|undefined)>} [position]
 */

/**
 * @typedef {Object} HoldingPositionItem
 * @property {string} ccid - CCID
 * @property {string} code - 종목 코드
 * @property {IndustryEnum} [industry] - 종목 산업
 * @property {string} [industryName] - 종목 산업명
 * @property {boolean} [isAdd] - 추가종목 여부
 * @property {boolean} [isWhitelist] - 화이트리스트 여부
 * @property {string} name - 종목명
 * @property {number} [price] - 종가
 * @property {SectorEnum} [sector] - 종목 섹터
 * @property {string} [sectorName] - 종목 섹터명
 * @property {number} [share] - 1주당 비중
 * @property {string} [synonym] - 동의어
 * @property {number} [volume] - 수량
 * @property {number} [weight] - 종목 비중(%)
 */

/**
 * @typedef {Object} HoldingPositionType
 * @property {Array<(HoldingPositionItem|null|undefined)>} [position]
 * @property {number} totalCount - 전체 컨텐츠 수
 * @property {number} totalPage - 전체 페이지 수
 */

/**
 * @typedef {Object} HoldingType
 * @property {Array<(string|null|undefined)>} [baseHoldings] - 기준종목 ccid 리스트
 * @property {Array<(HoldingPositionItem|null|undefined)>} [excludeHoldings] - 종목 리스트
 * @property {Array<(HoldingPositionItem|null|undefined)>} [holdings] - 종목 리스트
 */

/**
 * @typedef {Object} Holdings
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {HoldingType} [holdings] - 종목 리스트
 */

/**
 * @typedef {("AUTOMOBILES_COMPONENTS"|"BANKS"|"CAPITAL_GOODS"|"COMMERCIAL_PROFESSIONAL_SERVICES"|"CONSUMER_DURABLES_APPAREL"|"CONSUMER_SERVICES"|"DIVERSIFIED_FINANCIALS"|"ENERGY"|"FOOD_BEVERAGE_TOBACCO"|"FOOD_STAPLES_RETAILING"|"HEALTH_CARE_EQUIPMENT_SERVICES"|"HOUSEHOLD_PERSONAL_PRODUCTS"|"INSURANCE"|"MATERIALS"|"MEDIA_ENTERTAINMENT"|"PHARMACEUTICALS_BIOTECHNOLOGY_LIFE_SCIENCES"|"REAL_ESTATE"|"REAL_ESTATE_MANAGEMENT_DEVELOPMENT"|"RETAILING"|"SEMICONDUCTORS_SEMICONDUCTOR_EQUIPMENT"|"SOFTWARE_SERVICES"|"TECHNOLOGY_HARDWARE_EQUIPMENT"|"TELECOMMUNICATION_SERVICES"|"TRANSPORTATION"|"UNCLASSIFIED"|"UTILITIES")} IndustryEnum
 */

/**
 * @typedef {Object} IndustryItem
 * @property {IndustryEnum} industry - 업종
 * @property {boolean} [isChecked] - 사용자가 선택한 업종 여부
 * @property {string} name - 업종명
 */

/**
 * @typedef {("DAY"|"HALF"|"MONTH"|"QUARTER"|"WEEK"|"YEAR")} IntervalEnum
 */

/**
 * @typedef {("EXPERT_LEVEL_PRO"|"INTERMEDIATE_LEVEL1"|"INTERMEDIATE_LEVEL2"|"INTERMEDIATE_LEVEL3"|"NOVICE_LEVEL1"|"NOVICE_LEVEL2"|"NOVICE_LEVEL3")} InvestmentStrategyLevelEnum
 */

/**
 * @typedef {Object} IsBacktestData
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} isBacktestData - 백테스트 데이터 유무
 */

/**
 * Allows use of a JSON String for input / output from the GraphQL schema.
 * 
 * Use of this type is *not recommended* as you lose the benefits of having a defined, static
 * schema (one of the key benefits of GraphQL).
 * @typedef {*} JSONString
 */

/**
 * An enumeration.
 * @typedef {("API_REQ_FAIL"|"CAN_NOT_DELETE"|"CAN_NOT_UPDATE"|"DOES_NOT_EXIST"|"DUPLICATED"|"EXCEEDED_MAX_CNT"|"INVALID_PARAMETER"|"INVALID_PASSWORD"|"INVALID_PERMISSION"|"INVALID_STATE"|"KB_API_REQ_FAIL"|"NOT_ACTIVE_ADMIN_USER"|"SAME_PASSWORD")} KbError
 */

/**
 * @typedef {Object} KbPickHistories
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {KbPickHistoryInfo} [kbPickHistoryInfo]
 */

/**
 * @typedef {Object} KbPickHistoryInfo
 * @property {Array<(KbPickHistoryType|null|undefined)>} [kbPickHistories]
 * @property {number} [totalCount] - 총 컨텐츠 수
 * @property {number} [totalPage] - 총 페이지 수
 */

/**
 * @typedef {Object} KbPickHistoryStrategies
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(KbPickHistoryStrategyType|null|undefined)>} [kbPickHistoryStrategies]
 */

/**
 * KB's Pick History Strategy Type
 * @typedef {Object} KbPickHistoryStrategyType
 * @property {string} id - The ID of the object
 * @property {number} [ordering] - 정렬 순서
 * @property {ThemeStrategyType} [themeStrategy] - 테마전략 정보
 */

/**
 * KB's Pick History Type
 * @typedef {Object} KbPickHistoryType
 * @property {AdminUserType} [adminUser] - 등록인 정보
 * @property {number} [createdAt] - 생성 일자 (unixtimestamp milliseconds)
 * @property {string} id - The ID of the object
 * @property {number} [themeStrategyCnt] - 테마전략 수
 */

/**
 * @typedef {Object} KbPickInfo
 * @property {AdminUserType} [adminUser] - 마지막 업데이트 한 관리자명
 * @property {Array<(KbPickType|null|undefined)>} [kbPicks]
 * @property {number} [modifiedAt] - KB's Pick 마지막 업데이트 일자 (unixtimestamp milliseconds)
 */

/**
 * @typedef {Object} KbPickInput
 * @property {string} [description] - 추천사유
 * @property {string} [id] - Kb Pick ID
 * @property {number} [ordering] - 정렬 순서
 * @property {string} [shortDescription] - 추천사유 짧은글
 * @property {string} [themeStrategyId] - 테마전략 ID
 */

/**
 * KB's Pick Type
 * @typedef {Object} KbPickType
 * @property {AdminUserType} [adminUser]
 * @property {number} [createdAt] - KB's Pick 등록일 (unixtimestamp milliseconds)
 * @property {number} [cumulativeReturn] - KB's Pick 등록일 이후 누적 수익률
 * @property {string} [description] - 추천사유
 * @property {string} id - The ID of the object
 * @property {number} [ordering] - 정렬 순서
 * @property {string} [shortDescription] - 추천사유 짧은글
 * @property {ThemeStrategyType} [themeStrategy]
 */

/**
 * @typedef {Object} KbPicks
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {KbPickInfo} [kbPickInfo]
 */

/**
 * @typedef {Object} LastTradingDateType
 * @property {UniverseCountryEnum} [country] - 국가 필터
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {string} [lastTradingDt] - 마지막 영업일자 문자열(yyyy-MM-dd)
 * @property {number} [lastTradingTs] - 마지막 영업일자(timestamp)
 */

/**
 * @typedef {Object} LoginAdminUser
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {LoginInfoType} [loginInfo] - 로그인 정보
 */

/**
 * @typedef {Object} LoginInfoType
 * @property {AdminUserType} [adminUser]
 * @property {string} [token]
 */

/**
 * 대가들의 전략
 * @typedef {Object} MasterStrategyType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<string>} blacklist - 블랙리스트
 * @property {StrategyCategoryEnum} category - 전략카테고리
 * @property {number} createdAt - 등록일, unixtimestamp milliseconds
 * @property {string} description - 소개글
 * @property {string} id - The ID of the object
 * @property {string} img - 대가의 이미지
 * @property {Array<(string|null|undefined)>} [masterFactors] - 상세 투자 전략 
 * @property {Array<(string|null|undefined)>} [masterSrc] - 투자 전략 출처
 * @property {string} name - 전략명
 * @property {string} shortDescription - 짧은 소개글
 * @property {SimulationOptionType} [simulationOption] - 시뮬레이션 옵션
 * @property {StrategyStatusEnum} status - 전략 상태
 * @property {number} totalUsesCnt - 누적 이용자 수
 * @property {UniverseType} universe - 유니버스
 * @property {UniversePresetEnum} universePreset - 유니버스 프리셋
 */

/**
 * @typedef {Object} MenuAuth
 * @property {MenuRoleEnum} auth - 권한
 * @property {string} code - 메뉴 CODE
 * @property {string} id - 메뉴 ID
 * @property {string} name - 메뉴명
 */

/**
 * @typedef {Object} MenuAuthInput
 * @property {MenuRoleEnum} menuAuth - 권한
 * @property {string} menuCode - 메뉴 CODE
 */

/**
 * @typedef {("NOT_USE"|"READ_EDIT"|"READ_ONLY")} MenuRoleEnum
 */

/**
 * @typedef {Object} Mutation
 * @property {CancelMyStrategyEditing} [cancelMyStrategyEditing] - 내 전략 편집 취소
 * @property {CreatedAdminUser} [createAdminUser] - 관리자 계정 등록
 * @property {CreateMyStrategy} [createMyStrategy] - 내 전략 생성
 * @property {CreateMyStrategyByReadyMade} [createMyStrategyByReadyMade] - 내 전략 생성 (By ready-made 전략)
 * @property {CreateThemeStrategy} [createThemeStrategy] - 테마 전략 생성
 * @property {DeleteAdminUser} [deleteAdminUser] - 관리자 계정 삭제
 * @property {DeleteMyStrategy} [deleteMyStrategy] - 내 전략 삭제
 * @property {DeleteMyStrategyHistory} [deleteMyStrategyHistory] - 내 전략 기록 삭제
 * @property {DeleteSelectedThemeGroup} [deleteSelectedThemeGroup] - 선택된 테마그룹 삭제
 * @property {DeleteStrategies} [deleteStrategies] - 프리셋 전략들 삭제
 * @property {DuplicateMyStrategy} [duplicateMyStrategy] - 내 전략 복제
 * @property {LoginAdminUser} [loginAdminUser] - 관리자 계정 로그인
 * @property {Refresh} [refreshToken] - 토큰 갱신
 * @property {ReorderThemeGroups} [reorderThemeGroups] - 테마그룹 정렬 순서 변경
 * @property {SaveKbPicks} [saveKbPicks] - KB's Pick 저장
 * @property {SaveMyStrategy} [saveMyStrategy] - 내 전략 저장
 * @property {SaveThemeGroup} [saveThemeGroup] - 테마그룹 저장 (추가, 수정)
 * @property {SignOn} [signOn] - M-able 로그인
 * @property {SignUp} [signUp] - 회원가입
 * @property {SyncMyStrategyHoldings} [syncMyStrategyHoldings] - 내 전략 종목 KB와 동기화
 * @property {ObtainJSONWebToken} [tokenAuth] - 토큰 인증
 * @property {UpdateAdminUser} [updateAdminUser] - 관리자 계정 상세정보 변경
 * @property {UpdateAdminUserPassword} [updateAdminUserPassword] - 관리자 계정 비밀번호 변경
 * @property {UpdateKbPickDescription} [updateKbPickDescription] - KB's Pick 추천사유(긴글) 수정
 * @property {UpdateKbPickShortDescription} [updateKbPickShortDescription] - KB's Pick Short 추천사유(짧은글) 수정
 * @property {UpdateMyStrategyName} [updateMyStrategyName] - 내 전략명 변경
 * @property {UpdateSelectedThemeGroupStatus} [updateSelectedThemeGroupStatus] - 선택된 테마그룹 상태값 변경
 * @property {UpdateStrategyStatus} [updateStrategyStatus] - 전략 상태 수정
 * @property {UpdateThemeStrategy} [updateThemeStrategy] - 테마 전략 수정
 * @property {Verify} [verifyToken] - 토큰 유효성검사
 */

/**
 * @typedef {Object} MyCumulativeReturn
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyCumulativeReturnType} [myCumulativeReturn] - 누적 수익률
 */

/**
 * @typedef {Object} MyCumulativeReturnType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<(MyReturnChartItem|null|undefined)>} [chart] - 누적 수익률 차트
 * @property {MyReturnInfoItem} [info] - 누적 수익률 항목 정보
 */

/**
 * @typedef {Object} MyDrawdown
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyDrawdownType} [myDrawdown] - drawdown
 */

/**
 * @typedef {Object} MyDrawdownType
 * @property {Array<(MyReturnChartItem|null|undefined)>} [chart] - drawdown 차트
 */

/**
 * @typedef {Object} MyExposure
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyExposureType} [myExposure]
 */

/**
 * @typedef {Object} MyExposureType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {ExposureItem} [myStrategy] - 내 전략 익스포저
 * @property {ExposureItem} [strategy] - 베이스 전략 익스포저
 */

/**
 * @typedef {Object} MyFactors
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(FactorsType|null|undefined)>} [myFactors]
 */

/**
 * @typedef {Object} MyHoldingPosition
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {HoldingPositionType} [myHoldingPosition]
 */

/**
 * @typedef {Object} MyHoldingPositionAll
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {HoldingPositionAllType} [myHoldingPositionAll]
 */

/**
 * @typedef {Object} MyHoldings
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {HoldingType} [myHoldings] - 종목 리스트
 */

/**
 * @typedef {Object} MyPeriodReturn
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyPeriodReturnType} [myPeriodReturn] - 기간별 수익률
 */

/**
 * @typedef {Object} MyPeriodReturnType
 * @property {Array<(MyReturnChartItem|null|undefined)>} [chart] - 기간별 수익률 차트
 */

/**
 * @typedef {Object} MyRebalancingHistory
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RebalancingHistoryType} [myRebalancingHistory]
 */

/**
 * @typedef {Object} MyRebalancingPositionList
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RebalancingPositionListType} [myRebalancingPositionList]
 */

/**
 * @typedef {Object} MyRebalancingPositionTreemap
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RebalancingPositionTreemapType} [myRebalancingPositionTreemap]
 */

/**
 * @typedef {Object} MyReturnChartItem
 * @property {ReturnItem} [benchmark] - 벤치마크 수익률
 * @property {ReturnItem} [myStrategy] - 전략 수익률
 * @property {ReturnItem} [strategy] - 전략 수익률
 * @property {number} ts - unixtimestamp milliseconds
 */

/**
 * @typedef {Object} MyReturnInfoItem
 * @property {ReturnItem} [benchmark] - 벤치마크 수익률
 * @property {ReturnItem} [myStrategy] - 내 전략 수익률
 * @property {ReturnItem} [strategy] - 전략 수익률
 */

/**
 * @typedef {Object} MyRiskAssessmentIndex
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyRiskAssessmentIndexType} [myRiskAssessmentIndex] - 위험평가지표
 */

/**
 * @typedef {Object} MyRiskAssessmentIndexType
 * @property {MyRiskAssessmentInfoItem} [info] - 위험평가지표 정보
 */

/**
 * @typedef {Object} MyRiskAssessmentInfoItem
 * @property {RiskAssessmentItem} [benchmark] - 벤치마크 위험평가지표
 * @property {RiskAssessmentEtcItem} [etc] - 기타 위험평가지표
 * @property {RiskAssessmentItem} [myStrategy] - 전략 위험평가지표
 * @property {RiskAssessmentItem} [strategy] - 전략 위험평가지표
 */

/**
 * @typedef {Object} MySectors
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(SectorType|null|undefined)>} [mySectors]
 */

/**
 * @typedef {Object} MyStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyStrategyType} [myStrategy]
 */

/**
 * @typedef {Object} MyStrategyBlacklist
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(HoldingPositionItem|null|undefined)>} [myStrategyBlacklist]
 */

/**
 * @typedef {Object} MyStrategyConnection
 * @property {Array<(MyStrategyEdge|null|undefined)>} edges - Contains the nodes in this connection.
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {PageInfo} pageInfo - Pagination data for this connection.
 */

/**
 * A Relay edge containing a `MyStrategy` and its cursor.
 * @typedef {Object} MyStrategyEdge
 * @property {string} cursor - A cursor for use in pagination
 * @property {MyStrategyType} [node] - The item at the end of the edge
 */

/**
 * @typedef {("BACKTEST_CUMULATIVE"|"BENCHMARK_OR_BASE_STRATEGY_CUMULATIVE"|"FORWARD_CUMULATIVE"|"FORWARD_START_DATE")} MyStrategyOrderType
 */

/**
 * @typedef {Object} MyStrategyReturnSummaryItem
 * @property {BaseDate} [baseDate]
 * @property {ReturnSummaryType} [returnSummary]
 */

/**
 * @typedef {Object} MyStrategyReturnSummaryType
 * @property {MyStrategyReturnSummaryItem} [backtest] - 백테스트 성과
 * @property {number} [baseStrategyCumulative] - 기초전략 수익률
 * @property {number} [benchmarkCumulative] - 벤치마크 수익률
 * @property {MyStrategyReturnSummaryItem} [forward] - 모의투자 성과
 */

/**
 * @typedef {Object} MyStrategyStyle
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {MyStrategyStyleInfo} [info]
 */

/**
 * @typedef {Object} MyStrategyStyleInfo
 * @property {BaseDate} [baseDate] - 기준일
 * @property {StrategyFactorStyle} [benchmark]
 * @property {UniverseEnum} [benchmarkName] - 벤치마크명
 * @property {Array<(FactorInfo|null|undefined)>} [factorInfo] - 투자 전략 상세
 * @property {StrategyFactorStyle} [myStrategy]
 * @property {string} [myStrategyName] - 전략명
 * @property {StrategyFactorStyle} [strategy]
 * @property {string} [strategyName] - 전략명
 */

/**
 * 내 전략
 * @typedef {Object} MyStrategyType
 * @property {string} [baseStrategyName] - 베이스 전략명
 * @property {Array<(UniverseEnum|null|undefined)>} [benchmarks] - 벤치마크
 * @property {StrategyCategoryEnum} category - 전략카테고리
 * @property {number} createdAt - 전략 생성일 (unixtimestamp milliseconds)
 * @property {string} id - The ID of the object
 * @property {InvestmentStrategyLevelEnum} investmentStrategyLevel - 투자방법 단계
 * @property {boolean} isActiveKbContract - KB 계약 여부
 * @property {boolean} isForwardAvailable - 모의투자 성과 확인가능 여부
 * @property {boolean} isSimple - 간편편집 여부
 * @property {string} name - 전략명
 * @property {string} [portfolioId] - KB에 전달할 내전략(Portfolio) ID
 * @property {RebalancingInfo} [rebalancingInfo] - 최신 리밸런싱
 * @property {MyStrategyReturnSummaryType} [returnSummary] - 수익률 정보
 * @property {SectorIndustrySummaryType} [sectorIndustrySummary] - 섹터/산업 정보
 * @property {SimulationOptionType} [simulationOption] - 시뮬레이션 옵션
 * @property {StrategyStatusEnum} status - 전략 상태
 * @property {StrategyUnion} [strategy]
 * @property {UniverseType} universe - 유니버스
 * @property {UniversePresetType} universePreset - 유니버스 프리셋
 * @property {Array<(WhiteListType|null|undefined)>} [whitelist] - 화이트리스트
 */

/**
 * @typedef {Object} MyStyleFactors
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {StyleFactorsType} [myStyleFactors]
 */

/**
 * @typedef {Object} MyUniversePresets
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(UniversePresetItem|null|undefined)>} [myUniversePresets]
 */

/**
 * An object with an ID
 * @typedef {Object} Node
 * @property {string} id - The ID of the object
 */

/**
 * Obtain JSON Web Token mutation
 * @typedef {Object} ObtainJSONWebToken
 * @property {GenericScalar} payload
 * @property {number} refreshExpiresIn
 * @property {string} token
 */

/**
 * @typedef {Object} Organization
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {OrganizationType} [organization]
 */

/**
 * @typedef {Object} OrganizationType
 * @property {string} id - The ID of the object
 * @property {string} name - 소속명
 * @property {ThemeSrcEnum} themeSrc - 해당 소속의 테마출처
 */

/**
 * @typedef {Object} Organizations
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(OrganizationType|null|undefined)>} [organizations]
 */

/**
 * The Relay compliant `PageInfo` type, containing data necessary to paginate this connection.
 * @typedef {Object} PageInfo
 * @property {string} [endCursor] - When paginating forwards, the cursor to continue.
 * @property {boolean} hasNextPage - When paginating forwards, are there more items?
 * @property {boolean} hasPreviousPage - When paginating backwards, are there more items?
 * @property {string} [startCursor] - When paginating backwards, the cursor to continue.
 */

/**
 * @typedef {("FIVE_YEARS"|"HALF"|"MONTH"|"QUARTER"|"THREE_YEARS"|"YEAR")} PeriodEnum
 */

/**
 * @typedef {Object} PeriodReturn
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {PeriodReturnType} [periodReturn] - 기간별 수익률
 */

/**
 * @typedef {Object} PeriodReturnType
 * @property {Array<(ReturnChartItem|null|undefined)>} [chart] - 기간별 수익률 차트
 */

/**
 * @typedef {Object} Query
 * @property {AdminMenuList} [adminMenuList] - 메뉴 리스트
 * @property {AdminUser} [adminUser] - 관리자 계정 상세정보 조회
 * @property {AdminUser} [adminUserMe] - 내 관리자 계정 상세정보 조회
 * @property {AdminUsers} [adminUsers] - 관리자 유저 리스트 조회
 * @property {boolean} [checkDuplicateAdminUserUid] - 관리자 ID 중복 유효성 검사
 * @property {boolean} [checkDuplicateStrategyName] - 전략명 중복 체크 (True: 중복, False: 중복아님)
 * @property {boolean} [checkDuplicateStrategyThemeName] - 전략 테마명 중복 체크 (True: 중복, False: 중복아님)
 * @property {boolean} [checkDuplicateThemeGroupName] - 테마 그룹명 중복 검사 (True: 중복, False: 중복 아님)
 * @property {ExceededMaxCnt} [checkExceededMaxCntOrganization] - 소속별 최대 개수 초과 유효성 검사
 * @property {CumulativeReturn} [cumulativeReturn] - 시뮬레이션 수익분석 - 누적 수익률
 * @property {DetailedMyStrategy} [detailedMyStrategy] - 내 전략 상세 조회
 * @property {DetailedStrategy} [detailedStrategy] - 전략 상세 조회
 * @property {Drawdown} [drawdown] - 시뮬레이션 수익분석 - drawdown
 * @property {Exposure} [exposure] - 시뮬레이션 포지션분석 - 익스포저 (섹터, 산업, 종목)
 * @property {Factors} [factors] - 해당 전략의 싱글팩터 조회
 * @property {StrategyHoldingsInfoListType} [getStrategyChangeHolding] - 전일대비 상세 - 전략 정보(구분, 전략명, 최초 생성일)
 * @property {StrategyCumulativeReturnListType} [getStrategyCumulativeReturnAll] - 일자별 현황 상세(Excel)
 * @property {StrategyCumulativeReturnListType} [getStrategyCumulativeReturnByPeriod] - 일자별 현황 상세
 * @property {StrategyInfoListType} [getStrategyInfo] - 전일대비 상세 - 전략 정보(구분, 전략명, 최초 생성일)
 * @property {StrategyOptimizationCumulativeReturnListType} [getStrategyOptimizationCumulativeReturnAll] - 최적화 3종 일자별 현황 상세(KB자산운용 전용, Excel)
 * @property {StrategyOptimizationCumulativeReturnListType} [getStrategyOptimizationCumulativeReturnByPeriod] - 최적화 3종 일자별 현황 상세(KB자산운용 전용)
 * @property {StrategySummaryCountType} [getStrategySummaryCount] - 일자별 현황 요약
 * @property {StrategySummaryCountListType} [getStrategySummaryCountAll] - 히스토리 전체 조회(전체기간: 2023.04.28~현재)
 * @property {StrategySummaryCountListType} [getStrategySummaryCountByPeriod] - 히스토리 전체 조회
 * @property {HoldingPosition} [holdingPosition] - 시뮬레이션 포지션분석 - 종목 구성
 * @property {HoldingPositionAll} [holdingPositionAll] - 시뮬레이션 포지션분석 - 전체 종목 구성
 * @property {Holdings} [holdings] - 전략 스크리너 종목리스트 조회
 * @property {IsBacktestData} [isBacktestData] - 내 전략 종목 제외 후 종목리스트 조회
 * @property {KbPickHistories} [kbPickHistories] -  KB's Pick History 리스트 조회
 * @property {KbPickHistoryStrategies} [kbPickHistoryStrategies] -  KB's Pick History 전략 리스트 조회
 * @property {KbPicks} [kbPicks] - KB's Pick 리스트 조회
 * @property {LastTradingDateType} [lastTradingDate] - 마지막 영업일 출력
 * @property {User} [me]
 * @property {MyCumulativeReturn} [myCumulativeReturn] - 전략 편집 > 시뮬레이션 수익분석 - 누적 수익률
 * @property {MyDrawdown} [myDrawdown] - 시뮬레이션 수익분석 - drawdown
 * @property {MyExposure} [myExposure] - 전략 편집 > 시뮬레이션 포지션분석 - 익스포저 (섹터, 산업, 종목)
 * @property {MyFactors} [myFactors] - 내 전략 팩터 조회
 * @property {MyHoldingPosition} [myHoldingPosition] - 전략 편집 > 시뮬레이션 포지션분석 - 종목 구성
 * @property {MyHoldingPositionAll} [myHoldingPositionAll]
 * @property {MyHoldings} [myHoldings] - 내 전략 종목 조회
 * @property {MyPeriodReturn} [myPeriodReturn] - 전략 편집 > 시뮬레이션 수익분석 - 기간별 수익률
 * @property {MyRebalancingHistory} [myRebalancingHistory] - 전략 편집 > 시뮬레이션 리밸런싱분석 - 리밸런싱 이력
 * @property {MyRebalancingPositionList} [myRebalancingPositionList] - 전략 편집 > 시뮬레이션 리밸런싱분석 - 종목구성 (리스트)
 * @property {MyRebalancingPositionTreemap} [myRebalancingPositionTreemap] - 전략 편집 > 시뮬레이션 리밸런싱분석 - 종목구성 (트리맵)
 * @property {MyRiskAssessmentIndex} [myRiskAssessmentIndex] - 시뮬레이션 수익분석 - 위험평가지표
 * @property {MySectors} [mySectors] - 내 전략 섹터/업종 조회
 * @property {MyStrategyConnection} [myStrategies]
 * @property {MyStrategy} [myStrategy]
 * @property {MyStrategyBlacklist} [myStrategyBlacklist] - 내 전략의 제외 종목 정보 조회
 * @property {MyStrategy} [myStrategyByPortfolioId]
 * @property {MyStrategyStyle} [myStrategyStyle]
 * @property {MyStyleFactors} [myStyleFactors] - 내 스타일 팩터 (간편투자 팩터) 조회 
 * @property {MyUniversePresets} [myUniversePresets] - 내 전략 유니버스 프리셋 조회
 * @property {MyHoldings} [myVolumePosition] - 내 전략 종목 제외 후 종목리스트 조회
 * @property {Organization} [organization] - 소속 조회
 * @property {Organizations} [organizations] - 소속 리스트 조회
 * @property {PeriodReturn} [periodReturn] - 시뮬레이션 수익분석 - 기간별 수익률
 * @property {RebalancingHistory} [rebalancingHistory] - 시뮬레이션 리밸런싱분석 - 리밸런싱 이력
 * @property {RebalancingPositionList} [rebalancingPositionList] - 시뮬레이션 리밸런싱분석 - 종목구성 (리스트)
 * @property {RebalancingPositionTreemap} [rebalancingPositionTreemap] - 시뮬레이션 리밸런싱분석 - 종목구성 (트리맵)
 * @property {RiskAssessmentIndex} [riskAssessmentIndex] - 시뮬레이션 수익분석 - 위험평가지표
 * @property {SearchHoldings} [searchHoldings] - 종목 검색
 * @property {ThemeGroups} [searchThemeGroups] - 테마 그룹 검색
 * @property {ThemeStrategies} [searchThemeStrategy]
 * @property {Sectors} [sectors]
 * @property {StrategyConnection} [strategies]
 * @property {StrategiesWithPaging} [strategiesWithPaging]
 * @property {Strategy} [strategy]
 * @property {StrategyStyle} [strategyStyle]
 * @property {StyleFactors} [styleFactors] - 스타일 팩터 (간편투자 팩터) 조회 
 * @property {number} [themeCmUpdateScheduleDate] - 테마 업데이트 반영일, unixtimestamp milliseconds
 * @property {ThemeGroup} [themeGroup] - 테마그룹 상세 조회
 * @property {ThemeGroups} [themeGroups] - 테마그룹 리스트 조회
 * @property {UniversePresets} [universePresets] - 유니버스 프리셋 조회
 * @property {Universes} [universes]
 * @property {Holdings} [volumePosition] - 종목 제외 후 종목리스트 조회
 */

/**
 * @typedef {Object} RebalancingHistory
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RebalancingHistoryType} [rebalancingHistory]
 */

/**
 * @typedef {Object} RebalancingHistoryItem
 * @property {CashItem} [cash] - 현금 정보
 * @property {Array<(WeightItem|null|undefined)>} [holdings]
 * @property {number} [ts]
 */

/**
 * @typedef {Object} RebalancingHistoryType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<(RebalancingHistoryItem|null|undefined)>} [info] - 리밸런싱 이력 정보
 * @property {StrategyRebalancingOptionEnum} [rebalancing] - 리밸런싱 주기
 */

/**
 * @typedef {Object} RebalancingHoldingItem
 * @property {BuySellEnum} buySell - 매수/매도
 * @property {HoldingPositionItem} [holdingInfo]
 * @property {number} [returnRate] - 수익률
 */

/**
 * @typedef {Object} RebalancingInfo
 * @property {number} [cnt] - 리밸런싱 횟수
 * @property {number} [recentTs] - 최신 리밸런싱 일자
 */

/**
 * @typedef {Object} RebalancingPositionList
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RebalancingPositionListType} [rebalancingPositionList]
 */

/**
 * @typedef {Object} RebalancingPositionListType
 * @property {Array<(RebalancingHoldingItem|null|undefined)>} [position]
 * @property {number} totalCount - 전체 컨텐츠 수
 * @property {number} totalPage - 전체 페이지 수
 */

/**
 * @typedef {Object} RebalancingPositionTreemap
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RebalancingPositionTreemapType} [rebalancingPositionTreemap]
 */

/**
 * @typedef {Object} RebalancingPositionTreemapType
 * @property {Array<(WeightItem|null|undefined)>} [holdings]
 */

/**
 * @typedef {Object} Refresh
 * @property {GenericScalar} payload
 * @property {number} refreshExpiresIn
 * @property {string} token
 */

/**
 * @typedef {Object} ReorderThemeGroups
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} ReorderThemeGroupsInput
 * @property {string} id - ThemeGroup ID
 * @property {number} ordering - 재정렬 순서
 */

/**
 * @typedef {Object} RepresentativeProduct
 * @property {string} code - 종목코드
 * @property {string} name - 종목명
 */

/**
 * @typedef {Object} ReturnChartItem
 * @property {ReturnItem} [benchmark] - 벤치마크 수익률
 * @property {ReturnItem} [strategy] - 전략 수익률
 * @property {number} ts - unixtimestamp milliseconds
 */

/**
 * @typedef {Object} ReturnInfoItem
 * @property {ReturnItem} [benchmark] - 벤치마크 수익률
 * @property {ReturnItem} [strategy] - 전략 수익률
 */

/**
 * @typedef {Object} ReturnItem
 * @property {string} name - 항목명
 * @property {number} [value] - 항목값
 */

/**
 * @typedef {Object} ReturnSummaryType
 * @property {number} [annualAvgReturn] - 연평균 수익률(%)
 * @property {number} [annualAvgVolatility] - 연평균 변동성(%)
 * @property {number} [cumulative] - 누적수익률(%)
 * @property {number} [mdd] - mdd(%)
 * @property {number} [month1] - 1개월 수익률(%)
 * @property {number} [month3] - 3개월 수익률(%)
 * @property {number} [month6] - 6개월 수익률(%)
 * @property {number} [sharpe] - 샤프지수
 * @property {number} [volatility] - 변동성(%)
 */

/**
 * @typedef {Object} RiskAssessmentEtcItem
 * @property {number} [excessReturn] - 초과 수익률
 * @property {number} [infoRatio] - 정보비율
 * @property {number} [trackingError] - 추적오차(%)
 */

/**
 * @typedef {Object} RiskAssessmentIndex
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {RiskAssessmentIndexType} [riskAssessmentIndex] - 위험평가지표
 */

/**
 * @typedef {Object} RiskAssessmentIndexType
 * @property {RiskAssessmentInfoItem} [info] - 위험평가지표 정보
 */

/**
 * @typedef {Object} RiskAssessmentInfoItem
 * @property {RiskAssessmentItem} [benchmark] - 벤치마크 위험평가지표
 * @property {RiskAssessmentEtcItem} [etc] - 기타 위험평가지표
 * @property {RiskAssessmentItem} [strategy] - 전략 위험평가지표
 */

/**
 * @typedef {Object} RiskAssessmentItem
 * @property {number} [annualAvgReturn] - 연평균수익률(%)
 * @property {number} [annualAvgVolatility] - 연평균변동성(%)
 * @property {number} [cumulative] - 누적수익률(%)
 * @property {number} [exchangeCumulative] - 환율적용된 누적수익률(%)
 * @property {number} [mdd] - MDD(%)
 * @property {string} name - 항목명
 * @property {number} [sharpe] - 샤프지수(%)
 * @property {number} [volatility] - 변동성(%)
 */

/**
 * @typedef {("GENERAL"|"SUBSCRIPTION")} RoleEnum
 */

/**
 * @typedef {Object} SaveKbPicks
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} SaveMyStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {string} [myStrategyId]
 */

/**
 * @typedef {Object} SaveThemeGroup
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} SaveThemeGroupInput
 * @property {UniverseCountryEnum} [country] - 국가 필터, default: DOMESTIC
 * @property {string} [id] - 테마 그룹 ID (추가 시 빈값, 수정 시 값 필수)
 * @property {string} name - 테마 그룹명
 * @property {ThemeGroupStatusEnum} status - 상태값
 * @property {Array<ThemeGroupStrategyInput>} themeGroupStrategies - 테마그룹 전략 ID 리스트
 */

/**
 * @typedef {Object} SearchHoldings
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {SearchHoldingsType} [searchHoldings]
 */

/**
 * @typedef {Object} SearchHoldingsType
 * @property {Array<(HoldingPositionItem|null|undefined)>} [holdings]
 */

/**
 * @typedef {("COMMUNICATIONS"|"CONSUMER_DISCRETIONARY"|"CONSUMER_STAPLES"|"ENERGY"|"FINANCIALS"|"HEALTH_CARE"|"INDUSTRIALS"|"INFORMATION_TECHNOLOGY"|"MATERIALS"|"REAL_ESTATE"|"UNCLASSIFIED"|"UTILITIES")} SectorEnum
 */

/**
 * 섹터/산업 전략
 * @typedef {Object} SectorIndustryStrategyType
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<string>} blacklist - 블랙리스트
 * @property {StrategyCategoryEnum} category - 전략카테고리
 * @property {number} createdAt - 등록일, unixtimestamp milliseconds
 * @property {string} description - 소개글
 * @property {string} id - The ID of the object
 * @property {string} img - 업종의 이미지
 * @property {string} industry - 산업명
 * @property {string} name - 전략명
 * @property {ReturnSummaryType} [returnSummary] - 수익률 정보들 - DEPRECATED: 벤치마크 수익률 정보가 포함된 return_summary_v2 필드 추가
 * @property {StrategyReturnSummaryType} [returnSummaryV2] - 수익률 정보들
 * @property {SectorEnum} sector - 섹터명
 * @property {string} shortDescription - 짧은 소개글
 * @property {SimulationOptionType} [simulationOption] - 시뮬레이션 옵션
 * @property {StrategyStatusEnum} status - 전략 상태
 * @property {number} totalUsesCnt - 누적 이용자 수
 * @property {UniverseType} universe - 유니버스
 * @property {UniversePresetEnum} universePreset - 유니버스 프리셋
 */

/**
 * @typedef {Object} SectorIndustrySummaryItem
 * @property {Array<(IndustryEnum|null|undefined)>} [industries] - 산업 리스트
 * @property {Array<(string|null|undefined)>} [industriesName] - 산업명 리스트
 * @property {boolean} [isSelectAll] - 전체선택 여부
 * @property {SectorEnum} [sector] - 섹터
 * @property {string} [sectorName] - 섹터명
 */

/**
 * @typedef {Object} SectorIndustrySummaryType
 * @property {Array<(SectorIndustrySummaryItem|null|undefined)>} [info]
 * @property {number} [totalCnt] - 선택된 산업 수
 */

/**
 * @typedef {Object} SectorType
 * @property {Array<(IndustryItem|null|undefined)>} [industries] - 섹터안의 업종
 * @property {string} name - 섹터명
 * @property {SectorEnum} sector - 섹터
 */

/**
 * @typedef {Object} Sectors
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(SectorType|null|undefined)>} [sectors]
 */

/**
 * @typedef {Object} SignOn
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {string} token
 */

/**
 * @typedef {Object} SignUp
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} SimulationOptionInput
 * @property {boolean} excludeAdministration - 관리종목 제외 여부
 * @property {StrategyMarketCapEnum} marketCapLimit - 거래대금 제외 금액
 * @property {StrategyOptimizationEnum} optimization - 최적화 기준
 * @property {StrategyRebalancingOptionEnum} [rebalancing] - 리밸런싱 옵션 (리밸런싱 없음 = null)
 * @property {number} startDate - 시작일, unixtimestamp
 * @property {StrategyAmountEnum} tradingAmountLimit - 시가총액 제외 %
 */

/**
 * @typedef {Object} SimulationOptionScreeningInput
 * @property {Array<string>} blacklist - 제외한 종목 ccid
 * @property {number} booksize - 투자금액
 * @property {boolean} [excludeAdministration] - 관리종목 제외 여부
 * @property {Array<FactorInputItem>} factors - 선택한 팩터 List
 * @property {Array<IndustryEnum>} [industries] - 선택한 산업 List
 * @property {StrategyMarketCapEnum} [marketCapLimit] - 거래대금 제외 금액
 * @property {StrategyOptimizationEnum} optimization - 최적화 기준
 * @property {StrategyRebalancingOptionEnum} [rebalancing] - 리밸런싱 옵션
 * @property {number} startDate - 시작일, unixtimestamp
 * @property {StrategyAmountEnum} [tradingAmountLimit] - 시가총액 제외 %
 * @property {UniversePresetEnum} [universePreset] - 선택한 유니버스 프리셋
 * @property {Array<WhitelistInputItem>} whitelist - 추가한 종목 ccid, 비중
 */

/**
 * @typedef {Object} SimulationOptionType
 * @property {number} booksize - 투자금액
 * @property {boolean} excludeAdministration - 관리종목 제외 가능
 * @property {StrategyMarketCapEnum} marketCapLimit - 시가총액 제한
 * @property {StrategyOptimizationEnum} optimization - 최적화 기준
 * @property {StrategyRebalancingOptionEnum} [rebalancing] - 리밸런싱 옵션
 * @property {number} startDate - 시작일, unixtimestamp
 * @property {StrategyAmountEnum} tradingAmountLimit - 거래대금 제한
 */

/**
 * @typedef {("ALL"|"BACKTEST"|"FORWARDTEST")} SimulationTypeEnum
 */

/**
 * @typedef {Object} Strategies
 * @property {Array<(StrategyUnion|null|undefined)>} [strategies]
 * @property {number} [totalCount] - 총 컨텐츠 수
 * @property {number} [totalPage] - 총 페이지 수
 */

/**
 * @typedef {Object} StrategiesWithPaging
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Strategies} [strategies]
 */

/**
 * @typedef {Object} Strategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {StrategyUnion} [strategy]
 */

/**
 * @typedef {("BILLION"|"FIVE_HUNDRED"|"ONE_FIFTY"|"ZERO")} StrategyAmountEnum
 */

/**
 * @typedef {("DIY"|"EMP"|"MASTER"|"SECTOR_INDUSTRY"|"THEME")} StrategyCategoryEnum
 */

/**
 * @typedef {Object} StrategyConnection
 * @property {Array<(StrategyEdge|null|undefined)>} edges - Contains the nodes in this connection.
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {PageInfo} pageInfo - Pagination data for this connection.
 */

/**
 * @typedef {Object} StrategyCumulativeReturnListType
 * @property {Array<(StrategyCategoryEnum|null|undefined)>} [category] - 전략타입
 * @property {UniverseCountryEnum} [country] - 국가 필터
 * @property {number} [endDt] - 종료일자
 * @property {string} [errorMessage] - 오류 메시지
 * @property {Array<(StrategyCumulativeReturnType|null|undefined)>} [list]
 * @property {number} [pageNo] - 페이지 번호
 * @property {number} [pageSize] - 출력 개수
 * @property {string} [searchName] - 전략명 검색
 * @property {number} [startDt] - 시작일자
 * @property {Array<(ThemeSrcEnum|null|undefined)>} [themeSrc] - 제공사
 * @property {number} [totalCnt] - 총 데이터 개수
 */

/**
 * ## 전략 + 수익률 정보
 * @typedef {Object} StrategyCumulativeReturnType
 * @property {number} [benchmarkReturnValue] - 참조 수익률
 * @property {StrategyCategoryEnum} [category] - 전략구분
 * @property {string} [createdAt] - 최초 생성일
 * @property {string} [description] - 전략 설명
 * @property {Array<(StrategyHoldingsType|null|undefined)>} [holdings] - 보유 종목 리스트
 * @property {number} [holdingsCnt] - 종목 수
 * @property {StrategyOptimizationEnum} [optimization] - 프리셋 최적화 기준
 * @property {number} [overReturnValue] - 초과 수익률
 * @property {StrategyStatusEnum} [status] - 전략 상태
 * @property {number} [strategyId] - 전략 고유번호
 * @property {string} [strategyName] - 전략명
 * @property {number} [strategyReturnValue] - 전략 수익률
 * @property {ThemeSrcEnum} [themeSrc] - 제공사
 * @property {UniverseEnum} [universeName] - 참조지수
 * @property {UniversePresetEnum} [universePreset] - 유니버스
 * @property {string} [universePresetName] - 유니버스 이름
 */

/**
 * A Relay edge containing a `Strategy` and its cursor.
 * @typedef {Object} StrategyEdge
 * @property {string} cursor - A cursor for use in pagination
 * @property {StrategyUnion} [node] - The item at the end of the edge
 */

/**
 * @typedef {Object} StrategyFactorStyle
 * @property {StrategyFactorStyleItem} [beta] - 시장 민감도
 * @property {StrategyFactorStyleItem} [dividend] - 배당
 * @property {StrategyFactorStyleItem} [liquidity] - 수급
 * @property {StrategyFactorStyleItem} [momentum] - 성장
 * @property {StrategyFactorStyleItem} [quality] - 퀄리티
 * @property {StrategyFactorStyleItem} [size] - 시총/자산
 * @property {StrategyFactorStyleItem} [surprise] - 어닝 서프라이즈
 * @property {StrategyFactorStyleItem} [value] - 가치
 * @property {StrategyFactorStyleItem} [volatility] - 변동성
 */

/**
 * @typedef {Object} StrategyFactorStyleItem
 * @property {string} name - 스타일 명
 * @property {number} value - 스타일 값, range: 0.0 ~ 6.0
 */

/**
 * @typedef {Object} StrategyHoldingsInfoListType
 * @property {UniverseCountryEnum} [country] - 국가 필터
 * @property {string} [errorMessage] - 오류 메시지
 * @property {number} [holdingsNewCnt] - 편입 종목 개수
 * @property {number} [holdingsOriginCnt] - 유지 종목 개수
 * @property {number} [holdingsOutCnt] - 편출 종목 개수
 * @property {number} [holdingsTotalCnt] - 총 종목 개수
 * @property {Array<(StrategyHoldingsInfoType|null|undefined)>} [list]
 * @property {number} [startDt] - 시작일자
 * @property {number} [totalCnt] - 총 데이터 개수
 */

/**
 * @typedef {Object} StrategyHoldingsInfoType
 * @property {string} [holdings] - 종목명(코드)
 * @property {string} [reason] - 사유
 * @property {string} [status] - 상태
 */

/**
 * ## 전략 보유 종목
 * @typedef {Object} StrategyHoldingsType
 * @property {string} [holdingsCode] - 종목코드
 * @property {string} [holdingsName] - 종목명
 */

/**
 * @typedef {Object} StrategyInfoListType
 * @property {UniverseCountryEnum} [country] - 국가필터
 * @property {string} [errorMessage] - 오류 메시지
 * @property {Array<(StrategyInfoType|null|undefined)>} [list]
 * @property {string} [prevCategory] - 전일대비 구분(ACTIVATED, DEACTIVATED, CHANGE)
 * @property {number} [totalCnt] - 총 데이터 개수
 */

/**
 * @typedef {Object} StrategyInfoType
 * @property {StrategyCategoryEnum} [category] - 전략구분
 * @property {string} [createdAt] - 최초 생성일
 * @property {number} strategyId - 전략 고유번호
 * @property {string} [strategyName] - 전략명
 * @property {ThemeSrcEnum} [themeSrc] - 제공사
 * @property {UniversePresetEnum} [universePreset] - 유니버스
 * @property {string} [universePresetName] - 유니버스 이름
 */

/**
 * @typedef {("FIFTEEN"|"FIVE"|"TEN"|"ZERO")} StrategyMarketCapEnum
 */

/**
 * @typedef {Object} StrategyOptimizationCumulativeReturnListType
 * @property {Array<(StrategyCategoryEnum|null|undefined)>} [category] - 전략타입
 * @property {UniverseCountryEnum} [country] - 국가 필터
 * @property {number} [endDt] - 종료일자
 * @property {string} [errorMessage] - 오류 메시지
 * @property {Array<(StrategyOptimizationCumulativeReturnType|null|undefined)>} [list]
 * @property {number} [pageNo] - 페이지 번호
 * @property {number} [pageSize] - 출력 개수
 * @property {string} [searchName] - 전략명 검색
 * @property {number} [startDt] - 시작일자
 * @property {Array<(ThemeSrcEnum|null|undefined)>} [themeSrc] - 제공사
 * @property {number} [totalCnt] - 총 데이터 개수
 */

/**
 * ## 전략 + 최적화 3종 수익률 정보
 * @typedef {Object} StrategyOptimizationCumulativeReturnType
 * @property {number} [benchmarkReturnValue] - 참조 수익률
 * @property {StrategyCategoryEnum} [category] - 전략구분
 * @property {string} [createdAt] - 최초 생성일
 * @property {string} [description] - 전략 설명
 * @property {Array<(StrategyHoldingsType|null|undefined)>} [holdings] - 보유 종목 리스트
 * @property {number} [holdingsCnt] - 종목 수
 * @property {Array<(Array<(number|null|undefined)>|null|undefined)>} [optValues] - 최적화 3종 수익률 데이터
 * @property {StrategyOptimizationEnum} [optimization] - 프리셋 최적화 기준
 * @property {number} [overReturnValue] - 초과 수익률
 * @property {StrategyStatusEnum} [status] - 전략 상태
 * @property {number} [strategyId] - 전략 고유번호
 * @property {string} [strategyName] - 전략명
 * @property {number} [strategyReturnValue] - 전략 수익률
 * @property {ThemeSrcEnum} [themeSrc] - 제공사
 * @property {UniverseEnum} [universeName] - 참조지수
 * @property {UniversePresetEnum} [universePreset] - 유니버스
 * @property {string} [universePresetName] - 유니버스 이름
 */

/**
 * @typedef {("EQUAL_WEIGHT"|"MARKET_WEIGHT"|"RISK_PARITY")} StrategyOptimizationEnum
 */

/**
 * @typedef {("CUMULATIVE"|"CUMULATIVE_ASC"|"NAME")} StrategyOrderMethod
 */

/**
 * @typedef {("MONTH_1"|"MONTH_3"|"MONTH_6")} StrategyOrderPeriodReturn
 */

/**
 * @typedef {("CREATED_AT"|"CREATED_AT_ASC"|"CUMULATIVE"|"CUMULATIVE_ASC"|"MDD"|"NAME"|"TOTAL_USES_CNT"|"VOLATILITY")} StrategyOrderType
 */

/**
 * @typedef {("HALF"|"MONTH"|"QUARTER")} StrategyRebalancingOptionEnum
 */

/**
 * @typedef {Object} StrategyReturnSummaryType
 * @property {ReturnSummaryType} [benchmark] - 벤치마크 수익률 정보
 * @property {ReturnSummaryType} [strategy] - 프리셋 전략 수익률 정보
 */

/**
 * @typedef {Object} StrategyReturnType
 * @property {ReturnItem} [benchmark] - 대표 유니버스 수익률
 * @property {ReturnItem} [cumulative] - 누적 수익률
 * @property {ReturnItem} [half] - 6개월 수익률
 * @property {ReturnItem} [month] - 1개월 수익률
 * @property {ReturnItem} [quarter] - 3개월 수익률
 */

/**
 * @typedef {("ACTIVATED"|"ACTIVATED_RESERVATION"|"ACTIVATED_UPDATING"|"DEACTIVATED"|"DELETED"|"EDITED"|"INPROGRESS"|"PENDING")} StrategyStatusEnum
 */

/**
 * @typedef {Object} StrategyStyle
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {StrategyStyleInfo} [info]
 */

/**
 * @typedef {Object} StrategyStyleInfo
 * @property {BaseDate} [baseDate] - 기준일
 * @property {StrategyFactorStyle} [benchmark]
 * @property {UniverseEnum} [benchmarkName] - 벤치마크명
 * @property {StrategyFactorStyle} [strategy]
 * @property {string} [strategyName] - 전략명
 */

/**
 * @typedef {Object} StrategySummaryCountListType
 * @property {UniverseCountryEnum} [country] - 국가 필터
 * @property {number} [endDt] - 종료일자
 * @property {string} [errorMessage] - 오류 메시지
 * @property {Array<(StrategySummaryCountType|null|undefined)>} [list]
 * @property {number} [pageNo] - 페이지 번호
 * @property {number} [pageSize] - 출력 개수
 * @property {number} [startDt] - 시작일자
 * @property {number} [totalCnt] - 총 데이터 개수
 */

/**
 * ## 일자별 전략 현황 요약
 * @typedef {Object} StrategySummaryCountType
 * @property {UniverseCountryEnum} [country] - 국가필터
 * @property {number} [diyCnt] - 나만의 전략 개수
 * @property {string} [errorMessage] - 오류 메시지
 * @property {number} [masterCnt] - 대가들의 전략 개수
 * @property {number} [prevActivatedCnt] - 전일대비(활성화)
 * @property {number} [prevDeactivatedCnt] - 전일대비(비활성화)
 * @property {number} [prevItemChangeCnt] - 전일대비(종목변동)
 * @property {number} [sectorCnt] - 섹터 전략 개수
 * @property {number} [startDt] - 시작일자
 * @property {number} [themeKbamCnt] - 테마전략 개수(KB자산운용)
 * @property {number} [themeKbsecCnt] - 테마전략 개수(KB증권)
 * @property {number} [themeSnsCnt] - 테마전략 개수(SNS)
 * @property {number} [themeTotalCnt] - 테마전략 전체 개수
 * @property {number} [totalCnt] - 전략 전체 개수
 */

/**
 * @typedef {(MasterStrategyType|SectorIndustryStrategyType|ThemeStrategyType)} StrategyUnion
 */

/**
 * @typedef {Object} StyleFactorItem
 * @property {string} cmName - cm_name
 * @property {GradeEnum} [defaultGrade] - 사용자가 선택한 상,중,하 값
 * @property {FactorStyleItem} [style] - 팩터 스타일 정보
 */

/**
 * @typedef {Object} StyleFactorSimpleGrade
 * @property {FactorValueItem} [high]
 * @property {FactorValueItem} [low]
 * @property {FactorValueItem} [middle]
 */

/**
 * @typedef {Object} StyleFactors
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {StyleFactorsType} [styleFactors]
 */

/**
 * @typedef {Object} StyleFactorsType
 * @property {StyleFactorSimpleGrade} [simplePrest] - 약, 중, 강 min, max 정보
 * @property {Array<(StyleFactorItem|null|undefined)>} [styleFactors] - 스타일 팩터 정보
 */

/**
 * @typedef {Object} SyncMyStrategyHoldings
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} ThemeGroup
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {ThemeGroupType} [themeGroup]
 */

/**
 * @typedef {("ACTIVATED"|"DEACTIVATED")} ThemeGroupStatusEnum
 */

/**
 * @typedef {Object} ThemeGroupStrategyInput
 * @property {string} [id] - 테마 그룹 전략 ID
 * @property {string} strategyId - 전략 ID
 */

/**
 * 테마그룹전략
 * @typedef {Object} ThemeGroupStrategyType
 * @property {AdminUserType} [adminUser] - 테마그룹 전략 등록인
 * @property {number} [createdAt] - 그룹 등록일 (unixtimestamp milliseconds)
 * @property {string} id - The ID of the object
 * @property {ThemeStrategyType} [strategy] - 테마그룹 전략 상세정보
 */

/**
 * 테마그룹
 * @typedef {Object} ThemeGroupType
 * @property {AdminUserType} [adminUser] - 등록인 정보
 * @property {number} [createdAt] - 등록일 (unixtimestamp milliseconds)
 * @property {string} id - The ID of the object
 * @property {string} [name] - 테마그룹명
 * @property {number} [ordering] - 정렬 순서
 * @property {string} [remarks] - 비고 - DEPRECATED: 기획 변경되면서 사용안하는 비고필드 다음 스키마 정리 때 삭제 예정
 * @property {ThemeGroupStatusEnum} [status] - 상태값
 * @property {Array<(ThemeGroupStrategyType|null|undefined)>} [themeGroupStrategies] - 테마그룹 전략 리스트
 */

/**
 * @typedef {Object} ThemeGroups
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(ThemeGroupType|null|undefined)>} [themeGroups]
 */

/**
 * @typedef {Object} ThemeHolding
 * @property {string} name - 종목명
 * @property {string} shortCode - 종목코드
 */

/**
 * @typedef {Object} ThemeHoldingInput
 * @property {string} name - 종목명
 * @property {string} shortCode - 종목코드
 */

/**
 * @typedef {("KB_AM"|"KB_SEC"|"QUANTIT")} ThemeSrcEnum
 */

/**
 * @typedef {Object} ThemeStrategies
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(ThemeStrategyType|null|undefined)>} [themeStrategies]
 */

/**
 * @typedef {Object} ThemeStrategyInput
 * @property {string} description - 긴 소개글
 * @property {string} displayThemeName - 테마키워드
 * @property {boolean} isActiveStrategy - Active 전략 여부
 * @property {string} name - 전략명
 * @property {string} shortDescription - 짧은 소개글
 * @property {SimulationOptionInput} simulationOption - 시뮬레이션 옵션
 * @property {StrategyStatusEnum} [status] - 전략 상태
 * @property {Array<ThemeHoldingInput>} themeHoldings - 포트폴리오 종목
 * @property {ThemeSrcEnum} themeSrc - 테마출처
 * @property {UniverseCountryEnum} [universeCountry] - 국가
 */

/**
 * @typedef {Object} ThemeStrategyType
 * @property {AdminUserType} [adminUser] - 전략 등록자 정보
 * @property {BaseDate} [baseDate] - 기준일
 * @property {Array<(UniverseEnum|null|undefined)>} [benchmarks] - 벤치마크
 * @property {Array<string>} blacklist - 블랙리스트
 * @property {StrategyCategoryEnum} category - 전략카테고리
 * @property {number} createdAt - 등록일, unixtimestamp milliseconds
 * @property {string} description - 소개글
 * @property {string} [displayThemeName] - 테마명
 * @property {string} id - The ID of the object
 * @property {boolean} [isActiveStrategy] - Active 전략 여부
 * @property {string} name - 전략명
 * @property {ReturnSummaryType} [returnSummary] - 수익률 정보들 - DEPRECATED: 벤치마크 수익률 정보가 포함된 return_summary_v2 필드 추가
 * @property {StrategyReturnSummaryType} [returnSummaryV2] - 수익률 정보들
 * @property {string} shortDescription - 짧은 소개글
 * @property {SimulationOptionType} [simulationOption] - 시뮬레이션 옵션
 * @property {StrategyStatusEnum} status - 전략 상태
 * @property {number} [themeCmUpdateScheduleDate] - 테마 CM 업데이트 반영일, unixtimestamp
 * @property {number} [themeExtractionDate] - 테마 키워드 추출일, unixtimestamp
 * @property {Array<(ThemeHolding|null|undefined)>} [themeHoldings] - 테마 종목
 * @property {ThemeSrcEnum} [themeSrc] - 테마 출처
 * @property {number} totalUsesCnt - 누적 이용자 수
 * @property {UniverseType} universe - 유니버스
 * @property {UniversePresetEnum} universePreset - 유니버스 프리셋
 */

/**
 * @typedef {("DOMESTIC"|"USA")} UniverseCountryEnum
 */

/**
 * @typedef {Object} UniverseCountryType
 * @property {UniverseCountryEnum} [country] - 유니버스 국가
 * @property {Array<(UniverseItem|null|undefined)>} [universes] - 국가에 포함되는 유니버스들
 */

/**
 * An enumeration.
 * @typedef {("KOSDAQ"|"KOSDAQ150"|"KOSPI"|"KOSPI200"|"KRX300"|"NASDAQ100"|"SNP500")} UniverseEnum
 */

/**
 * @typedef {Object} UniverseItem
 * @property {string} [description] - 유니버스 설명글
 * @property {UniverseEnum} [name] - 유니버스명
 */

/**
 * @typedef {("KOSDAQ"|"KOSDAQ150"|"KOSPI"|"KOSPI200"|"KOSPI200_KOSDAQ150_KRX300"|"KOSPI_KOSDAQ"|"KRX300"|"NASDAQ100"|"SNP500"|"SNP500_NASDAQ100")} UniversePresetEnum
 */

/**
 * @typedef {Object} UniversePresetItem
 * @property {string} description - 유니버스 프리셋 설명글
 * @property {string} displayName - 사용자에게 보여질 이름
 * @property {boolean} [isChecked] - 사용자가 선택한 유니버스 프리셋 여부
 * @property {UniversePresetEnum} name - 유니버스 프리셋 이름
 * @property {Array<(UniverseEnum|null|undefined)>} universes - 해당 유니버스 프리셋에 속해 있는 유니버스 
 */

/**
 * @typedef {Object} UniversePresetType
 * @property {string} [name] - 유니버스 프리셋 이름
 * @property {UniversePresetEnum} [universePreset] - 유니버스 프리셋
 */

/**
 * @typedef {Object} UniversePresets
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(UniversePresetItem|null|undefined)>} [universePresets]
 */

/**
 * @typedef {Object} UniverseType
 * @property {UniverseCountryEnum} [country] - 유니버스 국가
 * @property {UniverseEnum} [name] - 유니버스
 */

/**
 * @typedef {Object} Universes
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {Array<(UniverseCountryType|null|undefined)>} [universes]
 */

/**
 * @typedef {Object} UpdateAdminUser
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} UpdateAdminUserPassword
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} UpdateKbPickDescription
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {KbPickType} [kbPick]
 */

/**
 * @typedef {Object} UpdateKbPickShortDescription
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {KbPickType} [kbPick]
 */

/**
 * @typedef {Object} UpdateMyStrategyName
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} UpdateSelectedThemeGroupStatus
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} UpdateStrategyStatus
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} UpdateThemeStrategy
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} User
 * @property {Array<(Error|null|undefined)>} [errors]
 * @property {UserType} [user]
 */

/**
 * @typedef {Object} UserType
 * @property {string} id - The ID of the object
 * @property {boolean} isStrategyCreationPossible - 국내 전략생성 가능여부, True: 전략  생성가능, False: 전략 생성불가능
 * @property {boolean} isStrategyCreationPossibleUs - 미국 전략생성 가능여부, True: 전략  생성가능, False: 전략 생성불가능
 * @property {RoleEnum} role
 * @property {string} uid
 */

/**
 * @typedef {Object} Verify
 * @property {GenericScalar} payload
 */

/**
 * @typedef {Object} WeightItem
 * @property {string} name - 항목명
 * @property {string} [synonym] - 동의어
 * @property {number} weight - 비중(%)
 */

/**
 * @typedef {Object} WhiteListType
 * @property {string} ccid - ccid
 * @property {boolean} isAdd - 추가종목 여부
 * @property {number} weight - 비중
 */

/**
 * @typedef {Object} WhitelistInputItem
 * @property {string} ccid - ccid
 * @property {boolean} isAdd - 추가항목 여부
 * @property {boolean} isLastEdit - 마지막 수정 여부
 * @property {number} weight - 비중(%)
 */
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  GenericScalar: { input: any; output: any; }
  JSONString: { input: any; output: any; }
};

export type AdminMenuList = {
  __typename?: 'AdminMenuList';
  /** 메뉴 리스트 */
  adminMenuList?: Maybe<Array<Maybe<AdminMenuType>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type AdminMenuType = Node & {
  __typename?: 'AdminMenuType';
  /** 메뉴 CODE */
  code: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 메뉴명 */
  name: Scalars['String']['output'];
  /** 정렬순번 */
  order: Scalars['Int']['output'];
};

export type AdminUser = {
  __typename?: 'AdminUser';
  /** 관리자 계정 상세정보 */
  adminUser?: Maybe<AdminUserType>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type AdminUserType = Node & {
  __typename?: 'AdminUserType';
  /** 기능권한 */
  functionAuth: FunctionAuth;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 사용 여부 */
  isActive: Scalars['Boolean']['output'];
  /** 메뉴권한 */
  menuAuth: Array<Maybe<MenuAuth>>;
  /** 이름 */
  name: Scalars['String']['output'];
  /** 소속 */
  organization: OrganizationType;
  /** 전화번호 */
  phone: Scalars['String']['output'];
  /** 관리자 ID */
  uid: Scalars['String']['output'];
};

export type AdminUsers = {
  __typename?: 'AdminUsers';
  /** 관리자 유저 리스트 */
  adminUsers?: Maybe<Array<Maybe<AdminUserType>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type BaseDate = {
  __typename?: 'BaseDate';
  /** 종료일 */
  end?: Maybe<Scalars['Float']['output']>;
  /** 시작일 */
  start?: Maybe<Scalars['Float']['output']>;
};

export enum BuySellEnum {
  /** 매수 */
  Buy = 'BUY',
  /** 매도 */
  Sell = 'SELL'
}

export type CancelMyStrategyEditing = {
  __typename?: 'CancelMyStrategyEditing';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type CashItem = {
  __typename?: 'CashItem';
  /** 금액 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 종목 비중(%) */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type CreateMyStrategy = {
  __typename?: 'CreateMyStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStrategyId?: Maybe<Scalars['ID']['output']>;
};

export type CreateMyStrategyByReadyMade = {
  __typename?: 'CreateMyStrategyByReadyMade';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStrategyId: Scalars['ID']['output'];
};

export type CreateThemeStrategy = {
  __typename?: 'CreateThemeStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type CreatedAdminUser = {
  __typename?: 'CreatedAdminUser';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type CumulativeReturn = {
  __typename?: 'CumulativeReturn';
  /** 누적 수익률 */
  cumulativeReturn?: Maybe<CumulativeReturnType>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type CumulativeReturnType = {
  __typename?: 'CumulativeReturnType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 누적 수익률 차트 */
  chart?: Maybe<Array<Maybe<ReturnChartItem>>>;
  /** 누적 수익률 항목 정보 */
  info?: Maybe<ReturnInfoItem>;
};

export type DeleteAdminUser = {
  __typename?: 'DeleteAdminUser';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMyStrategy = {
  __typename?: 'DeleteMyStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMyStrategyHistory = {
  __typename?: 'DeleteMyStrategyHistory';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteSelectedThemeGroup = {
  __typename?: 'DeleteSelectedThemeGroup';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteStrategies = {
  __typename?: 'DeleteStrategies';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

/** 대가들의 전략 상세 */
export type DetailedMasterStrategyType = {
  __typename?: 'DetailedMasterStrategyType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 벤치마크 */
  benchmarks?: Maybe<Array<Maybe<UniverseEnum>>>;
  /** 전략소개 */
  description: Scalars['String']['output'];
  /** 전략특징 */
  factors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 대가의 이미지 */
  img?: Maybe<Scalars['String']['output']>;
  /** 전략명 */
  name: Scalars['String']['output'];
  /** 최근 리밸런싱일, unixtimestamp */
  recentRebalancingDate?: Maybe<Scalars['Float']['output']>;
  /** 수익률(%) */
  returnRate?: Maybe<StrategyReturnType>;
  /** 짧은 전략소개 */
  shortDescription: Scalars['String']['output'];
  /** 시뮬레이션 옵션 */
  simulationOption?: Maybe<SimulationOptionType>;
  /** 전략출처 */
  src?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DetailedMyStrategy = {
  __typename?: 'DetailedMyStrategy';
  detailedMyStrategy?: Maybe<DetailedMyStrategyType>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type DetailedMyStrategyType = {
  __typename?: 'DetailedMyStrategyType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 벤치마크 수익률 */
  benchmark?: Maybe<RiskAssessmentItem>;
  /** 벤치마크 리스트 */
  benchmarks?: Maybe<Array<Maybe<UniverseEnum>>>;
  /** 생성 당시 환율 정보 */
  createdExchangeRateInfo?: Maybe<ExchangeRateInfo>;
  /** 환율 정보 */
  exchangeRateInfo?: Maybe<ExchangeRateInfo>;
  /** 모의투자 요약정보 */
  forwardSummary?: Maybe<ForwardSummary>;
  /** 모의투자 요약정보 - 환율적용 */
  forwardSummaryExchange?: Maybe<ForwardSummary>;
  /** 내 전략 수익률 */
  myStrategy?: Maybe<RiskAssessmentItem>;
  /** 전략명 */
  name: Scalars['String']['output'];
  /** 기초전략 수익률 */
  strategy?: Maybe<RiskAssessmentItem>;
};

export type DetailedStrategy = {
  __typename?: 'DetailedStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  strategy?: Maybe<DetailedStrategyUnion>;
};

/** 테마, 섹터/산업 상세 */
export type DetailedStrategyType = {
  __typename?: 'DetailedStrategyType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 벤치마크 */
  benchmarks?: Maybe<Array<Maybe<UniverseEnum>>>;
  /** 전략소개 */
  description: Scalars['String']['output'];
  /** 전략명 */
  name: Scalars['String']['output'];
  /** 최근 리밸런싱일, unixtimestamp */
  recentRebalancingDate?: Maybe<Scalars['Float']['output']>;
  /** 대표 종목 */
  representativeHoldings?: Maybe<Array<Maybe<RepresentativeProduct>>>;
  /** 대표 섹터 */
  representativeSector?: Maybe<SectorEnum>;
  /** 수익률(%) */
  returnRate?: Maybe<StrategyReturnType>;
  /** 시뮬레이션 옵션 */
  simulationOption?: Maybe<SimulationOptionType>;
};

export type DetailedStrategyUnion = DetailedMasterStrategyType | DetailedStrategyType;

export type Drawdown = {
  __typename?: 'Drawdown';
  /** drawdown */
  drawdown?: Maybe<DrawdownType>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type DrawdownType = {
  __typename?: 'DrawdownType';
  /** drawdown 차트 */
  chart?: Maybe<Array<Maybe<ReturnChartItem>>>;
};

export type DuplicateMyStrategy = {
  __typename?: 'DuplicateMyStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStrategyId?: Maybe<Scalars['ID']['output']>;
};

export type Error = {
  __typename?: 'Error';
  field?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['JSONString']['output']>;
  key: KbError;
  message?: Maybe<Scalars['String']['output']>;
};

export type ExceededMaxCnt = {
  __typename?: 'ExceededMaxCnt';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 최대 개수 초과 여부 */
  exceededMaxCnt: Scalars['Boolean']['output'];
};

export type ExchangeRateInfo = {
  __typename?: 'ExchangeRateInfo';
  /** 기준일 */
  baseDate?: Maybe<Scalars['Float']['output']>;
  /** 환율 */
  exchangeRate?: Maybe<Scalars['Float']['output']>;
};

export type Exposure = {
  __typename?: 'Exposure';
  errors?: Maybe<Array<Maybe<Error>>>;
  exposure?: Maybe<ExposureType>;
};

export type ExposureItem = {
  __typename?: 'ExposureItem';
  holdings?: Maybe<Array<Maybe<WeightItem>>>;
  industries?: Maybe<Array<Maybe<WeightItem>>>;
  sectors?: Maybe<Array<Maybe<WeightItem>>>;
};

export type ExposureType = {
  __typename?: 'ExposureType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 베이스 전략 익스포저 */
  strategy?: Maybe<ExposureItem>;
};

export type FactorDefaultValueInfo = {
  __typename?: 'FactorDefaultValueInfo';
  /** 사용자가 선택한 팩터 여부 */
  isChecked?: Maybe<Scalars['Boolean']['output']>;
  /** 사용자가 설정한 최대값 */
  max?: Maybe<Scalars['Float']['output']>;
  /** 사용자가 설정한 최소값 */
  min?: Maybe<Scalars['Float']['output']>;
};

export type FactorInfo = {
  __typename?: 'FactorInfo';
  /** 팩터명 */
  name: Scalars['String']['output'];
  /** 사용자가 설정한 팩터의 값 */
  value: Scalars['String']['output'];
};

export type FactorInputItem = {
  /** 팩터 cm_name */
  cmName: Scalars['String']['input'];
  /** max */
  max: Scalars['Float']['input'];
  /** min */
  min: Scalars['Float']['input'];
};

export type FactorItem = {
  __typename?: 'FactorItem';
  /** cm명 */
  cmName: Scalars['String']['output'];
  /** 팩터 설명글 주석 리스트 */
  comments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 팩터 기본값 정보 */
  defaultValueInfo?: Maybe<FactorDefaultValueInfo>;
  /** 팩터 설명글 */
  description?: Maybe<Scalars['String']['output']>;
  /** display 팩터명 */
  displayName: Scalars['String']['output'];
  /** 히스토그램 데이터 */
  histogramData?: Maybe<HistogramItem>;
  /** 음수제외 여부 */
  ignoreNegative: Scalars['Boolean']['output'];
  /** 팩터 설명 이미지 */
  img: Scalars['Int']['output'];
  /** 팩터 최대값 */
  max: Scalars['Float']['output'];
  /** 팩터 최소값 */
  min: Scalars['Float']['output'];
  /** 팩터 스타일 */
  style: FactorStyleEnum;
  /** 팩터 타입(value: 싱글팩터, ratio:스타일팩터) */
  type: Scalars['String']['output'];
};

/** An enumeration. */
export enum FactorStyleEnum {
  Beta = 'BETA',
  Dividend = 'DIVIDEND',
  Liquidity = 'LIQUIDITY',
  Master = 'MASTER',
  Momentum = 'MOMENTUM',
  Quality = 'QUALITY',
  Score = 'SCORE',
  Size = 'SIZE',
  Style = 'STYLE',
  Surprise = 'SURPRISE',
  Value = 'VALUE',
  Volatility = 'VOLATILITY'
}

export type FactorStyleItem = {
  __typename?: 'FactorStyleItem';
  /** 팩터 설명글 */
  description?: Maybe<Scalars['String']['output']>;
  /** 팩터 스타일명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 팩터 스타일 */
  style?: Maybe<FactorStyleEnum>;
};

export type FactorValueItem = {
  __typename?: 'FactorValueItem';
  /** 최대값 */
  max?: Maybe<Scalars['Float']['output']>;
  /** 최소값 */
  min?: Maybe<Scalars['Float']['output']>;
};

export type Factors = {
  __typename?: 'Factors';
  errors?: Maybe<Array<Maybe<Error>>>;
  factors?: Maybe<Array<Maybe<FactorsType>>>;
};

export type FactorsType = {
  __typename?: 'FactorsType';
  /** 해당 스타일에 속한 팩터들 */
  factors?: Maybe<Array<Maybe<FactorItem>>>;
  /** 팩터 스타일 정보 */
  style?: Maybe<FactorStyleItem>;
};

export type ForwardSummary = {
  __typename?: 'ForwardSummary';
  /** 환손익 */
  gainOrLossExchange?: Maybe<Scalars['Float']['output']>;
  /** 평가손익 */
  gainOrLossValuation?: Maybe<Scalars['Float']['output']>;
  /** 투자금액 */
  investmentAmount?: Maybe<Scalars['Float']['output']>;
  /** 투자기간 */
  period?: Maybe<BaseDate>;
  /** 평가금액 */
  valuationAmount?: Maybe<Scalars['Float']['output']>;
};

export type FunctionAuth = {
  __typename?: 'FunctionAuth';
  /** 전략편집 완전수정 여부 */
  strategyEditFullAccess: Scalars['Boolean']['output'];
};

export type FunctionAuthInput = {
  /** 전략편집 완전수정 권한 여부 */
  strategyEditFullAccess: Scalars['Boolean']['input'];
};

export enum GradeEnum {
  /** 상 */
  High = 'HIGH',
  /** 하 */
  Low = 'LOW',
  /** 중 */
  Middle = 'MIDDLE'
}

export type HistogramItem = {
  __typename?: 'HistogramItem';
  /** 팩터 최소 최대 값 */
  factorRange?: Maybe<FactorValueItem>;
  /** 상위 20% min, max 값 */
  high?: Maybe<FactorValueItem>;
  /** 상위 60% min, max 값 */
  low?: Maybe<FactorValueItem>;
  /** 상위 40% min, max 값 */
  middle?: Maybe<FactorValueItem>;
  /** 히스토그램 범위 */
  range?: Maybe<FactorValueItem>;
  /** 히스토그램 막대별 개수 리스트 */
  stickCounts?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type HoldingPosition = {
  __typename?: 'HoldingPosition';
  errors?: Maybe<Array<Maybe<Error>>>;
  holdingPosition?: Maybe<HoldingPositionType>;
};

export type HoldingPositionAll = {
  __typename?: 'HoldingPositionAll';
  errors?: Maybe<Array<Maybe<Error>>>;
  holdingPositionAll?: Maybe<HoldingPositionAllType>;
};

export type HoldingPositionAllType = {
  __typename?: 'HoldingPositionAllType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 현금 정보 */
  cash?: Maybe<CashItem>;
  position?: Maybe<Array<Maybe<HoldingPositionItem>>>;
};

export type HoldingPositionItem = {
  __typename?: 'HoldingPositionItem';
  /** CCID */
  ccid: Scalars['String']['output'];
  /** 종목 코드 */
  code: Scalars['String']['output'];
  /** 종목 산업 */
  industry?: Maybe<IndustryEnum>;
  /** 종목 산업명 */
  industryName?: Maybe<Scalars['String']['output']>;
  /** 추가종목 여부 */
  isAdd?: Maybe<Scalars['Boolean']['output']>;
  /** 화이트리스트 여부 */
  isWhitelist?: Maybe<Scalars['Boolean']['output']>;
  /** 종목명 */
  name: Scalars['String']['output'];
  /** 종가 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 종목 섹터 */
  sector?: Maybe<SectorEnum>;
  /** 종목 섹터명 */
  sectorName?: Maybe<Scalars['String']['output']>;
  /** 1주당 비중 */
  share?: Maybe<Scalars['Float']['output']>;
  /** 동의어 */
  synonym?: Maybe<Scalars['String']['output']>;
  /** 수량 */
  volume?: Maybe<Scalars['Int']['output']>;
  /** 종목 비중(%) */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type HoldingPositionType = {
  __typename?: 'HoldingPositionType';
  position?: Maybe<Array<Maybe<HoldingPositionItem>>>;
  /** 전체 컨텐츠 수 */
  totalCount: Scalars['Int']['output'];
  /** 전체 페이지 수 */
  totalPage: Scalars['Int']['output'];
};

export type HoldingType = {
  __typename?: 'HoldingType';
  /** 기준종목 ccid 리스트 */
  baseHoldings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 종목 리스트 */
  excludeHoldings?: Maybe<Array<Maybe<HoldingPositionItem>>>;
  /** 종목 리스트 */
  holdings?: Maybe<Array<Maybe<HoldingPositionItem>>>;
};

export type Holdings = {
  __typename?: 'Holdings';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 종목 리스트 */
  holdings?: Maybe<HoldingType>;
};

export enum IndustryEnum {
  /** 임의소비재 > 자동차 및 부품 */
  AutomobilesComponents = 'AUTOMOBILES_COMPONENTS',
  /** 금융 > 은행 */
  Banks = 'BANKS',
  /** 산업재 > 자본재 */
  CapitalGoods = 'CAPITAL_GOODS',
  /** 산업재 > 상업 및 전문 서비스 */
  CommercialProfessionalServices = 'COMMERCIAL_PROFESSIONAL_SERVICES',
  /** 임의소비재 > 내구 소비재 및 의류 */
  ConsumerDurablesApparel = 'CONSUMER_DURABLES_APPAREL',
  /** 임의소비재 > 소비자 서비스 */
  ConsumerServices = 'CONSUMER_SERVICES',
  /** 금융 > 다양한 금융 */
  DiversifiedFinancials = 'DIVERSIFIED_FINANCIALS',
  /** 에너지 > 에너지 */
  Energy = 'ENERGY',
  /**  필수소비재 > 식품, 음료 및 담배 */
  FoodBeverageTobacco = 'FOOD_BEVERAGE_TOBACCO',
  /** 필수소비재 > 식품 및 필수품 소매 */
  FoodStaplesRetailing = 'FOOD_STAPLES_RETAILING',
  /** 헬스케어 > 헬스케어 장비 및 서비스 */
  HealthCareEquipmentServices = 'HEALTH_CARE_EQUIPMENT_SERVICES',
  /** 필수소비재 > 가정용품 및 개인용품 */
  HouseholdPersonalProducts = 'HOUSEHOLD_PERSONAL_PRODUCTS',
  /** 금융 > 보험 */
  Insurance = 'INSURANCE',
  /** 소재 > 소재 */
  Materials = 'MATERIALS',
  /** 커뮤니케이션 서비스 > 미디어 및 엔터테인먼트 */
  MediaEntertainment = 'MEDIA_ENTERTAINMENT',
  /** 헬스케어 > 제약, 생명공학 및 생명과학 */
  PharmaceuticalsBiotechnologyLifeSciences = 'PHARMACEUTICALS_BIOTECHNOLOGY_LIFE_SCIENCES',
  /** 부동산 > 부동산 */
  RealEstate = 'REAL_ESTATE',
  /** 부동산 > 부동산 관리 및 개발 */
  RealEstateManagementDevelopment = 'REAL_ESTATE_MANAGEMENT_DEVELOPMENT',
  /** 임의소비재 > 소매 */
  Retailing = 'RETAILING',
  /** 정보 기술 > 반도체 및 반도체 장비 */
  SemiconductorsSemiconductorEquipment = 'SEMICONDUCTORS_SEMICONDUCTOR_EQUIPMENT',
  /** 정보 기술 > 소프트웨어 및 서비스 */
  SoftwareServices = 'SOFTWARE_SERVICES',
  /** 정보 기술 > 기술 하드웨어 및 장비 */
  TechnologyHardwareEquipment = 'TECHNOLOGY_HARDWARE_EQUIPMENT',
  /** 커뮤니케이션 서비스 > 통신 서비스 */
  TelecommunicationServices = 'TELECOMMUNICATION_SERVICES',
  /** 산업재 > 운송 */
  Transportation = 'TRANSPORTATION',
  /** 미분류 > 미분류 */
  Unclassified = 'UNCLASSIFIED',
  /** 유틸리티 > 유틸리티 */
  Utilities = 'UTILITIES'
}

export type IndustryItem = {
  __typename?: 'IndustryItem';
  /** 업종 */
  industry: IndustryEnum;
  /** 사용자가 선택한 업종 여부 */
  isChecked?: Maybe<Scalars['Boolean']['output']>;
  /** 업종명 */
  name: Scalars['String']['output'];
};

export enum IntervalEnum {
  /** 1일 */
  Day = 'DAY',
  /** 6달, 반기 */
  Half = 'HALF',
  /** 1달, 월간 */
  Month = 'MONTH',
  /** 3달, 분기 */
  Quarter = 'QUARTER',
  /** 1주 */
  Week = 'WEEK',
  /** 1년, 연간 */
  Year = 'YEAR'
}

export enum InvestmentStrategyLevelEnum {
  /** 상급자 LEVEL PRO */
  ExpertLevelPro = 'EXPERT_LEVEL_PRO',
  /** 중급자 LEVEL 1 */
  IntermediateLevel1 = 'INTERMEDIATE_LEVEL1',
  /** 중급자 LEVEL 2 */
  IntermediateLevel2 = 'INTERMEDIATE_LEVEL2',
  /** 중급자 LEVEL 3 */
  IntermediateLevel3 = 'INTERMEDIATE_LEVEL3',
  /** 초급자 LEVEL 1 */
  NoviceLevel1 = 'NOVICE_LEVEL1',
  /** 초급자 LEVEL 2 */
  NoviceLevel2 = 'NOVICE_LEVEL2',
  /** 초급자 LEVEL 3 */
  NoviceLevel3 = 'NOVICE_LEVEL3'
}

export type IsBacktestData = {
  __typename?: 'IsBacktestData';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 백테스트 데이터 유무 */
  isBacktestData: Scalars['Boolean']['output'];
};

/** An enumeration. */
export enum KbError {
  ApiReqFail = 'API_REQ_FAIL',
  CanNotDelete = 'CAN_NOT_DELETE',
  CanNotUpdate = 'CAN_NOT_UPDATE',
  DoesNotExist = 'DOES_NOT_EXIST',
  Duplicated = 'DUPLICATED',
  ExceededMaxCnt = 'EXCEEDED_MAX_CNT',
  InvalidParameter = 'INVALID_PARAMETER',
  InvalidPassword = 'INVALID_PASSWORD',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidState = 'INVALID_STATE',
  KbApiReqFail = 'KB_API_REQ_FAIL',
  NotActiveAdminUser = 'NOT_ACTIVE_ADMIN_USER',
  SamePassword = 'SAME_PASSWORD'
}

export type KbPickHistories = {
  __typename?: 'KbPickHistories';
  errors?: Maybe<Array<Maybe<Error>>>;
  kbPickHistoryInfo?: Maybe<KbPickHistoryInfo>;
};

export type KbPickHistoryInfo = {
  __typename?: 'KbPickHistoryInfo';
  kbPickHistories?: Maybe<Array<Maybe<KbPickHistoryType>>>;
  /** 총 컨텐츠 수 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 총 페이지 수 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type KbPickHistoryStrategies = {
  __typename?: 'KbPickHistoryStrategies';
  errors?: Maybe<Array<Maybe<Error>>>;
  kbPickHistoryStrategies?: Maybe<Array<Maybe<KbPickHistoryStrategyType>>>;
};

/** KB's Pick History Strategy Type */
export type KbPickHistoryStrategyType = Node & {
  __typename?: 'KbPickHistoryStrategyType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 정렬 순서 */
  ordering?: Maybe<Scalars['Int']['output']>;
  /** 테마전략 정보 */
  themeStrategy?: Maybe<ThemeStrategyType>;
};

/** KB's Pick History Type */
export type KbPickHistoryType = Node & {
  __typename?: 'KbPickHistoryType';
  /** 등록인 정보 */
  adminUser?: Maybe<AdminUserType>;
  /** 생성 일자 (unixtimestamp milliseconds) */
  createdAt?: Maybe<Scalars['Float']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 테마전략 수 */
  themeStrategyCnt?: Maybe<Scalars['Int']['output']>;
};

export type KbPickInfo = {
  __typename?: 'KbPickInfo';
  /** 마지막 업데이트 한 관리자명 */
  adminUser?: Maybe<AdminUserType>;
  kbPicks?: Maybe<Array<Maybe<KbPickType>>>;
  /** KB's Pick 마지막 업데이트 일자 (unixtimestamp milliseconds) */
  modifiedAt?: Maybe<Scalars['Float']['output']>;
};

export type KbPickInput = {
  /** 추천사유 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Kb Pick ID */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** 정렬 순서 */
  ordering?: InputMaybe<Scalars['Int']['input']>;
  /** 추천사유 짧은글 */
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  /** 테마전략 ID */
  themeStrategyId?: InputMaybe<Scalars['ID']['input']>;
};

/** KB's Pick Type */
export type KbPickType = Node & {
  __typename?: 'KbPickType';
  adminUser?: Maybe<AdminUserType>;
  /** KB's Pick 등록일 (unixtimestamp milliseconds) */
  createdAt?: Maybe<Scalars['Float']['output']>;
  /** KB's Pick 등록일 이후 누적 수익률 */
  cumulativeReturn?: Maybe<Scalars['Float']['output']>;
  /** 추천사유 */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 정렬 순서 */
  ordering?: Maybe<Scalars['Int']['output']>;
  /** 추천사유 짧은글 */
  shortDescription?: Maybe<Scalars['String']['output']>;
  themeStrategy?: Maybe<ThemeStrategyType>;
};

export type KbPicks = {
  __typename?: 'KbPicks';
  errors?: Maybe<Array<Maybe<Error>>>;
  kbPickInfo?: Maybe<KbPickInfo>;
};

export type LastTradingDateType = {
  __typename?: 'LastTradingDateType';
  /** 국가 필터 */
  country?: Maybe<UniverseCountryEnum>;
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 마지막 영업일자 문자열(yyyy-MM-dd) */
  lastTradingDt?: Maybe<Scalars['String']['output']>;
  /** 마지막 영업일자(timestamp) */
  lastTradingTs?: Maybe<Scalars['Float']['output']>;
};

export type LoginAdminUser = {
  __typename?: 'LoginAdminUser';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 로그인 정보 */
  loginInfo?: Maybe<LoginInfoType>;
};

export type LoginInfoType = {
  __typename?: 'LoginInfoType';
  adminUser?: Maybe<AdminUserType>;
  token?: Maybe<Scalars['String']['output']>;
};

/** 대가들의 전략 */
export type MasterStrategyType = Node & {
  __typename?: 'MasterStrategyType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 블랙리스트 */
  blacklist: Array<Scalars['String']['output']>;
  /** 전략카테고리 */
  category: StrategyCategoryEnum;
  /** 등록일, unixtimestamp milliseconds */
  createdAt: Scalars['Float']['output'];
  /** 소개글 */
  description: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 대가의 이미지 */
  img: Scalars['String']['output'];
  /** 상세 투자 전략  */
  masterFactors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 투자 전략 출처 */
  masterSrc?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 전략명 */
  name: Scalars['String']['output'];
  /** 짧은 소개글 */
  shortDescription: Scalars['String']['output'];
  /** 시뮬레이션 옵션 */
  simulationOption?: Maybe<SimulationOptionType>;
  /** 전략 상태 */
  status: StrategyStatusEnum;
  /** 누적 이용자 수 */
  totalUsesCnt: Scalars['Int']['output'];
  /** 유니버스 */
  universe: UniverseType;
  /** 유니버스 프리셋 */
  universePreset: UniversePresetEnum;
};

export type MenuAuth = {
  __typename?: 'MenuAuth';
  /** 권한 */
  auth: MenuRoleEnum;
  /** 메뉴 CODE */
  code: Scalars['String']['output'];
  /** 메뉴 ID */
  id: Scalars['ID']['output'];
  /** 메뉴명 */
  name: Scalars['String']['output'];
};

export type MenuAuthInput = {
  /** 권한 */
  menuAuth: MenuRoleEnum;
  /** 메뉴 CODE */
  menuCode: Scalars['String']['input'];
};

export enum MenuRoleEnum {
  /** 미사용 */
  NotUse = 'NOT_USE',
  /** 읽기/편집 */
  ReadEdit = 'READ_EDIT',
  /** 읽기 */
  ReadOnly = 'READ_ONLY'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** 내 전략 편집 취소 */
  cancelMyStrategyEditing?: Maybe<CancelMyStrategyEditing>;
  /** 관리자 계정 등록 */
  createAdminUser?: Maybe<CreatedAdminUser>;
  /** 내 전략 생성 */
  createMyStrategy?: Maybe<CreateMyStrategy>;
  /** 내 전략 생성 (By ready-made 전략) */
  createMyStrategyByReadyMade?: Maybe<CreateMyStrategyByReadyMade>;
  /** 테마 전략 생성 */
  createThemeStrategy?: Maybe<CreateThemeStrategy>;
  /** 관리자 계정 삭제 */
  deleteAdminUser?: Maybe<DeleteAdminUser>;
  /** 내 전략 삭제 */
  deleteMyStrategy?: Maybe<DeleteMyStrategy>;
  /** 내 전략 기록 삭제 */
  deleteMyStrategyHistory?: Maybe<DeleteMyStrategyHistory>;
  /** 선택된 테마그룹 삭제 */
  deleteSelectedThemeGroup?: Maybe<DeleteSelectedThemeGroup>;
  /** 프리셋 전략들 삭제 */
  deleteStrategies?: Maybe<DeleteStrategies>;
  /** 내 전략 복제 */
  duplicateMyStrategy?: Maybe<DuplicateMyStrategy>;
  /** 관리자 계정 로그인 */
  loginAdminUser?: Maybe<LoginAdminUser>;
  /** 토큰 갱신 */
  refreshToken?: Maybe<Refresh>;
  /** 테마그룹 정렬 순서 변경 */
  reorderThemeGroups?: Maybe<ReorderThemeGroups>;
  /** KB's Pick 저장 */
  saveKbPicks?: Maybe<SaveKbPicks>;
  /** 내 전략 저장 */
  saveMyStrategy?: Maybe<SaveMyStrategy>;
  /** 테마그룹 저장 (추가, 수정) */
  saveThemeGroup?: Maybe<SaveThemeGroup>;
  /** M-able 로그인 */
  signOn?: Maybe<SignOn>;
  /** 회원가입 */
  signUp?: Maybe<SignUp>;
  /** 내 전략 종목 KB와 동기화 */
  syncMyStrategyHoldings?: Maybe<SyncMyStrategyHoldings>;
  /** 토큰 인증 */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** 관리자 계정 상세정보 변경 */
  updateAdminUser?: Maybe<UpdateAdminUser>;
  /** 관리자 계정 비밀번호 변경 */
  updateAdminUserPassword?: Maybe<UpdateAdminUserPassword>;
  /** KB's Pick 추천사유(긴글) 수정 */
  updateKbPickDescription?: Maybe<UpdateKbPickDescription>;
  /** KB's Pick Short 추천사유(짧은글) 수정 */
  updateKbPickShortDescription?: Maybe<UpdateKbPickShortDescription>;
  /** 내 전략명 변경 */
  updateMyStrategyName?: Maybe<UpdateMyStrategyName>;
  /** 선택된 테마그룹 상태값 변경 */
  updateSelectedThemeGroupStatus?: Maybe<UpdateSelectedThemeGroupStatus>;
  /** 전략 상태 수정 */
  updateStrategyStatus?: Maybe<UpdateStrategyStatus>;
  /** 테마 전략 수정 */
  updateThemeStrategy?: Maybe<UpdateThemeStrategy>;
  /** 토큰 유효성검사 */
  verifyToken?: Maybe<Verify>;
};


export type MutationCancelMyStrategyEditingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAdminUserArgs = {
  functionAuth: FunctionAuthInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  menuAuthList: Array<MenuAuthInput>;
  name: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationCreateMyStrategyArgs = {
  myStrategyId: Scalars['ID']['input'];
  simulationOptionScreening: SimulationOptionScreeningInput;
};


export type MutationCreateMyStrategyByReadyMadeArgs = {
  investmentStrategyLevel?: InputMaybe<InvestmentStrategyLevelEnum>;
  isSimple: Scalars['Boolean']['input'];
  simulationOptionScreening: SimulationOptionScreeningInput;
  strategyId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateThemeStrategyArgs = {
  themeStrategy: ThemeStrategyInput;
};


export type MutationDeleteAdminUserArgs = {
  uid: Scalars['String']['input'];
};


export type MutationDeleteMyStrategyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMyStrategyHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSelectedThemeGroupArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteStrategiesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDuplicateMyStrategyArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationLoginAdminUserArgs = {
  password: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationReorderThemeGroupsArgs = {
  reorderThemeGroups: Array<ReorderThemeGroupsInput>;
};


export type MutationSaveKbPicksArgs = {
  country?: UniverseCountryEnum;
  kbPicks: Array<KbPickInput>;
};


export type MutationSaveMyStrategyArgs = {
  editingMyStrategyId?: InputMaybe<Scalars['ID']['input']>;
  myStrategyId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationSaveThemeGroupArgs = {
  saveThemeGroup: SaveThemeGroupInput;
};


export type MutationSignOnArgs = {
  isWebUser?: InputMaybe<Scalars['Boolean']['input']>;
  uid: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  password: Scalars['String']['input'];
  role: RoleEnum;
  uid: Scalars['String']['input'];
};


export type MutationSyncMyStrategyHoldingsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationUpdateAdminUserArgs = {
  functionAuth: FunctionAuthInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  menuAuthList: Array<MenuAuthInput>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationUpdateAdminUserPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationUpdateKbPickDescriptionArgs = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateKbPickShortDescriptionArgs = {
  id: Scalars['ID']['input'];
  shortDescription: Scalars['String']['input'];
};


export type MutationUpdateMyStrategyNameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateSelectedThemeGroupStatusArgs = {
  ids: Array<Scalars['ID']['input']>;
  status: ThemeGroupStatusEnum;
};


export type MutationUpdateStrategyStatusArgs = {
  id: Scalars['ID']['input'];
  status: StrategyStatusEnum;
};


export type MutationUpdateThemeStrategyArgs = {
  id: Scalars['ID']['input'];
  themeStrategy: ThemeStrategyInput;
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type MyCumulativeReturn = {
  __typename?: 'MyCumulativeReturn';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 누적 수익률 */
  myCumulativeReturn?: Maybe<MyCumulativeReturnType>;
};

export type MyCumulativeReturnType = {
  __typename?: 'MyCumulativeReturnType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 누적 수익률 차트 */
  chart?: Maybe<Array<Maybe<MyReturnChartItem>>>;
  /** 누적 수익률 항목 정보 */
  info?: Maybe<MyReturnInfoItem>;
};

export type MyDrawdown = {
  __typename?: 'MyDrawdown';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** drawdown */
  myDrawdown?: Maybe<MyDrawdownType>;
};

export type MyDrawdownType = {
  __typename?: 'MyDrawdownType';
  /** drawdown 차트 */
  chart?: Maybe<Array<Maybe<MyReturnChartItem>>>;
};

export type MyExposure = {
  __typename?: 'MyExposure';
  errors?: Maybe<Array<Maybe<Error>>>;
  myExposure?: Maybe<MyExposureType>;
};

export type MyExposureType = {
  __typename?: 'MyExposureType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 내 전략 익스포저 */
  myStrategy?: Maybe<ExposureItem>;
  /** 베이스 전략 익스포저 */
  strategy?: Maybe<ExposureItem>;
};

export type MyFactors = {
  __typename?: 'MyFactors';
  errors?: Maybe<Array<Maybe<Error>>>;
  myFactors?: Maybe<Array<Maybe<FactorsType>>>;
};

export type MyHoldingPosition = {
  __typename?: 'MyHoldingPosition';
  errors?: Maybe<Array<Maybe<Error>>>;
  myHoldingPosition?: Maybe<HoldingPositionType>;
};

export type MyHoldingPositionAll = {
  __typename?: 'MyHoldingPositionAll';
  errors?: Maybe<Array<Maybe<Error>>>;
  myHoldingPositionAll?: Maybe<HoldingPositionAllType>;
};

export type MyHoldings = {
  __typename?: 'MyHoldings';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 종목 리스트 */
  myHoldings?: Maybe<HoldingType>;
};

export type MyPeriodReturn = {
  __typename?: 'MyPeriodReturn';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 기간별 수익률 */
  myPeriodReturn?: Maybe<MyPeriodReturnType>;
};

export type MyPeriodReturnType = {
  __typename?: 'MyPeriodReturnType';
  /** 기간별 수익률 차트 */
  chart?: Maybe<Array<Maybe<MyReturnChartItem>>>;
};

export type MyRebalancingHistory = {
  __typename?: 'MyRebalancingHistory';
  errors?: Maybe<Array<Maybe<Error>>>;
  myRebalancingHistory?: Maybe<RebalancingHistoryType>;
};

export type MyRebalancingPositionList = {
  __typename?: 'MyRebalancingPositionList';
  errors?: Maybe<Array<Maybe<Error>>>;
  myRebalancingPositionList?: Maybe<RebalancingPositionListType>;
};

export type MyRebalancingPositionTreemap = {
  __typename?: 'MyRebalancingPositionTreemap';
  errors?: Maybe<Array<Maybe<Error>>>;
  myRebalancingPositionTreemap?: Maybe<RebalancingPositionTreemapType>;
};

export type MyReturnChartItem = {
  __typename?: 'MyReturnChartItem';
  /** 벤치마크 수익률 */
  benchmark?: Maybe<ReturnItem>;
  /** 전략 수익률 */
  myStrategy?: Maybe<ReturnItem>;
  /** 전략 수익률 */
  strategy?: Maybe<ReturnItem>;
  /** unixtimestamp milliseconds */
  ts: Scalars['Float']['output'];
};

export type MyReturnInfoItem = {
  __typename?: 'MyReturnInfoItem';
  /** 벤치마크 수익률 */
  benchmark?: Maybe<ReturnItem>;
  /** 내 전략 수익률 */
  myStrategy?: Maybe<ReturnItem>;
  /** 전략 수익률 */
  strategy?: Maybe<ReturnItem>;
};

export type MyRiskAssessmentIndex = {
  __typename?: 'MyRiskAssessmentIndex';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 위험평가지표 */
  myRiskAssessmentIndex?: Maybe<MyRiskAssessmentIndexType>;
};

export type MyRiskAssessmentIndexType = {
  __typename?: 'MyRiskAssessmentIndexType';
  /** 위험평가지표 정보 */
  info?: Maybe<MyRiskAssessmentInfoItem>;
};

export type MyRiskAssessmentInfoItem = {
  __typename?: 'MyRiskAssessmentInfoItem';
  /** 벤치마크 위험평가지표 */
  benchmark?: Maybe<RiskAssessmentItem>;
  /** 기타 위험평가지표 */
  etc?: Maybe<RiskAssessmentEtcItem>;
  /** 전략 위험평가지표 */
  myStrategy?: Maybe<RiskAssessmentItem>;
  /** 전략 위험평가지표 */
  strategy?: Maybe<RiskAssessmentItem>;
};

export type MySectors = {
  __typename?: 'MySectors';
  errors?: Maybe<Array<Maybe<Error>>>;
  mySectors?: Maybe<Array<Maybe<SectorType>>>;
};

export type MyStrategy = {
  __typename?: 'MyStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStrategy?: Maybe<MyStrategyType>;
};

export type MyStrategyBlacklist = {
  __typename?: 'MyStrategyBlacklist';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStrategyBlacklist?: Maybe<Array<Maybe<HoldingPositionItem>>>;
};

export type MyStrategyConnection = {
  __typename?: 'MyStrategyConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MyStrategyEdge>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MyStrategy` and its cursor. */
export type MyStrategyEdge = {
  __typename?: 'MyStrategyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MyStrategyType>;
};

export enum MyStrategyOrderType {
  /** 백테스트 누적수익률 높은순 */
  BacktestCumulative = 'BACKTEST_CUMULATIVE',
  /** 기초전략 수익률, 벤치마크 수익률 높은순 */
  BenchmarkOrBaseStrategyCumulative = 'BENCHMARK_OR_BASE_STRATEGY_CUMULATIVE',
  /** 모의투자  */
  ForwardCumulative = 'FORWARD_CUMULATIVE',
  /** 전략 생성 최신순 */
  ForwardStartDate = 'FORWARD_START_DATE'
}

export type MyStrategyReturnSummaryItem = {
  __typename?: 'MyStrategyReturnSummaryItem';
  baseDate?: Maybe<BaseDate>;
  returnSummary?: Maybe<ReturnSummaryType>;
};

export type MyStrategyReturnSummaryType = {
  __typename?: 'MyStrategyReturnSummaryType';
  /** 백테스트 성과 */
  backtest?: Maybe<MyStrategyReturnSummaryItem>;
  /** 기초전략 수익률 */
  baseStrategyCumulative?: Maybe<Scalars['Float']['output']>;
  /** 벤치마크 수익률 */
  benchmarkCumulative?: Maybe<Scalars['Float']['output']>;
  /** 모의투자 성과 */
  forward?: Maybe<MyStrategyReturnSummaryItem>;
};

export type MyStrategyStyle = {
  __typename?: 'MyStrategyStyle';
  errors?: Maybe<Array<Maybe<Error>>>;
  info?: Maybe<MyStrategyStyleInfo>;
};

export type MyStrategyStyleInfo = {
  __typename?: 'MyStrategyStyleInfo';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  benchmark?: Maybe<StrategyFactorStyle>;
  /** 벤치마크명 */
  benchmarkName?: Maybe<UniverseEnum>;
  /** 투자 전략 상세 */
  factorInfo?: Maybe<Array<Maybe<FactorInfo>>>;
  myStrategy?: Maybe<StrategyFactorStyle>;
  /** 전략명 */
  myStrategyName?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<StrategyFactorStyle>;
  /** 전략명 */
  strategyName?: Maybe<Scalars['String']['output']>;
};

/** 내 전략 */
export type MyStrategyType = Node & {
  __typename?: 'MyStrategyType';
  /** 베이스 전략명 */
  baseStrategyName?: Maybe<Scalars['String']['output']>;
  /** 벤치마크 */
  benchmarks?: Maybe<Array<Maybe<UniverseEnum>>>;
  /** 전략카테고리 */
  category: StrategyCategoryEnum;
  /** 전략 생성일 (unixtimestamp milliseconds) */
  createdAt: Scalars['Float']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 투자방법 단계 */
  investmentStrategyLevel: InvestmentStrategyLevelEnum;
  /** KB 계약 여부 */
  isActiveKbContract: Scalars['Boolean']['output'];
  /** 모의투자 성과 확인가능 여부 */
  isForwardAvailable: Scalars['Boolean']['output'];
  /** 간편편집 여부 */
  isSimple: Scalars['Boolean']['output'];
  /** 전략명 */
  name: Scalars['String']['output'];
  /** KB에 전달할 내전략(Portfolio) ID */
  portfolioId?: Maybe<Scalars['String']['output']>;
  /** 최신 리밸런싱 */
  rebalancingInfo?: Maybe<RebalancingInfo>;
  /** 수익률 정보 */
  returnSummary?: Maybe<MyStrategyReturnSummaryType>;
  /** 섹터/산업 정보 */
  sectorIndustrySummary?: Maybe<SectorIndustrySummaryType>;
  /** 시뮬레이션 옵션 */
  simulationOption?: Maybe<SimulationOptionType>;
  /** 전략 상태 */
  status: StrategyStatusEnum;
  strategy?: Maybe<StrategyUnion>;
  /** 유니버스 */
  universe: UniverseType;
  /** 유니버스 프리셋 */
  universePreset: UniversePresetType;
  /** 화이트리스트 */
  whitelist?: Maybe<Array<Maybe<WhiteListType>>>;
};

export type MyStyleFactors = {
  __typename?: 'MyStyleFactors';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStyleFactors?: Maybe<StyleFactorsType>;
};

export type MyUniversePresets = {
  __typename?: 'MyUniversePresets';
  errors?: Maybe<Array<Maybe<Error>>>;
  myUniversePresets?: Maybe<Array<Maybe<UniversePresetItem>>>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type Organization = {
  __typename?: 'Organization';
  errors?: Maybe<Array<Maybe<Error>>>;
  organization?: Maybe<OrganizationType>;
};

export type OrganizationType = Node & {
  __typename?: 'OrganizationType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 소속명 */
  name: Scalars['String']['output'];
  /** 해당 소속의 테마출처 */
  themeSrc: ThemeSrcEnum;
};

export type Organizations = {
  __typename?: 'Organizations';
  errors?: Maybe<Array<Maybe<Error>>>;
  organizations?: Maybe<Array<Maybe<OrganizationType>>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum PeriodEnum {
  /** 5년 */
  FiveYears = 'FIVE_YEARS',
  /** 6달 */
  Half = 'HALF',
  /** 1달 */
  Month = 'MONTH',
  /** 3달 */
  Quarter = 'QUARTER',
  /** 3년 */
  ThreeYears = 'THREE_YEARS',
  /** 1년 */
  Year = 'YEAR'
}

export type PeriodReturn = {
  __typename?: 'PeriodReturn';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 기간별 수익률 */
  periodReturn?: Maybe<PeriodReturnType>;
};

export type PeriodReturnType = {
  __typename?: 'PeriodReturnType';
  /** 기간별 수익률 차트 */
  chart?: Maybe<Array<Maybe<ReturnChartItem>>>;
};

export type Query = {
  __typename?: 'Query';
  /** 메뉴 리스트 */
  adminMenuList?: Maybe<AdminMenuList>;
  /** 관리자 계정 상세정보 조회 */
  adminUser?: Maybe<AdminUser>;
  /** 내 관리자 계정 상세정보 조회 */
  adminUserMe?: Maybe<AdminUser>;
  /** 관리자 유저 리스트 조회 */
  adminUsers?: Maybe<AdminUsers>;
  /** 관리자 ID 중복 유효성 검사 */
  checkDuplicateAdminUserUid?: Maybe<Scalars['Boolean']['output']>;
  /** 전략명 중복 체크 (True: 중복, False: 중복아님) */
  checkDuplicateStrategyName?: Maybe<Scalars['Boolean']['output']>;
  /** 전략 테마명 중복 체크 (True: 중복, False: 중복아님) */
  checkDuplicateStrategyThemeName?: Maybe<Scalars['Boolean']['output']>;
  /** 테마 그룹명 중복 검사 (True: 중복, False: 중복 아님) */
  checkDuplicateThemeGroupName?: Maybe<Scalars['Boolean']['output']>;
  /** 소속별 최대 개수 초과 유효성 검사 */
  checkExceededMaxCntOrganization?: Maybe<ExceededMaxCnt>;
  /** 시뮬레이션 수익분석 - 누적 수익률 */
  cumulativeReturn?: Maybe<CumulativeReturn>;
  /** 내 전략 상세 조회 */
  detailedMyStrategy?: Maybe<DetailedMyStrategy>;
  /** 전략 상세 조회 */
  detailedStrategy?: Maybe<DetailedStrategy>;
  /** 시뮬레이션 수익분석 - drawdown */
  drawdown?: Maybe<Drawdown>;
  /** 시뮬레이션 포지션분석 - 익스포저 (섹터, 산업, 종목) */
  exposure?: Maybe<Exposure>;
  /** 해당 전략의 싱글팩터 조회 */
  factors?: Maybe<Factors>;
  /** 전일대비 상세 - 전략 정보(구분, 전략명, 최초 생성일) */
  getStrategyChangeHolding?: Maybe<StrategyHoldingsInfoListType>;
  /** 일자별 현황 상세(Excel) */
  getStrategyCumulativeReturnAll?: Maybe<StrategyCumulativeReturnListType>;
  /** 일자별 현황 상세 */
  getStrategyCumulativeReturnByPeriod?: Maybe<StrategyCumulativeReturnListType>;
  /** 전일대비 상세 - 전략 정보(구분, 전략명, 최초 생성일) */
  getStrategyInfo?: Maybe<StrategyInfoListType>;
  /** 최적화 3종 일자별 현황 상세(KB자산운용 전용, Excel) */
  getStrategyOptimizationCumulativeReturnAll?: Maybe<StrategyOptimizationCumulativeReturnListType>;
  /** 최적화 3종 일자별 현황 상세(KB자산운용 전용) */
  getStrategyOptimizationCumulativeReturnByPeriod?: Maybe<StrategyOptimizationCumulativeReturnListType>;
  /** 일자별 현황 요약 */
  getStrategySummaryCount?: Maybe<StrategySummaryCountType>;
  /** 히스토리 전체 조회(전체기간: 2023.04.28~현재) */
  getStrategySummaryCountAll?: Maybe<StrategySummaryCountListType>;
  /** 히스토리 전체 조회 */
  getStrategySummaryCountByPeriod?: Maybe<StrategySummaryCountListType>;
  /** 시뮬레이션 포지션분석 - 종목 구성 */
  holdingPosition?: Maybe<HoldingPosition>;
  /** 시뮬레이션 포지션분석 - 전체 종목 구성 */
  holdingPositionAll?: Maybe<HoldingPositionAll>;
  /** 전략 스크리너 종목리스트 조회 */
  holdings?: Maybe<Holdings>;
  /** 내 전략 종목 제외 후 종목리스트 조회 */
  isBacktestData?: Maybe<IsBacktestData>;
  /**  KB's Pick History 리스트 조회 */
  kbPickHistories?: Maybe<KbPickHistories>;
  /**  KB's Pick History 전략 리스트 조회 */
  kbPickHistoryStrategies?: Maybe<KbPickHistoryStrategies>;
  /** KB's Pick 리스트 조회 */
  kbPicks?: Maybe<KbPicks>;
  /** 마지막 영업일 출력 */
  lastTradingDate?: Maybe<LastTradingDateType>;
  me?: Maybe<User>;
  /** 전략 편집 > 시뮬레이션 수익분석 - 누적 수익률 */
  myCumulativeReturn?: Maybe<MyCumulativeReturn>;
  /** 시뮬레이션 수익분석 - drawdown */
  myDrawdown?: Maybe<MyDrawdown>;
  /** 전략 편집 > 시뮬레이션 포지션분석 - 익스포저 (섹터, 산업, 종목) */
  myExposure?: Maybe<MyExposure>;
  /** 내 전략 팩터 조회 */
  myFactors?: Maybe<MyFactors>;
  /** 전략 편집 > 시뮬레이션 포지션분석 - 종목 구성 */
  myHoldingPosition?: Maybe<MyHoldingPosition>;
  myHoldingPositionAll?: Maybe<MyHoldingPositionAll>;
  /** 내 전략 종목 조회 */
  myHoldings?: Maybe<MyHoldings>;
  /** 전략 편집 > 시뮬레이션 수익분석 - 기간별 수익률 */
  myPeriodReturn?: Maybe<MyPeriodReturn>;
  /** 전략 편집 > 시뮬레이션 리밸런싱분석 - 리밸런싱 이력 */
  myRebalancingHistory?: Maybe<MyRebalancingHistory>;
  /** 전략 편집 > 시뮬레이션 리밸런싱분석 - 종목구성 (리스트) */
  myRebalancingPositionList?: Maybe<MyRebalancingPositionList>;
  /** 전략 편집 > 시뮬레이션 리밸런싱분석 - 종목구성 (트리맵) */
  myRebalancingPositionTreemap?: Maybe<MyRebalancingPositionTreemap>;
  /** 시뮬레이션 수익분석 - 위험평가지표 */
  myRiskAssessmentIndex?: Maybe<MyRiskAssessmentIndex>;
  /** 내 전략 섹터/업종 조회 */
  mySectors?: Maybe<MySectors>;
  myStrategies?: Maybe<MyStrategyConnection>;
  myStrategy?: Maybe<MyStrategy>;
  /** 내 전략의 제외 종목 정보 조회 */
  myStrategyBlacklist?: Maybe<MyStrategyBlacklist>;
  myStrategyByPortfolioId?: Maybe<MyStrategy>;
  myStrategyStyle?: Maybe<MyStrategyStyle>;
  /** 내 스타일 팩터 (간편투자 팩터) 조회  */
  myStyleFactors?: Maybe<MyStyleFactors>;
  /** 내 전략 유니버스 프리셋 조회 */
  myUniversePresets?: Maybe<MyUniversePresets>;
  /** 내 전략 종목 제외 후 종목리스트 조회 */
  myVolumePosition?: Maybe<MyHoldings>;
  /** 소속 조회 */
  organization?: Maybe<Organization>;
  /** 소속 리스트 조회 */
  organizations?: Maybe<Organizations>;
  /** 시뮬레이션 수익분석 - 기간별 수익률 */
  periodReturn?: Maybe<PeriodReturn>;
  /** 시뮬레이션 리밸런싱분석 - 리밸런싱 이력 */
  rebalancingHistory?: Maybe<RebalancingHistory>;
  /** 시뮬레이션 리밸런싱분석 - 종목구성 (리스트) */
  rebalancingPositionList?: Maybe<RebalancingPositionList>;
  /** 시뮬레이션 리밸런싱분석 - 종목구성 (트리맵) */
  rebalancingPositionTreemap?: Maybe<RebalancingPositionTreemap>;
  /** 시뮬레이션 수익분석 - 위험평가지표 */
  riskAssessmentIndex?: Maybe<RiskAssessmentIndex>;
  /** 종목 검색 */
  searchHoldings?: Maybe<SearchHoldings>;
  /** 테마 그룹 검색 */
  searchThemeGroups?: Maybe<ThemeGroups>;
  searchThemeStrategy?: Maybe<ThemeStrategies>;
  sectors?: Maybe<Sectors>;
  strategies?: Maybe<StrategyConnection>;
  strategiesWithPaging?: Maybe<StrategiesWithPaging>;
  strategy?: Maybe<Strategy>;
  strategyStyle?: Maybe<StrategyStyle>;
  /** 스타일 팩터 (간편투자 팩터) 조회  */
  styleFactors?: Maybe<StyleFactors>;
  /** 테마 업데이트 반영일, unixtimestamp milliseconds */
  themeCmUpdateScheduleDate?: Maybe<Scalars['Float']['output']>;
  /** 테마그룹 상세 조회 */
  themeGroup?: Maybe<ThemeGroup>;
  /** 테마그룹 리스트 조회 */
  themeGroups?: Maybe<ThemeGroups>;
  /** 유니버스 프리셋 조회 */
  universePresets?: Maybe<UniversePresets>;
  universes?: Maybe<Universes>;
  /** 종목 제외 후 종목리스트 조회 */
  volumePosition?: Maybe<Holdings>;
};


export type QueryAdminUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCheckDuplicateAdminUserUidArgs = {
  uid: Scalars['String']['input'];
};


export type QueryCheckDuplicateStrategyNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryCheckDuplicateStrategyThemeNameArgs = {
  displayThemeName: Scalars['String']['input'];
  themeSrc: ThemeSrcEnum;
  universeCountry?: InputMaybe<UniverseCountryEnum>;
};


export type QueryCheckDuplicateThemeGroupNameArgs = {
  country?: InputMaybe<UniverseCountryEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckExceededMaxCntOrganizationArgs = {
  organizationName: Scalars['String']['input'];
};


export type QueryCumulativeReturnArgs = {
  benchmark: UniverseEnum;
  interval: IntervalEnum;
  period?: InputMaybe<PeriodEnum>;
  strategyId: Scalars['ID']['input'];
  universes?: InputMaybe<Array<InputMaybe<UniverseEnum>>>;
};


export type QueryDetailedMyStrategyArgs = {
  id: Scalars['ID']['input'];
  simulationType: SimulationTypeEnum;
};


export type QueryDetailedStrategyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDrawdownArgs = {
  benchmark: UniverseEnum;
  interval: IntervalEnum;
  period?: InputMaybe<PeriodEnum>;
  strategyId: Scalars['ID']['input'];
  universes?: InputMaybe<Array<InputMaybe<UniverseEnum>>>;
};


export type QueryExposureArgs = {
  displayCnt?: InputMaybe<Scalars['Int']['input']>;
  strategyId: Scalars['ID']['input'];
};


export type QueryFactorsArgs = {
  strategyId?: InputMaybe<Scalars['ID']['input']>;
  universePreset?: InputMaybe<UniversePresetEnum>;
};


export type QueryGetStrategyChangeHoldingArgs = {
  country: UniverseCountryEnum;
  startDt: Scalars['Float']['input'];
  strategyId: Scalars['Int']['input'];
};


export type QueryGetStrategyCumulativeReturnAllArgs = {
  category?: InputMaybe<Array<StrategyCategoryEnum>>;
  country: UniverseCountryEnum;
  endDt?: InputMaybe<Scalars['Float']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  startDt?: InputMaybe<Scalars['Float']['input']>;
  themeSrc?: InputMaybe<Array<ThemeSrcEnum>>;
};


export type QueryGetStrategyCumulativeReturnByPeriodArgs = {
  category?: InputMaybe<Array<StrategyCategoryEnum>>;
  country: UniverseCountryEnum;
  endDt: Scalars['Float']['input'];
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  startDt: Scalars['Float']['input'];
  themeSrc?: InputMaybe<Array<ThemeSrcEnum>>;
};


export type QueryGetStrategyInfoArgs = {
  country: UniverseCountryEnum;
  prevCategory: Scalars['String']['input'];
  startDt: Scalars['Float']['input'];
};


export type QueryGetStrategyOptimizationCumulativeReturnAllArgs = {
  category?: InputMaybe<Array<StrategyCategoryEnum>>;
  country: UniverseCountryEnum;
  endDt?: InputMaybe<Scalars['Float']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  startDt?: InputMaybe<Scalars['Float']['input']>;
  themeSrc?: InputMaybe<Array<ThemeSrcEnum>>;
};


export type QueryGetStrategyOptimizationCumulativeReturnByPeriodArgs = {
  category?: InputMaybe<Array<StrategyCategoryEnum>>;
  country: UniverseCountryEnum;
  endDt: Scalars['Float']['input'];
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  startDt: Scalars['Float']['input'];
  themeSrc?: InputMaybe<Array<ThemeSrcEnum>>;
};


export type QueryGetStrategySummaryCountArgs = {
  country: UniverseCountryEnum;
  startDt: Scalars['Float']['input'];
};


export type QueryGetStrategySummaryCountAllArgs = {
  country: UniverseCountryEnum;
};


export type QueryGetStrategySummaryCountByPeriodArgs = {
  country: UniverseCountryEnum;
  endDt: Scalars['Float']['input'];
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  startDt: Scalars['Float']['input'];
};


export type QueryHoldingPositionArgs = {
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  strategyId: Scalars['ID']['input'];
};


export type QueryHoldingPositionAllArgs = {
  strategyId: Scalars['ID']['input'];
  universes?: InputMaybe<Array<InputMaybe<UniverseEnum>>>;
};


export type QueryHoldingsArgs = {
  simulationOptionScreening?: InputMaybe<SimulationOptionScreeningInput>;
  strategyId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIsBacktestDataArgs = {
  myStrategyId: Scalars['ID']['input'];
};


export type QueryKbPickHistoriesArgs = {
  country?: UniverseCountryEnum;
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryKbPickHistoryStrategiesArgs = {
  kbPickHistoryId: Scalars['ID']['input'];
};


export type QueryKbPicksArgs = {
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
};


export type QueryLastTradingDateArgs = {
  country?: InputMaybe<UniverseCountryEnum>;
};


export type QueryMyCumulativeReturnArgs = {
  benchmark: UniverseEnum;
  interval: IntervalEnum;
  myStrategyId: Scalars['ID']['input'];
  period?: InputMaybe<PeriodEnum>;
  simulationType: SimulationTypeEnum;
};


export type QueryMyDrawdownArgs = {
  benchmark: UniverseEnum;
  interval: IntervalEnum;
  myStrategyId: Scalars['ID']['input'];
  period?: InputMaybe<PeriodEnum>;
};


export type QueryMyExposureArgs = {
  displayCnt?: InputMaybe<Scalars['Int']['input']>;
  myStrategyId: Scalars['ID']['input'];
  simulationType: SimulationTypeEnum;
};


export type QueryMyFactorsArgs = {
  myStrategyId: Scalars['ID']['input'];
  universePreset?: InputMaybe<UniversePresetEnum>;
};


export type QueryMyHoldingPositionArgs = {
  myStrategyId: Scalars['ID']['input'];
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyHoldingPositionAllArgs = {
  myStrategyId: Scalars['ID']['input'];
  simulationType: SimulationTypeEnum;
};


export type QueryMyHoldingsArgs = {
  myStrategyId: Scalars['ID']['input'];
  simulationOptionScreening?: InputMaybe<SimulationOptionScreeningInput>;
};


export type QueryMyPeriodReturnArgs = {
  benchmark: UniverseEnum;
  interval: IntervalEnum;
  myStrategyId: Scalars['ID']['input'];
};


export type QueryMyRebalancingHistoryArgs = {
  displayCnt?: InputMaybe<Scalars['Int']['input']>;
  myStrategyId: Scalars['ID']['input'];
  period?: InputMaybe<PeriodEnum>;
  simulationType: SimulationTypeEnum;
};


export type QueryMyRebalancingPositionListArgs = {
  myStrategyId: Scalars['ID']['input'];
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  yearMonth: Scalars['String']['input'];
};


export type QueryMyRebalancingPositionTreemapArgs = {
  myStrategyId: Scalars['ID']['input'];
  yearMonth: Scalars['String']['input'];
};


export type QueryMyRiskAssessmentIndexArgs = {
  benchmark: UniverseEnum;
  myStrategyId: Scalars['ID']['input'];
  simulationType: SimulationTypeEnum;
};


export type QueryMySectorsArgs = {
  myStrategyId: Scalars['ID']['input'];
};


export type QueryMyStrategiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<StrategyCategoryEnum>;
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderType?: InputMaybe<MyStrategyOrderType>;
  status?: InputMaybe<StrategyStatusEnum>;
};


export type QueryMyStrategyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMyStrategyBlacklistArgs = {
  myStrategyId: Scalars['ID']['input'];
};


export type QueryMyStrategyByPortfolioIdArgs = {
  portfolioId: Scalars['String']['input'];
};


export type QueryMyStrategyStyleArgs = {
  myStrategyId: Scalars['ID']['input'];
  simulationType: SimulationTypeEnum;
};


export type QueryMyStyleFactorsArgs = {
  myStrategyId: Scalars['ID']['input'];
};


export type QueryMyUniversePresetsArgs = {
  myStrategyId: Scalars['ID']['input'];
};


export type QueryMyVolumePositionArgs = {
  baseHoldings?: InputMaybe<Array<Scalars['String']['input']>>;
  blacklist: Array<Scalars['String']['input']>;
  booksize: Scalars['Float']['input'];
  firstHoldings: Array<Scalars['String']['input']>;
  myStrategyId: Scalars['ID']['input'];
  optimization: StrategyOptimizationEnum;
  rebalancing?: InputMaybe<StrategyRebalancingOptionEnum>;
  universePreset?: InputMaybe<UniversePresetEnum>;
  whitelist: Array<WhitelistInputItem>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPeriodReturnArgs = {
  benchmark: UniverseEnum;
  interval: IntervalEnum;
  strategyId: Scalars['ID']['input'];
  universes?: InputMaybe<Array<InputMaybe<UniverseEnum>>>;
};


export type QueryRebalancingHistoryArgs = {
  displayCnt?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<PeriodEnum>;
  strategyId: Scalars['ID']['input'];
};


export type QueryRebalancingPositionListArgs = {
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  strategyId: Scalars['ID']['input'];
  yearMonth: Scalars['String']['input'];
};


export type QueryRebalancingPositionTreemapArgs = {
  strategyId: Scalars['ID']['input'];
  yearMonth: Scalars['String']['input'];
};


export type QueryRiskAssessmentIndexArgs = {
  benchmark: UniverseEnum;
  strategyId: Scalars['ID']['input'];
  universes?: InputMaybe<Array<InputMaybe<UniverseEnum>>>;
};


export type QuerySearchHoldingsArgs = {
  country?: InputMaybe<UniverseCountryEnum>;
  keyword: Scalars['String']['input'];
};


export type QuerySearchThemeGroupsArgs = {
  country?: InputMaybe<UniverseCountryEnum>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ThemeGroupStatusEnum>;
};


export type QuerySearchThemeStrategyArgs = {
  country?: UniverseCountryEnum;
  keyword: Scalars['String']['input'];
};


export type QueryStrategiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<StrategyCategoryEnum>;
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
  endDate?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isKbPick?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderMethod?: InputMaybe<StrategyOrderMethod>;
  orderPeriodReturn?: InputMaybe<StrategyOrderPeriodReturn>;
  startDate?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Array<InputMaybe<StrategyStatusEnum>>>;
  themeGroup?: InputMaybe<Array<Scalars['ID']['input']>>;
  themeSrc?: InputMaybe<Array<ThemeSrcEnum>>;
  universePreset?: InputMaybe<UniversePresetEnum>;
};


export type QueryStrategiesWithPagingArgs = {
  category?: InputMaybe<StrategyCategoryEnum>;
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
  endDate?: InputMaybe<Scalars['Float']['input']>;
  isKbPick?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderType?: InputMaybe<StrategyOrderType>;
  pageNo?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Array<InputMaybe<StrategyStatusEnum>>>;
  themeGroup?: InputMaybe<Array<Scalars['ID']['input']>>;
  themeSrc?: InputMaybe<Array<ThemeSrcEnum>>;
  universePreset?: InputMaybe<UniversePresetEnum>;
};


export type QueryStrategyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStrategyStyleArgs = {
  strategyId: Scalars['ID']['input'];
};


export type QueryStyleFactorsArgs = {
  country?: InputMaybe<UniverseCountryEnum>;
};


export type QueryThemeCmUpdateScheduleDateArgs = {
  country?: UniverseCountryEnum;
};


export type QueryThemeGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThemeGroupsArgs = {
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
  status: Array<ThemeGroupStatusEnum>;
};


export type QueryUniversePresetsArgs = {
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
};


export type QueryUniversesArgs = {
  countries?: InputMaybe<Array<UniverseCountryEnum>>;
};


export type QueryVolumePositionArgs = {
  baseHoldings?: InputMaybe<Array<Scalars['String']['input']>>;
  blacklist: Array<Scalars['String']['input']>;
  booksize: Scalars['Float']['input'];
  firstHoldings: Array<Scalars['String']['input']>;
  optimization: StrategyOptimizationEnum;
  rebalancing?: InputMaybe<StrategyRebalancingOptionEnum>;
  strategyId: Scalars['ID']['input'];
  universePreset?: InputMaybe<UniversePresetEnum>;
  whitelist: Array<WhitelistInputItem>;
};

export type RebalancingHistory = {
  __typename?: 'RebalancingHistory';
  errors?: Maybe<Array<Maybe<Error>>>;
  rebalancingHistory?: Maybe<RebalancingHistoryType>;
};

export type RebalancingHistoryItem = {
  __typename?: 'RebalancingHistoryItem';
  /** 현금 정보 */
  cash?: Maybe<CashItem>;
  holdings?: Maybe<Array<Maybe<WeightItem>>>;
  ts?: Maybe<Scalars['Float']['output']>;
};

export type RebalancingHistoryType = {
  __typename?: 'RebalancingHistoryType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 리밸런싱 이력 정보 */
  info?: Maybe<Array<Maybe<RebalancingHistoryItem>>>;
  /** 리밸런싱 주기 */
  rebalancing?: Maybe<StrategyRebalancingOptionEnum>;
};

export type RebalancingHoldingItem = {
  __typename?: 'RebalancingHoldingItem';
  /** 매수/매도 */
  buySell: BuySellEnum;
  holdingInfo?: Maybe<HoldingPositionItem>;
  /** 수익률 */
  returnRate?: Maybe<Scalars['Float']['output']>;
};

export type RebalancingInfo = {
  __typename?: 'RebalancingInfo';
  /** 리밸런싱 횟수 */
  cnt?: Maybe<Scalars['Int']['output']>;
  /** 최신 리밸런싱 일자 */
  recentTs?: Maybe<Scalars['Float']['output']>;
};

export type RebalancingPositionList = {
  __typename?: 'RebalancingPositionList';
  errors?: Maybe<Array<Maybe<Error>>>;
  rebalancingPositionList?: Maybe<RebalancingPositionListType>;
};

export type RebalancingPositionListType = {
  __typename?: 'RebalancingPositionListType';
  position?: Maybe<Array<Maybe<RebalancingHoldingItem>>>;
  /** 전체 컨텐츠 수 */
  totalCount: Scalars['Int']['output'];
  /** 전체 페이지 수 */
  totalPage: Scalars['Int']['output'];
};

export type RebalancingPositionTreemap = {
  __typename?: 'RebalancingPositionTreemap';
  errors?: Maybe<Array<Maybe<Error>>>;
  rebalancingPositionTreemap?: Maybe<RebalancingPositionTreemapType>;
};

export type RebalancingPositionTreemapType = {
  __typename?: 'RebalancingPositionTreemapType';
  holdings?: Maybe<Array<Maybe<WeightItem>>>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type ReorderThemeGroups = {
  __typename?: 'ReorderThemeGroups';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type ReorderThemeGroupsInput = {
  /** ThemeGroup ID */
  id: Scalars['ID']['input'];
  /** 재정렬 순서 */
  ordering: Scalars['Int']['input'];
};

export type RepresentativeProduct = {
  __typename?: 'RepresentativeProduct';
  /** 종목코드 */
  code: Scalars['String']['output'];
  /** 종목명 */
  name: Scalars['String']['output'];
};

export type ReturnChartItem = {
  __typename?: 'ReturnChartItem';
  /** 벤치마크 수익률 */
  benchmark?: Maybe<ReturnItem>;
  /** 전략 수익률 */
  strategy?: Maybe<ReturnItem>;
  /** unixtimestamp milliseconds */
  ts: Scalars['Float']['output'];
};

export type ReturnInfoItem = {
  __typename?: 'ReturnInfoItem';
  /** 벤치마크 수익률 */
  benchmark?: Maybe<ReturnItem>;
  /** 전략 수익률 */
  strategy?: Maybe<ReturnItem>;
};

export type ReturnItem = {
  __typename?: 'ReturnItem';
  /** 항목명 */
  name: Scalars['String']['output'];
  /** 항목값 */
  value?: Maybe<Scalars['Float']['output']>;
};

export type ReturnSummaryType = {
  __typename?: 'ReturnSummaryType';
  /** 연평균 수익률(%) */
  annualAvgReturn?: Maybe<Scalars['Float']['output']>;
  /** 연평균 변동성(%) */
  annualAvgVolatility?: Maybe<Scalars['Float']['output']>;
  /** 누적수익률(%) */
  cumulative?: Maybe<Scalars['Float']['output']>;
  /** mdd(%) */
  mdd?: Maybe<Scalars['Float']['output']>;
  /** 1개월 수익률(%) */
  month1?: Maybe<Scalars['Float']['output']>;
  /** 3개월 수익률(%) */
  month3?: Maybe<Scalars['Float']['output']>;
  /** 6개월 수익률(%) */
  month6?: Maybe<Scalars['Float']['output']>;
  /** 샤프지수 */
  sharpe?: Maybe<Scalars['Float']['output']>;
  /** 변동성(%) */
  volatility?: Maybe<Scalars['Float']['output']>;
};

export type RiskAssessmentEtcItem = {
  __typename?: 'RiskAssessmentEtcItem';
  /** 초과 수익률 */
  excessReturn?: Maybe<Scalars['Float']['output']>;
  /** 정보비율 */
  infoRatio?: Maybe<Scalars['Float']['output']>;
  /** 추적오차(%) */
  trackingError?: Maybe<Scalars['Float']['output']>;
};

export type RiskAssessmentIndex = {
  __typename?: 'RiskAssessmentIndex';
  errors?: Maybe<Array<Maybe<Error>>>;
  /** 위험평가지표 */
  riskAssessmentIndex?: Maybe<RiskAssessmentIndexType>;
};

export type RiskAssessmentIndexType = {
  __typename?: 'RiskAssessmentIndexType';
  /** 위험평가지표 정보 */
  info?: Maybe<RiskAssessmentInfoItem>;
};

export type RiskAssessmentInfoItem = {
  __typename?: 'RiskAssessmentInfoItem';
  /** 벤치마크 위험평가지표 */
  benchmark?: Maybe<RiskAssessmentItem>;
  /** 기타 위험평가지표 */
  etc?: Maybe<RiskAssessmentEtcItem>;
  /** 전략 위험평가지표 */
  strategy?: Maybe<RiskAssessmentItem>;
};

export type RiskAssessmentItem = {
  __typename?: 'RiskAssessmentItem';
  /** 연평균수익률(%) */
  annualAvgReturn?: Maybe<Scalars['Float']['output']>;
  /** 연평균변동성(%) */
  annualAvgVolatility?: Maybe<Scalars['Float']['output']>;
  /** 누적수익률(%) */
  cumulative?: Maybe<Scalars['Float']['output']>;
  /** 환율적용된 누적수익률(%) */
  exchangeCumulative?: Maybe<Scalars['Float']['output']>;
  /** MDD(%) */
  mdd?: Maybe<Scalars['Float']['output']>;
  /** 항목명 */
  name: Scalars['String']['output'];
  /** 샤프지수(%) */
  sharpe?: Maybe<Scalars['Float']['output']>;
  /** 변동성(%) */
  volatility?: Maybe<Scalars['Float']['output']>;
};

export enum RoleEnum {
  /** 일반회원 */
  General = 'GENERAL',
  /** 구독회원, */
  Subscription = 'SUBSCRIPTION'
}

export type SaveKbPicks = {
  __typename?: 'SaveKbPicks';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type SaveMyStrategy = {
  __typename?: 'SaveMyStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  myStrategyId?: Maybe<Scalars['ID']['output']>;
};

export type SaveThemeGroup = {
  __typename?: 'SaveThemeGroup';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type SaveThemeGroupInput = {
  /** 국가 필터, default: DOMESTIC */
  country?: InputMaybe<UniverseCountryEnum>;
  /** 테마 그룹 ID (추가 시 빈값, 수정 시 값 필수) */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** 테마 그룹명 */
  name: Scalars['String']['input'];
  /** 상태값 */
  status: ThemeGroupStatusEnum;
  /** 테마그룹 전략 ID 리스트 */
  themeGroupStrategies: Array<ThemeGroupStrategyInput>;
};

export type SearchHoldings = {
  __typename?: 'SearchHoldings';
  errors?: Maybe<Array<Maybe<Error>>>;
  searchHoldings?: Maybe<SearchHoldingsType>;
};

export type SearchHoldingsType = {
  __typename?: 'SearchHoldingsType';
  holdings?: Maybe<Array<Maybe<HoldingPositionItem>>>;
};

export enum SectorEnum {
  /** 통신 서비스 */
  Communications = 'COMMUNICATIONS',
  /** 임의소비재 */
  ConsumerDiscretionary = 'CONSUMER_DISCRETIONARY',
  /** 필수소비재 */
  ConsumerStaples = 'CONSUMER_STAPLES',
  /** 에너지 */
  Energy = 'ENERGY',
  /** 금융 */
  Financials = 'FINANCIALS',
  /** 헬스케어 */
  HealthCare = 'HEALTH_CARE',
  /** 산업재 */
  Industrials = 'INDUSTRIALS',
  /** 정보기술 */
  InformationTechnology = 'INFORMATION_TECHNOLOGY',
  /** 소재 */
  Materials = 'MATERIALS',
  /** 부동산 */
  RealEstate = 'REAL_ESTATE',
  /** 미분류 */
  Unclassified = 'UNCLASSIFIED',
  /** 유틸리티 */
  Utilities = 'UTILITIES'
}

/** 섹터/산업 전략 */
export type SectorIndustryStrategyType = Node & {
  __typename?: 'SectorIndustryStrategyType';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 블랙리스트 */
  blacklist: Array<Scalars['String']['output']>;
  /** 전략카테고리 */
  category: StrategyCategoryEnum;
  /** 등록일, unixtimestamp milliseconds */
  createdAt: Scalars['Float']['output'];
  /** 소개글 */
  description: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 업종의 이미지 */
  img: Scalars['String']['output'];
  /** 산업명 */
  industry: Scalars['String']['output'];
  /** 전략명 */
  name: Scalars['String']['output'];
  /**
   * 수익률 정보들
   * @deprecated 벤치마크 수익률 정보가 포함된 return_summary_v2 필드 추가
   */
  returnSummary?: Maybe<ReturnSummaryType>;
  /** 수익률 정보들 */
  returnSummaryV2?: Maybe<StrategyReturnSummaryType>;
  /** 섹터명 */
  sector: SectorEnum;
  /** 짧은 소개글 */
  shortDescription: Scalars['String']['output'];
  /** 시뮬레이션 옵션 */
  simulationOption?: Maybe<SimulationOptionType>;
  /** 전략 상태 */
  status: StrategyStatusEnum;
  /** 누적 이용자 수 */
  totalUsesCnt: Scalars['Int']['output'];
  /** 유니버스 */
  universe: UniverseType;
  /** 유니버스 프리셋 */
  universePreset: UniversePresetEnum;
};

export type SectorIndustrySummaryItem = {
  __typename?: 'SectorIndustrySummaryItem';
  /** 산업 리스트 */
  industries?: Maybe<Array<Maybe<IndustryEnum>>>;
  /** 산업명 리스트 */
  industriesName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 전체선택 여부 */
  isSelectAll?: Maybe<Scalars['Boolean']['output']>;
  /** 섹터 */
  sector?: Maybe<SectorEnum>;
  /** 섹터명 */
  sectorName?: Maybe<Scalars['String']['output']>;
};

export type SectorIndustrySummaryType = {
  __typename?: 'SectorIndustrySummaryType';
  info?: Maybe<Array<Maybe<SectorIndustrySummaryItem>>>;
  /** 선택된 산업 수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

export type SectorType = {
  __typename?: 'SectorType';
  /** 섹터안의 업종 */
  industries?: Maybe<Array<Maybe<IndustryItem>>>;
  /** 섹터명 */
  name: Scalars['String']['output'];
  /** 섹터 */
  sector: SectorEnum;
};

export type Sectors = {
  __typename?: 'Sectors';
  errors?: Maybe<Array<Maybe<Error>>>;
  sectors?: Maybe<Array<Maybe<SectorType>>>;
};

export type SignOn = {
  __typename?: 'SignOn';
  errors?: Maybe<Array<Maybe<Error>>>;
  token: Scalars['String']['output'];
};

export type SignUp = {
  __typename?: 'SignUp';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type SimulationOptionInput = {
  /** 관리종목 제외 여부 */
  excludeAdministration: Scalars['Boolean']['input'];
  /** 거래대금 제외 금액 */
  marketCapLimit: StrategyMarketCapEnum;
  /** 최적화 기준 */
  optimization: StrategyOptimizationEnum;
  /** 리밸런싱 옵션 (리밸런싱 없음 = null) */
  rebalancing?: InputMaybe<StrategyRebalancingOptionEnum>;
  /** 시작일, unixtimestamp */
  startDate: Scalars['Float']['input'];
  /** 시가총액 제외 % */
  tradingAmountLimit: StrategyAmountEnum;
};

export type SimulationOptionScreeningInput = {
  /** 제외한 종목 ccid */
  blacklist: Array<Scalars['String']['input']>;
  /** 투자금액 */
  booksize: Scalars['Float']['input'];
  /** 관리종목 제외 여부 */
  excludeAdministration?: InputMaybe<Scalars['Boolean']['input']>;
  /** 선택한 팩터 List */
  factors: Array<FactorInputItem>;
  /** 선택한 산업 List */
  industries?: InputMaybe<Array<IndustryEnum>>;
  /** 거래대금 제외 금액 */
  marketCapLimit?: InputMaybe<StrategyMarketCapEnum>;
  /** 최적화 기준 */
  optimization: StrategyOptimizationEnum;
  /** 리밸런싱 옵션 */
  rebalancing?: InputMaybe<StrategyRebalancingOptionEnum>;
  /** 시작일, unixtimestamp */
  startDate: Scalars['Float']['input'];
  /** 시가총액 제외 % */
  tradingAmountLimit?: InputMaybe<StrategyAmountEnum>;
  /** 선택한 유니버스 프리셋 */
  universePreset?: InputMaybe<UniversePresetEnum>;
  /** 추가한 종목 ccid, 비중 */
  whitelist: Array<WhitelistInputItem>;
};

export type SimulationOptionType = {
  __typename?: 'SimulationOptionType';
  /** 투자금액 */
  booksize: Scalars['Float']['output'];
  /** 관리종목 제외 가능 */
  excludeAdministration: Scalars['Boolean']['output'];
  /** 시가총액 제한 */
  marketCapLimit: StrategyMarketCapEnum;
  /** 최적화 기준 */
  optimization: StrategyOptimizationEnum;
  /** 리밸런싱 옵션 */
  rebalancing?: Maybe<StrategyRebalancingOptionEnum>;
  /** 시작일, unixtimestamp */
  startDate: Scalars['Float']['output'];
  /** 거래대금 제한 */
  tradingAmountLimit: StrategyAmountEnum;
};

export enum SimulationTypeEnum {
  /** 사용자 편집 > 백테스트 결과 */
  All = 'ALL',
  /** 전략보관함 > 백테스트 결과 */
  Backtest = 'BACKTEST',
  /** 전략보관함 > 모의투자 */
  Forwardtest = 'FORWARDTEST'
}

export type Strategies = {
  __typename?: 'Strategies';
  strategies?: Maybe<Array<Maybe<StrategyUnion>>>;
  /** 총 컨텐츠 수 */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /** 총 페이지 수 */
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type StrategiesWithPaging = {
  __typename?: 'StrategiesWithPaging';
  errors?: Maybe<Array<Maybe<Error>>>;
  strategies?: Maybe<Strategies>;
};

export type Strategy = {
  __typename?: 'Strategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  strategy?: Maybe<StrategyUnion>;
};

export enum StrategyAmountEnum {
  /** 10억이하 제외 */
  Billion = 'BILLION',
  /** 5억이하 제외 */
  FiveHundred = 'FIVE_HUNDRED',
  /** 1억 5천이하 제외 */
  OneFifty = 'ONE_FIFTY',
  Zero = 'ZERO'
}

export enum StrategyCategoryEnum {
  /** DIY 전략 */
  Diy = 'DIY',
  /** EMP 전략 */
  Emp = 'EMP',
  /** 대가들의 전략 */
  Master = 'MASTER',
  /** 섹터/산업 전략 */
  SectorIndustry = 'SECTOR_INDUSTRY',
  /** 테마 전략 */
  Theme = 'THEME'
}

export type StrategyConnection = {
  __typename?: 'StrategyConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StrategyEdge>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

export type StrategyCumulativeReturnListType = {
  __typename?: 'StrategyCumulativeReturnListType';
  /** 전략타입 */
  category?: Maybe<Array<Maybe<StrategyCategoryEnum>>>;
  /** 국가 필터 */
  country?: Maybe<UniverseCountryEnum>;
  /** 종료일자 */
  endDt?: Maybe<Scalars['Float']['output']>;
  /** 오류 메시지 */
  errorMessage?: Maybe<Scalars['String']['output']>;
  list?: Maybe<Array<Maybe<StrategyCumulativeReturnType>>>;
  /** 페이지 번호 */
  pageNo?: Maybe<Scalars['Int']['output']>;
  /** 출력 개수 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 전략명 검색 */
  searchName?: Maybe<Scalars['String']['output']>;
  /** 시작일자 */
  startDt?: Maybe<Scalars['Float']['output']>;
  /** 제공사 */
  themeSrc?: Maybe<Array<Maybe<ThemeSrcEnum>>>;
  /** 총 데이터 개수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

/** ## 전략 + 수익률 정보 */
export type StrategyCumulativeReturnType = {
  __typename?: 'StrategyCumulativeReturnType';
  /** 참조 수익률 */
  benchmarkReturnValue?: Maybe<Scalars['Float']['output']>;
  /** 전략구분 */
  category?: Maybe<StrategyCategoryEnum>;
  /** 최초 생성일 */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** 전략 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 보유 종목 리스트 */
  holdings?: Maybe<Array<Maybe<StrategyHoldingsType>>>;
  /** 종목 수 */
  holdingsCnt?: Maybe<Scalars['Int']['output']>;
  /** 프리셋 최적화 기준 */
  optimization?: Maybe<StrategyOptimizationEnum>;
  /** 초과 수익률 */
  overReturnValue?: Maybe<Scalars['Float']['output']>;
  /** 전략 상태 */
  status?: Maybe<StrategyStatusEnum>;
  /** 전략 고유번호 */
  strategyId?: Maybe<Scalars['Int']['output']>;
  /** 전략명 */
  strategyName?: Maybe<Scalars['String']['output']>;
  /** 전략 수익률 */
  strategyReturnValue?: Maybe<Scalars['Float']['output']>;
  /** 제공사 */
  themeSrc?: Maybe<ThemeSrcEnum>;
  /** 참조지수 */
  universeName?: Maybe<UniverseEnum>;
  /** 유니버스 */
  universePreset?: Maybe<UniversePresetEnum>;
  /** 유니버스 이름 */
  universePresetName?: Maybe<Scalars['String']['output']>;
};

/** A Relay edge containing a `Strategy` and its cursor. */
export type StrategyEdge = {
  __typename?: 'StrategyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StrategyUnion>;
};

export type StrategyFactorStyle = {
  __typename?: 'StrategyFactorStyle';
  /** 시장 민감도 */
  beta?: Maybe<StrategyFactorStyleItem>;
  /** 배당 */
  dividend?: Maybe<StrategyFactorStyleItem>;
  /** 수급 */
  liquidity?: Maybe<StrategyFactorStyleItem>;
  /** 성장 */
  momentum?: Maybe<StrategyFactorStyleItem>;
  /** 퀄리티 */
  quality?: Maybe<StrategyFactorStyleItem>;
  /** 시총/자산 */
  size?: Maybe<StrategyFactorStyleItem>;
  /** 어닝 서프라이즈 */
  surprise?: Maybe<StrategyFactorStyleItem>;
  /** 가치 */
  value?: Maybe<StrategyFactorStyleItem>;
  /** 변동성 */
  volatility?: Maybe<StrategyFactorStyleItem>;
};

export type StrategyFactorStyleItem = {
  __typename?: 'StrategyFactorStyleItem';
  /** 스타일 명 */
  name: Scalars['String']['output'];
  /** 스타일 값, range: 0.0 ~ 6.0 */
  value: Scalars['Float']['output'];
};

export type StrategyHoldingsInfoListType = {
  __typename?: 'StrategyHoldingsInfoListType';
  /** 국가 필터 */
  country?: Maybe<UniverseCountryEnum>;
  /** 오류 메시지 */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** 편입 종목 개수 */
  holdingsNewCnt?: Maybe<Scalars['Int']['output']>;
  /** 유지 종목 개수 */
  holdingsOriginCnt?: Maybe<Scalars['Int']['output']>;
  /** 편출 종목 개수 */
  holdingsOutCnt?: Maybe<Scalars['Int']['output']>;
  /** 총 종목 개수 */
  holdingsTotalCnt?: Maybe<Scalars['Int']['output']>;
  list?: Maybe<Array<Maybe<StrategyHoldingsInfoType>>>;
  /** 시작일자 */
  startDt?: Maybe<Scalars['Float']['output']>;
  /** 총 데이터 개수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

export type StrategyHoldingsInfoType = {
  __typename?: 'StrategyHoldingsInfoType';
  /** 종목명(코드) */
  holdings?: Maybe<Scalars['String']['output']>;
  /** 사유 */
  reason?: Maybe<Scalars['String']['output']>;
  /** 상태 */
  status?: Maybe<Scalars['String']['output']>;
};

/** ## 전략 보유 종목 */
export type StrategyHoldingsType = {
  __typename?: 'StrategyHoldingsType';
  /** 종목코드 */
  holdingsCode?: Maybe<Scalars['String']['output']>;
  /** 종목명 */
  holdingsName?: Maybe<Scalars['String']['output']>;
};

export type StrategyInfoListType = {
  __typename?: 'StrategyInfoListType';
  /** 국가필터 */
  country?: Maybe<UniverseCountryEnum>;
  /** 오류 메시지 */
  errorMessage?: Maybe<Scalars['String']['output']>;
  list?: Maybe<Array<Maybe<StrategyInfoType>>>;
  /** 전일대비 구분(ACTIVATED, DEACTIVATED, CHANGE) */
  prevCategory?: Maybe<Scalars['String']['output']>;
  /** 총 데이터 개수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

export type StrategyInfoType = {
  __typename?: 'StrategyInfoType';
  /** 전략구분 */
  category?: Maybe<StrategyCategoryEnum>;
  /** 최초 생성일 */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** 전략 고유번호 */
  strategyId: Scalars['Int']['output'];
  /** 전략명 */
  strategyName?: Maybe<Scalars['String']['output']>;
  /** 제공사 */
  themeSrc?: Maybe<ThemeSrcEnum>;
  /** 유니버스 */
  universePreset?: Maybe<UniversePresetEnum>;
  /** 유니버스 이름 */
  universePresetName?: Maybe<Scalars['String']['output']>;
};

export enum StrategyMarketCapEnum {
  /** 15% 이하 제외 */
  Fifteen = 'FIFTEEN',
  /** 5% 이하 제외 */
  Five = 'FIVE',
  /** 10% 이하 제외 */
  Ten = 'TEN',
  Zero = 'ZERO'
}

export type StrategyOptimizationCumulativeReturnListType = {
  __typename?: 'StrategyOptimizationCumulativeReturnListType';
  /** 전략타입 */
  category?: Maybe<Array<Maybe<StrategyCategoryEnum>>>;
  /** 국가 필터 */
  country?: Maybe<UniverseCountryEnum>;
  /** 종료일자 */
  endDt?: Maybe<Scalars['Float']['output']>;
  /** 오류 메시지 */
  errorMessage?: Maybe<Scalars['String']['output']>;
  list?: Maybe<Array<Maybe<StrategyOptimizationCumulativeReturnType>>>;
  /** 페이지 번호 */
  pageNo?: Maybe<Scalars['Int']['output']>;
  /** 출력 개수 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 전략명 검색 */
  searchName?: Maybe<Scalars['String']['output']>;
  /** 시작일자 */
  startDt?: Maybe<Scalars['Float']['output']>;
  /** 제공사 */
  themeSrc?: Maybe<Array<Maybe<ThemeSrcEnum>>>;
  /** 총 데이터 개수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

/** ## 전략 + 최적화 3종 수익률 정보 */
export type StrategyOptimizationCumulativeReturnType = {
  __typename?: 'StrategyOptimizationCumulativeReturnType';
  /** 참조 수익률 */
  benchmarkReturnValue?: Maybe<Scalars['Float']['output']>;
  /** 전략구분 */
  category?: Maybe<StrategyCategoryEnum>;
  /** 최초 생성일 */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** 전략 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 보유 종목 리스트 */
  holdings?: Maybe<Array<Maybe<StrategyHoldingsType>>>;
  /** 종목 수 */
  holdingsCnt?: Maybe<Scalars['Int']['output']>;
  /** 최적화 3종 수익률 데이터 */
  optValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>;
  /** 프리셋 최적화 기준 */
  optimization?: Maybe<StrategyOptimizationEnum>;
  /** 초과 수익률 */
  overReturnValue?: Maybe<Scalars['Float']['output']>;
  /** 전략 상태 */
  status?: Maybe<StrategyStatusEnum>;
  /** 전략 고유번호 */
  strategyId?: Maybe<Scalars['Int']['output']>;
  /** 전략명 */
  strategyName?: Maybe<Scalars['String']['output']>;
  /** 전략 수익률 */
  strategyReturnValue?: Maybe<Scalars['Float']['output']>;
  /** 제공사 */
  themeSrc?: Maybe<ThemeSrcEnum>;
  /** 참조지수 */
  universeName?: Maybe<UniverseEnum>;
  /** 유니버스 */
  universePreset?: Maybe<UniversePresetEnum>;
  /** 유니버스 이름 */
  universePresetName?: Maybe<Scalars['String']['output']>;
};

export enum StrategyOptimizationEnum {
  /** 동일비중 */
  EqualWeight = 'EQUAL_WEIGHT',
  /** 시가총액 */
  MarketWeight = 'MARKET_WEIGHT',
  /** 위험균형 */
  RiskParity = 'RISK_PARITY'
}

export enum StrategyOrderMethod {
  /** 수익률 높은 순 */
  Cumulative = 'CUMULATIVE',
  /** 수익률 낮은 순 */
  CumulativeAsc = 'CUMULATIVE_ASC',
  /** 가나다 순 */
  Name = 'NAME'
}

export enum StrategyOrderPeriodReturn {
  /** 최근 1개월 */
  Month_1 = 'MONTH_1',
  /** 최근 3개월 */
  Month_3 = 'MONTH_3',
  /** 최근 6개월 */
  Month_6 = 'MONTH_6'
}

export enum StrategyOrderType {
  /** 생성일 내림차순 (최신순) */
  CreatedAt = 'CREATED_AT',
  /** 생성일 오름차순 (오래된순) */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** 수익률 높은순 */
  Cumulative = 'CUMULATIVE',
  /** 수익률 낮은순 */
  CumulativeAsc = 'CUMULATIVE_ASC',
  /** MDD 낮은순 */
  Mdd = 'MDD',
  /** 가나다 순 */
  Name = 'NAME',
  /** 누적 이용자 순 */
  TotalUsesCnt = 'TOTAL_USES_CNT',
  /** 변동성 낮은순 */
  Volatility = 'VOLATILITY'
}

export enum StrategyRebalancingOptionEnum {
  /** 6개월 */
  Half = 'HALF',
  /** 1개월 */
  Month = 'MONTH',
  /** 3개월 */
  Quarter = 'QUARTER'
}

export type StrategyReturnSummaryType = {
  __typename?: 'StrategyReturnSummaryType';
  /** 벤치마크 수익률 정보 */
  benchmark?: Maybe<ReturnSummaryType>;
  /** 프리셋 전략 수익률 정보 */
  strategy?: Maybe<ReturnSummaryType>;
};

export type StrategyReturnType = {
  __typename?: 'StrategyReturnType';
  /** 대표 유니버스 수익률 */
  benchmark?: Maybe<ReturnItem>;
  /** 누적 수익률 */
  cumulative?: Maybe<ReturnItem>;
  /** 6개월 수익률 */
  half?: Maybe<ReturnItem>;
  /** 1개월 수익률 */
  month?: Maybe<ReturnItem>;
  /** 3개월 수익률 */
  quarter?: Maybe<ReturnItem>;
};

export enum StrategyStatusEnum {
  /** 활성화 상태 */
  Activated = 'ACTIVATED',
  ActivatedReservation = 'ACTIVATED_RESERVATION',
  ActivatedUpdating = 'ACTIVATED_UPDATING',
  /** 비활성화 상태 */
  Deactivated = 'DEACTIVATED',
  /** 삭제된 상태 */
  Deleted = 'DELETED',
  /** 편집 상태 */
  Edited = 'EDITED',
  /** 생성중 상태 */
  Inprogress = 'INPROGRESS',
  /** 등록대기중 상태 */
  Pending = 'PENDING'
}

export type StrategyStyle = {
  __typename?: 'StrategyStyle';
  errors?: Maybe<Array<Maybe<Error>>>;
  info?: Maybe<StrategyStyleInfo>;
};

export type StrategyStyleInfo = {
  __typename?: 'StrategyStyleInfo';
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  benchmark?: Maybe<StrategyFactorStyle>;
  /** 벤치마크명 */
  benchmarkName?: Maybe<UniverseEnum>;
  strategy?: Maybe<StrategyFactorStyle>;
  /** 전략명 */
  strategyName?: Maybe<Scalars['String']['output']>;
};

export type StrategySummaryCountListType = {
  __typename?: 'StrategySummaryCountListType';
  /** 국가 필터 */
  country?: Maybe<UniverseCountryEnum>;
  /** 종료일자 */
  endDt?: Maybe<Scalars['Float']['output']>;
  /** 오류 메시지 */
  errorMessage?: Maybe<Scalars['String']['output']>;
  list?: Maybe<Array<Maybe<StrategySummaryCountType>>>;
  /** 페이지 번호 */
  pageNo?: Maybe<Scalars['Int']['output']>;
  /** 출력 개수 */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** 시작일자 */
  startDt?: Maybe<Scalars['Float']['output']>;
  /** 총 데이터 개수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

/** ## 일자별 전략 현황 요약 */
export type StrategySummaryCountType = {
  __typename?: 'StrategySummaryCountType';
  /** 국가필터 */
  country?: Maybe<UniverseCountryEnum>;
  /** 나만의 전략 개수 */
  diyCnt?: Maybe<Scalars['Int']['output']>;
  /** 오류 메시지 */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** 대가들의 전략 개수 */
  masterCnt?: Maybe<Scalars['Int']['output']>;
  /** 전일대비(활성화) */
  prevActivatedCnt?: Maybe<Scalars['Int']['output']>;
  /** 전일대비(비활성화) */
  prevDeactivatedCnt?: Maybe<Scalars['Int']['output']>;
  /** 전일대비(종목변동) */
  prevItemChangeCnt?: Maybe<Scalars['Int']['output']>;
  /** 섹터 전략 개수 */
  sectorCnt?: Maybe<Scalars['Int']['output']>;
  /** 시작일자 */
  startDt?: Maybe<Scalars['Float']['output']>;
  /** 테마전략 개수(KB자산운용) */
  themeKbamCnt?: Maybe<Scalars['Int']['output']>;
  /** 테마전략 개수(KB증권) */
  themeKbsecCnt?: Maybe<Scalars['Int']['output']>;
  /** 테마전략 개수(SNS) */
  themeSnsCnt?: Maybe<Scalars['Int']['output']>;
  /** 테마전략 전체 개수 */
  themeTotalCnt?: Maybe<Scalars['Int']['output']>;
  /** 전략 전체 개수 */
  totalCnt?: Maybe<Scalars['Int']['output']>;
};

export type StrategyUnion = MasterStrategyType | SectorIndustryStrategyType | ThemeStrategyType;

export type StyleFactorItem = {
  __typename?: 'StyleFactorItem';
  /** cm_name */
  cmName: Scalars['String']['output'];
  /** 사용자가 선택한 상,중,하 값 */
  defaultGrade?: Maybe<GradeEnum>;
  /** 팩터 스타일 정보 */
  style?: Maybe<FactorStyleItem>;
};

export type StyleFactorSimpleGrade = {
  __typename?: 'StyleFactorSimpleGrade';
  high?: Maybe<FactorValueItem>;
  low?: Maybe<FactorValueItem>;
  middle?: Maybe<FactorValueItem>;
};

export type StyleFactors = {
  __typename?: 'StyleFactors';
  errors?: Maybe<Array<Maybe<Error>>>;
  styleFactors?: Maybe<StyleFactorsType>;
};

export type StyleFactorsType = {
  __typename?: 'StyleFactorsType';
  /** 약, 중, 강 min, max 정보 */
  simplePrest?: Maybe<StyleFactorSimpleGrade>;
  /** 스타일 팩터 정보 */
  styleFactors?: Maybe<Array<Maybe<StyleFactorItem>>>;
};

export type SyncMyStrategyHoldings = {
  __typename?: 'SyncMyStrategyHoldings';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type ThemeGroup = {
  __typename?: 'ThemeGroup';
  errors?: Maybe<Array<Maybe<Error>>>;
  themeGroup?: Maybe<ThemeGroupType>;
};

export enum ThemeGroupStatusEnum {
  /** 활성화 상태 */
  Activated = 'ACTIVATED',
  /** 비활성화 상태 */
  Deactivated = 'DEACTIVATED'
}

export type ThemeGroupStrategyInput = {
  /** 테마 그룹 전략 ID */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** 전략 ID */
  strategyId: Scalars['ID']['input'];
};

/** 테마그룹전략 */
export type ThemeGroupStrategyType = Node & {
  __typename?: 'ThemeGroupStrategyType';
  /** 테마그룹 전략 등록인 */
  adminUser?: Maybe<AdminUserType>;
  /** 그룹 등록일 (unixtimestamp milliseconds) */
  createdAt?: Maybe<Scalars['Float']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 테마그룹 전략 상세정보 */
  strategy?: Maybe<ThemeStrategyType>;
};

/** 테마그룹 */
export type ThemeGroupType = Node & {
  __typename?: 'ThemeGroupType';
  /** 등록인 정보 */
  adminUser?: Maybe<AdminUserType>;
  /** 등록일 (unixtimestamp milliseconds) */
  createdAt?: Maybe<Scalars['Float']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 테마그룹명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 정렬 순서 */
  ordering?: Maybe<Scalars['Int']['output']>;
  /**
   * 비고
   * @deprecated 기획 변경되면서 사용안하는 비고필드 다음 스키마 정리 때 삭제 예정
   */
  remarks?: Maybe<Scalars['String']['output']>;
  /** 상태값 */
  status?: Maybe<ThemeGroupStatusEnum>;
  /** 테마그룹 전략 리스트 */
  themeGroupStrategies?: Maybe<Array<Maybe<ThemeGroupStrategyType>>>;
};

export type ThemeGroups = {
  __typename?: 'ThemeGroups';
  errors?: Maybe<Array<Maybe<Error>>>;
  themeGroups?: Maybe<Array<Maybe<ThemeGroupType>>>;
};

export type ThemeHolding = {
  __typename?: 'ThemeHolding';
  /** 종목명 */
  name: Scalars['String']['output'];
  /** 종목코드 */
  shortCode: Scalars['String']['output'];
};

export type ThemeHoldingInput = {
  /** 종목명 */
  name: Scalars['String']['input'];
  /** 종목코드 */
  shortCode: Scalars['String']['input'];
};

export enum ThemeSrcEnum {
  /** KB 운용자산 테마 */
  KbAm = 'KB_AM',
  /** KB 증권 테마 */
  KbSec = 'KB_SEC',
  /** 퀀팃테마(=SNS테마) */
  Quantit = 'QUANTIT'
}

export type ThemeStrategies = {
  __typename?: 'ThemeStrategies';
  errors?: Maybe<Array<Maybe<Error>>>;
  themeStrategies?: Maybe<Array<Maybe<ThemeStrategyType>>>;
};

export type ThemeStrategyInput = {
  /** 긴 소개글 */
  description: Scalars['String']['input'];
  /** 테마키워드 */
  displayThemeName: Scalars['String']['input'];
  /** Active 전략 여부 */
  isActiveStrategy: Scalars['Boolean']['input'];
  /** 전략명 */
  name: Scalars['String']['input'];
  /** 짧은 소개글 */
  shortDescription: Scalars['String']['input'];
  /** 시뮬레이션 옵션 */
  simulationOption: SimulationOptionInput;
  /** 전략 상태 */
  status?: InputMaybe<StrategyStatusEnum>;
  /** 포트폴리오 종목 */
  themeHoldings: Array<ThemeHoldingInput>;
  /** 테마출처 */
  themeSrc: ThemeSrcEnum;
  /** 국가 */
  universeCountry?: InputMaybe<UniverseCountryEnum>;
};

export type ThemeStrategyType = Node & {
  __typename?: 'ThemeStrategyType';
  /** 전략 등록자 정보 */
  adminUser?: Maybe<AdminUserType>;
  /** 기준일 */
  baseDate?: Maybe<BaseDate>;
  /** 벤치마크 */
  benchmarks?: Maybe<Array<Maybe<UniverseEnum>>>;
  /** 블랙리스트 */
  blacklist: Array<Scalars['String']['output']>;
  /** 전략카테고리 */
  category: StrategyCategoryEnum;
  /** 등록일, unixtimestamp milliseconds */
  createdAt: Scalars['Float']['output'];
  /** 소개글 */
  description: Scalars['String']['output'];
  /** 테마명 */
  displayThemeName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Active 전략 여부 */
  isActiveStrategy?: Maybe<Scalars['Boolean']['output']>;
  /** 전략명 */
  name: Scalars['String']['output'];
  /**
   * 수익률 정보들
   * @deprecated 벤치마크 수익률 정보가 포함된 return_summary_v2 필드 추가
   */
  returnSummary?: Maybe<ReturnSummaryType>;
  /** 수익률 정보들 */
  returnSummaryV2?: Maybe<StrategyReturnSummaryType>;
  /** 짧은 소개글 */
  shortDescription: Scalars['String']['output'];
  /** 시뮬레이션 옵션 */
  simulationOption?: Maybe<SimulationOptionType>;
  /** 전략 상태 */
  status: StrategyStatusEnum;
  /** 테마 CM 업데이트 반영일, unixtimestamp */
  themeCmUpdateScheduleDate?: Maybe<Scalars['Float']['output']>;
  /** 테마 키워드 추출일, unixtimestamp */
  themeExtractionDate?: Maybe<Scalars['Float']['output']>;
  /** 테마 종목 */
  themeHoldings?: Maybe<Array<Maybe<ThemeHolding>>>;
  /** 테마 출처 */
  themeSrc?: Maybe<ThemeSrcEnum>;
  /** 누적 이용자 수 */
  totalUsesCnt: Scalars['Int']['output'];
  /** 유니버스 */
  universe: UniverseType;
  /** 유니버스 프리셋 */
  universePreset: UniversePresetEnum;
};

export enum UniverseCountryEnum {
  /** 국내 */
  Domestic = 'DOMESTIC',
  /** 미국 */
  Usa = 'USA'
}

export type UniverseCountryType = {
  __typename?: 'UniverseCountryType';
  /** 유니버스 국가 */
  country?: Maybe<UniverseCountryEnum>;
  /** 국가에 포함되는 유니버스들 */
  universes?: Maybe<Array<Maybe<UniverseItem>>>;
};

/** An enumeration. */
export enum UniverseEnum {
  Kosdaq = 'KOSDAQ',
  Kosdaq150 = 'KOSDAQ150',
  Kospi = 'KOSPI',
  Kospi200 = 'KOSPI200',
  Krx300 = 'KRX300',
  Nasdaq100 = 'NASDAQ100',
  Snp500 = 'SNP500'
}

export type UniverseItem = {
  __typename?: 'UniverseItem';
  /** 유니버스 설명글 */
  description?: Maybe<Scalars['String']['output']>;
  /** 유니버스명 */
  name?: Maybe<UniverseEnum>;
};

export enum UniversePresetEnum {
  /** 코스닥 상장기업 */
  Kosdaq = 'KOSDAQ',
  /** 코스닥 상장 대표기업 */
  Kosdaq150 = 'KOSDAQ150',
  /** 코스피 상장기업 */
  Kospi = 'KOSPI',
  /** 코스피 상장 대표기업 */
  Kospi200 = 'KOSPI200',
  /** 한국 상장 대표기업 */
  Kospi200Kosdaq150Krx300 = 'KOSPI200_KOSDAQ150_KRX300',
  /** 한국 상장기업 */
  KospiKosdaq = 'KOSPI_KOSDAQ',
  /** 코스피&코스닥 상장 대표기업 */
  Krx300 = 'KRX300',
  Nasdaq100 = 'NASDAQ100',
  Snp500 = 'SNP500',
  Snp500Nasdaq100 = 'SNP500_NASDAQ100'
}

export type UniversePresetItem = {
  __typename?: 'UniversePresetItem';
  /** 유니버스 프리셋 설명글 */
  description: Scalars['String']['output'];
  /** 사용자에게 보여질 이름 */
  displayName: Scalars['String']['output'];
  /** 사용자가 선택한 유니버스 프리셋 여부 */
  isChecked?: Maybe<Scalars['Boolean']['output']>;
  /** 유니버스 프리셋 이름 */
  name: UniversePresetEnum;
  /** 해당 유니버스 프리셋에 속해 있는 유니버스  */
  universes: Array<Maybe<UniverseEnum>>;
};

export type UniversePresetType = {
  __typename?: 'UniversePresetType';
  /** 유니버스 프리셋 이름 */
  name?: Maybe<Scalars['String']['output']>;
  /** 유니버스 프리셋 */
  universePreset?: Maybe<UniversePresetEnum>;
};

export type UniversePresets = {
  __typename?: 'UniversePresets';
  errors?: Maybe<Array<Maybe<Error>>>;
  universePresets?: Maybe<Array<Maybe<UniversePresetItem>>>;
};

export type UniverseType = {
  __typename?: 'UniverseType';
  /** 유니버스 국가 */
  country?: Maybe<UniverseCountryEnum>;
  /** 유니버스 */
  name?: Maybe<UniverseEnum>;
};

export type Universes = {
  __typename?: 'Universes';
  errors?: Maybe<Array<Maybe<Error>>>;
  universes?: Maybe<Array<Maybe<UniverseCountryType>>>;
};

export type UpdateAdminUser = {
  __typename?: 'UpdateAdminUser';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAdminUserPassword = {
  __typename?: 'UpdateAdminUserPassword';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateKbPickDescription = {
  __typename?: 'UpdateKbPickDescription';
  errors?: Maybe<Array<Maybe<Error>>>;
  kbPick?: Maybe<KbPickType>;
};

export type UpdateKbPickShortDescription = {
  __typename?: 'UpdateKbPickShortDescription';
  errors?: Maybe<Array<Maybe<Error>>>;
  kbPick?: Maybe<KbPickType>;
};

export type UpdateMyStrategyName = {
  __typename?: 'UpdateMyStrategyName';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateSelectedThemeGroupStatus = {
  __typename?: 'UpdateSelectedThemeGroupStatus';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateStrategyStatus = {
  __typename?: 'UpdateStrategyStatus';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateThemeStrategy = {
  __typename?: 'UpdateThemeStrategy';
  errors?: Maybe<Array<Maybe<Error>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type User = {
  __typename?: 'User';
  errors?: Maybe<Array<Maybe<Error>>>;
  user?: Maybe<UserType>;
};

export type UserType = Node & {
  __typename?: 'UserType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** 국내 전략생성 가능여부, True: 전략  생성가능, False: 전략 생성불가능 */
  isStrategyCreationPossible: Scalars['Boolean']['output'];
  /** 미국 전략생성 가능여부, True: 전략  생성가능, False: 전략 생성불가능 */
  isStrategyCreationPossibleUs: Scalars['Boolean']['output'];
  role: RoleEnum;
  uid: Scalars['String']['output'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type WeightItem = {
  __typename?: 'WeightItem';
  /** 항목명 */
  name: Scalars['String']['output'];
  /** 동의어 */
  synonym?: Maybe<Scalars['String']['output']>;
  /** 비중(%) */
  weight: Scalars['Float']['output'];
};

export type WhiteListType = {
  __typename?: 'WhiteListType';
  /** ccid */
  ccid: Scalars['String']['output'];
  /** 추가종목 여부 */
  isAdd: Scalars['Boolean']['output'];
  /** 비중 */
  weight: Scalars['Float']['output'];
};

export type WhitelistInputItem = {
  /** ccid */
  ccid: Scalars['String']['input'];
  /** 추가항목 여부 */
  isAdd: Scalars['Boolean']['input'];
  /** 마지막 수정 여부 */
  isLastEdit: Scalars['Boolean']['input'];
  /** 비중(%) */
  weight: Scalars['Float']['input'];
};

export type SignOnMutationVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type SignOnMutation = { __typename?: 'Mutation', signOn?: { __typename?: 'SignOn', token: string, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type TokenAuthMutationVariables = Exact<{
  uid: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token: string } | null };

export type GetFactorsQueryVariables = Exact<{
  strategyId?: InputMaybe<Scalars['ID']['input']>;
  universePreset?: InputMaybe<UniversePresetEnum>;
}>;


export type GetFactorsQuery = { __typename?: 'Query', factors?: { __typename?: 'Factors', factors?: Array<{ __typename?: 'FactorsType', style?: { __typename?: 'FactorStyleItem', style?: FactorStyleEnum | null, name?: string | null, description?: string | null } | null, factors?: Array<{ __typename?: 'FactorItem', style: FactorStyleEnum, type: string, displayName: string, cmName: string, description?: string | null, min: number, max: number, ignoreNegative: boolean, img: number, comments?: Array<string | null> | null, histogramData?: { __typename?: 'HistogramItem', stickCounts?: Array<number | null> | null, range?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, factorRange?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, low?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, middle?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, high?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null } | null, defaultValueInfo?: { __typename?: 'FactorDefaultValueInfo', isChecked?: boolean | null, min?: number | null, max?: number | null } | null } | null> | null } | null> | null, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type GetSectorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSectorsQuery = { __typename?: 'Query', sectors?: { __typename?: 'Sectors', sectors?: Array<{ __typename?: 'SectorType', sector: SectorEnum, name: string, industries?: Array<{ __typename?: 'IndustryItem', industry: IndustryEnum, name: string, isChecked?: boolean | null } | null> | null } | null> | null, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type GetStrategiesQueryVariables = Exact<{
  category?: InputMaybe<StrategyCategoryEnum>;
  status?: InputMaybe<Array<InputMaybe<StrategyStatusEnum>> | InputMaybe<StrategyStatusEnum>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderMethod?: InputMaybe<StrategyOrderMethod>;
  orderPeriodReturn?: InputMaybe<StrategyOrderPeriodReturn>;
  universePreset?: InputMaybe<UniversePresetEnum>;
  themeSrc?: InputMaybe<Array<ThemeSrcEnum> | ThemeSrcEnum>;
  themeGroup?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  isKbPick?: InputMaybe<Scalars['Boolean']['input']>;
  countries?: InputMaybe<Array<UniverseCountryEnum> | UniverseCountryEnum>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetStrategiesQuery = { __typename?: 'Query', strategies?: { __typename?: 'StrategyConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'StrategyEdge', cursor: string, node?: { __typename: 'MasterStrategyType', id: string, name: string, shortDescription: string, img: string } | { __typename: 'SectorIndustryStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, sector: SectorEnum, industry: string, img: string, totalUsesCnt: number, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | { __typename: 'ThemeStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, themeSrc?: ThemeSrcEnum | null, themeExtractionDate?: number | null, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', mdd?: number | null, annualAvgVolatility?: number | null, month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null } | null } | null>, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type GetStrategyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStrategyQuery = { __typename?: 'Query', strategy?: { __typename?: 'Strategy', strategy?: { __typename: 'MasterStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, img: string, masterFactors?: Array<string | null> | null, masterSrc?: Array<string | null> | null, totalUsesCnt: number, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | { __typename: 'SectorIndustryStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, sector: SectorEnum, industry: string, img: string, totalUsesCnt: number, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | { __typename: 'ThemeStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, totalUsesCnt: number, benchmarks?: Array<UniverseEnum | null> | null, themeSrc?: ThemeSrcEnum | null, themeExtractionDate?: number | null, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', mdd?: number | null, annualAvgVolatility?: number | null, month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | null, errors?: Array<{ __typename?: 'Error', message?: string | null } | null> | null } | null };

export type GetStrategyStyleQueryVariables = Exact<{
  strategyId: Scalars['ID']['input'];
}>;


export type GetStrategyStyleQuery = { __typename?: 'Query', strategyStyle?: { __typename?: 'StrategyStyle', info?: { __typename?: 'StrategyStyleInfo', strategyName?: string | null, benchmarkName?: UniverseEnum | null, strategy?: { __typename?: 'StrategyFactorStyle', size?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, value?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, momentum?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, quality?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, volatility?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, beta?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, dividend?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, surprise?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, liquidity?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null } | null, benchmark?: { __typename?: 'StrategyFactorStyle', size?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, value?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, momentum?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, quality?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, volatility?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, beta?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, dividend?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, surprise?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, liquidity?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null } | null, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type GetStyleFactorsQueryVariables = Exact<{
  country?: InputMaybe<UniverseCountryEnum>;
}>;


export type GetStyleFactorsQuery = { __typename?: 'Query', styleFactors?: { __typename?: 'StyleFactors', styleFactors?: { __typename?: 'StyleFactorsType', simplePrest?: { __typename?: 'StyleFactorSimpleGrade', low?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, middle?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, high?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null } | null, styleFactors?: Array<{ __typename?: 'StyleFactorItem', cmName: string, style?: { __typename?: 'FactorStyleItem', style?: FactorStyleEnum | null, name?: string | null, description?: string | null } | null } | null> | null } | null } | null };

export type GetThemeGroupsQueryVariables = Exact<{
  status: Array<ThemeGroupStatusEnum> | ThemeGroupStatusEnum;
  countries?: InputMaybe<Array<UniverseCountryEnum> | UniverseCountryEnum>;
}>;


export type GetThemeGroupsQuery = { __typename?: 'Query', themeGroups?: { __typename?: 'ThemeGroups', themeGroups?: Array<{ __typename?: 'ThemeGroupType', id: string, name?: string | null, remarks?: string | null, status?: ThemeGroupStatusEnum | null } | null> | null, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type GetUniversePresetsQueryVariables = Exact<{
  countries?: InputMaybe<Array<UniverseCountryEnum> | UniverseCountryEnum>;
}>;


export type GetUniversePresetsQuery = { __typename?: 'Query', universePresets?: { __typename?: 'UniversePresets', universePresets?: Array<{ __typename?: 'UniversePresetItem', name: UniversePresetEnum, displayName: string, description: string, universes: Array<UniverseEnum | null> } | null> | null, errors?: Array<{ __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null } | null> | null } | null };

export type TokenInfoFragment = { __typename?: 'ObtainJSONWebToken', token: string, payload: any, refreshExpiresIn: number };

export type ErrorInfoFragment = { __typename?: 'Error', key: KbError, message?: string | null, field?: string | null, info?: any | null };

export type UserInfoFragment = { __typename?: 'UserType', id: string, uid: string, role: RoleEnum };

export type PageInfoFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null };

export type PositionInfoFragment = { __typename?: 'HoldingPositionItem', ccid: string, name: string, code: string, sector?: SectorEnum | null, industry?: IndustryEnum | null, weight?: number | null, volume?: number | null, price?: number | null, share?: number | null, isAdd?: boolean | null, isWhitelist?: boolean | null };

export type UniverseInfoFragment = { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null };

export type ReturnSummaryTypeInfoFragment = { __typename?: 'ReturnSummaryType', cumulative?: number | null, month1?: number | null, month3?: number | null, month6?: number | null, sharpe?: number | null, volatility?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null };

export type CashItemInfoFragment = { __typename?: 'CashItem', weight?: number | null, price?: number | null };

export type HoldingResInfoFragment = { __typename?: 'HoldingType', baseHoldings?: Array<string | null> | null, holdings?: Array<{ __typename?: 'HoldingPositionItem', ccid: string, name: string, code: string, sector?: SectorEnum | null, industry?: IndustryEnum | null, weight?: number | null, volume?: number | null, price?: number | null, share?: number | null, isAdd?: boolean | null, isWhitelist?: boolean | null } | null> | null, excludeHoldings?: Array<{ __typename?: 'HoldingPositionItem', ccid: string, name: string, code: string, sector?: SectorEnum | null, industry?: IndustryEnum | null, weight?: number | null, volume?: number | null, price?: number | null, share?: number | null, isAdd?: boolean | null, isWhitelist?: boolean | null } | null> | null };

export type FactorValueItemInfoFragment = { __typename?: 'FactorValueItem', min?: number | null, max?: number | null };

export type HistogramItemInfoFragment = { __typename?: 'HistogramItem', stickCounts?: Array<number | null> | null, range?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, factorRange?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, low?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, middle?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, high?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null };

export type FactorItemInfoFragment = { __typename?: 'FactorItem', style: FactorStyleEnum, type: string, displayName: string, cmName: string, description?: string | null, min: number, max: number, ignoreNegative: boolean, img: number, comments?: Array<string | null> | null, histogramData?: { __typename?: 'HistogramItem', stickCounts?: Array<number | null> | null, range?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, factorRange?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, low?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, middle?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, high?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null } | null, defaultValueInfo?: { __typename?: 'FactorDefaultValueInfo', isChecked?: boolean | null, min?: number | null, max?: number | null } | null };

export type FactorsTypeInfoFragment = { __typename?: 'FactorsType', style?: { __typename?: 'FactorStyleItem', style?: FactorStyleEnum | null, name?: string | null, description?: string | null } | null, factors?: Array<{ __typename?: 'FactorItem', style: FactorStyleEnum, type: string, displayName: string, cmName: string, description?: string | null, min: number, max: number, ignoreNegative: boolean, img: number, comments?: Array<string | null> | null, histogramData?: { __typename?: 'HistogramItem', stickCounts?: Array<number | null> | null, range?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, factorRange?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, low?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, middle?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null, high?: { __typename?: 'FactorValueItem', min?: number | null, max?: number | null } | null } | null, defaultValueInfo?: { __typename?: 'FactorDefaultValueInfo', isChecked?: boolean | null, min?: number | null, max?: number | null } | null } | null> | null };

export type MyStrategyInfoFragment = { __typename: 'MyStrategyType', id: string, portfolioId?: string | null, category: StrategyCategoryEnum, name: string, status: StrategyStatusEnum, isSimple: boolean, isActiveKbContract: boolean, isForwardAvailable: boolean, baseStrategyName?: string | null, createdAt: number, strategy?: { __typename: 'MasterStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, img: string, masterFactors?: Array<string | null> | null, masterSrc?: Array<string | null> | null, totalUsesCnt: number, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | { __typename: 'SectorIndustryStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, sector: SectorEnum, industry: string, img: string, totalUsesCnt: number, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | { __typename: 'ThemeStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, totalUsesCnt: number, benchmarks?: Array<UniverseEnum | null> | null, themeSrc?: ThemeSrcEnum | null, themeExtractionDate?: number | null, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', mdd?: number | null, annualAvgVolatility?: number | null, month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null } | null, universePreset: { __typename?: 'UniversePresetType', universePreset?: UniversePresetEnum | null, name?: string | null }, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, simulationOption?: { __typename?: 'SimulationOptionType', booksize: number, startDate: number, optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null, excludeAdministration: boolean, marketCapLimit: StrategyMarketCapEnum, tradingAmountLimit: StrategyAmountEnum } | null, rebalancingInfo?: { __typename?: 'RebalancingInfo', recentTs?: number | null, cnt?: number | null } | null, returnSummary?: { __typename?: 'MyStrategyReturnSummaryType', baseStrategyCumulative?: number | null, benchmarkCumulative?: number | null, forward?: { __typename?: 'MyStrategyReturnSummaryItem', baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, returnSummary?: { __typename?: 'ReturnSummaryType', cumulative?: number | null, month1?: number | null, month3?: number | null, month6?: number | null, sharpe?: number | null, volatility?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null } | null } | null, backtest?: { __typename?: 'MyStrategyReturnSummaryItem', baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, returnSummary?: { __typename?: 'ReturnSummaryType', cumulative?: number | null, month1?: number | null, month3?: number | null, month6?: number | null, sharpe?: number | null, volatility?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null } | null } | null } | null, sectorIndustrySummary?: { __typename?: 'SectorIndustrySummaryType', totalCnt?: number | null, info?: Array<{ __typename?: 'SectorIndustrySummaryItem', sector?: SectorEnum | null, sectorName?: string | null, industries?: Array<IndustryEnum | null> | null, industriesName?: Array<string | null> | null, isSelectAll?: boolean | null } | null> | null } | null, whitelist?: Array<{ __typename?: 'WhiteListType', ccid: string, weight: number, isAdd: boolean } | null> | null };

export type MyStrategyReturnSummaryTypeInfoFragment = { __typename?: 'MyStrategyReturnSummaryType', baseStrategyCumulative?: number | null, benchmarkCumulative?: number | null, forward?: { __typename?: 'MyStrategyReturnSummaryItem', baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, returnSummary?: { __typename?: 'ReturnSummaryType', cumulative?: number | null, month1?: number | null, month3?: number | null, month6?: number | null, sharpe?: number | null, volatility?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null } | null } | null, backtest?: { __typename?: 'MyStrategyReturnSummaryItem', baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, returnSummary?: { __typename?: 'ReturnSummaryType', cumulative?: number | null, month1?: number | null, month3?: number | null, month6?: number | null, sharpe?: number | null, volatility?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null } | null } | null };

export type MyStrategyReturnSummaryItemInfoFragment = { __typename?: 'MyStrategyReturnSummaryItem', baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, returnSummary?: { __typename?: 'ReturnSummaryType', cumulative?: number | null, month1?: number | null, month3?: number | null, month6?: number | null, sharpe?: number | null, volatility?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null } | null };

export type SimulationOptionInfoFragment = { __typename?: 'SimulationOptionType', booksize: number, startDate: number, optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null, excludeAdministration: boolean, marketCapLimit: StrategyMarketCapEnum, tradingAmountLimit: StrategyAmountEnum };

export type SectorIndustrySummaryTypeInfoFragment = { __typename?: 'SectorIndustrySummaryType', totalCnt?: number | null, info?: Array<{ __typename?: 'SectorIndustrySummaryItem', sector?: SectorEnum | null, sectorName?: string | null, industries?: Array<IndustryEnum | null> | null, industriesName?: Array<string | null> | null, isSelectAll?: boolean | null } | null> | null };

export type ThemeStrategiesTypeInfoFragment = { __typename: 'ThemeStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, themeSrc?: ThemeSrcEnum | null, themeExtractionDate?: number | null, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', mdd?: number | null, annualAvgVolatility?: number | null, month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null };

export type ThemeStrategyTypeInfoFragment = { __typename: 'ThemeStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, totalUsesCnt: number, benchmarks?: Array<UniverseEnum | null> | null, themeSrc?: ThemeSrcEnum | null, themeExtractionDate?: number | null, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', mdd?: number | null, annualAvgVolatility?: number | null, month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null };

export type SectorIndustryStrategyTypeInfoFragment = { __typename: 'SectorIndustryStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, sector: SectorEnum, industry: string, img: string, totalUsesCnt: number, universe: { __typename?: 'UniverseType', name?: UniverseEnum | null, country?: UniverseCountryEnum | null }, returnSummary?: { __typename?: 'ReturnSummaryType', month3?: number | null } | null, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null };

export type MasterStrategyListTypeInfoFragment = { __typename: 'MasterStrategyType', id: string, name: string, shortDescription: string, img: string };

export type MasterStrategyTypeInfoFragment = { __typename: 'MasterStrategyType', id: string, category: StrategyCategoryEnum, name: string, description: string, shortDescription: string, status: StrategyStatusEnum, img: string, masterFactors?: Array<string | null> | null, masterSrc?: Array<string | null> | null, totalUsesCnt: number, baseDate?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null, simulationOption?: { __typename?: 'SimulationOptionType', optimization: StrategyOptimizationEnum, rebalancing?: StrategyRebalancingOptionEnum | null } | null };

export type ReturnItemInfoFragment = { __typename?: 'ReturnItem', name: string, value?: number | null };

export type ReturnInfoItemInfoFragment = { __typename?: 'ReturnInfoItem', strategy?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, benchmark?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null };

export type ReturnChartItemInfoFragment = { __typename?: 'ReturnChartItem', ts: number, strategy?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, benchmark?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null };

export type RiskAssessmentItemInfoFragment = { __typename?: 'RiskAssessmentItem', name: string, cumulative?: number | null, volatility?: number | null, sharpe?: number | null, mdd?: number | null, annualAvgReturn?: number | null, annualAvgVolatility?: number | null };

export type RiskAssessmentEtcItemInfoFragment = { __typename?: 'RiskAssessmentEtcItem', excessReturn?: number | null, trackingError?: number | null, infoRatio?: number | null };

export type ReturnRateInfoFragment = { __typename: 'StrategyReturnType', benchmark?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, cumulative?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, month?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, quarter?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, half?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null };

export type DetailedStrategyTypeInfoFragment = { __typename: 'DetailedStrategyType', name: string, description: string, benchmarks?: Array<UniverseEnum | null> | null, returnRate?: { __typename: 'StrategyReturnType', benchmark?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, cumulative?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, month?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, quarter?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, half?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null } | null };

export type DetailedMasterStrategyTypeInfoFragment = { __typename: 'DetailedMasterStrategyType', name: string, description: string, shortDescription: string, factors?: Array<string | null> | null, src?: Array<string | null> | null, img?: string | null, benchmarks?: Array<UniverseEnum | null> | null, returnRate?: { __typename: 'StrategyReturnType', benchmark?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, cumulative?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, month?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, quarter?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, half?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null } | null };

export type StrategyFactorStyleItemInfoFragment = { __typename?: 'StrategyFactorStyleItem', name: string, value: number };

export type StrategyFactorStyleInfoFragment = { __typename?: 'StrategyFactorStyle', size?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, value?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, momentum?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, quality?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, volatility?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, beta?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, dividend?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, surprise?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null, liquidity?: { __typename?: 'StrategyFactorStyleItem', name: string, value: number } | null };

export type BaseDateInfoFragment = { __typename?: 'BaseDate', start?: number | null, end?: number | null };

export type WeightItemInfoFragment = { __typename?: 'WeightItem', name: string, weight: number };

export type MyReturnChartItemInfoFragment = { __typename?: 'MyReturnChartItem', ts: number, myStrategy?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, strategy?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null, benchmark?: { __typename?: 'ReturnItem', name: string, value?: number | null } | null };

export type SectorTypeInfoFragment = { __typename?: 'SectorType', sector: SectorEnum, name: string, industries?: Array<{ __typename?: 'IndustryItem', industry: IndustryEnum, name: string, isChecked?: boolean | null } | null> | null };

export type ForwardSummaryInfoFragment = { __typename?: 'ForwardSummary', investmentAmount?: number | null, valuationAmount?: number | null, gainOrLossValuation?: number | null, gainOrLossExchange?: number | null, period?: { __typename?: 'BaseDate', start?: number | null, end?: number | null } | null };


export const TokenInfoFragmentDoc = `
    fragment TokenInfo on ObtainJSONWebToken {
  token
  payload
  refreshExpiresIn
}
    `;
export const ErrorInfoFragmentDoc = `
    fragment ErrorInfo on Error {
  key
  message
  field
  info
}
    `;
export const UserInfoFragmentDoc = `
    fragment UserInfo on UserType {
  id
  uid
  role
}
    `;
export const PageInfoFragmentDoc = `
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const CashItemInfoFragmentDoc = `
    fragment CashItemInfo on CashItem {
  weight
  price
}
    `;
export const PositionInfoFragmentDoc = `
    fragment PositionInfo on HoldingPositionItem {
  ccid
  name
  code
  sector
  industry
  weight
  volume
  price
  share
  isAdd
  isWhitelist
}
    `;
export const HoldingResInfoFragmentDoc = `
    fragment HoldingResInfo on HoldingType {
  holdings {
    ...PositionInfo
  }
  excludeHoldings {
    ...PositionInfo
  }
  baseHoldings
}
    `;
export const FactorValueItemInfoFragmentDoc = `
    fragment FactorValueItemInfo on FactorValueItem {
  min
  max
}
    `;
export const HistogramItemInfoFragmentDoc = `
    fragment HistogramItemInfo on HistogramItem {
  stickCounts
  range {
    ...FactorValueItemInfo
  }
  factorRange {
    ...FactorValueItemInfo
  }
  low {
    ...FactorValueItemInfo
  }
  middle {
    ...FactorValueItemInfo
  }
  high {
    ...FactorValueItemInfo
  }
}
    `;
export const FactorItemInfoFragmentDoc = `
    fragment FactorItemInfo on FactorItem {
  style
  type
  displayName
  cmName
  description
  min
  max
  histogramData {
    ...HistogramItemInfo
  }
  defaultValueInfo {
    isChecked
    min
    max
  }
  ignoreNegative
  img
  comments
}
    `;
export const FactorsTypeInfoFragmentDoc = `
    fragment FactorsTypeInfo on FactorsType {
  style {
    style
    name
    description
  }
  factors {
    ...FactorItemInfo
  }
}
    `;
export const UniverseInfoFragmentDoc = `
    fragment UniverseInfo on UniverseType {
  name
  country
}
    `;
export const BaseDateInfoFragmentDoc = `
    fragment BaseDateInfo on BaseDate {
  start
  end
}
    `;
export const ThemeStrategyTypeInfoFragmentDoc = `
    fragment ThemeStrategyTypeInfo on ThemeStrategyType {
  __typename
  id
  category
  name
  description
  shortDescription
  status
  universe {
    ...UniverseInfo
  }
  returnSummary {
    mdd
    annualAvgVolatility
    month3
  }
  totalUsesCnt
  baseDate {
    ...BaseDateInfo
  }
  benchmarks
  themeSrc
  themeExtractionDate
  simulationOption {
    optimization
    rebalancing
  }
}
    `;
export const MasterStrategyTypeInfoFragmentDoc = `
    fragment MasterStrategyTypeInfo on MasterStrategyType {
  __typename
  id
  category
  name
  description
  shortDescription
  status
  img
  masterFactors
  masterSrc
  totalUsesCnt
  baseDate {
    ...BaseDateInfo
  }
  simulationOption {
    optimization
    rebalancing
  }
}
    `;
export const SectorIndustryStrategyTypeInfoFragmentDoc = `
    fragment SectorIndustryStrategyTypeInfo on SectorIndustryStrategyType {
  __typename
  id
  category
  name
  description
  shortDescription
  status
  sector
  industry
  img
  universe {
    ...UniverseInfo
  }
  returnSummary {
    month3
  }
  totalUsesCnt
  baseDate {
    ...BaseDateInfo
  }
  simulationOption {
    optimization
    rebalancing
  }
}
    `;
export const SimulationOptionInfoFragmentDoc = `
    fragment SimulationOptionInfo on SimulationOptionType {
  booksize
  startDate
  optimization
  rebalancing
  excludeAdministration
  marketCapLimit
  tradingAmountLimit
}
    `;
export const ReturnSummaryTypeInfoFragmentDoc = `
    fragment ReturnSummaryTypeInfo on ReturnSummaryType {
  cumulative
  month1
  month3
  month6
  sharpe
  volatility
  mdd
  annualAvgReturn
  annualAvgVolatility
}
    `;
export const MyStrategyReturnSummaryItemInfoFragmentDoc = `
    fragment MyStrategyReturnSummaryItemInfo on MyStrategyReturnSummaryItem {
  baseDate {
    ...BaseDateInfo
  }
  returnSummary {
    ...ReturnSummaryTypeInfo
  }
}
    `;
export const MyStrategyReturnSummaryTypeInfoFragmentDoc = `
    fragment MyStrategyReturnSummaryTypeInfo on MyStrategyReturnSummaryType {
  forward {
    ...MyStrategyReturnSummaryItemInfo
  }
  backtest {
    ...MyStrategyReturnSummaryItemInfo
  }
  baseStrategyCumulative
  benchmarkCumulative
}
    `;
export const SectorIndustrySummaryTypeInfoFragmentDoc = `
    fragment SectorIndustrySummaryTypeInfo on SectorIndustrySummaryType {
  totalCnt
  info {
    sector
    sectorName
    industries
    industriesName
    isSelectAll
  }
}
    `;
export const MyStrategyInfoFragmentDoc = `
    fragment MyStrategyInfo on MyStrategyType {
  id
  portfolioId
  category
  name
  status
  strategy {
    ... on ThemeStrategyType {
      ...ThemeStrategyTypeInfo
    }
    ... on MasterStrategyType {
      ...MasterStrategyTypeInfo
    }
    ... on SectorIndustryStrategyType {
      ...SectorIndustryStrategyTypeInfo
    }
  }
  isSimple
  isActiveKbContract
  isForwardAvailable
  universePreset {
    universePreset
    name
  }
  universe {
    ...UniverseInfo
  }
  simulationOption {
    ...SimulationOptionInfo
  }
  rebalancingInfo {
    recentTs
    cnt
  }
  baseStrategyName
  returnSummary {
    ...MyStrategyReturnSummaryTypeInfo
  }
  sectorIndustrySummary {
    ...SectorIndustrySummaryTypeInfo
  }
  whitelist {
    ccid
    weight
    isAdd
  }
  createdAt
  __typename
}
    `;
export const ThemeStrategiesTypeInfoFragmentDoc = `
    fragment ThemeStrategiesTypeInfo on ThemeStrategyType {
  __typename
  id
  category
  name
  description
  shortDescription
  status
  universe {
    ...UniverseInfo
  }
  returnSummary {
    mdd
    annualAvgVolatility
    month3
  }
  baseDate {
    ...BaseDateInfo
  }
  themeSrc
  themeExtractionDate
}
    `;
export const MasterStrategyListTypeInfoFragmentDoc = `
    fragment MasterStrategyListTypeInfo on MasterStrategyType {
  __typename
  id
  name
  shortDescription
  img
}
    `;
export const ReturnItemInfoFragmentDoc = `
    fragment ReturnItemInfo on ReturnItem {
  name
  value
}
    `;
export const ReturnInfoItemInfoFragmentDoc = `
    fragment ReturnInfoItemInfo on ReturnInfoItem {
  strategy {
    ...ReturnItemInfo
  }
  benchmark {
    ...ReturnItemInfo
  }
}
    `;
export const ReturnChartItemInfoFragmentDoc = `
    fragment ReturnChartItemInfo on ReturnChartItem {
  ts
  strategy {
    ...ReturnItemInfo
  }
  benchmark {
    ...ReturnItemInfo
  }
}
    `;
export const RiskAssessmentItemInfoFragmentDoc = `
    fragment RiskAssessmentItemInfo on RiskAssessmentItem {
  name
  cumulative
  volatility
  sharpe
  mdd
  annualAvgReturn
  annualAvgVolatility
}
    `;
export const RiskAssessmentEtcItemInfoFragmentDoc = `
    fragment RiskAssessmentEtcItemInfo on RiskAssessmentEtcItem {
  excessReturn
  trackingError
  infoRatio
}
    `;
export const ReturnRateInfoFragmentDoc = `
    fragment ReturnRateInfo on StrategyReturnType {
  __typename
  benchmark {
    ...ReturnItemInfo
  }
  cumulative {
    ...ReturnItemInfo
  }
  month {
    ...ReturnItemInfo
  }
  quarter {
    ...ReturnItemInfo
  }
  half {
    ...ReturnItemInfo
  }
}
    `;
export const DetailedStrategyTypeInfoFragmentDoc = `
    fragment DetailedStrategyTypeInfo on DetailedStrategyType {
  __typename
  name
  description
  returnRate {
    ...ReturnRateInfo
  }
  benchmarks
}
    `;
export const DetailedMasterStrategyTypeInfoFragmentDoc = `
    fragment DetailedMasterStrategyTypeInfo on DetailedMasterStrategyType {
  __typename
  name
  description
  shortDescription
  returnRate {
    ...ReturnRateInfo
  }
  factors
  src
  img
  benchmarks
}
    `;
export const StrategyFactorStyleItemInfoFragmentDoc = `
    fragment StrategyFactorStyleItemInfo on StrategyFactorStyleItem {
  name
  value
}
    `;
export const StrategyFactorStyleInfoFragmentDoc = `
    fragment StrategyFactorStyleInfo on StrategyFactorStyle {
  size {
    ...StrategyFactorStyleItemInfo
  }
  value {
    ...StrategyFactorStyleItemInfo
  }
  momentum {
    ...StrategyFactorStyleItemInfo
  }
  quality {
    ...StrategyFactorStyleItemInfo
  }
  volatility {
    ...StrategyFactorStyleItemInfo
  }
  beta {
    ...StrategyFactorStyleItemInfo
  }
  dividend {
    ...StrategyFactorStyleItemInfo
  }
  surprise {
    ...StrategyFactorStyleItemInfo
  }
  liquidity {
    ...StrategyFactorStyleItemInfo
  }
}
    `;
export const WeightItemInfoFragmentDoc = `
    fragment WeightItemInfo on WeightItem {
  name
  weight
}
    `;
export const MyReturnChartItemInfoFragmentDoc = `
    fragment MyReturnChartItemInfo on MyReturnChartItem {
  ts
  myStrategy {
    ...ReturnItemInfo
  }
  strategy {
    ...ReturnItemInfo
  }
  benchmark {
    ...ReturnItemInfo
  }
}
    `;
export const SectorTypeInfoFragmentDoc = `
    fragment SectorTypeInfo on SectorType {
  sector
  name
  industries {
    industry
    name
    isChecked
  }
}
    `;
export const ForwardSummaryInfoFragmentDoc = `
    fragment ForwardSummaryInfo on ForwardSummary {
  period {
    ...BaseDateInfo
  }
  investmentAmount
  valuationAmount
  gainOrLossValuation
  gainOrLossExchange
}
    `;
export const SignOnDocument = `
    mutation signOn($uid: String!) {
  signOn(uid: $uid) {
    token
    errors {
      ...ErrorInfo
    }
  }
}
    ${ErrorInfoFragmentDoc}`;

export const useSignOnMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SignOnMutation, TError, SignOnMutationVariables, TContext>) => {
    
    return useMutation<SignOnMutation, TError, SignOnMutationVariables, TContext>(
      ['signOn'],
      (variables?: SignOnMutationVariables) => graphqlBaseClient<SignOnMutation, SignOnMutationVariables>(SignOnDocument, variables)(),
      options
    )};

export const TokenAuthDocument = `
    mutation tokenAuth($uid: String!, $password: String!) {
  tokenAuth(uid: $uid, password: $password) {
    token
  }
}
    `;

export const useTokenAuthMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TokenAuthMutation, TError, TokenAuthMutationVariables, TContext>) => {
    
    return useMutation<TokenAuthMutation, TError, TokenAuthMutationVariables, TContext>(
      ['tokenAuth'],
      (variables?: TokenAuthMutationVariables) => graphqlBaseClient<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, variables)(),
      options
    )};

export const GetFactorsDocument = `
    query getFactors($strategyId: ID, $universePreset: UniversePresetEnum) {
  factors(strategyId: $strategyId, universePreset: $universePreset) {
    factors {
      style {
        style
        name
        description
      }
      factors {
        ...FactorItemInfo
      }
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${FactorItemInfoFragmentDoc}
${HistogramItemInfoFragmentDoc}
${FactorValueItemInfoFragmentDoc}
${ErrorInfoFragmentDoc}`;

export const useGetFactorsQuery = <
      TData = GetFactorsQuery,
      TError = unknown
    >(
      variables?: GetFactorsQueryVariables,
      options?: UseQueryOptions<GetFactorsQuery, TError, TData>
    ) => {
    
    return useQuery<GetFactorsQuery, TError, TData>(
      variables === undefined ? ['getFactors'] : ['getFactors', variables],
      graphqlBaseClient<GetFactorsQuery, GetFactorsQueryVariables>(GetFactorsDocument, variables),
      options
    )};

export const useInfiniteGetFactorsQuery = <
      TData = GetFactorsQuery,
      TError = unknown
    >(
      variables?: GetFactorsQueryVariables,
      options?: UseInfiniteQueryOptions<GetFactorsQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetFactorsQuery, TError, TData>(
      variables === undefined ? ['getFactors.infinite'] : ['getFactors.infinite', variables],
      (metaData) => graphqlBaseClient<GetFactorsQuery, GetFactorsQueryVariables>(GetFactorsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetSectorsDocument = `
    query getSectors {
  sectors {
    sectors {
      ...SectorTypeInfo
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${SectorTypeInfoFragmentDoc}
${ErrorInfoFragmentDoc}`;

export const useGetSectorsQuery = <
      TData = GetSectorsQuery,
      TError = unknown
    >(
      variables?: GetSectorsQueryVariables,
      options?: UseQueryOptions<GetSectorsQuery, TError, TData>
    ) => {
    
    return useQuery<GetSectorsQuery, TError, TData>(
      variables === undefined ? ['getSectors'] : ['getSectors', variables],
      graphqlBaseClient<GetSectorsQuery, GetSectorsQueryVariables>(GetSectorsDocument, variables),
      options
    )};

export const useInfiniteGetSectorsQuery = <
      TData = GetSectorsQuery,
      TError = unknown
    >(
      variables?: GetSectorsQueryVariables,
      options?: UseInfiniteQueryOptions<GetSectorsQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetSectorsQuery, TError, TData>(
      variables === undefined ? ['getSectors.infinite'] : ['getSectors.infinite', variables],
      (metaData) => graphqlBaseClient<GetSectorsQuery, GetSectorsQueryVariables>(GetSectorsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetStrategiesDocument = `
    query getStrategies($category: StrategyCategoryEnum, $status: [StrategyStatusEnum], $keyword: String, $orderMethod: StrategyOrderMethod = CUMULATIVE, $orderPeriodReturn: StrategyOrderPeriodReturn = MONTH_3, $universePreset: UniversePresetEnum, $themeSrc: [ThemeSrcEnum!], $themeGroup: [ID!], $isKbPick: Boolean = false, $countries: [UniverseCountryEnum!] = [DOMESTIC], $before: String, $after: String, $first: Int, $last: Int) {
  strategies(
    category: $category
    status: $status
    keyword: $keyword
    orderMethod: $orderMethod
    orderPeriodReturn: $orderPeriodReturn
    universePreset: $universePreset
    themeSrc: $themeSrc
    themeGroup: $themeGroup
    isKbPick: $isKbPick
    countries: $countries
    before: $before
    after: $after
    first: $first
    last: $last
  ) {
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        ... on ThemeStrategyType {
          ...ThemeStrategiesTypeInfo
        }
        ... on MasterStrategyType {
          ...MasterStrategyListTypeInfo
        }
        ... on SectorIndustryStrategyType {
          ...SectorIndustryStrategyTypeInfo
        }
      }
      cursor
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${PageInfoFragmentDoc}
${ThemeStrategiesTypeInfoFragmentDoc}
${UniverseInfoFragmentDoc}
${BaseDateInfoFragmentDoc}
${MasterStrategyListTypeInfoFragmentDoc}
${SectorIndustryStrategyTypeInfoFragmentDoc}
${ErrorInfoFragmentDoc}`;

export const useGetStrategiesQuery = <
      TData = GetStrategiesQuery,
      TError = unknown
    >(
      variables?: GetStrategiesQueryVariables,
      options?: UseQueryOptions<GetStrategiesQuery, TError, TData>
    ) => {
    
    return useQuery<GetStrategiesQuery, TError, TData>(
      variables === undefined ? ['getStrategies'] : ['getStrategies', variables],
      graphqlBaseClient<GetStrategiesQuery, GetStrategiesQueryVariables>(GetStrategiesDocument, variables),
      options
    )};

export const useInfiniteGetStrategiesQuery = <
      TData = GetStrategiesQuery,
      TError = unknown
    >(
      variables?: GetStrategiesQueryVariables,
      options?: UseInfiniteQueryOptions<GetStrategiesQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetStrategiesQuery, TError, TData>(
      variables === undefined ? ['getStrategies.infinite'] : ['getStrategies.infinite', variables],
      (metaData) => graphqlBaseClient<GetStrategiesQuery, GetStrategiesQueryVariables>(GetStrategiesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetStrategyDocument = `
    query getStrategy($id: ID!) {
  strategy(id: $id) {
    strategy {
      ... on ThemeStrategyType {
        ...ThemeStrategyTypeInfo
      }
      ... on MasterStrategyType {
        ...MasterStrategyTypeInfo
      }
      ... on SectorIndustryStrategyType {
        ...SectorIndustryStrategyTypeInfo
      }
    }
    errors {
      message
    }
  }
}
    ${ThemeStrategyTypeInfoFragmentDoc}
${UniverseInfoFragmentDoc}
${BaseDateInfoFragmentDoc}
${MasterStrategyTypeInfoFragmentDoc}
${SectorIndustryStrategyTypeInfoFragmentDoc}`;

export const useGetStrategyQuery = <
      TData = GetStrategyQuery,
      TError = unknown
    >(
      variables: GetStrategyQueryVariables,
      options?: UseQueryOptions<GetStrategyQuery, TError, TData>
    ) => {
    
    return useQuery<GetStrategyQuery, TError, TData>(
      ['getStrategy', variables],
      graphqlBaseClient<GetStrategyQuery, GetStrategyQueryVariables>(GetStrategyDocument, variables),
      options
    )};

export const useInfiniteGetStrategyQuery = <
      TData = GetStrategyQuery,
      TError = unknown
    >(
      variables: GetStrategyQueryVariables,
      options?: UseInfiniteQueryOptions<GetStrategyQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetStrategyQuery, TError, TData>(
      ['getStrategy.infinite', variables],
      (metaData) => graphqlBaseClient<GetStrategyQuery, GetStrategyQueryVariables>(GetStrategyDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetStrategyStyleDocument = `
    query getStrategyStyle($strategyId: ID!) {
  strategyStyle(strategyId: $strategyId) {
    info {
      strategy {
        ...StrategyFactorStyleInfo
      }
      strategyName
      benchmark {
        ...StrategyFactorStyleInfo
      }
      benchmarkName
      baseDate {
        ...BaseDateInfo
      }
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${StrategyFactorStyleInfoFragmentDoc}
${StrategyFactorStyleItemInfoFragmentDoc}
${BaseDateInfoFragmentDoc}
${ErrorInfoFragmentDoc}`;

export const useGetStrategyStyleQuery = <
      TData = GetStrategyStyleQuery,
      TError = unknown
    >(
      variables: GetStrategyStyleQueryVariables,
      options?: UseQueryOptions<GetStrategyStyleQuery, TError, TData>
    ) => {
    
    return useQuery<GetStrategyStyleQuery, TError, TData>(
      ['getStrategyStyle', variables],
      graphqlBaseClient<GetStrategyStyleQuery, GetStrategyStyleQueryVariables>(GetStrategyStyleDocument, variables),
      options
    )};

export const useInfiniteGetStrategyStyleQuery = <
      TData = GetStrategyStyleQuery,
      TError = unknown
    >(
      variables: GetStrategyStyleQueryVariables,
      options?: UseInfiniteQueryOptions<GetStrategyStyleQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetStrategyStyleQuery, TError, TData>(
      ['getStrategyStyle.infinite', variables],
      (metaData) => graphqlBaseClient<GetStrategyStyleQuery, GetStrategyStyleQueryVariables>(GetStrategyStyleDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetStyleFactorsDocument = `
    query getStyleFactors($country: UniverseCountryEnum = DOMESTIC) {
  styleFactors(country: $country) {
    styleFactors {
      simplePrest {
        low {
          min
          max
        }
        middle {
          min
          max
        }
        high {
          min
          max
        }
      }
      styleFactors {
        style {
          style
          name
          description
        }
        cmName
      }
    }
  }
}
    `;

export const useGetStyleFactorsQuery = <
      TData = GetStyleFactorsQuery,
      TError = unknown
    >(
      variables?: GetStyleFactorsQueryVariables,
      options?: UseQueryOptions<GetStyleFactorsQuery, TError, TData>
    ) => {
    
    return useQuery<GetStyleFactorsQuery, TError, TData>(
      variables === undefined ? ['getStyleFactors'] : ['getStyleFactors', variables],
      graphqlBaseClient<GetStyleFactorsQuery, GetStyleFactorsQueryVariables>(GetStyleFactorsDocument, variables),
      options
    )};

export const useInfiniteGetStyleFactorsQuery = <
      TData = GetStyleFactorsQuery,
      TError = unknown
    >(
      variables?: GetStyleFactorsQueryVariables,
      options?: UseInfiniteQueryOptions<GetStyleFactorsQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetStyleFactorsQuery, TError, TData>(
      variables === undefined ? ['getStyleFactors.infinite'] : ['getStyleFactors.infinite', variables],
      (metaData) => graphqlBaseClient<GetStyleFactorsQuery, GetStyleFactorsQueryVariables>(GetStyleFactorsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetThemeGroupsDocument = `
    query getThemeGroups($status: [ThemeGroupStatusEnum!]!, $countries: [UniverseCountryEnum!] = [DOMESTIC]) {
  themeGroups(status: $status, countries: $countries) {
    themeGroups {
      id
      name
      remarks
      status
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${ErrorInfoFragmentDoc}`;

export const useGetThemeGroupsQuery = <
      TData = GetThemeGroupsQuery,
      TError = unknown
    >(
      variables: GetThemeGroupsQueryVariables,
      options?: UseQueryOptions<GetThemeGroupsQuery, TError, TData>
    ) => {
    
    return useQuery<GetThemeGroupsQuery, TError, TData>(
      ['getThemeGroups', variables],
      graphqlBaseClient<GetThemeGroupsQuery, GetThemeGroupsQueryVariables>(GetThemeGroupsDocument, variables),
      options
    )};

export const useInfiniteGetThemeGroupsQuery = <
      TData = GetThemeGroupsQuery,
      TError = unknown
    >(
      variables: GetThemeGroupsQueryVariables,
      options?: UseInfiniteQueryOptions<GetThemeGroupsQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetThemeGroupsQuery, TError, TData>(
      ['getThemeGroups.infinite', variables],
      (metaData) => graphqlBaseClient<GetThemeGroupsQuery, GetThemeGroupsQueryVariables>(GetThemeGroupsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetUniversePresetsDocument = `
    query getUniversePresets($countries: [UniverseCountryEnum!] = [DOMESTIC]) {
  universePresets(countries: $countries) {
    universePresets {
      name
      displayName
      description
      universes
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${ErrorInfoFragmentDoc}`;

export const useGetUniversePresetsQuery = <
      TData = GetUniversePresetsQuery,
      TError = unknown
    >(
      variables?: GetUniversePresetsQueryVariables,
      options?: UseQueryOptions<GetUniversePresetsQuery, TError, TData>
    ) => {
    
    return useQuery<GetUniversePresetsQuery, TError, TData>(
      variables === undefined ? ['getUniversePresets'] : ['getUniversePresets', variables],
      graphqlBaseClient<GetUniversePresetsQuery, GetUniversePresetsQueryVariables>(GetUniversePresetsDocument, variables),
      options
    )};

export const useInfiniteGetUniversePresetsQuery = <
      TData = GetUniversePresetsQuery,
      TError = unknown
    >(
      variables?: GetUniversePresetsQueryVariables,
      options?: UseInfiniteQueryOptions<GetUniversePresetsQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetUniversePresetsQuery, TError, TData>(
      variables === undefined ? ['getUniversePresets.infinite'] : ['getUniversePresets.infinite', variables],
      (metaData) => graphqlBaseClient<GetUniversePresetsQuery, GetUniversePresetsQueryVariables>(GetUniversePresetsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
