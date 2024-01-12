# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [AdminMenuList](#adminmenulist)
    * [AdminMenuType](#adminmenutype)
    * [AdminUser](#adminuser)
    * [AdminUserType](#adminusertype)
    * [AdminUsers](#adminusers)
    * [BaseDate](#basedate)
    * [CancelMyStrategyEditing](#cancelmystrategyediting)
    * [CashItem](#cashitem)
    * [CreateMyStrategy](#createmystrategy)
    * [CreateMyStrategyByReadyMade](#createmystrategybyreadymade)
    * [CreateThemeStrategy](#createthemestrategy)
    * [CreatedAdminUser](#createdadminuser)
    * [CumulativeReturn](#cumulativereturn)
    * [CumulativeReturnType](#cumulativereturntype)
    * [DeleteAdminUser](#deleteadminuser)
    * [DeleteMyStrategy](#deletemystrategy)
    * [DeleteMyStrategyHistory](#deletemystrategyhistory)
    * [DeleteStrategies](#deletestrategies)
    * [DetailedMasterStrategyType](#detailedmasterstrategytype)
    * [DetailedMyStrategy](#detailedmystrategy)
    * [DetailedMyStrategyType](#detailedmystrategytype)
    * [DetailedStrategy](#detailedstrategy)
    * [DetailedStrategyType](#detailedstrategytype)
    * [Drawdown](#drawdown)
    * [DrawdownType](#drawdowntype)
    * [DuplicateMyStrategy](#duplicatemystrategy)
    * [Error](#error)
    * [ExceededMaxCnt](#exceededmaxcnt)
    * [ExchangeRateInfo](#exchangerateinfo)
    * [Exposure](#exposure)
    * [ExposureItem](#exposureitem)
    * [ExposureType](#exposuretype)
    * [FactorDefaultValueInfo](#factordefaultvalueinfo)
    * [FactorInfo](#factorinfo)
    * [FactorItem](#factoritem)
    * [FactorStyleItem](#factorstyleitem)
    * [FactorValueItem](#factorvalueitem)
    * [Factors](#factors)
    * [FactorsType](#factorstype)
    * [ForwardSummary](#forwardsummary)
    * [FunctionAuth](#functionauth)
    * [HistogramItem](#histogramitem)
    * [HoldingPosition](#holdingposition)
    * [HoldingPositionAll](#holdingpositionall)
    * [HoldingPositionAllType](#holdingpositionalltype)
    * [HoldingPositionItem](#holdingpositionitem)
    * [HoldingPositionType](#holdingpositiontype)
    * [HoldingType](#holdingtype)
    * [Holdings](#holdings)
    * [IndustryItem](#industryitem)
    * [IsBacktestData](#isbacktestdata)
    * [LoginAdminUser](#loginadminuser)
    * [LoginInfoType](#logininfotype)
    * [MasterStrategyType](#masterstrategytype)
    * [MenuAuth](#menuauth)
    * [MyCumulativeReturn](#mycumulativereturn)
    * [MyCumulativeReturnType](#mycumulativereturntype)
    * [MyDrawdown](#mydrawdown)
    * [MyDrawdownType](#mydrawdowntype)
    * [MyExposure](#myexposure)
    * [MyExposureType](#myexposuretype)
    * [MyFactors](#myfactors)
    * [MyHoldingPosition](#myholdingposition)
    * [MyHoldingPositionAll](#myholdingpositionall)
    * [MyHoldings](#myholdings)
    * [MyPeriodReturn](#myperiodreturn)
    * [MyPeriodReturnType](#myperiodreturntype)
    * [MyRebalancingHistory](#myrebalancinghistory)
    * [MyRebalancingPositionList](#myrebalancingpositionlist)
    * [MyRebalancingPositionTreemap](#myrebalancingpositiontreemap)
    * [MyReturnChartItem](#myreturnchartitem)
    * [MyReturnInfoItem](#myreturninfoitem)
    * [MyRiskAssessmentIndex](#myriskassessmentindex)
    * [MyRiskAssessmentIndexType](#myriskassessmentindextype)
    * [MyRiskAssessmentInfoItem](#myriskassessmentinfoitem)
    * [MySectors](#mysectors)
    * [MyStrategy](#mystrategy)
    * [MyStrategyBlacklist](#mystrategyblacklist)
    * [MyStrategyConnection](#mystrategyconnection)
    * [MyStrategyEdge](#mystrategyedge)
    * [MyStrategyReturnSummaryItem](#mystrategyreturnsummaryitem)
    * [MyStrategyReturnSummaryType](#mystrategyreturnsummarytype)
    * [MyStrategyStyle](#mystrategystyle)
    * [MyStrategyStyleInfo](#mystrategystyleinfo)
    * [MyStrategyType](#mystrategytype)
    * [MyStyleFactors](#mystylefactors)
    * [MyUniversePresets](#myuniversepresets)
    * [ObtainJSONWebToken](#obtainjsonwebtoken)
    * [Organization](#organization)
    * [OrganizationType](#organizationtype)
    * [Organizations](#organizations)
    * [PageInfo](#pageinfo)
    * [PeriodReturn](#periodreturn)
    * [PeriodReturnType](#periodreturntype)
    * [RebalancingHistory](#rebalancinghistory)
    * [RebalancingHistoryItem](#rebalancinghistoryitem)
    * [RebalancingHistoryType](#rebalancinghistorytype)
    * [RebalancingHoldingItem](#rebalancingholdingitem)
    * [RebalancingInfo](#rebalancinginfo)
    * [RebalancingPositionList](#rebalancingpositionlist)
    * [RebalancingPositionListType](#rebalancingpositionlisttype)
    * [RebalancingPositionTreemap](#rebalancingpositiontreemap)
    * [RebalancingPositionTreemapType](#rebalancingpositiontreemaptype)
    * [Refresh](#refresh)
    * [RepresentativeProduct](#representativeproduct)
    * [ReturnChartItem](#returnchartitem)
    * [ReturnInfoItem](#returninfoitem)
    * [ReturnItem](#returnitem)
    * [ReturnSummaryType](#returnsummarytype)
    * [RiskAssessmentEtcItem](#riskassessmentetcitem)
    * [RiskAssessmentIndex](#riskassessmentindex)
    * [RiskAssessmentIndexType](#riskassessmentindextype)
    * [RiskAssessmentInfoItem](#riskassessmentinfoitem)
    * [RiskAssessmentItem](#riskassessmentitem)
    * [SaveMyStrategy](#savemystrategy)
    * [SearchHoldings](#searchholdings)
    * [SearchHoldingsType](#searchholdingstype)
    * [SectorIndustryStrategyType](#sectorindustrystrategytype)
    * [SectorIndustrySummaryItem](#sectorindustrysummaryitem)
    * [SectorIndustrySummaryType](#sectorindustrysummarytype)
    * [SectorType](#sectortype)
    * [Sectors](#sectors)
    * [SignOn](#signon)
    * [SignUp](#signup)
    * [SimulationOptionType](#simulationoptiontype)
    * [Strategies](#strategies)
    * [StrategiesWithPaging](#strategieswithpaging)
    * [Strategy](#strategy)
    * [StrategyConnection](#strategyconnection)
    * [StrategyEdge](#strategyedge)
    * [StrategyFactorStyle](#strategyfactorstyle)
    * [StrategyFactorStyleItem](#strategyfactorstyleitem)
    * [StrategyReturnType](#strategyreturntype)
    * [StrategyStyle](#strategystyle)
    * [StrategyStyleInfo](#strategystyleinfo)
    * [StyleFactorItem](#stylefactoritem)
    * [StyleFactorSimpleGrade](#stylefactorsimplegrade)
    * [StyleFactors](#stylefactors)
    * [StyleFactorsType](#stylefactorstype)
    * [SyncMyStrategyHoldings](#syncmystrategyholdings)
    * [ThemeGroup](#themegroup)
    * [ThemeGroupType](#themegrouptype)
    * [ThemeGroups](#themegroups)
    * [ThemeHolding](#themeholding)
    * [ThemeStrategyType](#themestrategytype)
    * [UniverseCountryType](#universecountrytype)
    * [UniverseItem](#universeitem)
    * [UniversePresetItem](#universepresetitem)
    * [UniversePresetType](#universepresettype)
    * [UniversePresets](#universepresets)
    * [UniverseType](#universetype)
    * [Universes](#universes)
    * [UpdateAdminUser](#updateadminuser)
    * [UpdateAdminUserPassword](#updateadminuserpassword)
    * [UpdateMyStrategyName](#updatemystrategyname)
    * [UpdateStrategyStatus](#updatestrategystatus)
    * [UpdateThemeStrategy](#updatethemestrategy)
    * [User](#user)
    * [UserType](#usertype)
    * [Verify](#verify)
    * [WeightItem](#weightitem)
    * [WhiteListType](#whitelisttype)
  * [Inputs](#inputs)
    * [FactorInputItem](#factorinputitem)
    * [FunctionAuthInput](#functionauthinput)
    * [MenuAuthInput](#menuauthinput)
    * [SimulationOptionInput](#simulationoptioninput)
    * [SimulationOptionScreeningInput](#simulationoptionscreeninginput)
    * [ThemeHoldingInput](#themeholdinginput)
    * [ThemeStrategyInput](#themestrategyinput)
    * [WhitelistInputItem](#whitelistinputitem)
  * [Enums](#enums)
    * [BuySellEnum](#buysellenum)
    * [FactorStyleEnum](#factorstyleenum)
    * [GradeEnum](#gradeenum)
    * [IndustryEnum](#industryenum)
    * [IntervalEnum](#intervalenum)
    * [KbError](#kberror)
    * [MenuRoleEnum](#menuroleenum)
    * [MyStrategyOrderType](#mystrategyordertype)
    * [PeriodEnum](#periodenum)
    * [RoleEnum](#roleenum)
    * [SectorEnum](#sectorenum)
    * [SimulationTypeEnum](#simulationtypeenum)
    * [StrategyAmountEnum](#strategyamountenum)
    * [StrategyCategoryEnum](#strategycategoryenum)
    * [StrategyMarketCapEnum](#strategymarketcapenum)
    * [StrategyOptimizationEnum](#strategyoptimizationenum)
    * [StrategyOrderType](#strategyordertype)
    * [StrategyRebalancingOptionEnum](#strategyrebalancingoptionenum)
    * [StrategyStatusEnum](#strategystatusenum)
    * [ThemeGroupStatusEnum](#themegroupstatusenum)
    * [ThemeSrcEnum](#themesrcenum)
    * [UniverseCountryEnum](#universecountryenum)
    * [UniverseEnum](#universeenum)
    * [UniversePresetEnum](#universepresetenum)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Float](#float)
    * [GenericScalar](#genericscalar)
    * [ID](#id)
    * [Int](#int)
    * [JSONString](#jsonstring)
    * [String](#string)
  * [Interfaces](#interfaces)
    * [Node](#node)
  * [Unions](#unions)
    * [DetailedStrategyUnion](#detailedstrategyunion)
    * [StrategyUnion](#strategyunion)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>adminMenuList</strong></td>
<td valign="top"><a href="#adminmenulist">AdminMenuList</a></td>
<td>

메뉴 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organization">Organization</a></td>
<td>

소속 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

소속 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizations</strong></td>
<td valign="top"><a href="#organizations">Organizations</a></td>
<td>

소속 리스트 조회

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>adminUserMe</strong></td>
<td valign="top"><a href="#adminuser">AdminUser</a></td>
<td>

내 관리자 계정 상세정보 조회

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>adminUser</strong></td>
<td valign="top"><a href="#adminuser">AdminUser</a></td>
<td>

관리자 계정 상세정보 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>adminUsers</strong></td>
<td valign="top"><a href="#adminusers">AdminUsers</a></td>
<td>

관리자 유저 리스트 조회

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkDuplicateAdminUserUid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

관리자 ID 중복 유효성 검사

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkExceededMaxCntOrganization</strong></td>
<td valign="top"><a href="#exceededmaxcnt">ExceededMaxCnt</a></td>
<td>

소속별 최대 개수 초과 유효성 검사

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organizationName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

소속명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>searchHoldings</strong></td>
<td valign="top"><a href="#searchholdings">SearchHoldings</a></td>
<td>

종목 검색

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

검색어

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">country</td>
<td valign="top"><a href="#universecountryenum">UniverseCountryEnum</a></td>
<td>

검색할 국가

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeGroup</strong></td>
<td valign="top"><a href="#themegroup">ThemeGroup</a></td>
<td>

테마그룹 상세 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeGroups</strong></td>
<td valign="top"><a href="#themegroups">ThemeGroups</a></td>
<td>

테마그룹 리스트 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#themegroupstatusenum">ThemeGroupStatusEnum</a>!]!</td>
<td>

테마그룹 상태 필터링

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#mystrategy">MyStrategy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategyByPortfolioId</strong></td>
<td valign="top"><a href="#mystrategy">MyStrategy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">portfolioId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>detailedMyStrategy</strong></td>
<td valign="top"><a href="#detailedmystrategy">DetailedMyStrategy</a></td>
<td>

내 전략 상세 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategies</strong></td>
<td valign="top"><a href="#mystrategyconnection">MyStrategyConnection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a></td>
<td>

상태 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">category</td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a></td>
<td>

카테고리 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

전략명 검색 키워드

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderType</td>
<td valign="top"><a href="#mystrategyordertype">MyStrategyOrderType</a></td>
<td>

정렬타입

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countries</td>
<td valign="top">[<a href="#universecountryenum">UniverseCountryEnum</a>!]</td>
<td>

국가 필터, default: DOMESTIC

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategyStyle</strong></td>
<td valign="top"><a href="#mystrategystyle">MyStrategyStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myHoldings</strong></td>
<td valign="top"><a href="#myholdings">MyHoldings</a></td>
<td>

내 전략 종목 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationOptionScreening</td>
<td valign="top"><a href="#simulationoptionscreeninginput">SimulationOptionScreeningInput</a></td>
<td>

시뮬레이션 옵션, 전략 스크리닝 Input

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategyBlacklist</strong></td>
<td valign="top"><a href="#mystrategyblacklist">MyStrategyBlacklist</a></td>
<td>

내 전략의 제외 종목 정보 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myFactors</strong></td>
<td valign="top"><a href="#myfactors">MyFactors</a></td>
<td>

내 전략 팩터 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universePreset</td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

사용자가 선택한 유니버스프리셋 (대가들의 전략인 경우 필수)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mySectors</strong></td>
<td valign="top"><a href="#mysectors">MySectors</a></td>
<td>

내 전략 섹터/업종 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myUniversePresets</strong></td>
<td valign="top"><a href="#myuniversepresets">MyUniversePresets</a></td>
<td>

내 전략 유니버스 프리셋 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStyleFactors</strong></td>
<td valign="top"><a href="#mystylefactors">MyStyleFactors</a></td>
<td>

내 스타일 팩터 (간편투자 팩터) 조회 

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myVolumePosition</strong></td>
<td valign="top"><a href="#myholdings">MyHoldings</a></td>
<td>

내 전략 종목 제외 후 종목리스트 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">baseHoldings</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

기준종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">firstHoldings</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">blacklist</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

제외종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">whitelist</td>
<td valign="top">[<a href="#whitelistinputitem">WhitelistInputItem</a>!]!</td>
<td>

추가종목 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universePreset</td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">optimization</td>
<td valign="top"><a href="#strategyoptimizationenum">StrategyOptimizationEnum</a>!</td>
<td>

최적화 옵션

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">booksize</td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

투자 금액 (단위:원)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rebalancing</td>
<td valign="top"><a href="#strategyrebalancingoptionenum">StrategyRebalancingOptionEnum</a></td>
<td>

리밸런싱 주기

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isBacktestData</strong></td>
<td valign="top"><a href="#isbacktestdata">IsBacktestData</a></td>
<td>

내 전략 종목 제외 후 종목리스트 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

MyStrategy ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myCumulativeReturn</strong></td>
<td valign="top"><a href="#mycumulativereturn">MyCumulativeReturn</a></td>
<td>

전략 편집 > 시뮬레이션 수익분석 - 누적 수익률

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#periodenum">PeriodEnum</a></td>
<td>

차트 기간 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">interval</td>
<td valign="top"><a href="#intervalenum">IntervalEnum</a>!</td>
<td>

차트 간격 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myPeriodReturn</strong></td>
<td valign="top"><a href="#myperiodreturn">MyPeriodReturn</a></td>
<td>

전략 편집 > 시뮬레이션 수익분석 - 기간별 수익률

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">interval</td>
<td valign="top"><a href="#intervalenum">IntervalEnum</a>!</td>
<td>

차트 간격 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myRiskAssessmentIndex</strong></td>
<td valign="top"><a href="#myriskassessmentindex">MyRiskAssessmentIndex</a></td>
<td>

시뮬레이션 수익분석 - 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myDrawdown</strong></td>
<td valign="top"><a href="#mydrawdown">MyDrawdown</a></td>
<td>

시뮬레이션 수익분석 - drawdown

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#periodenum">PeriodEnum</a></td>
<td>

차트 기간 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">interval</td>
<td valign="top"><a href="#intervalenum">IntervalEnum</a>!</td>
<td>

차트 간격 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myExposure</strong></td>
<td valign="top"><a href="#myexposure">MyExposure</a></td>
<td>

전략 편집 > 시뮬레이션 포지션분석 - 익스포저 (섹터, 산업, 종목)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">displayCnt</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

보여질 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myHoldingPosition</strong></td>
<td valign="top"><a href="#myholdingposition">MyHoldingPosition</a></td>
<td>

전략 편집 > 시뮬레이션 포지션분석 - 종목 구성

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageNo</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

페이지 번호, default: 1

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageSize</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

한 페이지 컨텐츠 수, default: 10

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myHoldingPositionAll</strong></td>
<td valign="top"><a href="#myholdingpositionall">MyHoldingPositionAll</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myRebalancingHistory</strong></td>
<td valign="top"><a href="#myrebalancinghistory">MyRebalancingHistory</a></td>
<td>

전략 편집 > 시뮬레이션 리밸런싱분석 - 리밸런싱 이력

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#periodenum">PeriodEnum</a></td>
<td>

차트 기간 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">displayCnt</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

보여질 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationType</td>
<td valign="top"><a href="#simulationtypeenum">SimulationTypeEnum</a>!</td>
<td>

시뮬레이션 타입

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myRebalancingPositionTreemap</strong></td>
<td valign="top"><a href="#myrebalancingpositiontreemap">MyRebalancingPositionTreemap</a></td>
<td>

전략 편집 > 시뮬레이션 리밸런싱분석 - 종목구성 (트리맵)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">yearMonth</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

조회 연,월 (format: YYYYMM)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myRebalancingPositionList</strong></td>
<td valign="top"><a href="#myrebalancingpositionlist">MyRebalancingPositionList</a></td>
<td>

전략 편집 > 시뮬레이션 리밸런싱분석 - 종목구성 (리스트)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">yearMonth</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

조회 연,월 (format: YYYYMM)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageNo</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

페이지 번호, default: 1

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageSize</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

한 페이지 컨텐츠 수, default: 10

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cumulativeReturn</strong></td>
<td valign="top"><a href="#cumulativereturn">CumulativeReturn</a></td>
<td>

시뮬레이션 수익분석 - 누적 수익률

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#periodenum">PeriodEnum</a></td>
<td>

차트 기간 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">interval</td>
<td valign="top"><a href="#intervalenum">IntervalEnum</a>!</td>
<td>

차트 간격 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universes</td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

대가들의 전략을 위한 Universe 필터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>periodReturn</strong></td>
<td valign="top"><a href="#periodreturn">PeriodReturn</a></td>
<td>

시뮬레이션 수익분석 - 기간별 수익률

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">interval</td>
<td valign="top"><a href="#intervalenum">IntervalEnum</a>!</td>
<td>

차트 간격 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universes</td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

대가들의 전략을 위한 Universe 필터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>riskAssessmentIndex</strong></td>
<td valign="top"><a href="#riskassessmentindex">RiskAssessmentIndex</a></td>
<td>

시뮬레이션 수익분석 - 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universes</td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

대가들의 전략을 위한 Universe 필터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>drawdown</strong></td>
<td valign="top"><a href="#drawdown">Drawdown</a></td>
<td>

시뮬레이션 수익분석 - drawdown

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#periodenum">PeriodEnum</a></td>
<td>

차트 기간 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">interval</td>
<td valign="top"><a href="#intervalenum">IntervalEnum</a>!</td>
<td>

차트 간격 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">benchmark</td>
<td valign="top"><a href="#universeenum">UniverseEnum</a>!</td>
<td>

벤치마크 유니버스

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universes</td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

대가들의 전략을 위한 Universe 필터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>holdingPosition</strong></td>
<td valign="top"><a href="#holdingposition">HoldingPosition</a></td>
<td>

시뮬레이션 포지션분석 - 종목 구성

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageNo</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

페이지 번호, default: 1

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageSize</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

한 페이지 컨텐츠 수, default: 10

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>holdingPositionAll</strong></td>
<td valign="top"><a href="#holdingpositionall">HoldingPositionAll</a></td>
<td>

시뮬레이션 포지션분석 - 전체 종목 구성

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universes</td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

대가들의 전략을 위한 Universe 필터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exposure</strong></td>
<td valign="top"><a href="#exposure">Exposure</a></td>
<td>

시뮬레이션 포지션분석 - 익스포저 (섹터, 산업, 종목)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">displayCnt</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

보여질 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancingHistory</strong></td>
<td valign="top"><a href="#rebalancinghistory">RebalancingHistory</a></td>
<td>

시뮬레이션 리밸런싱분석 - 리밸런싱 이력

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#periodenum">PeriodEnum</a></td>
<td>

차트 기간 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">displayCnt</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

보여질 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancingPositionTreemap</strong></td>
<td valign="top"><a href="#rebalancingpositiontreemap">RebalancingPositionTreemap</a></td>
<td>

시뮬레이션 리밸런싱분석 - 종목구성 (트리맵)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">yearMonth</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

조회 연,월 (format: YYYYMM)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancingPositionList</strong></td>
<td valign="top"><a href="#rebalancingpositionlist">RebalancingPositionList</a></td>
<td>

시뮬레이션 리밸런싱분석 - 종목구성 (리스트)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">yearMonth</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

조회 연,월 (format: YYYYMM)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageNo</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

페이지 번호, default: 1

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageSize</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

한 페이지 컨텐츠 수, default: 10

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#strategy">Strategy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>detailedStrategy</strong></td>
<td valign="top"><a href="#detailedstrategy">DetailedStrategy</a></td>
<td>

전략 상세 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategies</strong></td>
<td valign="top"><a href="#strategyconnection">StrategyConnection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">category</td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a></td>
<td>

카테고리 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#strategystatusenum">StrategyStatusEnum</a>]</td>
<td>

전략 상태 필터, default: ALL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

전략명 검색 키워드

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderType</td>
<td valign="top"><a href="#strategyordertype">StrategyOrderType</a></td>
<td>

정렬타입, defualt: 수익률 높은순

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universePreset</td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

전략 유니버스 프리셋 필터, default: ALL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeSrc</td>
<td valign="top">[<a href="#themesrcenum">ThemeSrcEnum</a>!]</td>
<td>

테마 출처 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeGroup</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

테마 그룹 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isKbPick</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

KB's Pick 여부

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate</td>
<td valign="top"><a href="#float">Float</a></td>
<td>

등록일 시작일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">endDate</td>
<td valign="top"><a href="#float">Float</a></td>
<td>

등록일 종료일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countries</td>
<td valign="top">[<a href="#universecountryenum">UniverseCountryEnum</a>!]</td>
<td>

국가 필터, default: DOMESTIC

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategiesWithPaging</strong></td>
<td valign="top"><a href="#strategieswithpaging">StrategiesWithPaging</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">category</td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a></td>
<td>

카테고리 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#strategystatusenum">StrategyStatusEnum</a>]</td>
<td>

전략 상태 필터, default: ALL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a></td>
<td>

전략명 검색 키워드

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderType</td>
<td valign="top"><a href="#strategyordertype">StrategyOrderType</a></td>
<td>

정렬타입, defualt: 수익률 높은순

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universePreset</td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

전략 유니버스 프리셋 필터, default: ALL

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeSrc</td>
<td valign="top">[<a href="#themesrcenum">ThemeSrcEnum</a>!]</td>
<td>

테마 출처 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeGroup</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

테마 그룹 필터

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isKbPick</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

KB's Pick 여부

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate</td>
<td valign="top"><a href="#float">Float</a></td>
<td>

등록일 시작일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">endDate</td>
<td valign="top"><a href="#float">Float</a></td>
<td>

등록일 종료일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countries</td>
<td valign="top">[<a href="#universecountryenum">UniverseCountryEnum</a>!]</td>
<td>

국가 필터, default: DOMESTIC

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageNo</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

페이지번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageSize</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

페이지크기

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universes</strong></td>
<td valign="top"><a href="#universes">Universes</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countries</td>
<td valign="top">[<a href="#universecountryenum">UniverseCountryEnum</a>!]</td>
<td>

국가 필터, default: DOMESTIC

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universePresets</strong></td>
<td valign="top"><a href="#universepresets">UniversePresets</a></td>
<td>

유니버스 프리셋 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countries</td>
<td valign="top">[<a href="#universecountryenum">UniverseCountryEnum</a>!]</td>
<td>

국가 필터, default: DOMESTIC

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectors</strong></td>
<td valign="top"><a href="#sectors">Sectors</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategyStyle</strong></td>
<td valign="top"><a href="#strategystyle">StrategyStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Strategy ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>factors</strong></td>
<td valign="top"><a href="#factors">Factors</a></td>
<td>

해당 전략의 싱글팩터 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Strategy ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universePreset</td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

사용자가 선택한 유니버스프리셋 (대가들의 전략인 경우 필수)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>styleFactors</strong></td>
<td valign="top"><a href="#stylefactors">StyleFactors</a></td>
<td>

스타일 팩터 (간편투자 팩터) 조회 

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">country</td>
<td valign="top"><a href="#universecountryenum">UniverseCountryEnum</a></td>
<td>

팩터 국가

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top"><a href="#holdings">Holdings</a></td>
<td>

전략 스크리너 종목리스트 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Strategy ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationOptionScreening</td>
<td valign="top"><a href="#simulationoptionscreeninginput">SimulationOptionScreeningInput</a></td>
<td>

시뮬레이션 옵션, 전략 스크리닝 Input

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumePosition</strong></td>
<td valign="top"><a href="#holdings">Holdings</a></td>
<td>

종목 제외 후 종목리스트 조회

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Strategy ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">baseHoldings</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

기준종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">firstHoldings</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">blacklist</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

제외종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">whitelist</td>
<td valign="top">[<a href="#whitelistinputitem">WhitelistInputItem</a>!]!</td>
<td>

추가종목 리스트

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universePreset</td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">optimization</td>
<td valign="top"><a href="#strategyoptimizationenum">StrategyOptimizationEnum</a>!</td>
<td>

최적화 옵션

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">booksize</td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

투자 금액 (단위:원)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rebalancing</td>
<td valign="top"><a href="#strategyrebalancingoptionenum">StrategyRebalancingOptionEnum</a></td>
<td>

리밸런싱 주기

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkDuplicateStrategyThemeName</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

전략 테마명 중복 체크 (True: 중복, False: 중복아님)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">displayThemeName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeSrc</td>
<td valign="top"><a href="#themesrcenum">ThemeSrcEnum</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">universeCountry</td>
<td valign="top"><a href="#universecountryenum">UniverseCountryEnum</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkDuplicateStrategyName</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

전략명 중복 체크 (True: 중복, False: 중복아님)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeCmUpdateScheduleDate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

테마 업데이트 반영일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createAdminUser</strong></td>
<td valign="top"><a href="#createdadminuser">CreatedAdminUser</a></td>
<td>

관리자 계정 등록

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">functionAuth</td>
<td valign="top"><a href="#functionauthinput">FunctionAuthInput</a>!</td>
<td>

관리자 기능 권한

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isActive</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

사용 여부

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">menuAuthList</td>
<td valign="top">[<a href="#menuauthinput">MenuAuthInput</a>!]!</td>
<td>

관리자 메뉴 권한

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

이름

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organizationName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

소속명

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

비밀번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전화번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginAdminUser</strong></td>
<td valign="top"><a href="#loginadminuser">LoginAdminUser</a></td>
<td>

관리자 계정 로그인

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

비밀번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateAdminUserPassword</strong></td>
<td valign="top"><a href="#updateadminuserpassword">UpdateAdminUserPassword</a></td>
<td>

관리자 계정 비밀번호 변경

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">currentPassword</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

현재 비밀번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">newPassword</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

새 비밀번호

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateAdminUser</strong></td>
<td valign="top"><a href="#updateadminuser">UpdateAdminUser</a></td>
<td>

관리자 계정 상세정보 변경

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">functionAuth</td>
<td valign="top"><a href="#functionauthinput">FunctionAuthInput</a>!</td>
<td>

관리자 기능 권한

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isActive</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

사용 여부

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">menuAuthList</td>
<td valign="top">[<a href="#menuauthinput">MenuAuthInput</a>!]!</td>
<td>

관리자 메뉴 권한

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

이름

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전화번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

변경할 관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAdminUser</strong></td>
<td valign="top"><a href="#deleteadminuser">DeleteAdminUser</a></td>
<td>

관리자 계정 삭제

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

삭제할 관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMyStrategy</strong></td>
<td valign="top"><a href="#createmystrategy">CreateMyStrategy</a></td>
<td>

내 전략 생성

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationOptionScreening</td>
<td valign="top"><a href="#simulationoptionscreeninginput">SimulationOptionScreeningInput</a>!</td>
<td>

시뮬레이션 옵션, 전략 스크리닝 Input

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saveMyStrategy</strong></td>
<td valign="top"><a href="#savemystrategy">SaveMyStrategy</a></td>
<td>

내 전략 저장

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">editingMyStrategyId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

편집중인 내 전략 ID (내 전략 편집 > 저장인 경우 필수값)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">myStrategyId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

내 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMyStrategyByReadyMade</strong></td>
<td valign="top"><a href="#createmystrategybyreadymade">CreateMyStrategyByReadyMade</a></td>
<td>

내 전략 생성 (By ready-made 전략)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isSimple</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

간편 편집 여부 / true: 간편편집, false: 일반편집(상세편집+대가편집)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">simulationOptionScreening</td>
<td valign="top"><a href="#simulationoptionscreeninginput">SimulationOptionScreeningInput</a>!</td>
<td>

시뮬레이션 옵션, 전략 스크리닝 Input

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategyId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ready-made 전략 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMyStrategy</strong></td>
<td valign="top"><a href="#deletemystrategy">DeleteMyStrategy</a></td>
<td>

내 전략 삭제

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMyStrategyHistory</strong></td>
<td valign="top"><a href="#deletemystrategyhistory">DeleteMyStrategyHistory</a></td>
<td>

내 전략 기록 삭제

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelMyStrategyEditing</strong></td>
<td valign="top"><a href="#cancelmystrategyediting">CancelMyStrategyEditing</a></td>
<td>

내 전략 편집 취소

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMyStrategyName</strong></td>
<td valign="top"><a href="#updatemystrategyname">UpdateMyStrategyName</a></td>
<td>

내 전략명 변경

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duplicateMyStrategy</strong></td>
<td valign="top"><a href="#duplicatemystrategy">DuplicateMyStrategy</a></td>
<td>

내 전략 복제

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncMyStrategyHoldings</strong></td>
<td valign="top"><a href="#syncmystrategyholdings">SyncMyStrategyHoldings</a></td>
<td>

내 전략 종목 KB와 동기화

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createThemeStrategy</strong></td>
<td valign="top"><a href="#createthemestrategy">CreateThemeStrategy</a></td>
<td>

테마 전략 생성

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeStrategy</td>
<td valign="top"><a href="#themestrategyinput">ThemeStrategyInput</a>!</td>
<td>

테마전략 INPUT

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateThemeStrategy</strong></td>
<td valign="top"><a href="#updatethemestrategy">UpdateThemeStrategy</a></td>
<td>

테마 전략 수정

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

수정할 전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">themeStrategy</td>
<td valign="top"><a href="#themestrategyinput">ThemeStrategyInput</a>!</td>
<td>

테마전략 INPUT

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateStrategyStatus</strong></td>
<td valign="top"><a href="#updatestrategystatus">UpdateStrategyStatus</a></td>
<td>

전략 상태 수정

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a>!</td>
<td>

변경할 전략상태

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteStrategies</strong></td>
<td valign="top"><a href="#deletestrategies">DeleteStrategies</a></td>
<td>

프리셋 전략들 삭제

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

전략 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokenAuth</strong></td>
<td valign="top"><a href="#obtainjsonwebtoken">ObtainJSONWebToken</a></td>
<td>

토큰 인증

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshToken</strong></td>
<td valign="top"><a href="#refresh">Refresh</a></td>
<td>

토큰 갱신

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>verifyToken</strong></td>
<td valign="top"><a href="#verify">Verify</a></td>
<td>

토큰 유효성검사

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signUp</strong></td>
<td valign="top"><a href="#signup">SignUp</a></td>
<td>

회원가입

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

비밀번호

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">role</td>
<td valign="top"><a href="#roleenum">RoleEnum</a>!</td>
<td>

권한

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

use_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signOn</strong></td>
<td valign="top"><a href="#signon">SignOn</a></td>
<td>

M-able 로그인

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isWebUser</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

웹 유저 여부

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uid</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

use_id

</td>
</tr>
</tbody>
</table>

## Objects

### AdminMenuList

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>adminMenuList</strong></td>
<td valign="top">[<a href="#adminmenutype">AdminMenuType</a>]</td>
<td>

메뉴 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### AdminMenuType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

메뉴명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

메뉴 CODE

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

정렬순번

</td>
</tr>
</tbody>
</table>

### AdminUser

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>adminUser</strong></td>
<td valign="top"><a href="#adminusertype">AdminUserType</a></td>
<td>

관리자 계정 상세정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### AdminUserType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

이름

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전화번호

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

사용 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organizationtype">OrganizationType</a>!</td>
<td>

소속

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

관리자 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuAuth</strong></td>
<td valign="top">[<a href="#menuauth">MenuAuth</a>]!</td>
<td>

메뉴권한

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>functionAuth</strong></td>
<td valign="top"><a href="#functionauth">FunctionAuth</a>!</td>
<td>

기능권한

</td>
</tr>
</tbody>
</table>

### AdminUsers

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>adminUsers</strong></td>
<td valign="top">[<a href="#adminusertype">AdminUserType</a>]</td>
<td>

관리자 유저 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### BaseDate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

시작일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

종료일

</td>
</tr>
</tbody>
</table>

### CancelMyStrategyEditing

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CashItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

종목 비중(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

금액

</td>
</tr>
</tbody>
</table>

### CreateMyStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategyId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CreateMyStrategyByReadyMade

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategyId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CreateThemeStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CreatedAdminUser

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CumulativeReturn

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cumulativeReturn</strong></td>
<td valign="top"><a href="#cumulativereturntype">CumulativeReturnType</a></td>
<td>

누적 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CumulativeReturnType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#returninfoitem">ReturnInfoItem</a></td>
<td>

누적 수익률 항목 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chart</strong></td>
<td valign="top">[<a href="#returnchartitem">ReturnChartItem</a>]</td>
<td>

누적 수익률 차트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### DeleteAdminUser

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DeleteMyStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DeleteMyStrategyHistory

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DeleteStrategies

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DetailedMasterStrategyType

대가들의 전략 상세

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략소개

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shortDescription</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

짧은 전략소개

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnRate</strong></td>
<td valign="top"><a href="#strategyreturntype">StrategyReturnType</a></td>
<td>

수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptiontype">SimulationOptionType</a></td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>factors</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

전략특징

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>src</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

전략출처

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>img</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

대가의 이미지

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recentRebalancingDate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

최근 리밸런싱일, unixtimestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarks</strong></td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

벤치마크

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### DetailedMyStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>detailedMyStrategy</strong></td>
<td valign="top"><a href="#detailedmystrategytype">DetailedMyStrategyType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DetailedMyStrategyType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

내 전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

기초전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

벤치마크 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarks</strong></td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

벤치마크 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>forwardSummary</strong></td>
<td valign="top"><a href="#forwardsummary">ForwardSummary</a></td>
<td>

모의투자 요약정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>forwardSummaryExchange</strong></td>
<td valign="top"><a href="#forwardsummary">ForwardSummary</a></td>
<td>

모의투자 요약정보 - 환율적용

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeRateInfo</strong></td>
<td valign="top"><a href="#exchangerateinfo">ExchangeRateInfo</a></td>
<td>

환율 정보

</td>
</tr>
</tbody>
</table>

### DetailedStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#detailedstrategyunion">DetailedStrategyUnion</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DetailedStrategyType

테마, 섹터/산업 상세

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략소개

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnRate</strong></td>
<td valign="top"><a href="#strategyreturntype">StrategyReturnType</a></td>
<td>

수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptiontype">SimulationOptionType</a></td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>representativeSector</strong></td>
<td valign="top"><a href="#sectorenum">SectorEnum</a></td>
<td>

대표 섹터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>representativeHoldings</strong></td>
<td valign="top">[<a href="#representativeproduct">RepresentativeProduct</a>]</td>
<td>

대표 종목

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recentRebalancingDate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

최근 리밸런싱일, unixtimestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarks</strong></td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

벤치마크

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### Drawdown

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>drawdown</strong></td>
<td valign="top"><a href="#drawdowntype">DrawdownType</a></td>
<td>

drawdown

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### DrawdownType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chart</strong></td>
<td valign="top">[<a href="#returnchartitem">ReturnChartItem</a>]</td>
<td>

drawdown 차트

</td>
</tr>
</tbody>
</table>

### DuplicateMyStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategyId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### Error

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#kberror">KbError</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td></td>
</tr>
</tbody>
</table>

### ExceededMaxCnt

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>exceededMaxCnt</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

최대 개수 초과 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ExchangeRateInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeRate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

환율

</td>
</tr>
</tbody>
</table>

### Exposure

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>exposure</strong></td>
<td valign="top"><a href="#exposuretype">ExposureType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ExposureItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sectors</strong></td>
<td valign="top">[<a href="#weightitem">WeightItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industries</strong></td>
<td valign="top">[<a href="#weightitem">WeightItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top">[<a href="#weightitem">WeightItem</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ExposureType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#exposureitem">ExposureItem</a></td>
<td>

베이스 전략 익스포저

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### FactorDefaultValueInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>isChecked</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

사용자가 선택한 팩터 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

사용자가 설정한 최소값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

사용자가 설정한 최대값

</td>
</tr>
</tbody>
</table>

### FactorInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

팩터명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

사용자가 설정한 팩터의 값

</td>
</tr>
</tbody>
</table>

### FactorItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>style</strong></td>
<td valign="top"><a href="#factorstyleenum">FactorStyleEnum</a>!</td>
<td>

팩터 스타일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

팩터 타입(value: 싱글팩터, ratio:스타일팩터)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

display 팩터명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cmName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

cm명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

팩터 설명글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

팩터 최소값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

팩터 최대값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>histogramData</strong></td>
<td valign="top"><a href="#histogramitem">HistogramItem</a></td>
<td>

히스토그램 데이터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultValueInfo</strong></td>
<td valign="top"><a href="#factordefaultvalueinfo">FactorDefaultValueInfo</a></td>
<td>

팩터 기본값 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ignoreNegative</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

음수제외 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>img</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

팩터 설명 이미지

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>comments</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

팩터 설명글 주석 리스트

</td>
</tr>
</tbody>
</table>

### FactorStyleItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>style</strong></td>
<td valign="top"><a href="#factorstyleenum">FactorStyleEnum</a></td>
<td>

팩터 스타일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

팩터 스타일명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

팩터 설명글

</td>
</tr>
</tbody>
</table>

### FactorValueItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

최소값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

최대값

</td>
</tr>
</tbody>
</table>

### Factors

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>factors</strong></td>
<td valign="top">[<a href="#factorstype">FactorsType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### FactorsType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>style</strong></td>
<td valign="top"><a href="#factorstyleitem">FactorStyleItem</a></td>
<td>

팩터 스타일 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>factors</strong></td>
<td valign="top">[<a href="#factoritem">FactorItem</a>]</td>
<td>

해당 스타일에 속한 팩터들

</td>
</tr>
</tbody>
</table>

### ForwardSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>period</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

투자기간

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>investmentAmount</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

투자금액

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valuationAmount</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

평가금액

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gainOrLossValuation</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

평가손익

</td>
</tr>
</tbody>
</table>

### FunctionAuth

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategyEditFullAccess</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

전략편집 완전수정 여부

</td>
</tr>
</tbody>
</table>

### HistogramItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>range</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td>

히스토그램 범위

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>factorRange</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td>

팩터 최소 최대 값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stickCounts</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td>

히스토그램 막대별 개수 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>low</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td>

상위 60% min, max 값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>middle</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td>

상위 40% min, max 값

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>high</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td>

상위 20% min, max 값

</td>
</tr>
</tbody>
</table>

### HoldingPosition

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdingPosition</strong></td>
<td valign="top"><a href="#holdingpositiontype">HoldingPositionType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### HoldingPositionAll

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdingPositionAll</strong></td>
<td valign="top"><a href="#holdingpositionalltype">HoldingPositionAllType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### HoldingPositionAllType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top">[<a href="#holdingpositionitem">HoldingPositionItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cash</strong></td>
<td valign="top"><a href="#cashitem">CashItem</a></td>
<td>

현금 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### HoldingPositionItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ccid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

CCID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목 코드

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sector</strong></td>
<td valign="top"><a href="#sectorenum">SectorEnum</a></td>
<td>

종목 섹터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectorName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

종목 섹터명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industry</strong></td>
<td valign="top"><a href="#industryenum">IndustryEnum</a></td>
<td>

종목 산업

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industryName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

종목 산업명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

종목 비중(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volume</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

수량

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

종가

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>share</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

1주당 비중

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isWhitelist</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

화이트리스트 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdd</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

추가종목 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synonym</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

동의어

</td>
</tr>
</tbody>
</table>

### HoldingPositionType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top">[<a href="#holdingpositionitem">HoldingPositionItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

전체 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPage</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

전체 페이지 수

</td>
</tr>
</tbody>
</table>

### HoldingType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top">[<a href="#holdingpositionitem">HoldingPositionItem</a>]</td>
<td>

종목 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseHoldings</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

기준종목 ccid 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excludeHoldings</strong></td>
<td valign="top">[<a href="#holdingpositionitem">HoldingPositionItem</a>]</td>
<td>

종목 리스트

</td>
</tr>
</tbody>
</table>

### Holdings

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top"><a href="#holdingtype">HoldingType</a></td>
<td>

종목 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### IndustryItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>industry</strong></td>
<td valign="top"><a href="#industryenum">IndustryEnum</a>!</td>
<td>

업종

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

업종명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isChecked</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

사용자가 선택한 업종 여부

</td>
</tr>
</tbody>
</table>

### IsBacktestData

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>isBacktestData</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

백테스트 데이터 유무

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### LoginAdminUser

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>loginInfo</strong></td>
<td valign="top"><a href="#logininfotype">LoginInfoType</a></td>
<td>

로그인 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### LoginInfoType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>adminUser</strong></td>
<td valign="top"><a href="#adminusertype">AdminUserType</a></td>
<td></td>
</tr>
</tbody>
</table>

### MasterStrategyType

대가들의 전략

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>img</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

대가의 이미지

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>masterFactors</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

상세 투자 전략 

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>masterSrc</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

투자 전략 출처

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a>!</td>
<td>

전략카테고리

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shortDescription</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

짧은 소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a>!</td>
<td>

전략 상태

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universe</strong></td>
<td valign="top"><a href="#universetype">UniverseType</a>!</td>
<td>

유니버스

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universePreset</strong></td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a>!</td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalUsesCnt</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

누적 이용자 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blacklist</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

블랙리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptiontype">SimulationOptionType</a></td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

등록일, unixtimestamp milliseconds

</td>
</tr>
</tbody>
</table>

### MenuAuth

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

메뉴 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

메뉴 CODE

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

메뉴명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>auth</strong></td>
<td valign="top"><a href="#menuroleenum">MenuRoleEnum</a>!</td>
<td>

권한

</td>
</tr>
</tbody>
</table>

### MyCumulativeReturn

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myCumulativeReturn</strong></td>
<td valign="top"><a href="#mycumulativereturntype">MyCumulativeReturnType</a></td>
<td>

누적 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyCumulativeReturnType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#myreturninfoitem">MyReturnInfoItem</a></td>
<td>

누적 수익률 항목 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chart</strong></td>
<td valign="top">[<a href="#myreturnchartitem">MyReturnChartItem</a>]</td>
<td>

누적 수익률 차트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### MyDrawdown

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myDrawdown</strong></td>
<td valign="top"><a href="#mydrawdowntype">MyDrawdownType</a></td>
<td>

drawdown

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyDrawdownType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chart</strong></td>
<td valign="top">[<a href="#myreturnchartitem">MyReturnChartItem</a>]</td>
<td>

drawdown 차트

</td>
</tr>
</tbody>
</table>

### MyExposure

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myExposure</strong></td>
<td valign="top"><a href="#myexposuretype">MyExposureType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyExposureType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#exposureitem">ExposureItem</a></td>
<td>

내 전략 익스포저

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#exposureitem">ExposureItem</a></td>
<td>

베이스 전략 익스포저

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### MyFactors

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myFactors</strong></td>
<td valign="top">[<a href="#factorstype">FactorsType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyHoldingPosition

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myHoldingPosition</strong></td>
<td valign="top"><a href="#holdingpositiontype">HoldingPositionType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyHoldingPositionAll

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myHoldingPositionAll</strong></td>
<td valign="top"><a href="#holdingpositionalltype">HoldingPositionAllType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyHoldings

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myHoldings</strong></td>
<td valign="top"><a href="#holdingtype">HoldingType</a></td>
<td>

종목 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyPeriodReturn

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myPeriodReturn</strong></td>
<td valign="top"><a href="#myperiodreturntype">MyPeriodReturnType</a></td>
<td>

기간별 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyPeriodReturnType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chart</strong></td>
<td valign="top">[<a href="#myreturnchartitem">MyReturnChartItem</a>]</td>
<td>

기간별 수익률 차트

</td>
</tr>
</tbody>
</table>

### MyRebalancingHistory

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myRebalancingHistory</strong></td>
<td valign="top"><a href="#rebalancinghistorytype">RebalancingHistoryType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyRebalancingPositionList

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myRebalancingPositionList</strong></td>
<td valign="top"><a href="#rebalancingpositionlisttype">RebalancingPositionListType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyRebalancingPositionTreemap

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myRebalancingPositionTreemap</strong></td>
<td valign="top"><a href="#rebalancingpositiontreemaptype">RebalancingPositionTreemapType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyReturnChartItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ts</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

벤치마크 수익률

</td>
</tr>
</tbody>
</table>

### MyReturnInfoItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

내 전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

벤치마크 수익률

</td>
</tr>
</tbody>
</table>

### MyRiskAssessmentIndex

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myRiskAssessmentIndex</strong></td>
<td valign="top"><a href="#myriskassessmentindextype">MyRiskAssessmentIndexType</a></td>
<td>

위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyRiskAssessmentIndexType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#myriskassessmentinfoitem">MyRiskAssessmentInfoItem</a></td>
<td>

위험평가지표 정보

</td>
</tr>
</tbody>
</table>

### MyRiskAssessmentInfoItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

전략 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

전략 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

벤치마크 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>etc</strong></td>
<td valign="top"><a href="#riskassessmentetcitem">RiskAssessmentEtcItem</a></td>
<td>

기타 위험평가지표

</td>
</tr>
</tbody>
</table>

### MySectors

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>mySectors</strong></td>
<td valign="top">[<a href="#sectortype">SectorType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#mystrategytype">MyStrategyType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyStrategyBlacklist

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategyBlacklist</strong></td>
<td valign="top">[<a href="#holdingpositionitem">HoldingPositionItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyStrategyConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#mystrategyedge">MyStrategyEdge</a>]!</td>
<td>

Contains the nodes in this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyStrategyEdge

A Relay edge containing a `MyStrategy` and its cursor.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#mystrategytype">MyStrategyType</a></td>
<td>

The item at the end of the edge

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination

</td>
</tr>
</tbody>
</table>

### MyStrategyReturnSummaryItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnSummary</strong></td>
<td valign="top"><a href="#returnsummarytype">ReturnSummaryType</a></td>
<td></td>
</tr>
</tbody>
</table>

### MyStrategyReturnSummaryType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>forward</strong></td>
<td valign="top"><a href="#mystrategyreturnsummaryitem">MyStrategyReturnSummaryItem</a></td>
<td>

모의투자 성과

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backtest</strong></td>
<td valign="top"><a href="#mystrategyreturnsummaryitem">MyStrategyReturnSummaryItem</a></td>
<td>

백테스트 성과

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseStrategyCumulative</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

기초전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarkCumulative</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

벤치마크 수익률

</td>
</tr>
</tbody>
</table>

### MyStrategyStyle

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#mystrategystyleinfo">MyStrategyStyleInfo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyStrategyStyleInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>myStrategy</strong></td>
<td valign="top"><a href="#strategyfactorstyle">StrategyFactorStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#strategyfactorstyle">StrategyFactorStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#strategyfactorstyle">StrategyFactorStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarkName</strong></td>
<td valign="top"><a href="#universeenum">UniverseEnum</a></td>
<td>

벤치마크명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>factorInfo</strong></td>
<td valign="top">[<a href="#factorinfo">FactorInfo</a>]</td>
<td>

투자 전략 상세

</td>
</tr>
</tbody>
</table>

### MyStrategyType

내 전략

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#strategyunion">StrategyUnion</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a>!</td>
<td>

전략카테고리

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a>!</td>
<td>

전략 상태

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>whitelist</strong></td>
<td valign="top">[<a href="#whitelisttype">WhiteListType</a>]</td>
<td>

화이트리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSimple</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

간편편집 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActiveKbContract</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

KB 계약 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isForwardAvailable</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

모의투자 성과 확인가능 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>portfolioId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

KB에 전달할 내전략(Portfolio) ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universePreset</strong></td>
<td valign="top"><a href="#universepresettype">UniversePresetType</a>!</td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universe</strong></td>
<td valign="top"><a href="#universetype">UniverseType</a>!</td>
<td>

유니버스

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptiontype">SimulationOptionType</a></td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarks</strong></td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

벤치마크

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancingInfo</strong></td>
<td valign="top"><a href="#rebalancinginfo">RebalancingInfo</a></td>
<td>

최신 리밸런싱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseStrategyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

베이스 전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnSummary</strong></td>
<td valign="top"><a href="#mystrategyreturnsummarytype">MyStrategyReturnSummaryType</a></td>
<td>

수익률 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectorIndustrySummary</strong></td>
<td valign="top"><a href="#sectorindustrysummarytype">SectorIndustrySummaryType</a></td>
<td>

섹터/산업 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

전략 생성일 (unixtimestamp milliseconds)

</td>
</tr>
</tbody>
</table>

### MyStyleFactors

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStyleFactors</strong></td>
<td valign="top"><a href="#stylefactorstype">StyleFactorsType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MyUniversePresets

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myUniversePresets</strong></td>
<td valign="top">[<a href="#universepresetitem">UniversePresetItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ObtainJSONWebToken

Obtain JSON Web Token mutation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>payload</strong></td>
<td valign="top"><a href="#genericscalar">GenericScalar</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshExpiresIn</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Organization

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organizationtype">OrganizationType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### OrganizationType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

소속명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeSrc</strong></td>
<td valign="top"><a href="#themesrcenum">ThemeSrcEnum</a>!</td>
<td>

해당 소속의 테마출처

</td>
</tr>
</tbody>
</table>

### Organizations

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>organizations</strong></td>
<td valign="top">[<a href="#organizationtype">OrganizationType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### PageInfo

The Relay compliant `PageInfo` type, containing data necessary to paginate this connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

When paginating forwards, are there more items?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

When paginating backwards, are there more items?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

When paginating backwards, the cursor to continue.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

When paginating forwards, the cursor to continue.

</td>
</tr>
</tbody>
</table>

### PeriodReturn

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>periodReturn</strong></td>
<td valign="top"><a href="#periodreturntype">PeriodReturnType</a></td>
<td>

기간별 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### PeriodReturnType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chart</strong></td>
<td valign="top">[<a href="#returnchartitem">ReturnChartItem</a>]</td>
<td>

기간별 수익률 차트

</td>
</tr>
</tbody>
</table>

### RebalancingHistory

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>rebalancingHistory</strong></td>
<td valign="top"><a href="#rebalancinghistorytype">RebalancingHistoryType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### RebalancingHistoryItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ts</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top">[<a href="#weightitem">WeightItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cash</strong></td>
<td valign="top"><a href="#cashitem">CashItem</a></td>
<td>

현금 정보

</td>
</tr>
</tbody>
</table>

### RebalancingHistoryType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top">[<a href="#rebalancinghistoryitem">RebalancingHistoryItem</a>]</td>
<td>

리밸런싱 이력 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancing</strong></td>
<td valign="top"><a href="#strategyrebalancingoptionenum">StrategyRebalancingOptionEnum</a></td>
<td>

리밸런싱 주기

</td>
</tr>
</tbody>
</table>

### RebalancingHoldingItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdingInfo</strong></td>
<td valign="top"><a href="#holdingpositionitem">HoldingPositionItem</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buySell</strong></td>
<td valign="top"><a href="#buysellenum">BuySellEnum</a>!</td>
<td>

매수/매도

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnRate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

수익률

</td>
</tr>
</tbody>
</table>

### RebalancingInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>recentTs</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

최신 리밸런싱 일자

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cnt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

리밸런싱 횟수

</td>
</tr>
</tbody>
</table>

### RebalancingPositionList

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>rebalancingPositionList</strong></td>
<td valign="top"><a href="#rebalancingpositionlisttype">RebalancingPositionListType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### RebalancingPositionListType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top">[<a href="#rebalancingholdingitem">RebalancingHoldingItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

전체 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPage</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

전체 페이지 수

</td>
</tr>
</tbody>
</table>

### RebalancingPositionTreemap

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>rebalancingPositionTreemap</strong></td>
<td valign="top"><a href="#rebalancingpositiontreemaptype">RebalancingPositionTreemapType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### RebalancingPositionTreemapType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top">[<a href="#weightitem">WeightItem</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### Refresh

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>payload</strong></td>
<td valign="top"><a href="#genericscalar">GenericScalar</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshExpiresIn</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RepresentativeProduct

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목코드

</td>
</tr>
</tbody>
</table>

### ReturnChartItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ts</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

벤치마크 수익률

</td>
</tr>
</tbody>
</table>

### ReturnInfoItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

전략 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

벤치마크 수익률

</td>
</tr>
</tbody>
</table>

### ReturnItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

항목명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

항목값

</td>
</tr>
</tbody>
</table>

### ReturnSummaryType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cumulative</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

누적수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month1</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

1개월 수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month3</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

3개월 수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month6</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

6개월 수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sharpe</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

샤프지수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volatility</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

변동성(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mdd</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

mdd(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>annualAvgReturn</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

연평균 수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>annualAvgVolatility</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

연평균 변동성(%)

</td>
</tr>
</tbody>
</table>

### RiskAssessmentEtcItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>excessReturn</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

초과 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackingError</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

추적오차(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>infoRatio</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

정보비율

</td>
</tr>
</tbody>
</table>

### RiskAssessmentIndex

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>riskAssessmentIndex</strong></td>
<td valign="top"><a href="#riskassessmentindextype">RiskAssessmentIndexType</a></td>
<td>

위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### RiskAssessmentIndexType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#riskassessmentinfoitem">RiskAssessmentInfoItem</a></td>
<td>

위험평가지표 정보

</td>
</tr>
</tbody>
</table>

### RiskAssessmentInfoItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

전략 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#riskassessmentitem">RiskAssessmentItem</a></td>
<td>

벤치마크 위험평가지표

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>etc</strong></td>
<td valign="top"><a href="#riskassessmentetcitem">RiskAssessmentEtcItem</a></td>
<td>

기타 위험평가지표

</td>
</tr>
</tbody>
</table>

### RiskAssessmentItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

항목명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cumulative</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

누적수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volatility</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

변동성(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sharpe</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

샤프지수(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mdd</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

MDD(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>annualAvgReturn</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

연평균수익률(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>annualAvgVolatility</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

연평균변동성(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeCumulative</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

환율적용된 누적수익률(%)

</td>
</tr>
</tbody>
</table>

### SaveMyStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>myStrategyId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SearchHoldings

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>searchHoldings</strong></td>
<td valign="top"><a href="#searchholdingstype">SearchHoldingsType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SearchHoldingsType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>holdings</strong></td>
<td valign="top">[<a href="#holdingpositionitem">HoldingPositionItem</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SectorIndustryStrategyType

섹터/산업 전략

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>img</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

업종의 이미지

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sector</strong></td>
<td valign="top"><a href="#sectorenum">SectorEnum</a>!</td>
<td>

섹터명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industry</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

산업명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a>!</td>
<td>

전략카테고리

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shortDescription</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

짧은 소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a>!</td>
<td>

전략 상태

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universe</strong></td>
<td valign="top"><a href="#universetype">UniverseType</a>!</td>
<td>

유니버스

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universePreset</strong></td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a>!</td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalUsesCnt</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

누적 이용자 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blacklist</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

블랙리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptiontype">SimulationOptionType</a></td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

등록일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnSummary</strong></td>
<td valign="top"><a href="#returnsummarytype">ReturnSummaryType</a></td>
<td>

수익률 정보들

</td>
</tr>
</tbody>
</table>

### SectorIndustrySummaryItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sector</strong></td>
<td valign="top"><a href="#sectorenum">SectorEnum</a></td>
<td>

섹터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectorName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

섹터명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industries</strong></td>
<td valign="top">[<a href="#industryenum">IndustryEnum</a>]</td>
<td>

산업 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industriesName</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

산업명 리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSelectAll</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

전체선택 여부

</td>
</tr>
</tbody>
</table>

### SectorIndustrySummaryType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCnt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

선택된 산업 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top">[<a href="#sectorindustrysummaryitem">SectorIndustrySummaryItem</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SectorType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sector</strong></td>
<td valign="top"><a href="#sectorenum">SectorEnum</a>!</td>
<td>

섹터

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

섹터명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industries</strong></td>
<td valign="top">[<a href="#industryitem">IndustryItem</a>]</td>
<td>

섹터안의 업종

</td>
</tr>
</tbody>
</table>

### Sectors

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sectors</strong></td>
<td valign="top">[<a href="#sectortype">SectorType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SignOn

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SignUp

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SimulationOptionType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

시작일, unixtimestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optimization</strong></td>
<td valign="top"><a href="#strategyoptimizationenum">StrategyOptimizationEnum</a>!</td>
<td>

최적화 기준

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancing</strong></td>
<td valign="top"><a href="#strategyrebalancingoptionenum">StrategyRebalancingOptionEnum</a></td>
<td>

리밸런싱 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excludeAdministration</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

관리종목 제외 가능

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>marketCapLimit</strong></td>
<td valign="top"><a href="#strategymarketcapenum">StrategyMarketCapEnum</a>!</td>
<td>

시가총액 제한

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tradingAmountLimit</strong></td>
<td valign="top"><a href="#strategyamountenum">StrategyAmountEnum</a>!</td>
<td>

거래대금 제한

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>booksize</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

투자금액

</td>
</tr>
</tbody>
</table>

### Strategies

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategies</strong></td>
<td valign="top">[<a href="#strategyunion">StrategyUnion</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

총 컨텐츠 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPage</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

총 페이지 수

</td>
</tr>
</tbody>
</table>

### StrategiesWithPaging

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategies</strong></td>
<td valign="top"><a href="#strategies">Strategies</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### Strategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#strategyunion">StrategyUnion</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### StrategyConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#strategyedge">StrategyEdge</a>]!</td>
<td>

Contains the nodes in this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### StrategyEdge

A Relay edge containing a `Strategy` and its cursor.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#strategyunion">StrategyUnion</a></td>
<td>

The item at the end of the edge

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination

</td>
</tr>
</tbody>
</table>

### StrategyFactorStyle

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>size</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

시총/자산

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

가치

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>momentum</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

성장

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quality</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

퀄리티

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volatility</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

변동성

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>beta</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

시장 민감도

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dividend</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

배당

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>surprise</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

어닝 서프라이즈

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>liquidity</strong></td>
<td valign="top"><a href="#strategyfactorstyleitem">StrategyFactorStyleItem</a></td>
<td>

수급

</td>
</tr>
</tbody>
</table>

### StrategyFactorStyleItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

스타일 명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

스타일 값, range: 0.0 ~ 6.0

</td>
</tr>
</tbody>
</table>

### StrategyReturnType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

대표 유니버스 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cumulative</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

누적 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

1개월 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quarter</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

3개월 수익률

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>half</strong></td>
<td valign="top"><a href="#returnitem">ReturnItem</a></td>
<td>

6개월 수익률

</td>
</tr>
</tbody>
</table>

### StrategyStyle

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#strategystyleinfo">StrategyStyleInfo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### StrategyStyleInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategy</strong></td>
<td valign="top"><a href="#strategyfactorstyle">StrategyFactorStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strategyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmark</strong></td>
<td valign="top"><a href="#strategyfactorstyle">StrategyFactorStyle</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarkName</strong></td>
<td valign="top"><a href="#universeenum">UniverseEnum</a></td>
<td>

벤치마크명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
</tbody>
</table>

### StyleFactorItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>style</strong></td>
<td valign="top"><a href="#factorstyleitem">FactorStyleItem</a></td>
<td>

팩터 스타일 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cmName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

cm_name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultGrade</strong></td>
<td valign="top"><a href="#gradeenum">GradeEnum</a></td>
<td>

사용자가 선택한 상,중,하 값

</td>
</tr>
</tbody>
</table>

### StyleFactorSimpleGrade

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>low</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>middle</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>high</strong></td>
<td valign="top"><a href="#factorvalueitem">FactorValueItem</a></td>
<td></td>
</tr>
</tbody>
</table>

### StyleFactors

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>styleFactors</strong></td>
<td valign="top"><a href="#stylefactorstype">StyleFactorsType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### StyleFactorsType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>simplePrest</strong></td>
<td valign="top"><a href="#stylefactorsimplegrade">StyleFactorSimpleGrade</a></td>
<td>

약, 중, 강 min, max 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>styleFactors</strong></td>
<td valign="top">[<a href="#stylefactoritem">StyleFactorItem</a>]</td>
<td>

스타일 팩터 정보

</td>
</tr>
</tbody>
</table>

### SyncMyStrategyHoldings

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ThemeGroup

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>themeGroup</strong></td>
<td valign="top"><a href="#themegrouptype">ThemeGroupType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ThemeGroupType

테마그룹

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

테마그룹명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>remarks</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

비고

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

상태값

</td>
</tr>
</tbody>
</table>

### ThemeGroups

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>themeGroups</strong></td>
<td valign="top">[<a href="#themegrouptype">ThemeGroupType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ThemeHolding

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>shortCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목코드

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목명

</td>
</tr>
</tbody>
</table>

### ThemeStrategyType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#strategycategoryenum">StrategyCategoryEnum</a>!</td>
<td>

전략카테고리

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shortDescription</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

짧은 소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a>!</td>
<td>

전략 상태

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universe</strong></td>
<td valign="top"><a href="#universetype">UniverseType</a>!</td>
<td>

유니버스

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universePreset</strong></td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a>!</td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalUsesCnt</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

누적 이용자 수

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseDate</strong></td>
<td valign="top"><a href="#basedate">BaseDate</a></td>
<td>

기준일

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blacklist</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

블랙리스트

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptiontype">SimulationOptionType</a></td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

등록일, unixtimestamp milliseconds

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnSummary</strong></td>
<td valign="top"><a href="#returnsummarytype">ReturnSummaryType</a></td>
<td>

수익률 정보들

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>benchmarks</strong></td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]</td>
<td>

벤치마크

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeSrc</strong></td>
<td valign="top"><a href="#themesrcenum">ThemeSrcEnum</a></td>
<td>

테마 출처

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayThemeName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

테마명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeExtractionDate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

테마 키워드 추출일, unixtimestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>adminUser</strong></td>
<td valign="top"><a href="#adminusertype">AdminUserType</a></td>
<td>

전략 등록자 정보

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeHoldings</strong></td>
<td valign="top">[<a href="#themeholding">ThemeHolding</a>]</td>
<td>

테마 종목

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActiveStrategy</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Active 전략 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeCmUpdateScheduleDate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

테마 CM 업데이트 반영일, unixtimestamp

</td>
</tr>
</tbody>
</table>

### UniverseCountryType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#universecountryenum">UniverseCountryEnum</a></td>
<td>

유니버스 국가

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universes</strong></td>
<td valign="top">[<a href="#universeitem">UniverseItem</a>]</td>
<td>

국가에 포함되는 유니버스들

</td>
</tr>
</tbody>
</table>

### UniverseItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#universeenum">UniverseEnum</a></td>
<td>

유니버스명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

유니버스 설명글

</td>
</tr>
</tbody>
</table>

### UniversePresetItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a>!</td>
<td>

유니버스 프리셋 이름

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

사용자에게 보여질 이름

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

유니버스 프리셋 설명글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universes</strong></td>
<td valign="top">[<a href="#universeenum">UniverseEnum</a>]!</td>
<td>

해당 유니버스 프리셋에 속해 있는 유니버스 

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isChecked</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

사용자가 선택한 유니버스 프리셋 여부

</td>
</tr>
</tbody>
</table>

### UniversePresetType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>universePreset</strong></td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

유니버스 프리셋 이름

</td>
</tr>
</tbody>
</table>

### UniversePresets

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>universePresets</strong></td>
<td valign="top">[<a href="#universepresetitem">UniversePresetItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UniverseType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#universeenum">UniverseEnum</a></td>
<td>

유니버스

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#universecountryenum">UniverseCountryEnum</a></td>
<td>

유니버스 국가

</td>
</tr>
</tbody>
</table>

### Universes

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>universes</strong></td>
<td valign="top">[<a href="#universecountrytype">UniverseCountryType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateAdminUser

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateAdminUserPassword

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateMyStrategyName

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateStrategyStatus

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateThemeStrategy

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### User

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#usertype">UserType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errors</strong></td>
<td valign="top">[<a href="#error">Error</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### UserType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#roleenum">RoleEnum</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isStrategyCreationPossible</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

국내 전략생성 가능여부, True: 전략  생성가능, False: 전략 생성불가능

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isStrategyCreationPossibleUs</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

미국 전략생성 가능여부, True: 전략  생성가능, False: 전략 생성불가능

</td>
</tr>
</tbody>
</table>

### Verify

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>payload</strong></td>
<td valign="top"><a href="#genericscalar">GenericScalar</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WeightItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

항목명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

비중(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synonym</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

동의어

</td>
</tr>
</tbody>
</table>

### WhiteListType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ccid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

ccid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

비중

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdd</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

추가종목 여부

</td>
</tr>
</tbody>
</table>

## Inputs

### FactorInputItem

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cmName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

팩터 cm_name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

min

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

max

</td>
</tr>
</tbody>
</table>

### FunctionAuthInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>strategyEditFullAccess</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

전략편집 완전수정 권한 여부

</td>
</tr>
</tbody>
</table>

### MenuAuthInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>menuCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

메뉴 CODE

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuAuth</strong></td>
<td valign="top"><a href="#menuroleenum">MenuRoleEnum</a>!</td>
<td>

권한

</td>
</tr>
</tbody>
</table>

### SimulationOptionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>optimization</strong></td>
<td valign="top"><a href="#strategyoptimizationenum">StrategyOptimizationEnum</a>!</td>
<td>

최적화 기준

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancing</strong></td>
<td valign="top"><a href="#strategyrebalancingoptionenum">StrategyRebalancingOptionEnum</a></td>
<td>

리밸런싱 옵션 (리밸런싱 없음 = null)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

시작일, unixtimestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tradingAmountLimit</strong></td>
<td valign="top"><a href="#strategyamountenum">StrategyAmountEnum</a>!</td>
<td>

시가총액 제외 %

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>marketCapLimit</strong></td>
<td valign="top"><a href="#strategymarketcapenum">StrategyMarketCapEnum</a>!</td>
<td>

거래대금 제외 금액

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excludeAdministration</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

관리종목 제외 여부

</td>
</tr>
</tbody>
</table>

### SimulationOptionScreeningInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

시작일, unixtimestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optimization</strong></td>
<td valign="top"><a href="#strategyoptimizationenum">StrategyOptimizationEnum</a>!</td>
<td>

최적화 기준

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rebalancing</strong></td>
<td valign="top"><a href="#strategyrebalancingoptionenum">StrategyRebalancingOptionEnum</a></td>
<td>

리밸런싱 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excludeAdministration</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

관리종목 제외 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tradingAmountLimit</strong></td>
<td valign="top"><a href="#strategyamountenum">StrategyAmountEnum</a></td>
<td>

시가총액 제외 %

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>marketCapLimit</strong></td>
<td valign="top"><a href="#strategymarketcapenum">StrategyMarketCapEnum</a></td>
<td>

거래대금 제외 금액

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>booksize</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

투자금액

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blacklist</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

제외한 종목 ccid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>whitelist</strong></td>
<td valign="top">[<a href="#whitelistinputitem">WhitelistInputItem</a>!]!</td>
<td>

추가한 종목 ccid, 비중

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universePreset</strong></td>
<td valign="top"><a href="#universepresetenum">UniversePresetEnum</a></td>
<td>

선택한 유니버스 프리셋

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>industries</strong></td>
<td valign="top">[<a href="#industryenum">IndustryEnum</a>!]</td>
<td>

선택한 산업 List

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>factors</strong></td>
<td valign="top">[<a href="#factorinputitem">FactorInputItem</a>!]!</td>
<td>

선택한 팩터 List

</td>
</tr>
</tbody>
</table>

### ThemeHoldingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>shortCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목코드

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

종목명

</td>
</tr>
</tbody>
</table>

### ThemeStrategyInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

전략명

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeSrc</strong></td>
<td valign="top"><a href="#themesrcenum">ThemeSrcEnum</a>!</td>
<td>

테마출처

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayThemeName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

테마키워드

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActiveStrategy</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Active 전략 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shortDescription</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

짧은 소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

긴 소개글

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>themeHoldings</strong></td>
<td valign="top">[<a href="#themeholdinginput">ThemeHoldingInput</a>!]!</td>
<td>

포트폴리오 종목

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>simulationOption</strong></td>
<td valign="top"><a href="#simulationoptioninput">SimulationOptionInput</a>!</td>
<td>

시뮬레이션 옵션

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>universeCountry</strong></td>
<td valign="top"><a href="#universecountryenum">UniverseCountryEnum</a></td>
<td>

국가

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#strategystatusenum">StrategyStatusEnum</a></td>
<td>

전략 상태

</td>
</tr>
</tbody>
</table>

### WhitelistInputItem

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ccid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

ccid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

비중(%)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdd</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

추가항목 여부

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLastEdit</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

마지막 수정 여부

</td>
</tr>
</tbody>
</table>

## Enums

### BuySellEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BUY</strong></td>
<td>

매수

</td>
</tr>
<tr>
<td valign="top"><strong>SELL</strong></td>
<td>

매도

</td>
</tr>
</tbody>
</table>

### FactorStyleEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>SIZE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VALUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MOMENTUM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUALITY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VOLATILITY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BETA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DIVIDEND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SURPRISE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LIQUIDITY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SCORE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STYLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MASTER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### GradeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>HIGH</strong></td>
<td>

상

</td>
</tr>
<tr>
<td valign="top"><strong>MIDDLE</strong></td>
<td>

중

</td>
</tr>
<tr>
<td valign="top"><strong>LOW</strong></td>
<td>

하

</td>
</tr>
</tbody>
</table>

### IndustryEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ENERGY</strong></td>
<td>

에너지 > 에너지

</td>
</tr>
<tr>
<td valign="top"><strong>MATERIALS</strong></td>
<td>

소재 > 소재

</td>
</tr>
<tr>
<td valign="top"><strong>CAPITAL_GOODS</strong></td>
<td>

산업재 > 자본재

</td>
</tr>
<tr>
<td valign="top"><strong>COMMERCIAL_PROFESSIONAL_SERVICES</strong></td>
<td>

산업재 > 상업 및 전문 서비스

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSPORTATION</strong></td>
<td>

산업재 > 운송

</td>
</tr>
<tr>
<td valign="top"><strong>AUTOMOBILES_COMPONENTS</strong></td>
<td>

임의소비재 > 자동차 및 부품

</td>
</tr>
<tr>
<td valign="top"><strong>CONSUMER_DURABLES_APPAREL</strong></td>
<td>

임의소비재 > 내구 소비재 및 의류

</td>
</tr>
<tr>
<td valign="top"><strong>CONSUMER_SERVICES</strong></td>
<td>

임의소비재 > 소비자 서비스

</td>
</tr>
<tr>
<td valign="top"><strong>RETAILING</strong></td>
<td>

임의소비재 > 소매

</td>
</tr>
<tr>
<td valign="top"><strong>FOOD_STAPLES_RETAILING</strong></td>
<td>

필수소비재 > 식품 및 필수품 소매

</td>
</tr>
<tr>
<td valign="top"><strong>FOOD_BEVERAGE_TOBACCO</strong></td>
<td>

 필수소비재 > 식품, 음료 및 담배

</td>
</tr>
<tr>
<td valign="top"><strong>HOUSEHOLD_PERSONAL_PRODUCTS</strong></td>
<td>

필수소비재 > 가정용품 및 개인용품

</td>
</tr>
<tr>
<td valign="top"><strong>HEALTH_CARE_EQUIPMENT_SERVICES</strong></td>
<td>

헬스케어 > 헬스케어 장비 및 서비스

</td>
</tr>
<tr>
<td valign="top"><strong>PHARMACEUTICALS_BIOTECHNOLOGY_LIFE_SCIENCES</strong></td>
<td>

헬스케어 > 제약, 생명공학 및 생명과학

</td>
</tr>
<tr>
<td valign="top"><strong>BANKS</strong></td>
<td>

금융 > 은행

</td>
</tr>
<tr>
<td valign="top"><strong>DIVERSIFIED_FINANCIALS</strong></td>
<td>

금융 > 다양한 금융

</td>
</tr>
<tr>
<td valign="top"><strong>INSURANCE</strong></td>
<td>

금융 > 보험

</td>
</tr>
<tr>
<td valign="top"><strong>SOFTWARE_SERVICES</strong></td>
<td>

정보 기술 > 소프트웨어 및 서비스

</td>
</tr>
<tr>
<td valign="top"><strong>TECHNOLOGY_HARDWARE_EQUIPMENT</strong></td>
<td>

정보 기술 > 기술 하드웨어 및 장비

</td>
</tr>
<tr>
<td valign="top"><strong>SEMICONDUCTORS_SEMICONDUCTOR_EQUIPMENT</strong></td>
<td>

정보 기술 > 반도체 및 반도체 장비

</td>
</tr>
<tr>
<td valign="top"><strong>TELECOMMUNICATION_SERVICES</strong></td>
<td>

커뮤니케이션 서비스 > 통신 서비스

</td>
</tr>
<tr>
<td valign="top"><strong>MEDIA_ENTERTAINMENT</strong></td>
<td>

커뮤니케이션 서비스 > 미디어 및 엔터테인먼트

</td>
</tr>
<tr>
<td valign="top"><strong>UTILITIES</strong></td>
<td>

유틸리티 > 유틸리티

</td>
</tr>
<tr>
<td valign="top"><strong>REAL_ESTATE</strong></td>
<td>

부동산 > 부동산

</td>
</tr>
<tr>
<td valign="top"><strong>REAL_ESTATE_MANAGEMENT_DEVELOPMENT</strong></td>
<td>

부동산 > 부동산 관리 및 개발

</td>
</tr>
<tr>
<td valign="top"><strong>UNCLASSIFIED</strong></td>
<td>

미분류 > 미분류

</td>
</tr>
</tbody>
</table>

### IntervalEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DAY</strong></td>
<td>

1일

</td>
</tr>
<tr>
<td valign="top"><strong>WEEK</strong></td>
<td>

1주

</td>
</tr>
<tr>
<td valign="top"><strong>MONTH</strong></td>
<td>

1달, 월간

</td>
</tr>
<tr>
<td valign="top"><strong>QUARTER</strong></td>
<td>

3달, 분기

</td>
</tr>
<tr>
<td valign="top"><strong>HALF</strong></td>
<td>

6달, 반기

</td>
</tr>
<tr>
<td valign="top"><strong>YEAR</strong></td>
<td>

1년, 연간

</td>
</tr>
</tbody>
</table>

### KbError

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>INVALID_PARAMETER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_STATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_PERMISSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DOES_NOT_EXIST</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>API_REQ_FAIL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KB_API_REQ_FAIL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_PASSWORD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SAME_PASSWORD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DUPLICATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXCEEDED_MAX_CNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CAN_NOT_DELETE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CAN_NOT_UPDATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_ACTIVE_ADMIN_USER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MenuRoleEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NOT_USE</strong></td>
<td>

미사용

</td>
</tr>
<tr>
<td valign="top"><strong>READ_ONLY</strong></td>
<td>

읽기

</td>
</tr>
<tr>
<td valign="top"><strong>READ_EDIT</strong></td>
<td>

읽기/편집

</td>
</tr>
</tbody>
</table>

### MyStrategyOrderType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FORWARD_START_DATE</strong></td>
<td>

전략 생성 최신순

</td>
</tr>
<tr>
<td valign="top"><strong>FORWARD_CUMULATIVE</strong></td>
<td>

모의투자 

</td>
</tr>
<tr>
<td valign="top"><strong>BENCHMARK_OR_BASE_STRATEGY_CUMULATIVE</strong></td>
<td>

기초전략 수익률, 벤치마크 수익률 높은순

</td>
</tr>
<tr>
<td valign="top"><strong>BACKTEST_CUMULATIVE</strong></td>
<td>

백테스트 누적수익률 높은순

</td>
</tr>
</tbody>
</table>

### PeriodEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MONTH</strong></td>
<td>

1달

</td>
</tr>
<tr>
<td valign="top"><strong>QUARTER</strong></td>
<td>

3달

</td>
</tr>
<tr>
<td valign="top"><strong>HALF</strong></td>
<td>

6달

</td>
</tr>
<tr>
<td valign="top"><strong>YEAR</strong></td>
<td>

1년

</td>
</tr>
<tr>
<td valign="top"><strong>THREE_YEARS</strong></td>
<td>

3년

</td>
</tr>
<tr>
<td valign="top"><strong>FIVE_YEARS</strong></td>
<td>

5년

</td>
</tr>
</tbody>
</table>

### RoleEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>GENERAL</strong></td>
<td>

일반회원

</td>
</tr>
<tr>
<td valign="top"><strong>SUBSCRIPTION</strong></td>
<td>

구독회원,

</td>
</tr>
</tbody>
</table>

### SectorEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ENERGY</strong></td>
<td>

에너지

</td>
</tr>
<tr>
<td valign="top"><strong>MATERIALS</strong></td>
<td>

소재

</td>
</tr>
<tr>
<td valign="top"><strong>INDUSTRIALS</strong></td>
<td>

산업재

</td>
</tr>
<tr>
<td valign="top"><strong>CONSUMER_DISCRETIONARY</strong></td>
<td>

임의소비재

</td>
</tr>
<tr>
<td valign="top"><strong>CONSUMER_STAPLES</strong></td>
<td>

필수소비재

</td>
</tr>
<tr>
<td valign="top"><strong>HEALTH_CARE</strong></td>
<td>

헬스케어

</td>
</tr>
<tr>
<td valign="top"><strong>FINANCIALS</strong></td>
<td>

금융

</td>
</tr>
<tr>
<td valign="top"><strong>INFORMATION_TECHNOLOGY</strong></td>
<td>

정보기술

</td>
</tr>
<tr>
<td valign="top"><strong>COMMUNICATIONS</strong></td>
<td>

통신 서비스

</td>
</tr>
<tr>
<td valign="top"><strong>UTILITIES</strong></td>
<td>

유틸리티

</td>
</tr>
<tr>
<td valign="top"><strong>REAL_ESTATE</strong></td>
<td>

부동산

</td>
</tr>
<tr>
<td valign="top"><strong>UNCLASSIFIED</strong></td>
<td>

미분류

</td>
</tr>
</tbody>
</table>

### SimulationTypeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALL</strong></td>
<td>

사용자 편집 > 백테스트 결과

</td>
</tr>
<tr>
<td valign="top"><strong>BACKTEST</strong></td>
<td>

전략보관함 > 백테스트 결과

</td>
</tr>
<tr>
<td valign="top"><strong>FORWARDTEST</strong></td>
<td>

전략보관함 > 모의투자

</td>
</tr>
</tbody>
</table>

### StrategyAmountEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ZERO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ONE_FIFTY</strong></td>
<td>

1억 5천이하 제외

</td>
</tr>
<tr>
<td valign="top"><strong>FIVE_HUNDRED</strong></td>
<td>

5억이하 제외

</td>
</tr>
<tr>
<td valign="top"><strong>BILLION</strong></td>
<td>

10억이하 제외

</td>
</tr>
</tbody>
</table>

### StrategyCategoryEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>THEME</strong></td>
<td>

테마 전략

</td>
</tr>
<tr>
<td valign="top"><strong>SECTOR_INDUSTRY</strong></td>
<td>

섹터/산업 전략

</td>
</tr>
<tr>
<td valign="top"><strong>DIY</strong></td>
<td>

DIY 전략

</td>
</tr>
<tr>
<td valign="top"><strong>MASTER</strong></td>
<td>

대가들의 전략

</td>
</tr>
<tr>
<td valign="top"><strong>EMP</strong></td>
<td>

EMP 전략

</td>
</tr>
</tbody>
</table>

### StrategyMarketCapEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ZERO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FIVE</strong></td>
<td>

5% 이하 제외

</td>
</tr>
<tr>
<td valign="top"><strong>TEN</strong></td>
<td>

10% 이하 제외

</td>
</tr>
<tr>
<td valign="top"><strong>FIFTEEN</strong></td>
<td>

15% 이하 제외

</td>
</tr>
</tbody>
</table>

### StrategyOptimizationEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MARKET_WEIGHT</strong></td>
<td>

시가총액

</td>
</tr>
<tr>
<td valign="top"><strong>EQUAL_WEIGHT</strong></td>
<td>

동일비중

</td>
</tr>
<tr>
<td valign="top"><strong>RISK_PARITY</strong></td>
<td>

위험균형

</td>
</tr>
</tbody>
</table>

### StrategyOrderType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

가나다 순

</td>
</tr>
<tr>
<td valign="top"><strong>TOTAL_USES_CNT</strong></td>
<td>

누적 이용자 순

</td>
</tr>
<tr>
<td valign="top"><strong>CUMULATIVE</strong></td>
<td>

수익률 높은순

</td>
</tr>
<tr>
<td valign="top"><strong>CUMULATIVE_ASC</strong></td>
<td>

수익률 낮은순

</td>
</tr>
<tr>
<td valign="top"><strong>MDD</strong></td>
<td>

MDD 낮은순

</td>
</tr>
<tr>
<td valign="top"><strong>VOLATILITY</strong></td>
<td>

변동성 낮은순

</td>
</tr>
<tr>
<td valign="top"><strong>CREATED_AT</strong></td>
<td>

생성일 내림차순 (최신순)

</td>
</tr>
<tr>
<td valign="top"><strong>CREATED_AT_ASC</strong></td>
<td>

생성일 오름차순 (오래된순)

</td>
</tr>
</tbody>
</table>

### StrategyRebalancingOptionEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MONTH</strong></td>
<td>

1개월

</td>
</tr>
<tr>
<td valign="top"><strong>QUARTER</strong></td>
<td>

3개월

</td>
</tr>
<tr>
<td valign="top"><strong>HALF</strong></td>
<td>

6개월

</td>
</tr>
</tbody>
</table>

### StrategyStatusEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>INPROGRESS</strong></td>
<td>

생성중 상태

</td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td>

등록대기중 상태

</td>
</tr>
<tr>
<td valign="top"><strong>DELETED</strong></td>
<td>

삭제된 상태

</td>
</tr>
<tr>
<td valign="top"><strong>DEACTIVATED</strong></td>
<td>

비활성화 상태

</td>
</tr>
<tr>
<td valign="top"><strong>ACTIVATED</strong></td>
<td>

활성화 상태

</td>
</tr>
<tr>
<td valign="top"><strong>EDITED</strong></td>
<td>

편집 상태

</td>
</tr>
<tr>
<td valign="top"><strong>ACTIVATED_UPDATING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ACTIVATED_RESERVATION</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ThemeGroupStatusEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVATED</strong></td>
<td>

활성화 상태

</td>
</tr>
<tr>
<td valign="top"><strong>DEACTIVATED</strong></td>
<td>

비활성화 상태

</td>
</tr>
</tbody>
</table>

### ThemeSrcEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KB_AM</strong></td>
<td>

KB 운용자산 테마

</td>
</tr>
<tr>
<td valign="top"><strong>KB_SEC</strong></td>
<td>

KB 증권 테마

</td>
</tr>
<tr>
<td valign="top"><strong>QUANTIT</strong></td>
<td>

퀀팃테마(=SNS테마)

</td>
</tr>
</tbody>
</table>

### UniverseCountryEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DOMESTIC</strong></td>
<td>

국내

</td>
</tr>
<tr>
<td valign="top"><strong>USA</strong></td>
<td>

미국

</td>
</tr>
</tbody>
</table>

### UniverseEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KOSPI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KOSPI200</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KOSDAQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KOSDAQ150</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KRX300</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SNP500</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NASDAQ100</strong></td>
<td></td>
</tr>
</tbody>
</table>

### UniversePresetEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KOSPI200_KOSDAQ150_KRX300</strong></td>
<td>

한국 상장 대표기업

</td>
</tr>
<tr>
<td valign="top"><strong>KOSPI200</strong></td>
<td>

코스피 상장 대표기업

</td>
</tr>
<tr>
<td valign="top"><strong>KOSDAQ150</strong></td>
<td>

코스닥 상장 대표기업

</td>
</tr>
<tr>
<td valign="top"><strong>KRX300</strong></td>
<td>

코스피&코스닥 상장 대표기업

</td>
</tr>
<tr>
<td valign="top"><strong>KOSPI_KOSDAQ</strong></td>
<td>

한국 상장기업

</td>
</tr>
<tr>
<td valign="top"><strong>KOSPI</strong></td>
<td>

코스피 상장기업

</td>
</tr>
<tr>
<td valign="top"><strong>KOSDAQ</strong></td>
<td>

코스닥 상장기업

</td>
</tr>
<tr>
<td valign="top"><strong>SNP500</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NASDAQ100</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SNP500_NASDAQ100</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### GenericScalar

The `GenericScalar` scalar type represents a generic
GraphQL scalar value that could be:
String, Boolean, Int, Float, List or Object.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### JSONString

Allows use of a JSON String for input / output from the GraphQL schema.

Use of this type is *not recommended* as you lose the benefits of having a defined, static
schema (one of the key benefits of GraphQL).

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.


## Interfaces


### Node

An object with an ID

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object

</td>
</tr>
</tbody>
</table>

## Unions

### DetailedStrategyUnion

<table>
<thead>
<th align="left">Type</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong><a href="#detailedstrategytype">DetailedStrategyType</a></strong></td>
<td valign="top">테마, 섹터/산업 상세</td>
</tr>
<tr>
<td valign="top"><strong><a href="#detailedmasterstrategytype">DetailedMasterStrategyType</a></strong></td>
<td valign="top">대가들의 전략 상세</td>
</tr>
</tbody>
</table>

### StrategyUnion

<table>
<thead>
<th align="left">Type</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong><a href="#themestrategytype">ThemeStrategyType</a></strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong><a href="#masterstrategytype">MasterStrategyType</a></strong></td>
<td valign="top">대가들의 전략</td>
</tr>
<tr>
<td valign="top"><strong><a href="#sectorindustrystrategytype">SectorIndustryStrategyType</a></strong></td>
<td valign="top">섹터/산업 전략</td>
</tr>
</tbody>
</table>
