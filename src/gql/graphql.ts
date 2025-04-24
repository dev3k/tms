/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `BigInt` scalar type represents non-fractional whole numeric values.
   * `BigInt` is not constrained to 32-bit like the `Int` type and thus is a less
   * compatible type.
   */
  BigInt: { input: any; output: any };
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any };
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any };
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any };
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any };
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any };
  SocialCamelJSON: { input: any; output: any };
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any };
};

export type AiCourseSuggestionInput = {
  description: Scalars["String"]["input"];
  language: CourseLanguage;
  level: CourseLevel;
  materialBase64DataList?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  targetAudience: Scalars["String"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type AiCourseSuggestionNode = Node & {
  __typename?: "AICourseSuggestionNode";
  acceptedBy?: Maybe<UserNode>;
  course: CourseNode;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  extraData: Scalars["JSONString"]["output"];
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  language?: Maybe<CourseStructureAiCourseSuggestionLanguageChoices>;
  level?: Maybe<CourseStructureAiCourseSuggestionLevelChoices>;
  modified: Scalars["DateTime"]["output"];
  outline?: Maybe<Scalars["GenericScalar"]["output"]>;
  prompt: Scalars["JSONString"]["output"];
  promptMaterial: PromptMaterialNodeConnection;
  rawResponse: Scalars["JSONString"]["output"];
  rejectedBy?: Maybe<UserNode>;
  targetAudience?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type AiCourseSuggestionNodePromptMaterialArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AiCourseSuggestionNodeConnection = {
  __typename?: "AICourseSuggestionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiCourseSuggestionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AICourseSuggestionNode` and its cursor. */
export type AiCourseSuggestionNodeEdge = {
  __typename?: "AICourseSuggestionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiCourseSuggestionNode>;
};

export type AiProofReadingSuggestionNode = Node & {
  __typename?: "AIProofReadingSuggestionNode";
  acceptedBy?: Maybe<UserNode>;
  block: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  explanation?: Maybe<Scalars["String"]["output"]>;
  extraData: Scalars["JSONString"]["output"];
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  originalText?: Maybe<Scalars["String"]["output"]>;
  prompt: Scalars["JSONString"]["output"];
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse: Scalars["JSONString"]["output"];
  rejectedBy?: Maybe<UserNode>;
  suggestion?: Maybe<Scalars["String"]["output"]>;
};

export type AiProofReadingSuggestionNodeConnection = {
  __typename?: "AIProofReadingSuggestionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiProofReadingSuggestionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AIProofReadingSuggestionNode` and its cursor. */
export type AiProofReadingSuggestionNodeEdge = {
  __typename?: "AIProofReadingSuggestionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiProofReadingSuggestionNode>;
};

export type AiSuggestedDefinitionNode = Node & {
  __typename?: "AISuggestedDefinitionNode";
  acceptedBy?: Maybe<UserNode>;
  created: Scalars["DateTime"]["output"];
  definition?: Maybe<DefinitionResourceNode>;
  extraData: Scalars["JSONString"]["output"];
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  learningObjective?: Maybe<LosResourceNode>;
  losResources?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  prompt: Scalars["JSONString"]["output"];
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse: Scalars["JSONString"]["output"];
  rejectedBy?: Maybe<UserNode>;
  unit: UnitNode;
};

export type AiSuggestedDefinitionNodeConnection = {
  __typename?: "AISuggestedDefinitionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiSuggestedDefinitionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AISuggestedDefinitionNode` and its cursor. */
export type AiSuggestedDefinitionNodeEdge = {
  __typename?: "AISuggestedDefinitionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiSuggestedDefinitionNode>;
};

export type AiSuggestedLosNode = Node & {
  __typename?: "AISuggestedLOSNode";
  acceptedBy?: Maybe<UserNode>;
  created: Scalars["DateTime"]["output"];
  extraData: Scalars["JSONString"]["output"];
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  learningObjective?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  outline?: Maybe<Scalars["GenericScalar"]["output"]>;
  prompt: Scalars["JSONString"]["output"];
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse: Scalars["JSONString"]["output"];
  rejectedBy?: Maybe<UserNode>;
  unit: UnitNode;
};

export type AiSuggestedLosNodeConnection = {
  __typename?: "AISuggestedLOSNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiSuggestedLosNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AISuggestedLOSNode` and its cursor. */
export type AiSuggestedLosNodeEdge = {
  __typename?: "AISuggestedLOSNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiSuggestedLosNode>;
};

export type AiSuggestedMultipleChoiceQuestionNode = Node & {
  __typename?: "AISuggestedMultipleChoiceQuestionNode";
  acceptedBy?: Maybe<UserNode>;
  created: Scalars["DateTime"]["output"];
  extraData: Scalars["JSONString"]["output"];
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  learningObjective?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  prompt: Scalars["JSONString"]["output"];
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse: Scalars["JSONString"]["output"];
  rejectedBy?: Maybe<UserNode>;
  unit: UnitNode;
};

export type AiSuggestedMultipleChoiceQuestionNodeConnection = {
  __typename?: "AISuggestedMultipleChoiceQuestionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiSuggestedMultipleChoiceQuestionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AISuggestedMultipleChoiceQuestionNode` and its cursor. */
export type AiSuggestedMultipleChoiceQuestionNodeEdge = {
  __typename?: "AISuggestedMultipleChoiceQuestionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiSuggestedMultipleChoiceQuestionNode>;
};

export type AiSuggestedTextNode = Node & {
  __typename?: "AISuggestedTextNode";
  acceptedBy?: Maybe<UserNode>;
  created: Scalars["DateTime"]["output"];
  extraData: Scalars["JSONString"]["output"];
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  learningObjective?: Maybe<LosResourceNode>;
  los?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  prompt: Scalars["JSONString"]["output"];
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse: Scalars["JSONString"]["output"];
  rejectedBy?: Maybe<UserNode>;
  textResource?: Maybe<TextResourceNode>;
  unit: UnitNode;
};

export type AiSuggestedTextNodeConnection = {
  __typename?: "AISuggestedTextNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiSuggestedTextNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AISuggestedTextNode` and its cursor. */
export type AiSuggestedTextNodeEdge = {
  __typename?: "AISuggestedTextNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiSuggestedTextNode>;
};

export type AiSuggestionAsyncTaskResultNode = Node & {
  __typename?: "AISuggestionAsyncTaskResultNode";
  celeryTaskId: Scalars["UUID"]["output"];
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  objectId?: Maybe<Scalars["UUID"]["output"]>;
  result?: Maybe<Scalars["String"]["output"]>;
  status: SalalemAiSuggestionsAiSuggestionAsyncTaskResultStatusChoices;
  success: Scalars["Boolean"]["output"];
  type: SalalemAiSuggestionsAiSuggestionAsyncTaskResultTypeChoices;
};

export type AiSuggestionAsyncTaskResultNodeConnection = {
  __typename?: "AISuggestionAsyncTaskResultNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AiSuggestionAsyncTaskResultNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AISuggestionAsyncTaskResultNode` and its cursor. */
export type AiSuggestionAsyncTaskResultNodeEdge = {
  __typename?: "AISuggestionAsyncTaskResultNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AiSuggestionAsyncTaskResultNode>;
};

export type AcceptAllExamCompetitionProblemSuggestions = {
  __typename?: "AcceptAllExamCompetitionProblemSuggestions";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptExamCompetitionProblemSuggestion = {
  __typename?: "AcceptExamCompetitionProblemSuggestion";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptExamProblemSuggestions = {
  __typename?: "AcceptExamProblemSuggestions";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptSuggestedDefinitionForUnit = {
  __typename?: "AcceptSuggestedDefinitionForUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptSuggestedLosForUnit = {
  __typename?: "AcceptSuggestedLOSForUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptSuggestedMultipleChoiceQuestionsForUnit = {
  __typename?: "AcceptSuggestedMultipleChoiceQuestionsForUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptSuggestedTextForUnit = {
  __typename?: "AcceptSuggestedTextForUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AcceptTerms = {
  __typename?: "AcceptTerms";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ActionObjectUnion =
  | ActivityNode
  | AssignmentCompletionRequestNode
  | CompetitionNode
  | CourseAssignmentNode
  | ExamAssignmentNode
  | ExamCompetitionNode
  | ExternalActivityAssignmentNode
  | ProductRequestNode
  | TrainingProgramNode
  | UndefinedActivityAssignmentNode
  | UndefinedActivityNode
  | UserHeartsNode
  | UserNode;

export type ActivateCourse = {
  __typename?: "ActivateCourse";
  course?: Maybe<CourseNode>;
};

export type ActivityAssignmentsSummaryNode = {
  __typename?: "ActivityAssignmentsSummaryNode";
  completed?: Maybe<Scalars["Int"]["output"]>;
  deleted?: Maybe<Scalars["Int"]["output"]>;
  failed?: Maybe<Scalars["Int"]["output"]>;
  inProgress?: Maybe<Scalars["Int"]["output"]>;
  learnersCount?: Maybe<Scalars["Int"]["output"]>;
  notStartedYet?: Maybe<Scalars["Int"]["output"]>;
  overdue?: Maybe<Scalars["Int"]["output"]>;
  passed?: Maybe<Scalars["Int"]["output"]>;
  pending?: Maybe<Scalars["Int"]["output"]>;
  resubmit?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivityDefinitionNode = {
  __typename?: "ActivityDefinitionNode";
  activitySet: ActivityNodeConnection;
  choices?: Maybe<Scalars["String"]["output"]>;
  correctResponsesPattern: Scalars["String"]["output"];
  description?: Maybe<Scalars["GenericScalar"]["output"]>;
  id: Scalars["ID"]["output"];
  interactionType: Scalars["String"]["output"];
  moreInfo?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["GenericScalar"]["output"]>;
  scale?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  steps?: Maybe<Scalars["String"]["output"]>;
  target?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ActivityDefinitionNodeActivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNode = Node & {
  __typename?: "ActivityNode";
  assignmentSet: AssignmentNodeConnection;
  campaignactivitySet: CampaignActivityNodeConnection;
  clientsurveycheckitemSet: ClientSurveyCheckItemNodeConnection;
  competition?: Maybe<CompetitionNode>;
  contextActivityRelatedCategory: Array<ContextActivityNode>;
  contextActivityRelatedGroup: Array<ContextActivityNode>;
  contextActivityRelatedOther: Array<ContextActivityNode>;
  contextActivityRelatedParent: Array<ContextActivityNode>;
  courseblock?: Maybe<CourseBlockNode>;
  definition?: Maybe<ActivityDefinitionNode>;
  exam?: Maybe<ExamNode>;
  externalactivity?: Maybe<ExternalActivityNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  onboardingcheckitemSet: OnboardingCheckItemNodeConnection;
  relatedStatements?: Maybe<StatementNodeConnection>;
  resourceobject?: Maybe<ResourceObjectNode>;
  stmtContextCaCategory: StatementNodeConnection;
  stmtContextCaGrouping: StatementNodeConnection;
  stmtContextCaOther: StatementNodeConnection;
  stmtContextCaParent: StatementNodeConnection;
  substatementContextCaCategory: Array<SubStatementNode>;
  substatementContextCaGrouping: Array<SubStatementNode>;
  substatementContextCaOther: Array<SubStatementNode>;
  substatementContextCaParent: Array<SubStatementNode>;
  trainingprogramitemSet: TrainingProgramItemNodeConnection;
  tutorialcheckitemSet: TutorialCheckItemNodeConnection;
  undefinedactivity?: Maybe<UndefinedActivityNode>;
};

export type ActivityNodeAssignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ActivityNodeCampaignactivitySetArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeClientsurveycheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Gt?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Gte?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Lt?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Lte?: InputMaybe<Scalars["Date"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityNodeOnboardingcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeRelatedStatementsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeStmtContextCaCategoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeStmtContextCaGroupingArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeStmtContextCaOtherArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeStmtContextCaParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeTrainingprogramitemSetArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityNodeTutorialcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityNodeConnection = {
  __typename?: "ActivityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ActivityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ActivityNode` and its cursor. */
export type ActivityNodeEdge = {
  __typename?: "ActivityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ActivityNode>;
};

/** An enumeration. */
export enum ActivityTypesEnum {
  Course = "course",
  Exam = "exam",
  OnlineCourse = "online_course",
  Workshop = "workshop",
}

export type ActivityUnion =
  | CourseNode
  | ExamNode
  | OnlineCourseNode
  | TrainingProgramNode
  | UndefinedActivityNode
  | WorkshopNode;

export type ActivityUnionNode =
  | CourseNode
  | ExamNode
  | OnlineCourseNode
  | WorkshopNode;

export type ActorNode = {
  __typename?: "ActorNode";
  agent?: Maybe<AgentNode>;
  authorityOfStatement: StatementNodeConnection;
  id: Scalars["ID"]["output"];
  mbox?: Maybe<Scalars["String"]["output"]>;
  mboxSha1sum?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  openid?: Maybe<Scalars["String"]["output"]>;
  salalemUser?: Maybe<UserNode>;
  statementSet: StatementNodeConnection;
  substatementSet: Array<SubStatementNode>;
};

export type ActorNodeAuthorityOfStatementArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActorNodeStatementSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActorUnion = ActorNode | UserNode;

export type AddApproverToStep = {
  __typename?: "AddApproverToStep";
  step?: Maybe<StepNode>;
};

export type AddApproverToStepTemplate = {
  __typename?: "AddApproverToStepTemplate";
  stepTemplate?: Maybe<StepTemplateNode>;
};

export type AddComment = {
  __typename?: "AddComment";
  comment?: Maybe<CommentNode>;
};

export type AddCompetencyToEnterpriseCustomer = {
  __typename?: "AddCompetencyToEnterpriseCustomer";
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
};

export type AddCompetencyToJobRole = {
  __typename?: "AddCompetencyToJobRole";
  jobRole?: Maybe<JobRoleNode>;
};

export type AddCompetencyToUser = {
  __typename?: "AddCompetencyToUser";
  user?: Maybe<UserNode>;
};

export type AddCourse = {
  __typename?: "AddCourse";
  client?: Maybe<ClientNode>;
};

export type AddCourseTeamMember = {
  __typename?: "AddCourseTeamMember";
  courseTeam?: Maybe<CourseTeamNode>;
};

export type AddCourseToCompetencySkill = {
  __typename?: "AddCourseToCompetencySkill";
  skill?: Maybe<CompetencySkillNode>;
};

export type AddCuePointToVideoBlock = {
  __typename?: "AddCuePointToVideoBlock";
  videoBlockCuePoint?: Maybe<VideoBlockCuePointNode>;
};

export type AddCuePointToVideoResource = {
  __typename?: "AddCuePointToVideoResource";
  videoBlockCuePoint?: Maybe<VideoBlockCuePointNode>;
};

export type AddDefinitionBlockToUnit = {
  __typename?: "AddDefinitionBlockToUnit";
  definitionBlockList?: Maybe<Array<Maybe<DefinitionBlockNode>>>;
};

export type AddEmployeesToEnterpriseCustomer = {
  __typename?: "AddEmployeesToEnterpriseCustomer";
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
};

export type AddExamToClient = {
  __typename?: "AddExamToClient";
  client?: Maybe<ClientNode>;
};

export type AddExternalActivity = {
  __typename?: "AddExternalActivity";
  client?: Maybe<ClientNode>;
};

export type AddFile = {
  __typename?: "AddFile";
  file?: Maybe<FileNode>;
};

export type AddHtmlBlockToUnit = {
  __typename?: "AddHTMLBlockToUnit";
  htmlBlockList?: Maybe<Array<Maybe<HtmlBlockNode>>>;
};

export type AddItemsToUndefinedActivityCompletionChecklist = {
  __typename?: "AddItemsToUndefinedActivityCompletionChecklist";
  undefinedActivityChecklist?: Maybe<UndefinedActivityCompletionChecklistNode>;
};

export type AddLosBlockToUnit = {
  __typename?: "AddLOSBlockToUnit";
  losBlockList?: Maybe<Array<Maybe<LosBlockNode>>>;
};

export type AddLosToQuiz = {
  __typename?: "AddLOSToQuiz";
  quiz?: Maybe<ExamNode>;
  quizLos?: Maybe<QuizLosNode>;
};

export type AddLevelToCompetency = {
  __typename?: "AddLevelToCompetency";
  competency?: Maybe<CompetencyNode>;
};

export type AddLinkBlockToUnit = {
  __typename?: "AddLinkBlockToUnit";
  linkBlockList?: Maybe<Array<Maybe<LinkBlockNode>>>;
};

export type AddMultipleChoiceQuestionBlockToUnit = {
  __typename?: "AddMultipleChoiceQuestionBlockToUnit";
  mcqBlockList?: Maybe<Array<Maybe<MultipleChoiceQuestionBlockNode>>>;
};

export type AddNotificationToStep = {
  __typename?: "AddNotificationToStep";
  step?: Maybe<StepNode>;
};

export type AddNotificationToStepTemplate = {
  __typename?: "AddNotificationToStepTemplate";
  stepTemplate?: Maybe<StepTemplateNode>;
};

export type AddPdfBlockToUnit = {
  __typename?: "AddPDFBlockToUnit";
  pdfBlockList?: Maybe<Array<Maybe<PdfBlockNode>>>;
};

export type AddProblemToQuiz = {
  __typename?: "AddProblemToQuiz";
  quiz?: Maybe<ExamNode>;
  quizProblem?: Maybe<QProblemNode>;
};

export type AddProblemsToExam = {
  __typename?: "AddProblemsToExam";
  exam?: Maybe<ExamNode>;
};

export type AddProductBookmark = {
  __typename?: "AddProductBookmark";
  bookmark?: Maybe<ProductBookmarkNode>;
};

export type AddProductToClientCatalog = {
  __typename?: "AddProductToClientCatalog";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AddProductToLearningPlanSection = {
  __typename?: "AddProductToLearningPlanSection";
  learningPlanProduct?: Maybe<LearningPlanProductNode>;
};

export type AddProductToProductsPackage = {
  __typename?: "AddProductToProductsPackage";
  productsPackage?: Maybe<ProductsPackageNode>;
};

export type AddProductToTrainingProgramSection = {
  __typename?: "AddProductToTrainingProgramSection";
  trainingProgramItem?: Maybe<TrainingProgramItemNode>;
};

export type AddProductsToCompetencyProductsCollection = {
  __typename?: "AddProductsToCompetencyProductsCollection";
  competencyProductsCollection?: Maybe<CompetencyProductsCollectionNode>;
};

export type AddPromptMaterialToExam = {
  __typename?: "AddPromptMaterialToExam";
  knowledgeBaseDocument?: Maybe<KnowledgeBaseDocumentNode>;
};

export type AddPromptMaterialToExamCompetition = {
  __typename?: "AddPromptMaterialToExamCompetition";
  knowledgeBaseDocument?: Maybe<KnowledgeBaseDocumentNode>;
};

export type AddResourcesToConcept = {
  __typename?: "AddResourcesToConcept";
  concept?: Maybe<ConceptResourceNode>;
  resources?: Maybe<Array<Maybe<ResourceObjectUnion>>>;
};

export type AddResourcesToLos = {
  __typename?: "AddResourcesToLOS";
  los?: Maybe<LosResourceNode>;
  resources?: Maybe<Array<Maybe<ResourceObjectUnion>>>;
};

export type AddResponsibilityToStep = {
  __typename?: "AddResponsibilityToStep";
  step?: Maybe<StepNode>;
};

export type AddResponsibilityToStepTemplate = {
  __typename?: "AddResponsibilityToStepTemplate";
  stepTemplate?: Maybe<StepTemplateNode>;
};

export type AddSkillToCompetencyLevel = {
  __typename?: "AddSkillToCompetencyLevel";
  competencyLevel?: Maybe<CompetencyLevelNode>;
};

export type AddStepTemplate = {
  __typename?: "AddStepTemplate";
  stepTemplate?: Maybe<StepTemplateNode>;
};

export type AddSubtitleToClientVideoResource = {
  __typename?: "AddSubtitleToClientVideoResource";
  videoSubtitle?: Maybe<VideoSubtitleResourceNode>;
};

export type AddSubtitleToVideo = {
  __typename?: "AddSubtitleToVideo";
  video?: Maybe<VideoResourceNode>;
};

export type AddSupervisorsToEmployeeGroup = {
  __typename?: "AddSupervisorsToEmployeeGroup";
  employeeGroup?: Maybe<EmployeeGroupNode>;
};

export type AddTextBlockToUnit = {
  __typename?: "AddTextBlockToUnit";
  textBlockList?: Maybe<Array<Maybe<TextBlockNode>>>;
};

export type AddUserToClient = {
  __typename?: "AddUserToClient";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AddUsersToCampaign = {
  __typename?: "AddUsersToCampaign";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type AddUsersToCompetition = {
  __typename?: "AddUsersToCompetition";
  competition?: Maybe<CompetitionUnion>;
  emailsThatDontExist?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  failedToAddEmailsCount?: Maybe<Scalars["Int"]["output"]>;
  invalidEmails?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type AddUsersToEmployeeGroup = {
  __typename?: "AddUsersToEmployeeGroup";
  employeeGroup?: Maybe<EmployeeGroupNode>;
};

export type AddUsersToSurvey = {
  __typename?: "AddUsersToSurvey";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type AddVideoBlockToUnit = {
  __typename?: "AddVideoBlockToUnit";
  videoBlockList?: Maybe<Array<Maybe<VideoBlockNode>>>;
};

export type AgentNode = {
  __typename?: "AgentNode";
  actorPtr: ActorNode;
  agent?: Maybe<AgentNode>;
  authorityOfStatement: StatementNodeConnection;
  id: Scalars["ID"]["output"];
  mbox?: Maybe<Scalars["String"]["output"]>;
  mboxSha1sum?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  objectType: Scalars["String"]["output"];
  openid?: Maybe<Scalars["String"]["output"]>;
  salalemUser?: Maybe<UserNode>;
  statementContextInstructor: StatementNodeConnection;
  statementContextTeam: StatementNodeConnection;
  statementSet: StatementNodeConnection;
  substatementContextInstructor: Array<SubStatementNode>;
  substatementContextTeam: Array<SubStatementNode>;
  substatementSet: Array<SubStatementNode>;
};

export type AgentNodeAuthorityOfStatementArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AgentNodeStatementContextInstructorArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AgentNodeStatementContextTeamArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AgentNodeStatementSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AnswerCurrentProblem = {
  __typename?: "AnswerCurrentProblem";
  examCompetitionAssignmentQuestion?: Maybe<ExamCompetitionAssignmentQuestionNode>;
};

export type AnswerCurrentProblemWithoutTimeValidation = {
  __typename?: "AnswerCurrentProblemWithoutTimeValidation";
  examCompetitionAssignmentQuestion?: Maybe<ExamCompetitionAssignmentQuestionNode>;
};

export type AnswerVideoBlockCuePointProblem = {
  __typename?: "AnswerVideoBlockCuePointProblem";
  pointType?: Maybe<PointsTypes>;
  rewarded?: Maybe<Scalars["Boolean"]["output"]>;
  rewardedPoints?: Maybe<Scalars["Int"]["output"]>;
};

export type AskBotAboutKnowledgeBase = {
  __typename?: "AskBotAboutKnowledgeBase";
  response?: Maybe<Scalars["String"]["output"]>;
};

export type AssignCourse = {
  __typename?: "AssignCourse";
  courseAssignment?: Maybe<CourseAssignmentNode>;
};

export type AssignExam = {
  __typename?: "AssignExam";
  examAssignment?: Maybe<ExamAssignmentNode>;
};

export type AssignExternalActivity = {
  __typename?: "AssignExternalActivity";
  externalActivityAssignment?: Maybe<ExternalActivityAssignmentNode>;
};

export type AssignLearner = {
  __typename?: "AssignLearner";
  created?: Maybe<Scalars["Boolean"]["output"]>;
  learnerQuiz?: Maybe<ExamAssignmentNode>;
};

export type AssignPublicAssessment = {
  __typename?: "AssignPublicAssessment";
  publicAssessmentAssignment?: Maybe<PublicAssessmentAssignmentNode>;
};

export type AssignQuizUnitGradeSetting = {
  __typename?: "AssignQuizUnitGradeSetting";
  quizUnit?: Maybe<QuizUnitNode>;
  quizUnitGradeSetting?: Maybe<QuizUnitGradeSettingNode>;
};

export type AssignTrainingProgramCampaign = {
  __typename?: "AssignTrainingProgramCampaign";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AssignUndefinedActivity = {
  __typename?: "AssignUndefinedActivity";
  undefinedActivityAssignment?: Maybe<UndefinedActivityAssignmentNode>;
};

export type AssignUserToTrainingProgram = {
  __typename?: "AssignUserToTrainingProgram";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AssignUsersToALearningPlan = {
  __typename?: "AssignUsersToALearningPlan";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AssignmentAndOverallSummaryNode = {
  __typename?: "AssignmentAndOverallSummaryNode";
  assignments?: Maybe<AssignmentSummaryConnection>;
  overallSummary?: Maybe<LearningOverallSummaryNode>;
};

export type AssignmentAndOverallSummaryNodeAssignmentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentCompletionRequestNode = Node & {
  __typename?: "AssignmentCompletionRequestNode";
  assignment?: Maybe<AssignmentUnion>;
  /** The title of the activity that the assignment is based on */
  assignmentActivityTitle?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  handledBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  proofFile?: Maybe<Scalars["String"]["output"]>;
  /** The URL of the proof file */
  proofFileUrl?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  requestedBy: UserNode;
  response?: Maybe<Scalars["String"]["output"]>;
  status: RequestAssignmentCompletionRequestStatusChoices;
};

export type AssignmentCompletionRequestNodeConnection = {
  __typename?: "AssignmentCompletionRequestNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AssignmentCompletionRequestNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AssignmentCompletionRequestNode` and its cursor. */
export type AssignmentCompletionRequestNodeEdge = {
  __typename?: "AssignmentCompletionRequestNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AssignmentCompletionRequestNode>;
};

export type AssignmentConnection = {
  __typename?: "AssignmentConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AssignmentEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `Assignment` and its cursor. */
export type AssignmentEdge = {
  __typename?: "AssignmentEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AssignmentUnion>;
};

export type AssignmentExtensionRequestNode = Node & {
  __typename?: "AssignmentExtensionRequestNode";
  assignment?: Maybe<AssignmentUnion>;
  clientSet: ClientNodeConnection;
  created: Scalars["DateTime"]["output"];
  handledBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
  requestedBy: UserNode;
  response?: Maybe<Scalars["String"]["output"]>;
  status: RequestAssignmentExtensionRequestStatusChoices;
};

export type AssignmentExtensionRequestNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentExtensionRequestNodeConnection = {
  __typename?: "AssignmentExtensionRequestNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AssignmentExtensionRequestNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AssignmentExtensionRequestNode` and its cursor. */
export type AssignmentExtensionRequestNodeEdge = {
  __typename?: "AssignmentExtensionRequestNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AssignmentExtensionRequestNode>;
};

export type AssignmentNode = Node & {
  __typename?: "AssignmentNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  attemptsLeft?: Maybe<Scalars["Int"]["output"]>;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canTakeAnAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isPending?: Maybe<Scalars["Boolean"]["output"]>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  timeLeftToRetakeAttempt?: Maybe<Scalars["Int"]["output"]>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type AssignmentNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type AssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type AssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type AssignmentNodeConnection = {
  __typename?: "AssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AssignmentNode` and its cursor. */
export type AssignmentNodeEdge = {
  __typename?: "AssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AssignmentNode>;
};

export type AssignmentReportRequestedColumnsInput = {
  activityName?: InputMaybe<Scalars["Boolean"]["input"]>;
  activityType?: InputMaybe<Scalars["Boolean"]["input"]>;
  attempts?: InputMaybe<Scalars["Boolean"]["input"]>;
  campaignName?: InputMaybe<Scalars["Boolean"]["input"]>;
  certificateEarnedDate?: InputMaybe<Scalars["Boolean"]["input"]>;
  certificateLink?: InputMaybe<Scalars["Boolean"]["input"]>;
  completedHours?: InputMaybe<Scalars["Boolean"]["input"]>;
  completedUnits?: InputMaybe<Scalars["Boolean"]["input"]>;
  completionTime?: InputMaybe<Scalars["Boolean"]["input"]>;
  employeeDepartment?: InputMaybe<Scalars["Boolean"]["input"]>;
  employeeNationality?: InputMaybe<Scalars["Boolean"]["input"]>;
  employmentType?: InputMaybe<Scalars["Boolean"]["input"]>;
  maximumPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  popUpQuestions?: InputMaybe<Scalars["Boolean"]["input"]>;
  progress?: InputMaybe<Scalars["Boolean"]["input"]>;
  rewardPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  trainingCost?: InputMaybe<Scalars["Boolean"]["input"]>;
  trainingProgramName?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssignmentReportSummaryFieldsInput = {
  averageCostPerActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  averageCostPerEmployee?: InputMaybe<Scalars["Boolean"]["input"]>;
  averageTrainingHours?: InputMaybe<Scalars["Boolean"]["input"]>;
  averageTrainingUnits?: InputMaybe<Scalars["Boolean"]["input"]>;
  costPerDepartment?: InputMaybe<Scalars["Boolean"]["input"]>;
  percentOfSaudiEmployees?: InputMaybe<Scalars["Boolean"]["input"]>;
  totalTrainees?: InputMaybe<Scalars["Boolean"]["input"]>;
  totalTrainingCost?: InputMaybe<Scalars["Boolean"]["input"]>;
  totalTrainingHours?: InputMaybe<Scalars["Boolean"]["input"]>;
  totalTrainingUnits?: InputMaybe<Scalars["Boolean"]["input"]>;
  trainingPerEmploymentType?: InputMaybe<Scalars["Boolean"]["input"]>;
  trainingPerNationality?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssignmentSettingNode = Node & {
  __typename?: "AssignmentSettingNode";
  archiveAccess: Scalars["Boolean"]["output"];
  assignmentSet: AssignmentNodeConnection;
  campaignSet: CampaignNodeConnection;
  campaignactivitySet: CampaignActivityNodeConnection;
  certificatePreset?: Maybe<CertificatePresetNode>;
  created: Scalars["DateTime"]["output"];
  enableFlashcards: Scalars["Boolean"]["output"];
  enableProctoring: Scalars["Boolean"]["output"];
  generateCertificate: Scalars["Boolean"]["output"];
  graded: Scalars["Boolean"]["output"];
  hideGrade: Scalars["Boolean"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  minCompletionProgress: Scalars["Decimal"]["output"];
  modified: Scalars["DateTime"]["output"];
  randomizeProblemOrder: Scalars["Boolean"]["output"];
  strictMode: Scalars["Boolean"]["output"];
};

export type AssignmentSettingNodeAssignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type AssignmentSettingNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentSettingNodeCampaignactivitySetArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssignmentSettingNodeConnection = {
  __typename?: "AssignmentSettingNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AssignmentSettingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AssignmentSettingNode` and its cursor. */
export type AssignmentSettingNodeEdge = {
  __typename?: "AssignmentSettingNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AssignmentSettingNode>;
};

/** An enumeration. */
export enum AssignmentStatusesEnum {
  Awaiting = "awaiting",
  Deleted = "deleted",
  Failed = "failed",
  InProgress = "in_progress",
  NotStartedYet = "not_started_yet",
  Overdue = "overdue",
  Passed = "passed",
  Resubmit = "resubmit",
}

export type AssignmentSummaryConnection = {
  __typename?: "AssignmentSummaryConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AssignmentSummaryEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `AssignmentSummary` and its cursor. */
export type AssignmentSummaryEdge = {
  __typename?: "AssignmentSummaryEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AssignmentSummaryNode>;
};

export type AssignmentSummaryNode = {
  __typename?: "AssignmentSummaryNode";
  /** Number of people that didn't interactwith the activity at all. */
  absentCount?: Maybe<Scalars["Int"]["output"]>;
  /** Id for activity, to be queried later with this id */
  activityId?: Maybe<Scalars["ID"]["output"]>;
  /** The product linked to this activity,**if no product linked, returns null** */
  activityProduct?: Maybe<ProductNode>;
  /** Title for the activity itself, **not** product title */
  activityTitle?: Maybe<Scalars["String"]["output"]>;
  /** Type of activity, to know exactly what to query later */
  activityType?: Maybe<Scalars["String"]["output"]>;
  /** Number of people enrolled with this activity */
  enrolledCount?: Maybe<Scalars["Int"]["output"]>;
  /** Number of people that started taking the activity,whether they failed or passed. */
  performedCount?: Maybe<Scalars["Int"]["output"]>;
};

/** An enumeration. */
export enum AssignmentTypesEnum {
  Campaign = "Campaign",
  Individual = "Individual",
}

export type AssignmentUnion =
  | CourseAssignmentNode
  | ExamAssignmentNode
  | ExamCompetitionAssignmentNode
  | ExternalActivityAssignmentNode
  | PublicAssessmentAssignmentNode
  | UndefinedActivityAssignmentNode
  | UserTrainingProgramAssignmentNode;

export type AssignmentsCountNode = {
  __typename?: "AssignmentsCountNode";
  results?: Maybe<Scalars["Int"]["output"]>;
};

export type AttachmentsNode = {
  __typename?: "AttachmentsNode";
  contentType?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  display?: Maybe<Scalars["String"]["output"]>;
  fileUrl: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  length?: Maybe<Scalars["Int"]["output"]>;
  sha2: Scalars["String"]["output"];
  statementSet: StatementNodeConnection;
  substatementSet: Array<SubStatementNode>;
  usageType: Scalars["String"]["output"];
};

export type AttachmentsNodeStatementSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An enumeration. */
export enum AuthGroupBasedNotificationTypes {
  Learner = "LEARNER",
  TrainingAdmin = "TRAINING_ADMIN",
}

export type AwardNode = {
  __typename?: "AwardNode";
  pointsAwarded?: Maybe<Scalars["Int"]["output"]>;
  pointsType?: Maybe<Scalars["String"]["output"]>;
};

export type BadgeAwardNode = Node & {
  __typename?: "BadgeAwardNode";
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  level: Scalars["Int"]["output"];
  modified: Scalars["DateTime"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  user: UserNode;
};

export type BadgeAwardNodeConnection = {
  __typename?: "BadgeAwardNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BadgeAwardNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `BadgeAwardNode` and its cursor. */
export type BadgeAwardNodeEdge = {
  __typename?: "BadgeAwardNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<BadgeAwardNode>;
};

export type BadgeDetailNode = {
  __typename?: "BadgeDetailNode";
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type BadgeNode = {
  __typename?: "BadgeNode";
  levels?: Maybe<Array<Maybe<BadgeDetailNode>>>;
  multiple?: Maybe<Scalars["Boolean"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
};

/** An enumeration. */
export enum BankAlEtihadEtihadCompetencyFrameworkResultCultureRatingChoices {
  /** Above Culture Level */
  AboveLevel = "ABOVE_LEVEL",
  /** Approaching Cultural Level */
  ApproachingLevel = "APPROACHING_LEVEL",
  /** Same Culture Level */
  SameLevel = "SAME_LEVEL",
}

/** An enumeration. */
export enum BankAlEtihadEtihadCompetencyFrameworkResultCurrentCompetencyLevelChoices {
  /** 1 */
  A_1 = "A_1",
  /** 2 */
  A_2 = "A_2",
  /** 3 */
  A_3 = "A_3",
  /** 4 */
  A_4 = "A_4",
  /** 5 */
  A_5 = "A_5",
}

/** An enumeration. */
export enum BankAlEtihadEtihadCompetencyFrameworkResultPerformanceRatingChoices {
  /** Above Department Average */
  AboveAverage = "ABOVE_AVERAGE",
  /** Below Department Average */
  BelowAverage = "BELOW_AVERAGE",
  /** Same Department Average */
  SameAverage = "SAME_AVERAGE",
}

/** An enumeration. */
export enum BankAlEtihadEtihadCompetencyFrameworkResultPostCompetencyLevelChoices {
  /** 1 */
  A_1 = "A_1",
  /** 2 */
  A_2 = "A_2",
  /** 3 */
  A_3 = "A_3",
  /** 4 */
  A_4 = "A_4",
  /** 5 */
  A_5 = "A_5",
}

export type BaseContentInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type BodyOfKnowledgeTreeNode = Node & {
  __typename?: "BodyOfKnowledgeTreeNode";
  author?: Maybe<ContentAuthorNode>;
  categories: TreeCategoryNodeConnection;
  children: BodyOfKnowledgeTreeNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  parent?: Maybe<BodyOfKnowledgeTreeNode>;
  rght: Scalars["Int"]["output"];
  tags: TreeTagNodeConnection;
  title: Scalars["String"]["output"];
  treeId: Scalars["Int"]["output"];
};

export type BodyOfKnowledgeTreeNodeCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BodyOfKnowledgeTreeNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type BodyOfKnowledgeTreeNodeTagsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type BodyOfKnowledgeTreeNodeConnection = {
  __typename?: "BodyOfKnowledgeTreeNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BodyOfKnowledgeTreeNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `BodyOfKnowledgeTreeNode` and its cursor. */
export type BodyOfKnowledgeTreeNodeEdge = {
  __typename?: "BodyOfKnowledgeTreeNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<BodyOfKnowledgeTreeNode>;
};

export type BonusPointItemNode = {
  __typename?: "BonusPointItemNode";
  point?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type BookReferenceResourceNode = Node & {
  __typename?: "BookReferenceResourceNode";
  bookreference?: Maybe<BookReferenceResourceNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  pastpaperreference?: Maybe<PastPaperReferenceResourceNode>;
  publishingYear: Scalars["Int"]["output"];
  referencePtr: ReferenceNode;
  resourceobjectSet: ResourceObjectNodeConnection;
  teacherreference?: Maybe<TeacherReferenceResourceNode>;
  title: Scalars["String"]["output"];
};

export type BookReferenceResourceNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type BookReferenceResourceNodeConnection = {
  __typename?: "BookReferenceResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BookReferenceResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `BookReferenceResourceNode` and its cursor. */
export type BookReferenceResourceNodeEdge = {
  __typename?: "BookReferenceResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<BookReferenceResourceNode>;
};

export type BotUserConversationNode = Node & {
  __typename?: "BotUserConversationNode";
  botusermessageSet: BotUserMessageNodeConnection;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  user: UserNode;
};

export type BotUserConversationNodeBotusermessageSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BotUserConversationNodeConnection = {
  __typename?: "BotUserConversationNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BotUserConversationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `BotUserConversationNode` and its cursor. */
export type BotUserConversationNodeEdge = {
  __typename?: "BotUserConversationNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<BotUserConversationNode>;
};

export type BotUserMessageNode = Node & {
  __typename?: "BotUserMessageNode";
  content: Scalars["String"]["output"];
  conversation?: Maybe<BotUserConversationNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  role: KnowledgeBaseBotUserMessageRoleChoices;
  user: UserNode;
};

export type BotUserMessageNodeConnection = {
  __typename?: "BotUserMessageNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BotUserMessageNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BotUserMessageNode` and its cursor. */
export type BotUserMessageNodeEdge = {
  __typename?: "BotUserMessageNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<BotUserMessageNode>;
};

export type CampaignActivityAssignmentNode = Node & {
  __typename?: "CampaignActivityAssignmentNode";
  assignment: AssignmentNode;
  campaignActivity: CampaignActivityNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  previouslyAssigned: Scalars["Boolean"]["output"];
};

export type CampaignActivityAssignmentNodeConnection = {
  __typename?: "CampaignActivityAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CampaignActivityAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CampaignActivityAssignmentNode` and its cursor. */
export type CampaignActivityAssignmentNodeEdge = {
  __typename?: "CampaignActivityAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CampaignActivityAssignmentNode>;
};

export type CampaignActivityNode = Node & {
  __typename?: "CampaignActivityNode";
  activity: ActivityNode;
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentSetting?: Maybe<AssignmentSettingNode>;
  campaign: CampaignNode;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CampaignActivityNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CampaignActivityNodeConnection = {
  __typename?: "CampaignActivityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CampaignActivityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CampaignActivityNode` and its cursor. */
export type CampaignActivityNodeEdge = {
  __typename?: "CampaignActivityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CampaignActivityNode>;
};

/** An enumeration. */
export enum CampaignCampaignAssignmentActivityTypeChoices {
  /** Course */
  Course = "COURSE",
  /** Exam */
  Exam = "EXAM",
  /** Training Program */
  Trainingprogram = "TRAININGPROGRAM",
  /** Webinar */
  Webinar = "WEBINAR",
  /** Workshop */
  Workshop = "WORKSHOP",
}

/** An enumeration. */
export enum CampaignCampaignStatusChoices {
  /** Draft Campaign */
  Draft = "DRAFT",
  /** Ended Campaign */
  Ended = "ENDED",
  /** Live Campaign */
  Live = "LIVE",
  /** Operating on Campaign */
  Processing = "PROCESSING",
}

export type CampaignChangeLogConnection = {
  __typename?: "CampaignChangeLogConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CampaignChangeLogEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CampaignChangeLog` and its cursor. */
export type CampaignChangeLogEdge = {
  __typename?: "CampaignChangeLogEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CampaignChangeLogNode>;
};

export type CampaignChangeLogNode = Node & {
  __typename?: "CampaignChangeLogNode";
  action?: Maybe<Scalars["String"]["output"]>;
  admin?: Maybe<UserNode>;
  adminId?: Maybe<Scalars["String"]["output"]>;
  assignmentUuid?: Maybe<Scalars["String"]["output"]>;
  details?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  timestamp?: Maybe<Scalars["DateTime"]["output"]>;
  user?: Maybe<UserNode>;
};

export type CampaignNode = Node & {
  __typename?: "CampaignNode";
  activity?: Maybe<ActivityUnion>;
  activitySet?: Maybe<CampaignActivityNodeConnection>;
  allowedAttempts: Scalars["Int"]["output"];
  areUsersPartOfAnotherCohort?: Maybe<Scalars["Boolean"]["output"]>;
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignableUsersSet?: Maybe<UserNodeConnection>;
  assignmentActivityType?: Maybe<CampaignCampaignAssignmentActivityTypeChoices>;
  /** field for `Assignments` linked to this cohort */
  assignmentSet?: Maybe<AssignmentConnection>;
  assignmentsSummary?: Maybe<CohortAssignmentsSummaryNode>;
  basedOn?: Maybe<Scalars["String"]["output"]>;
  campaign?: Maybe<CampaignNode>;
  campaignChangeLogs?: Maybe<CampaignChangeLogConnection>;
  clientSet: ClientNodeConnection;
  cohortPtr: CohortNode;
  competition?: Maybe<CompetitionNode>;
  course?: Maybe<CourseNode>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  description: Scalars["String"]["output"];
  employeegroup?: Maybe<EmployeeGroupNode>;
  employeegroupcampaignSet: EmployeeGroupCampaignNodeConnection;
  exam?: Maybe<ExamNode>;
  externalActivity?: Maybe<ExternalActivityUnion>;
  externalUrl?: Maybe<Scalars["String"]["output"]>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  objectId?: Maybe<Scalars["UUID"]["output"]>;
  /** Summary for the cohort progress on a period of time */
  performanceSummary?: Maybe<CohortPerformanceSummaryNode>;
  setting?: Maybe<AssignmentSettingNode>;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  status: CampaignCampaignStatusChoices;
  summary?: Maybe<CampaignSummaryNode>;
  totalCountUsersAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  totalCountUsersNotAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  trainingProgram?: Maybe<TrainingProgramNode>;
  /** Training Program campaign assignments */
  trainingProgramAssignmentSet?: Maybe<UserTrainingProgramNodeConnection>;
  undefinedactivitycompletionchecklist?: Maybe<UndefinedActivityCompletionChecklistNode>;
  /** list of users in cohort **Optional Filters** */
  users?: Maybe<UserNodeConnection>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
  vendor?: Maybe<VendorNode>;
  version: Scalars["Int"]["output"];
};

export type CampaignNodeActivitySetArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CampaignNodeAreUsersPartOfAnotherCohortArgs = {
  activeUsersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  cohortId: Scalars["ID"]["input"];
};

export type CampaignNodeAssignableUsersSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  username_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CampaignNodeAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  includeUserTrainingPrograms?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type CampaignNodeCampaignChangeLogsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CampaignNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CampaignNodeEmployeegroupcampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CampaignNodePerformanceSummaryArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  pointsType?: InputMaybe<PointsTypes>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CampaignNodeSummaryArgs = {
  campaignActivitiesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CampaignNodeTotalCountUsersAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type CampaignNodeTotalCountUsersNotAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type CampaignNodeTrainingProgramAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  inStatus?: InputMaybe<Array<InputMaybe<AssignmentStatusesEnum>>>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<AssignmentStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CampaignNodeUsersArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  excludeStatuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CampaignNodeConnection = {
  __typename?: "CampaignNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CampaignNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CampaignNode` and its cursor. */
export type CampaignNodeEdge = {
  __typename?: "CampaignNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CampaignNode>;
};

/** An enumeration. */
export enum CampaignStatusEnum {
  Draft = "DRAFT",
  Ended = "ENDED",
  Live = "LIVE",
  Processing = "PROCESSING",
}

export type CampaignSummaryNode = {
  __typename?: "CampaignSummaryNode";
  completed?: Maybe<Scalars["Int"]["output"]>;
  failed?: Maybe<Scalars["Int"]["output"]>;
  failedPercentage?: Maybe<Scalars["Float"]["output"]>;
  inProgress?: Maybe<Scalars["Int"]["output"]>;
  inProgressPercentage?: Maybe<Scalars["Float"]["output"]>;
  nonPerformedPercentage?: Maybe<Scalars["Float"]["output"]>;
  notStartedYet?: Maybe<Scalars["Int"]["output"]>;
  numberOfLearners?: Maybe<Scalars["Int"]["output"]>;
  overdue?: Maybe<Scalars["Int"]["output"]>;
  passed?: Maybe<Scalars["Int"]["output"]>;
  passedPercentage?: Maybe<Scalars["Float"]["output"]>;
  pending?: Maybe<Scalars["Int"]["output"]>;
  performedPercentage?: Maybe<Scalars["Float"]["output"]>;
  resubmit?: Maybe<Scalars["Int"]["output"]>;
  resubmittedPercentage?: Maybe<Scalars["Float"]["output"]>;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

export type CampaignsSummeryNode = {
  __typename?: "CampaignsSummeryNode";
  campaigns?: Maybe<CampaignNodeConnection>;
  overallSummary?: Maybe<LearningOverallSummaryNode>;
};

export type CampaignsSummeryNodeCampaignsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CanAssignUsersToCampaignNode = {
  __typename?: "CanAssignUsersToCampaignNode";
  /** Are all users part of campaign id sent */
  alreadyPartOfCampaign?: Maybe<Scalars["Boolean"]["output"]>;
  /** Total Number of users that can be assigned the activity */
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

export type CanStartActivity = {
  __typename?: "CanStartActivity";
  why?: Maybe<Scalars["String"]["output"]>;
  yes?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CaptureLead = {
  __typename?: "CaptureLead";
  lead?: Maybe<LeadNode>;
};

export type CatalogCourseNode = Node & {
  __typename?: "CatalogCourseNode";
  author?: Maybe<ContentAuthorNode>;
  category?: Maybe<CourseCategoryNode>;
  clientNameCode?: Maybe<Scalars["String"]["output"]>;
  comments: Scalars["String"]["output"];
  content?: Maybe<Scalars["String"]["output"]>;
  course: CourseNode;
  courseCode?: Maybe<Scalars["String"]["output"]>;
  courseLanguage?: Maybe<Scalars["String"]["output"]>;
  courseMediaType?: Maybe<Scalars["String"]["output"]>;
  courseStructureVersion?: Maybe<Scalars["String"]["output"]>;
  courseVersion?: Maybe<Scalars["String"]["output"]>;
  courseYear?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  nameForAccountManager: Scalars["String"]["output"];
  nameForAdminOfAdmin: Scalars["String"]["output"];
  nameForCertificate: Scalars["String"]["output"];
  nameForClientAdmin: Scalars["String"]["output"];
  nameForClientUser: Scalars["String"]["output"];
  tags: CourseTagNodeConnection;
  title: Scalars["String"]["output"];
};

export type CatalogCourseNodeTagsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CatalogCourseNodeConnection = {
  __typename?: "CatalogCourseNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CatalogCourseNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CatalogCourseNode` and its cursor. */
export type CatalogCourseNodeEdge = {
  __typename?: "CatalogCourseNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CatalogCourseNode>;
};

export type CatalogNode = Node & {
  __typename?: "CatalogNode";
  client?: Maybe<ClientNode>;
  clientcataloglearningactivitySet: ClientCatalogLearningActivityNodeConnection;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  products?: Maybe<ProductNodeConnection>;
};

export type CatalogNodeClientcataloglearningactivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CatalogNodeProductsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["String"]["input"]>;
  excludeCompetencyProductsCollectionProductsId?: InputMaybe<
    Scalars["ID"]["input"]
  >;
  excludeDraftClientLearningActivities?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
  excludeExpiredWebinars?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeExpiredWorkshops?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeProductsInClientCatalog?: InputMaybe<Scalars["ID"]["input"]>;
  excludeUserIdAssignedProducts?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPackaged?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  length?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  mainCategoryId?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyNonClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyType?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type CatalogNodeConnection = {
  __typename?: "CatalogNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CatalogNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CatalogNode` and its cursor. */
export type CatalogNodeEdge = {
  __typename?: "CatalogNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CatalogNode>;
};

export type CategoryNode = Node & {
  __typename?: "CategoryNode";
  clientSet: ClientNodeConnection;
  competitionSet: CompetitionNodeConnection;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  mainCategory?: Maybe<MainCategoryNode>;
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  productSet: ProductNodeConnection;
};

export type CategoryNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CategoryNodeCompetitionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CategoryNodeProductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryNodeConnection = {
  __typename?: "CategoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CategoryNode` and its cursor. */
export type CategoryNodeEdge = {
  __typename?: "CategoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CategoryNode>;
};

export type CertificateNode = Node & {
  __typename?: "CertificateNode";
  assignment?: Maybe<AssignmentUnion>;
  clientSet: ClientNodeConnection;
  course?: Maybe<CourseNode>;
  created: Scalars["DateTime"]["output"];
  downloadUrl: Scalars["String"]["output"];
  errorReason: Scalars["String"]["output"];
  grade: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isLegacy: Scalars["Boolean"]["output"];
  language: Scalars["String"]["output"];
  modified: Scalars["DateTime"]["output"];
  nameOnCertificate: Scalars["String"]["output"];
  pdfFile: Scalars["String"]["output"];
  status?: Maybe<CourseCertificateCertificateStatusChoices>;
  user?: Maybe<UserNode>;
};

export type CertificateNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CertificateNodeConnection = {
  __typename?: "CertificateNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CertificateNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CertificateNode` and its cursor. */
export type CertificateNodeEdge = {
  __typename?: "CertificateNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CertificateNode>;
};

export type CertificatePresetNode = Node & {
  __typename?: "CertificatePresetNode";
  assignmentNameFontColor: Scalars["String"]["output"];
  assignmentNameFontLocationX: Scalars["Int"]["output"];
  assignmentNameFontLocationY: Scalars["Int"]["output"];
  assignmentNameFontSize: Scalars["Int"]["output"];
  assignmentsettingSet: AssignmentSettingNodeConnection;
  client: ClientNode;
  fullNameFontColor: Scalars["String"]["output"];
  fullNameFontLocationX: Scalars["Int"]["output"];
  fullNameFontLocationY: Scalars["Int"]["output"];
  fullNameFontSize: Scalars["Int"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  issuanceDateFontColor: Scalars["String"]["output"];
  issuanceDateFontSize: Scalars["Int"]["output"];
  issuanceDateLocationX: Scalars["Int"]["output"];
  issuanceDateLocationY: Scalars["Int"]["output"];
  pdfName: Scalars["String"]["output"];
  verificationLinkFontColor: Scalars["String"]["output"];
  verificationLinkFontSize: Scalars["Int"]["output"];
  verificationLinkLocationX: Scalars["Int"]["output"];
  verificationLinkLocationY: Scalars["Int"]["output"];
};

export type CertificatePresetNodeAssignmentsettingSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ChangeAnswer = {
  __typename?: "ChangeAnswer";
  problemAttempt?: Maybe<ProblemsAttemptNode>;
};

export type ChangeLearningObjectiveOrder = {
  __typename?: "ChangeLearningObjectiveOrder";
  learningObjective?: Maybe<LosResourceNode>;
};

export type ChangeNotificationReadStatus = {
  __typename?: "ChangeNotificationReadStatus";
  notification?: Maybe<NotificationNode>;
};

export type ChangeResourceOrder = {
  __typename?: "ChangeResourceOrder";
  resource?: Maybe<ResourceObjectUnion>;
};

export type ChangeTrainingProgramBaseObjectOrder = {
  __typename?: "ChangeTrainingProgramBaseObjectOrder";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ChangeWorkshopSchedule = {
  __typename?: "ChangeWorkshopSchedule";
  workshop?: Maybe<WorkshopNode>;
};

/** A graphql Union to represent different types of `ChapterBlockNode`'s */
export type ChapterBlockUnionType =
  | ExamUnitNode
  | QuizUnitNode
  | SectionNode
  | UnitNode;

/**
 * Representation of the structure block `Chapter` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Chapter`'s resolved by `resolve_children`
 */
export type ChapterNode = Node & {
  __typename?: "ChapterNode";
  activity: ActivityNode;
  children?: Maybe<Array<Maybe<ChapterBlockUnionType>>>;
  childrenIncludeDeleted?: Maybe<Array<Maybe<ChapterBlockUnionType>>>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  previous?: Maybe<CourseBlockUnion>;
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

/** An enumeration. */
export enum ChecklistTutorialCheckItemPlatformChoices {
  /** LXP App */
  LxpApp = "LXP_APP",
  /** LXP Web */
  LxpWeb = "LXP_WEB",
  /** TMS App */
  TmsApp = "TMS_APP",
  /** TMS Web */
  TmsWeb = "TMS_WEB",
}

/** An enumeration. */
export enum ChecklistUserSurveyCheckItemStatusChoices {
  /** Deleted */
  Deleted = "DELETED",
  /** Done */
  Done = "DONE",
  /** Pending */
  Pending = "PENDING",
  /** Viewed */
  Viewed = "VIEWED",
}

/** An enumeration. */
export enum ChecklistUserTutorialCheckItemStatusChoices {
  /** Deleted */
  Deleted = "DELETED",
  /** Done */
  Done = "DONE",
  /** Pending */
  Pending = "PENDING",
  /** Viewed */
  Viewed = "VIEWED",
}

export type ChoiceAnswerBlockInput = {
  info: ResourceInput;
  isCorrect: Scalars["Boolean"]["input"];
  isDependable?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ChoiceAnswerResourceNode = Node & {
  __typename?: "ChoiceAnswerResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  choiceanswer?: Maybe<ChoiceAnswerResourceNode>;
  conceptResourcePool: ConceptResourceNodeConnection;
  conceptresource?: Maybe<ConceptResourceNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  explanationresource?: Maybe<ExplanationResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  imageresource?: Maybe<ImageResourceNode>;
  isCorrect: Scalars["Boolean"]["output"];
  isDependable: Scalars["Boolean"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  linkresource?: Maybe<LinkResourceNode>;
  losResourcePool: LosResourceNodeConnection;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  losresource?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  pdfresource?: Maybe<PdfResourceNode>;
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  variants: ResourceObjectNodeConnection;
  videoresource?: Maybe<VideoResourceNode>;
  videosubtitleresource?: Maybe<VideoSubtitleResourceNode>;
};

export type ChoiceAnswerResourceNodeConceptResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ChoiceAnswerResourceNodeLosResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ChoiceAnswerResourceNodeVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ChoiceAnswerResourceNodeConnection = {
  __typename?: "ChoiceAnswerResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChoiceAnswerResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ChoiceAnswerResourceNode` and its cursor. */
export type ChoiceAnswerResourceNodeEdge = {
  __typename?: "ChoiceAnswerResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ChoiceAnswerResourceNode>;
};

export type ClaimPoints = {
  __typename?: "ClaimPoints";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ClientAssignmentReportConnection = {
  __typename?: "ClientAssignmentReportConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientAssignmentReportEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientAssignmentReport` and its cursor. */
export type ClientAssignmentReportEdge = {
  __typename?: "ClientAssignmentReportEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientAssignmentReportNode>;
};

export type ClientAssignmentReportNode = Node & {
  __typename?: "ClientAssignmentReportNode";
  activity?: Maybe<ActivityUnion>;
  assignmentsCount?: Maybe<Scalars["Int"]["output"]>;
  date?: Maybe<Scalars["Date"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

export type ClientAssignmentsUtilization = {
  __typename?: "ClientAssignmentsUtilization";
  utilizedAssignments?: Maybe<Scalars["Int"]["output"]>;
};

export type ClientAuthSettingNode = Node & {
  __typename?: "ClientAuthSettingNode";
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  superAdmin?: Maybe<UserNode>;
};

export type ClientAuthSettingNodeConnection = {
  __typename?: "ClientAuthSettingNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientAuthSettingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientAuthSettingNode` and its cursor. */
export type ClientAuthSettingNodeEdge = {
  __typename?: "ClientAuthSettingNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientAuthSettingNode>;
};

export type ClientCatalogLearningActivityNode = Node & {
  __typename?: "ClientCatalogLearningActivityNode";
  activityOwner?: Maybe<UserNode>;
  assignmentFees: Scalars["Decimal"]["output"];
  catalog: CatalogNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  otherFees: Scalars["Decimal"]["output"];
  owner?: Maybe<UserNode>;
  product: ProductNode;
  provider?: Maybe<VendorNode>;
  registrationFees: Scalars["Decimal"]["output"];
  retired: Scalars["Boolean"]["output"];
  subjectAreas: SubjectAreaNodeConnection;
  subjectSubAreas: SubjectSubAreaNodeConnection;
  trainer?: Maybe<TrainerNode>;
  trainerFees: Scalars["Decimal"]["output"];
  trainingType: ProductCatalogClientCatalogLearningActivityTrainingTypeChoices;
  venueFees: Scalars["Decimal"]["output"];
};

export type ClientCatalogLearningActivityNodeSubjectAreasArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientCatalogLearningActivityNodeSubjectSubAreasArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientCatalogLearningActivityNodeConnection = {
  __typename?: "ClientCatalogLearningActivityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientCatalogLearningActivityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientCatalogLearningActivityNode` and its cursor. */
export type ClientCatalogLearningActivityNodeEdge = {
  __typename?: "ClientCatalogLearningActivityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientCatalogLearningActivityNode>;
};

/** An enumeration. */
export enum ClientClientConfigurationDefaultLanguageChoices {
  /** Arabic */
  Ar = "AR",
  /** English */
  En = "EN",
  /** French */
  Fr = "FR",
}

/** An enumeration. */
export enum ClientClientCountryChoices {
  /** Andorra */
  Ad = "AD",
  /** United Arab Emirates */
  Ae = "AE",
  /** Afghanistan */
  Af = "AF",
  /** Antigua and Barbuda */
  Ag = "AG",
  /** Anguilla */
  Ai = "AI",
  /** Albania */
  Al = "AL",
  /** Armenia */
  Am = "AM",
  /** Angola */
  Ao = "AO",
  /** Antarctica */
  Aq = "AQ",
  /** Argentina */
  Ar = "AR",
  /** American Samoa */
  As = "AS",
  /** Austria */
  At = "AT",
  /** Australia */
  Au = "AU",
  /** Aruba */
  Aw = "AW",
  /** Åland Islands */
  Ax = "AX",
  /** Azerbaijan */
  Az = "AZ",
  /** Bosnia and Herzegovina */
  Ba = "BA",
  /** Barbados */
  Bb = "BB",
  /** Bangladesh */
  Bd = "BD",
  /** Belgium */
  Be = "BE",
  /** Burkina Faso */
  Bf = "BF",
  /** Bulgaria */
  Bg = "BG",
  /** Bahrain */
  Bh = "BH",
  /** Burundi */
  Bi = "BI",
  /** Benin */
  Bj = "BJ",
  /** Saint Barthélemy */
  Bl = "BL",
  /** Bermuda */
  Bm = "BM",
  /** Brunei */
  Bn = "BN",
  /** Bolivia */
  Bo = "BO",
  /** Bonaire, Sint Eustatius and Saba */
  Bq = "BQ",
  /** Brazil */
  Br = "BR",
  /** Bahamas */
  Bs = "BS",
  /** Bhutan */
  Bt = "BT",
  /** Bouvet Island */
  Bv = "BV",
  /** Botswana */
  Bw = "BW",
  /** Belarus */
  By = "BY",
  /** Belize */
  Bz = "BZ",
  /** Canada */
  Ca = "CA",
  /** Cocos (Keeling) Islands */
  Cc = "CC",
  /** Congo (the Democratic Republic of the) */
  Cd = "CD",
  /** Central African Republic */
  Cf = "CF",
  /** Congo */
  Cg = "CG",
  /** Switzerland */
  Ch = "CH",
  /** Côte d'Ivoire */
  Ci = "CI",
  /** Cook Islands */
  Ck = "CK",
  /** Chile */
  Cl = "CL",
  /** Cameroon */
  Cm = "CM",
  /** China */
  Cn = "CN",
  /** Colombia */
  Co = "CO",
  /** Costa Rica */
  Cr = "CR",
  /** Cuba */
  Cu = "CU",
  /** Cabo Verde */
  Cv = "CV",
  /** Curaçao */
  Cw = "CW",
  /** Christmas Island */
  Cx = "CX",
  /** Cyprus */
  Cy = "CY",
  /** Czechia */
  Cz = "CZ",
  /** Germany */
  De = "DE",
  /** Djibouti */
  Dj = "DJ",
  /** Denmark */
  Dk = "DK",
  /** Dominica */
  Dm = "DM",
  /** Dominican Republic */
  Do = "DO",
  /** Algeria */
  Dz = "DZ",
  /** Ecuador */
  Ec = "EC",
  /** Estonia */
  Ee = "EE",
  /** Egypt */
  Eg = "EG",
  /** Western Sahara */
  Eh = "EH",
  /** Eritrea */
  Er = "ER",
  /** Spain */
  Es = "ES",
  /** Ethiopia */
  Et = "ET",
  /** Finland */
  Fi = "FI",
  /** Fiji */
  Fj = "FJ",
  /** Falkland Islands (Malvinas) */
  Fk = "FK",
  /** Micronesia (Federated States of) */
  Fm = "FM",
  /** Faroe Islands */
  Fo = "FO",
  /** France */
  Fr = "FR",
  /** Gabon */
  Ga = "GA",
  /** United Kingdom */
  Gb = "GB",
  /** Grenada */
  Gd = "GD",
  /** Georgia */
  Ge = "GE",
  /** French Guiana */
  Gf = "GF",
  /** Guernsey */
  Gg = "GG",
  /** Ghana */
  Gh = "GH",
  /** Gibraltar */
  Gi = "GI",
  /** Greenland */
  Gl = "GL",
  /** Gambia */
  Gm = "GM",
  /** Guinea */
  Gn = "GN",
  /** Guadeloupe */
  Gp = "GP",
  /** Equatorial Guinea */
  Gq = "GQ",
  /** Greece */
  Gr = "GR",
  /** South Georgia and the South Sandwich Islands */
  Gs = "GS",
  /** Guatemala */
  Gt = "GT",
  /** Guam */
  Gu = "GU",
  /** Guinea-Bissau */
  Gw = "GW",
  /** Guyana */
  Gy = "GY",
  /** Hong Kong */
  Hk = "HK",
  /** Heard Island and McDonald Islands */
  Hm = "HM",
  /** Honduras */
  Hn = "HN",
  /** Croatia */
  Hr = "HR",
  /** Haiti */
  Ht = "HT",
  /** Hungary */
  Hu = "HU",
  /** Indonesia */
  Id = "ID",
  /** Ireland */
  Ie = "IE",
  /** Israel */
  Il = "IL",
  /** Isle of Man */
  Im = "IM",
  /** India */
  In = "IN",
  /** British Indian Ocean Territory */
  Io = "IO",
  /** Iraq */
  Iq = "IQ",
  /** Iran */
  Ir = "IR",
  /** Iceland */
  Is = "IS",
  /** Italy */
  It = "IT",
  /** Jersey */
  Je = "JE",
  /** Jamaica */
  Jm = "JM",
  /** Jordan */
  Jo = "JO",
  /** Japan */
  Jp = "JP",
  /** Kenya */
  Ke = "KE",
  /** Kyrgyzstan */
  Kg = "KG",
  /** Cambodia */
  Kh = "KH",
  /** Kiribati */
  Ki = "KI",
  /** Comoros */
  Km = "KM",
  /** Saint Kitts and Nevis */
  Kn = "KN",
  /** North Korea */
  Kp = "KP",
  /** South Korea */
  Kr = "KR",
  /** Kuwait */
  Kw = "KW",
  /** Cayman Islands */
  Ky = "KY",
  /** Kazakhstan */
  Kz = "KZ",
  /** Laos */
  La = "LA",
  /** Lebanon */
  Lb = "LB",
  /** Saint Lucia */
  Lc = "LC",
  /** Liechtenstein */
  Li = "LI",
  /** Sri Lanka */
  Lk = "LK",
  /** Liberia */
  Lr = "LR",
  /** Lesotho */
  Ls = "LS",
  /** Lithuania */
  Lt = "LT",
  /** Luxembourg */
  Lu = "LU",
  /** Latvia */
  Lv = "LV",
  /** Libya */
  Ly = "LY",
  /** Morocco */
  Ma = "MA",
  /** Monaco */
  Mc = "MC",
  /** Moldova */
  Md = "MD",
  /** Montenegro */
  Me = "ME",
  /** Saint Martin (French part) */
  Mf = "MF",
  /** Madagascar */
  Mg = "MG",
  /** Marshall Islands */
  Mh = "MH",
  /** North Macedonia */
  Mk = "MK",
  /** Mali */
  Ml = "ML",
  /** Myanmar */
  Mm = "MM",
  /** Mongolia */
  Mn = "MN",
  /** Macao */
  Mo = "MO",
  /** Northern Mariana Islands */
  Mp = "MP",
  /** Martinique */
  Mq = "MQ",
  /** Mauritania */
  Mr = "MR",
  /** Montserrat */
  Ms = "MS",
  /** Malta */
  Mt = "MT",
  /** Mauritius */
  Mu = "MU",
  /** Maldives */
  Mv = "MV",
  /** Malawi */
  Mw = "MW",
  /** Mexico */
  Mx = "MX",
  /** Malaysia */
  My = "MY",
  /** Mozambique */
  Mz = "MZ",
  /** Namibia */
  Na = "NA",
  /** New Caledonia */
  Nc = "NC",
  /** Niger */
  Ne = "NE",
  /** Norfolk Island */
  Nf = "NF",
  /** Nigeria */
  Ng = "NG",
  /** Nicaragua */
  Ni = "NI",
  /** Netherlands */
  Nl = "NL",
  /** Norway */
  No = "NO",
  /** Nepal */
  Np = "NP",
  /** Nauru */
  Nr = "NR",
  /** Niue */
  Nu = "NU",
  /** New Zealand */
  Nz = "NZ",
  /** Oman */
  Om = "OM",
  /** Panama */
  Pa = "PA",
  /** Peru */
  Pe = "PE",
  /** French Polynesia */
  Pf = "PF",
  /** Papua New Guinea */
  Pg = "PG",
  /** Philippines */
  Ph = "PH",
  /** Pakistan */
  Pk = "PK",
  /** Poland */
  Pl = "PL",
  /** Saint Pierre and Miquelon */
  Pm = "PM",
  /** Pitcairn */
  Pn = "PN",
  /** Puerto Rico */
  Pr = "PR",
  /** Palestine, State of */
  Ps = "PS",
  /** Portugal */
  Pt = "PT",
  /** Palau */
  Pw = "PW",
  /** Paraguay */
  Py = "PY",
  /** Qatar */
  Qa = "QA",
  /** Réunion */
  Re = "RE",
  /** Romania */
  Ro = "RO",
  /** Serbia */
  Rs = "RS",
  /** Russia */
  Ru = "RU",
  /** Rwanda */
  Rw = "RW",
  /** Saudi Arabia */
  Sa = "SA",
  /** Solomon Islands */
  Sb = "SB",
  /** Seychelles */
  Sc = "SC",
  /** Sudan */
  Sd = "SD",
  /** Sweden */
  Se = "SE",
  /** Singapore */
  Sg = "SG",
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = "SH",
  /** Slovenia */
  Si = "SI",
  /** Svalbard and Jan Mayen */
  Sj = "SJ",
  /** Slovakia */
  Sk = "SK",
  /** Sierra Leone */
  Sl = "SL",
  /** San Marino */
  Sm = "SM",
  /** Senegal */
  Sn = "SN",
  /** Somalia */
  So = "SO",
  /** Suriname */
  Sr = "SR",
  /** South Sudan */
  Ss = "SS",
  /** Sao Tome and Principe */
  St = "ST",
  /** El Salvador */
  Sv = "SV",
  /** Sint Maarten (Dutch part) */
  Sx = "SX",
  /** Syria */
  Sy = "SY",
  /** Eswatini */
  Sz = "SZ",
  /** Turks and Caicos Islands */
  Tc = "TC",
  /** Chad */
  Td = "TD",
  /** French Southern Territories */
  Tf = "TF",
  /** Togo */
  Tg = "TG",
  /** Thailand */
  Th = "TH",
  /** Tajikistan */
  Tj = "TJ",
  /** Tokelau */
  Tk = "TK",
  /** Timor-Leste */
  Tl = "TL",
  /** Turkmenistan */
  Tm = "TM",
  /** Tunisia */
  Tn = "TN",
  /** Tonga */
  To = "TO",
  /** Turkey */
  Tr = "TR",
  /** Trinidad and Tobago */
  Tt = "TT",
  /** Tuvalu */
  Tv = "TV",
  /** Taiwan */
  Tw = "TW",
  /** Tanzania */
  Tz = "TZ",
  /** Ukraine */
  Ua = "UA",
  /** Uganda */
  Ug = "UG",
  /** United States Minor Outlying Islands */
  Um = "UM",
  /** United States of America */
  Us = "US",
  /** Uruguay */
  Uy = "UY",
  /** Uzbekistan */
  Uz = "UZ",
  /** Holy See */
  Va = "VA",
  /** Saint Vincent and the Grenadines */
  Vc = "VC",
  /** Venezuela */
  Ve = "VE",
  /** Virgin Islands (British) */
  Vg = "VG",
  /** Virgin Islands (U.S.) */
  Vi = "VI",
  /** Vietnam */
  Vn = "VN",
  /** Vanuatu */
  Vu = "VU",
  /** Wallis and Futuna */
  Wf = "WF",
  /** Samoa */
  Ws = "WS",
  /** Yemen */
  Ye = "YE",
  /** Mayotte */
  Yt = "YT",
  /** South Africa */
  Za = "ZA",
  /** Zambia */
  Zm = "ZM",
  /** Zimbabwe */
  Zw = "ZW",
}

/** An enumeration. */
export enum ClientClientCurrencyChoices {
  /** AED */
  Aed = "AED",
  /** AUD */
  Aud = "AUD",
  /** BHD */
  Bhd = "BHD",
  /** CAD */
  Cad = "CAD",
  /** CNY */
  Cny = "CNY",
  /** DZD */
  Dzd = "DZD",
  /** EGP */
  Egp = "EGP",
  /** EUR */
  Eur = "EUR",
  /** GBP */
  Gbp = "GBP",
  /** INR */
  Inr = "INR",
  /** IQD */
  Iqd = "IQD",
  /** IRR */
  Irr = "IRR",
  /** JOD */
  Jod = "JOD",
  /** JPY */
  Jpy = "JPY",
  /** KWD */
  Kwd = "KWD",
  /** LBP */
  Lbp = "LBP",
  /** LYD */
  Lyd = "LYD",
  /** MAD */
  Mad = "MAD",
  /** OMR */
  Omr = "OMR",
  /** QAR */
  Qar = "QAR",
  /** SAR */
  Sar = "SAR",
  /** SYP */
  Syp = "SYP",
  /** TND */
  Tnd = "TND",
  /** TRY */
  Try = "TRY",
  /** USD */
  Usd = "USD",
  /** YER */
  Yer = "YER",
}

/** An enumeration. */
export enum ClientClientSectorChoices {
  /** Agriculture & Forestry */
  AgricultureForestry = "AGRICULTURE_FORESTRY",
  /** Automotive */
  Automotive = "AUTOMOTIVE",
  /** Banking & Finance */
  BankingFinance = "BANKING_FINANCE",
  /** Biotechnology */
  Biotechnology = "BIOTECHNOLOGY",
  /** Chemicals */
  Chemicals = "CHEMICALS",
  /** Construction */
  Construction = "CONSTRUCTION",
  /** Consumer Goods */
  ConsumerGoods = "CONSUMER_GOODS",
  /** Education */
  Education = "EDUCATION",
  /** Energy & Utilities */
  EnergyUtilities = "ENERGY_UTILITIES",
  /** Entertainment & Media */
  EntertainmentMedia = "ENTERTAINMENT_MEDIA",
  /** Food & Beverage */
  FoodBeverage = "FOOD_BEVERAGE",
  /** Government & Public Sector */
  GovernmentPublicSector = "GOVERNMENT_PUBLIC_SECTOR",
  /** Healthcare */
  Healthcare = "HEALTHCARE",
  /** Hospitality & Tourism */
  HospitalityTourism = "HOSPITALITY_TOURISM",
  /** Information Technology (IT) */
  InformationTechnologyIt = "INFORMATION_TECHNOLOGY_IT_",
  /** Insurance */
  Insurance = "INSURANCE",
  /** Manufacturing */
  Manufacturing = "MANUFACTURING",
  /** Mining & Metals */
  MiningMetals = "MINING_METALS",
  /** Pharmaceuticals */
  Pharmaceuticals = "PHARMACEUTICALS",
  /** Real Estate */
  RealEstate = "REAL_ESTATE",
  /** Retail */
  Retail = "RETAIL",
  /** Telecommunications */
  Telecommunications = "TELECOMMUNICATIONS",
  /** Transportation & Logistics */
  TransportationLogistics = "TRANSPORTATION_LOGISTICS",
  /** Wholesale & Distribution */
  WholesaleDistribution = "WHOLESALE_DISTRIBUTION",
}

export type ClientConfigurationNode = Node & {
  __typename?: "ClientConfigurationNode";
  HRSDUnitMapping?: Maybe<Scalars["String"]["output"]>;
  allowResetPassword: Scalars["Boolean"]["output"];
  autoGeneratePassword: Scalars["Boolean"]["output"];
  brandLogoUrl: Scalars["String"]["output"];
  /** Configurations for LMS client */
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  customConfig?: Maybe<Scalars["GenericScalar"]["output"]>;
  customLandingPageName: Scalars["String"]["output"];
  defaultLanguage: ClientClientConfigurationDefaultLanguageChoices;
  enableFacebookLogin: Scalars["Boolean"]["output"];
  enableGoogleLogin: Scalars["Boolean"]["output"];
  enableLinkedinLogin: Scalars["Boolean"]["output"];
  enableMagicLinksLogin: Scalars["Boolean"]["output"];
  enableOneTimePassword: Scalars["Boolean"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  selfRegistrationEnabled: Scalars["Boolean"]["output"];
  showSubscriptionDueDate: Scalars["Boolean"]["output"];
  subscriptionDuration?: Maybe<Scalars["String"]["output"]>;
  subscriptionEndDate: Scalars["DateTime"]["output"];
  subscriptionStartDate: Scalars["DateTime"]["output"];
  theme?: Maybe<Scalars["GenericScalar"]["output"]>;
};

/** An enumeration. */
export enum ClientContentClientLearningActivityStatusChoices {
  /** draft */
  Draft = "DRAFT",
  /** published */
  Published = "PUBLISHED",
}

export type ClientEngagementConnectionNodeConnection = {
  __typename?: "ClientEngagementConnectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientEngagementConnectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ClientEngagementConnectionNode` and its cursor. */
export type ClientEngagementConnectionNodeEdge = {
  __typename?: "ClientEngagementConnectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientEngagementNode>;
};

export type ClientEngagementNode = {
  __typename?: "ClientEngagementNode";
  client?: Maybe<ClientNode>;
  engagementIndex?: Maybe<Scalars["Float"]["output"]>;
};

export type ClientGamificationSettingNode = Node & {
  __typename?: "ClientGamificationSettingNode";
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isLeaguesActive: Scalars["Boolean"]["output"];
  leaderboardBasedOnHierarchyLevel?: Maybe<EnterpriseHierarchyNode>;
  modified: Scalars["DateTime"]["output"];
};

export type ClientGamificationSettingNodeConnection = {
  __typename?: "ClientGamificationSettingNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientGamificationSettingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientGamificationSettingNode` and its cursor. */
export type ClientGamificationSettingNodeEdge = {
  __typename?: "ClientGamificationSettingNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientGamificationSettingNode>;
};

export type ClientLearningActivityNode = Node & {
  __typename?: "ClientLearningActivityNode";
  canBePublished?: Maybe<Scalars["Boolean"]["output"]>;
  canClone?: Maybe<Scalars["Boolean"]["output"]>;
  canDelete?: Maybe<Scalars["Boolean"]["output"]>;
  canEdit?: Maybe<Scalars["Boolean"]["output"]>;
  canPublish?: Maybe<Scalars["Boolean"]["output"]>;
  client: ClientNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  learningActivity?: Maybe<LearningActivityUnion>;
  status: ClientContentClientLearningActivityStatusChoices;
};

export type ClientLearningActivityNodeConnection = {
  __typename?: "ClientLearningActivityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientLearningActivityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientLearningActivityNode` and its cursor. */
export type ClientLearningActivityNodeEdge = {
  __typename?: "ClientLearningActivityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientLearningActivityNode>;
};

/** An enumeration. */
export enum ClientLearningActivityStatusEnum {
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

export type ClientLearningSummaryNode = {
  __typename?: "ClientLearningSummaryNode";
  activeUsersTotalCount?: Maybe<Scalars["Int"]["output"]>;
  assignmentsTotalCount?: Maybe<Scalars["Int"]["output"]>;
  certificatesTotalCount?: Maybe<Scalars["Int"]["output"]>;
  fromDate?: Maybe<Scalars["Date"]["output"]>;
  inProgressAssignmentsTotalCount?: Maybe<Scalars["Int"]["output"]>;
  toDate?: Maybe<Scalars["Date"]["output"]>;
};

export type ClientNode = Node & {
  __typename?: "ClientNode";
  assignmentExtensionRequests: AssignmentExtensionRequestNodeConnection;
  assignments: AssignmentNodeConnection;
  authSetting?: Maybe<ClientAuthSettingNode>;
  basedOnTypes?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  catalog?: Maybe<CatalogNode>;
  categories: CategoryNodeConnection;
  certificatepreset?: Maybe<CertificatePresetNode>;
  certificates?: Maybe<CertificateNodeConnection>;
  client?: Maybe<ClientConfigurationNode>;
  clientsurveycheckitemSet: ClientSurveyCheckItemNodeConnection;
  cohorts: CohortNodeConnection;
  config?: Maybe<ClientConfigurationNode>;
  country: ClientClientCountryChoices;
  courses: CourseNodeConnection;
  created: Scalars["DateTime"]["output"];
  currency?: Maybe<ClientClientCurrencyChoices>;
  defaultForUsers: DefaultUserClientNodeConnection;
  domain: Scalars["String"]["output"];
  enterprisecustomer?: Maybe<EnterpriseCustomerNode>;
  exams: ExamNodeConnection;
  externalActivities?: Maybe<ExternalActivityConnection>;
  gamificationSetting?: Maybe<ClientGamificationSettingNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isEnterprise: Scalars["Boolean"]["output"];
  knowledgeBaseDocuments: KnowledgeBaseDocumentNodeConnection;
  leaguesseasonSet: LeaguesSeasonNodeConnection;
  learningActivities?: Maybe<ClientLearningActivityNodeConnection>;
  learningPlans: LearningPlanNodeConnection;
  learningactivitysubscriberSet: LearningActivitySubscriberNodeConnection;
  losPool?: Maybe<ClientResourceNodeConnection>;
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  productRequestSetting?: Maybe<ClientProductRequestSettingNode>;
  productRequests: ProductRequestNodeConnection;
  productbookmarkfolderSet: ProductBookmarkFolderNodeConnection;
  questions?: Maybe<ClientResourceNodeConnection>;
  reportsauditentrySet: ReportsAuditEntryNodeConnection;
  resources?: Maybe<ClientResourceNodeConnection>;
  sector?: Maybe<ClientClientSectorChoices>;
  subjectAreas: SubjectAreaNodeConnection;
  subjectSubAreas: SubjectSubAreaNodeConnection;
  tags: TagNodeConnection;
  trainingPrograms: TrainingProgramNodeConnection;
  users?: Maybe<UserNodeConnection>;
  uuid: Scalars["UUID"]["output"];
  vendor?: Maybe<VendorNode>;
  visibleTrainers?: Maybe<TrainerNodeConnection>;
  visibleVendors?: Maybe<VendorNodeConnection>;
};

export type ClientNodeAssignmentExtensionRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type ClientNodeAssignmentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ClientNodeBasedOnTypesArgs = {
  onlyVisibleGroups?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ClientNodeCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeCertificatesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  assignment_User_Id?: InputMaybe<Scalars["ID"]["input"]>;
  assignment_User_Username?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  course_Title?: InputMaybe<Scalars["String"]["input"]>;
  course_Title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CourseCertificateCertificateStatusChoices>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeClientsurveycheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Gt?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Gte?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Lt?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Lte?: InputMaybe<Scalars["Date"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeCohortsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeDefaultForUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeExamsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<QuizzingExamTypeChoices>;
};

export type ClientNodeExternalActivitiesArgs = {
  activityType?: InputMaybe<ExternalActivitiesTypes>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  titleIcontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeKnowledgeBaseDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeLeaguesseasonSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeLearningActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  learningActivityId?: InputMaybe<Scalars["ID"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeLearningPlansArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeLearningactivitysubscriberSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeLosPoolArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  idsIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  inVerbs?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
  verb?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeProductRequestsArgs = {
  activityType?: InputMaybe<RequestProductRequestActivityTypeChoices>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestProductRequestStatusChoices>;
};

export type ClientNodeProductbookmarkfolderSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeQuestionsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  excludeFromExamsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  inDifficultyValues?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  inLosIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeReportsauditentrySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeResourcesArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ResourceTypesEnum>;
};

export type ClientNodeSubjectAreasArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeSubjectSubAreasArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeTagsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClientNodeTrainingProgramsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  username_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeVisibleTrainersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  notes_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  phone_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  specialization?: InputMaybe<Scalars["String"]["input"]>;
  specialization_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeVisibleVendorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  nameAbbreviation?: InputMaybe<Scalars["String"]["input"]>;
  nameAbbreviation_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClientNodeConnection = {
  __typename?: "ClientNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientNode` and its cursor. */
export type ClientNodeEdge = {
  __typename?: "ClientNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientNode>;
};

export type ClientProductRequestSettingNode = Node & {
  __typename?: "ClientProductRequestSettingNode";
  autoApproveLearningActivitiesRequests: Scalars["Boolean"]["output"];
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  maximumAutoApprovedLearningActivitiesRequests: Scalars["Int"]["output"];
  modified: Scalars["DateTime"]["output"];
};

export type ClientResourceNode = Node & {
  __typename?: "ClientResourceNode";
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  resource?: Maybe<ResourceObjectUnion>;
  resourceId: Scalars["UUID"]["output"];
  resourceUsageCount?: Maybe<Scalars["Int"]["output"]>;
  usedInActivity?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ClientResourceNodeUsedInActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type ClientResourceNodeConnection = {
  __typename?: "ClientResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientResourceNode` and its cursor. */
export type ClientResourceNodeEdge = {
  __typename?: "ClientResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientResourceNode>;
};

export type ClientSurveyCheckItemNode = Node & {
  __typename?: "ClientSurveyCheckItemNode";
  activity?: Maybe<ActivityNode>;
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  dueDate: Scalars["Date"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  surveySmid: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  usersurveycheckitemSet: UserSurveyCheckItemNodeConnection;
};

export type ClientSurveyCheckItemNodeUsersurveycheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  checkItem_IsActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<ChecklistUserSurveyCheckItemStatusChoices>;
};

export type ClientSurveyCheckItemNodeConnection = {
  __typename?: "ClientSurveyCheckItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientSurveyCheckItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ClientSurveyCheckItemNode` and its cursor. */
export type ClientSurveyCheckItemNodeEdge = {
  __typename?: "ClientSurveyCheckItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientSurveyCheckItemNode>;
};

export type CloneCourse = {
  __typename?: "CloneCourse";
  course?: Maybe<CourseNode>;
};

export type CloneLearningActivity = {
  __typename?: "CloneLearningActivity";
  clientLearningActivity?: Maybe<ClientLearningActivityNode>;
};

export type CloneTrainingProgram = {
  __typename?: "CloneTrainingProgram";
  trainingProgram?: Maybe<TrainingProgramNode>;
};

export type CloneTrainingProgramSections = {
  __typename?: "CloneTrainingProgramSections";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CohortAssignmentsSummaryNode = {
  __typename?: "CohortAssignmentsSummaryNode";
  coursesCount?: Maybe<Scalars["Int"]["output"]>;
  examsCount?: Maybe<Scalars["Int"]["output"]>;
  workshopsCount?: Maybe<Scalars["Int"]["output"]>;
};

export type CohortNode = Node & {
  __typename?: "CohortNode";
  areUsersPartOfAnotherCohort?: Maybe<Scalars["Boolean"]["output"]>;
  /** field for `Assignments` linked to this cohort */
  assignmentSet?: Maybe<AssignmentConnection>;
  assignmentsSummary?: Maybe<CohortAssignmentsSummaryNode>;
  basedOn?: Maybe<Scalars["String"]["output"]>;
  campaign?: Maybe<CampaignNode>;
  clientSet: ClientNodeConnection;
  competition?: Maybe<CompetitionNode>;
  created: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  employeegroup?: Maybe<EmployeeGroupNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  /** Summary for the cohort progress on a period of time */
  performanceSummary?: Maybe<CohortPerformanceSummaryNode>;
  totalCountUsersAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  totalCountUsersNotAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  /** list of users in cohort **Optional Filters** */
  users?: Maybe<UserNodeConnection>;
};

export type CohortNodeAreUsersPartOfAnotherCohortArgs = {
  activeUsersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  cohortId: Scalars["ID"]["input"];
};

export type CohortNodeAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  includeUserTrainingPrograms?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type CohortNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CohortNodePerformanceSummaryArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  pointsType?: InputMaybe<PointsTypes>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CohortNodeTotalCountUsersAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type CohortNodeTotalCountUsersNotAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type CohortNodeUsersArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  excludeStatuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CohortNodeConnection = {
  __typename?: "CohortNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CohortNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CohortNode` and its cursor. */
export type CohortNodeEdge = {
  __typename?: "CohortNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CohortNode>;
};

export type CohortPerformanceSummaryNode = {
  __typename?: "CohortPerformanceSummaryNode";
  overall?: Maybe<OverallPerformanceNode>;
  period?: Maybe<Array<Maybe<PeriodPerformanceNode>>>;
};

export type CommentNode = Node & {
  __typename?: "CommentNode";
  content: Scalars["String"]["output"];
  created: Scalars["DateTime"]["output"];
  fileSet: FileNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  step: StepNode;
  user: UserNode;
};

export type CommentNodeFileSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentNodeConnection = {
  __typename?: "CommentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CommentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CommentNode` and its cursor. */
export type CommentNodeEdge = {
  __typename?: "CommentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CommentNode>;
};

export type CompetencyCategoryNode = Node & {
  __typename?: "CompetencyCategoryNode";
  competencySet: CompetencyNodeConnection;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
};

export type CompetencyCategoryNodeCompetencySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyCategoryNodeConnection = {
  __typename?: "CompetencyCategoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetencyCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetencyCategoryNode` and its cursor. */
export type CompetencyCategoryNodeEdge = {
  __typename?: "CompetencyCategoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetencyCategoryNode>;
};

export type CompetencyLevelNode = Node & {
  __typename?: "CompetencyLevelNode";
  competencySet: CompetencyNodeConnection;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isFulfilled?: Maybe<Scalars["Boolean"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  skills: CompetencySkillNodeConnection;
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
  type: EnterpriseCompetencyLevelTypeChoices;
};

export type CompetencyLevelNodeCompetencySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyLevelNodeSkillsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyLevelNodeConnection = {
  __typename?: "CompetencyLevelNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetencyLevelNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetencyLevelNode` and its cursor. */
export type CompetencyLevelNodeEdge = {
  __typename?: "CompetencyLevelNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetencyLevelNode>;
};

export type CompetencyNode = Node & {
  __typename?: "CompetencyNode";
  category?: Maybe<CompetencyCategoryNode>;
  competencyproductscollectionSet: CompetencyProductsCollectionNodeConnection;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  employeeprofileSet: EmployeeProfileNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isFulfilled?: Maybe<Scalars["Boolean"]["output"]>;
  jobroleSet: JobRoleNodeConnection;
  levels?: Maybe<CompetencyLevelNodeConnection>;
  modified: Scalars["DateTime"]["output"];
  recommendedCourses?: Maybe<Array<Maybe<CourseNode>>>;
  requiredSkillLevel: EnterpriseCompetencyRequiredSkillLevelChoices;
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
  trainingImportance?: Maybe<Scalars["String"]["output"]>;
};

export type CompetencyNodeCompetencyproductscollectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyNodeEmployeeprofileSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  employeeId_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<EnterpriseEmployeeProfileStatusChoices>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CompetencyNodeJobroleSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyNodeLevelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyNodeConnection = {
  __typename?: "CompetencyNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetencyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetencyNode` and its cursor. */
export type CompetencyNodeEdge = {
  __typename?: "CompetencyNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetencyNode>;
};

export type CompetencyProductsCollectionNode = Node & {
  __typename?: "CompetencyProductsCollectionNode";
  children: CompetencyProductsCollectionNodeConnection;
  competency: CompetencyNode;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** to indicate that this collection can be viewed by all clients */
  isPublic: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  parentCollection?: Maybe<CompetencyProductsCollectionNode>;
  products?: Maybe<ProductNodeConnection>;
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
};

export type CompetencyProductsCollectionNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencyProductsCollectionNodeProductsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["String"]["input"]>;
  excludeCompetencyProductsCollectionProductsId?: InputMaybe<
    Scalars["ID"]["input"]
  >;
  excludeDraftClientLearningActivities?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
  excludeExpiredWebinars?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeExpiredWorkshops?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeProductsInClientCatalog?: InputMaybe<Scalars["ID"]["input"]>;
  excludeUserIdAssignedProducts?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPackaged?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  length?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  mainCategoryId?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyNonClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyType?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type CompetencyProductsCollectionNodeConnection = {
  __typename?: "CompetencyProductsCollectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetencyProductsCollectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetencyProductsCollectionNode` and its cursor. */
export type CompetencyProductsCollectionNodeEdge = {
  __typename?: "CompetencyProductsCollectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetencyProductsCollectionNode>;
};

export type CompetencySkillNode = Node & {
  __typename?: "CompetencySkillNode";
  competencylevelSet: CompetencyLevelNodeConnection;
  courses: CourseNodeConnection;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  evidenceSet: EvidenceNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  importance: Scalars["Int"]["output"];
  isFulfilled?: Maybe<Scalars["Boolean"]["output"]>;
  level: Scalars["Int"]["output"];
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
};

export type CompetencySkillNodeCompetencylevelSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencySkillNodeCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetencySkillNodeEvidenceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CompetencySkillNodeConnection = {
  __typename?: "CompetencySkillNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetencySkillNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetencySkillNode` and its cursor. */
export type CompetencySkillNodeEdge = {
  __typename?: "CompetencySkillNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetencySkillNode>;
};

/** An enumeration. */
export enum CompetitionCompetitionLevelChoices {
  /** Easy */
  Easy = "EASY",
  /** Hard */
  Hard = "HARD",
  /** Medium */
  Medium = "MEDIUM",
}

/** An enumeration. */
export enum CompetitionCompetitionStatusChoices {
  /** Draft */
  Draft = "DRAFT",
  /** Ended */
  Ended = "ENDED",
  /** Live */
  Live = "LIVE",
  /** Scheduled */
  Scheduled = "SCHEDULED",
}

export type CompetitionConfigNode = {
  __typename?: "CompetitionConfigNode";
  streaksPoints?: Maybe<Array<Maybe<CompetitionPointStreakInfoNode>>>;
  timeoutPopTime?: Maybe<Scalars["Int"]["output"]>;
};

export type CompetitionConnection = {
  __typename?: "CompetitionConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetitionEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** An enumeration. */
export enum CompetitionCustomStatus {
  Active = "active",
  Previous = "previous",
  Upcoming = "upcoming",
}

/** A Relay edge containing a `Competition` and its cursor. */
export type CompetitionEdge = {
  __typename?: "CompetitionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetitionUnion>;
};

/** An enumeration. */
export enum CompetitionExamCompetitionAttemptStatusChoices {
  /** Completed */
  Completed = "COMPLETED",
  /** Uncompleted */
  Uncompleted = "UNCOMPLETED",
}

export type CompetitionInviteeReportConnection = {
  __typename?: "CompetitionInviteeReportConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetitionInviteeReportEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetitionInviteeReport` and its cursor. */
export type CompetitionInviteeReportEdge = {
  __typename?: "CompetitionInviteeReportEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetitionInviteeReportNode>;
};

export type CompetitionInviteeReportNode = {
  __typename?: "CompetitionInviteeReportNode";
  assignment?: Maybe<AssignmentUnion>;
  leaderboard?: Maybe<CompetitionLeaderboardParticipantNode>;
  status?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

/** An enumeration. */
export enum CompetitionInviteeStatus {
  NotParticipated = "not_participated",
  Participated = "participated",
}

export type CompetitionLeaderboardParticipantConnection = {
  __typename?: "CompetitionLeaderboardParticipantConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetitionLeaderboardParticipantEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetitionLeaderboardParticipant` and its cursor. */
export type CompetitionLeaderboardParticipantEdge = {
  __typename?: "CompetitionLeaderboardParticipantEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetitionLeaderboardParticipantNode>;
};

export type CompetitionLeaderboardParticipantNode = {
  __typename?: "CompetitionLeaderboardParticipantNode";
  periodPoints?: Maybe<Scalars["Int"]["output"]>;
  rank?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<UserNode>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

/** An enumeration. */
export enum CompetitionLevels {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

export type CompetitionNode = Node & {
  __typename?: "CompetitionNode";
  activity?: Maybe<ActivityNode>;
  areUsersPartOfAnotherCohort?: Maybe<Scalars["Boolean"]["output"]>;
  /** field for `Assignments` linked to this cohort */
  assignmentSet?: Maybe<AssignmentConnection>;
  assignmentsSummary?: Maybe<CohortAssignmentsSummaryNode>;
  basedOn?: Maybe<Scalars["String"]["output"]>;
  campaign?: Maybe<CampaignNode>;
  category?: Maybe<CategoryNode>;
  clientSet: ClientNodeConnection;
  cohortPtr: CohortNode;
  competition?: Maybe<CompetitionNode>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  description: Scalars["String"]["output"];
  employeegroup?: Maybe<EmployeeGroupNode>;
  examCompetitionProblemsSuggestions: ExamCompetitionSuggestedExamProblemNodeConnection;
  examcompetition?: Maybe<ExamCompetitionNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  isPrevious?: Maybe<Scalars["Boolean"]["output"]>;
  isUpcoming?: Maybe<Scalars["Boolean"]["output"]>;
  leaderBoard?: Maybe<CompetitionLeaderboardParticipantConnection>;
  level: CompetitionCompetitionLevelChoices;
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  /** Summary for the cohort progress on a period of time */
  performanceSummary?: Maybe<CohortPerformanceSummaryNode>;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  status: CompetitionCompetitionStatusChoices;
  thumbnail: Scalars["String"]["output"];
  totalCountUsersAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  totalCountUsersNotAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  /** list of users in cohort **Optional Filters** */
  users?: Maybe<UserNodeConnection>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CompetitionNodeAreUsersPartOfAnotherCohortArgs = {
  activeUsersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  cohortId: Scalars["ID"]["input"];
};

export type CompetitionNodeAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  includeUserTrainingPrograms?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetitionNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CompetitionNodeExamCompetitionProblemsSuggestionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CompetitionNodeLeaderBoardArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  includeRequestUser?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CompetitionNodePerformanceSummaryArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  pointsType?: InputMaybe<PointsTypes>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CompetitionNodeTotalCountUsersAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type CompetitionNodeTotalCountUsersNotAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type CompetitionNodeUsersArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  excludeStatuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompetitionNodeConnection = {
  __typename?: "CompetitionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompetitionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CompetitionNode` and its cursor. */
export type CompetitionNodeEdge = {
  __typename?: "CompetitionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CompetitionNode>;
};

export type CompetitionPointInfoNode = {
  __typename?: "CompetitionPointInfoNode";
  icon?: Maybe<Scalars["String"]["output"]>;
  points?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CompetitionPointStreakInfoNode = {
  __typename?: "CompetitionPointStreakInfoNode";
  points?: Maybe<Scalars["Int"]["output"]>;
  streak?: Maybe<Scalars["Int"]["output"]>;
};

export type CompetitionPointsInfoNode = {
  __typename?: "CompetitionPointsInfoNode";
  badges?: Maybe<Array<Maybe<CompetitionPointInfoNode>>>;
  challenges?: Maybe<Array<Maybe<CompetitionPointInfoNode>>>;
  time?: Maybe<Array<Maybe<CompetitionPointInfoNode>>>;
};

export type CompetitionReportNode = {
  __typename?: "CompetitionReportNode";
  /** Duration of the competition in seconds */
  duration?: Maybe<Scalars["Int"]["output"]>;
  inviteesCount?: Maybe<Scalars["Int"]["output"]>;
  nonParticipantsCount?: Maybe<Scalars["Int"]["output"]>;
  nonParticipationPercentage?: Maybe<Scalars["Float"]["output"]>;
  participantsCount?: Maybe<Scalars["Int"]["output"]>;
  participationPercentage?: Maybe<Scalars["Float"]["output"]>;
};

/** An enumeration. */
export enum CompetitionStatuses {
  Draft = "draft",
  Ended = "ended",
  Live = "live",
  Scheduled = "scheduled",
}

export type CompetitionUnion = ExamCompetitionNode;

/** Complete undefined activity assignments that do not have completion requests. */
export type CompleteUndefinedActivityAssignmentsWithNoCompletionRequests = {
  __typename?: "CompleteUndefinedActivityAssignmentsWithNoCompletionRequests";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type ConceptResourceNode = Node & {
  __typename?: "ConceptResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  choiceanswer?: Maybe<ChoiceAnswerResourceNode>;
  conceptResourcePool: ConceptResourceNodeConnection;
  conceptresource?: Maybe<ConceptResourceNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  explanationresource?: Maybe<ExplanationResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  imageresource?: Maybe<ImageResourceNode>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  linkresource?: Maybe<LinkResourceNode>;
  losResourcePool: LosResourceNodeConnection;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  losresource?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  pdfresource?: Maybe<PdfResourceNode>;
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  resources?: Maybe<Array<Maybe<ResourceObjectUnion>>>;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  variants: ResourceObjectNodeConnection;
  videoresource?: Maybe<VideoResourceNode>;
  videosubtitleresource?: Maybe<VideoSubtitleResourceNode>;
};

export type ConceptResourceNodeConceptResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ConceptResourceNodeLosResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ConceptResourceNodeResourcesArgs = {
  maxCount?: InputMaybe<Scalars["Int"]["input"]>;
  resourceType?: InputMaybe<ResourceObjectTypeEnum>;
};

export type ConceptResourceNodeVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ConceptResourceNodeConnection = {
  __typename?: "ConceptResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ConceptResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ConceptResourceNode` and its cursor. */
export type ConceptResourceNodeEdge = {
  __typename?: "ConceptResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ConceptResourceNode>;
};

export type ContentAuthorNode = Node & {
  __typename?: "ContentAuthorNode";
  contentOrganization?: Maybe<ContentOrganization>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  user?: Maybe<UserNode>;
};

export type ContentAuthorNodeConnection = {
  __typename?: "ContentAuthorNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContentAuthorNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ContentAuthorNode` and its cursor. */
export type ContentAuthorNodeEdge = {
  __typename?: "ContentAuthorNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ContentAuthorNode>;
};

export type ContentLicenseNode = Node & {
  __typename?: "ContentLicenseNode";
  comments: Scalars["String"]["output"];
  endDate?: Maybe<Scalars["Date"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  organization?: Maybe<ContentOrganization>;
  paid: Scalars["Boolean"]["output"];
  startDate?: Maybe<Scalars["Date"]["output"]>;
  type: Scalars["String"]["output"];
};

export type ContentLicenseNodeConnection = {
  __typename?: "ContentLicenseNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContentLicenseNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ContentLicenseNode` and its cursor. */
export type ContentLicenseNodeEdge = {
  __typename?: "ContentLicenseNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ContentLicenseNode>;
};

export type ContentOrganization = Node & {
  __typename?: "ContentOrganization";
  clientUuid?: Maybe<Scalars["UUID"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type ContextActivityNode = {
  __typename?: "ContextActivityNode";
  category?: Maybe<ActivityNode>;
  grouping?: Maybe<ActivityNode>;
  id: Scalars["ID"]["output"];
  other?: Maybe<ActivityNode>;
  parent?: Maybe<ActivityNode>;
  statementSet: StatementNodeConnection;
};

export type ContextActivityNodeStatementSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CopyExamCompetition = {
  __typename?: "CopyExamCompetition";
  examCompetition?: Maybe<ExamCompetitionNode>;
};

export type Country = {
  __typename?: "Country";
  /** ISO 3166-1 three character country code */
  alpha3?: Maybe<Scalars["String"]["output"]>;
  /** ISO 3166-1 two character country code */
  code?: Maybe<Scalars["String"]["output"]>;
  /** International Olympic Committee country code */
  iocCode?: Maybe<Scalars["String"]["output"]>;
  /** Country name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** ISO 3166-1 numeric country code */
  numeric?: Maybe<Scalars["Int"]["output"]>;
};

export type CountryNode = {
  __typename?: "CountryNode";
  code?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type CourseAssignmentNode = Node & {
  __typename?: "CourseAssignmentNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  attemptsLeft?: Maybe<Scalars["Int"]["output"]>;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canTakeAnAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  completedActivities?: Maybe<Array<Maybe<ActivityNode>>>;
  course: CourseNode;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isPending?: Maybe<Scalars["Boolean"]["output"]>;
  lastAttempt?: Maybe<ExamAttemptNode>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  popupsProgress?: Maybe<VideoBlockCuePointNodeConnection>;
  progress?: Maybe<Scalars["Float"]["output"]>;
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  recentActivity?: Maybe<ActivityNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  statements?: Maybe<Array<Maybe<StatementNode>>>;
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  timeLeftToRetakeAttempt?: Maybe<Scalars["Int"]["output"]>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type CourseAssignmentNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type CourseAssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type CourseAssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseAssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseAssignmentNodeCompletedActivitiesArgs = {
  structureId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CourseAssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseAssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseAssignmentNodePopupsProgressArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  exceptViewedPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseAssignmentNodeStatementsArgs = {
  directParent?: InputMaybe<Scalars["ID"]["input"]>;
  includeVoided?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CourseAssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CourseAssignmentNodeConnection = {
  __typename?: "CourseAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CourseAssignmentNode` and its cursor. */
export type CourseAssignmentNodeEdge = {
  __typename?: "CourseAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseAssignmentNode>;
};

export type CourseAwardSummaryNode = {
  __typename?: "CourseAwardSummaryNode";
  activityType?: Maybe<Scalars["String"]["output"]>;
  points?: Maybe<Scalars["Int"]["output"]>;
};

export type CourseBlockInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CourseBlockMoveTo = {
  __typename?: "CourseBlockMoveTo";
  courseBlock?: Maybe<CourseBlockUnion>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type CourseBlockNode = Node & {
  __typename?: "CourseBlockNode";
  activity: ActivityNode;
  aiproofreadingsuggestionSet: AiProofReadingSuggestionNodeConnection;
  author?: Maybe<ContentAuthorNode>;
  chapter?: Maybe<ChapterNode>;
  children: CourseBlockNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  course?: Maybe<CourseNode>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  definitionblock?: Maybe<DefinitionBlockNode>;
  htmlblock?: Maybe<HtmlBlockNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  linkblock?: Maybe<LinkBlockNode>;
  losblock?: Maybe<LosBlockNode>;
  modified: Scalars["DateTime"]["output"];
  multiplechoicequestionblock?: Maybe<MultipleChoiceQuestionBlockNode>;
  order: Scalars["Int"]["output"];
  parent?: Maybe<CourseBlockNode>;
  pdfblock?: Maybe<PdfBlockNode>;
  rght: Scalars["Int"]["output"];
  section?: Maybe<SectionNode>;
  status: CourseStructureCourseBlockStatusChoices;
  textblock?: Maybe<TextBlockNode>;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  unit?: Maybe<UnitNode>;
  videoblock?: Maybe<VideoBlockNode>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type CourseBlockNodeAiproofreadingsuggestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type CourseBlockNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseBlockNodeConnection = {
  __typename?: "CourseBlockNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseBlockNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CourseBlockNode` and its cursor. */
export type CourseBlockNodeEdge = {
  __typename?: "CourseBlockNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseBlockNode>;
};

/** An enumeration. */
export enum CourseBlockStatusesEnum {
  AiSuggested = "AI_SUGGESTED",
  Deleted = "DELETED",
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

export type CourseBlockUnion =
  | ChapterNode
  | CourseBlockNode
  | CourseNode
  | DefinitionBlockNode
  | ExamUnitNode
  | HtmlBlockNode
  | LosBlockNode
  | LinkBlockNode
  | MultipleChoiceQuestionBlockNode
  | PdfBlockNode
  | QuizUnitNode
  | ResourceBlockNode
  | SectionNode
  | StructureBlockNode
  | TextBlockNode
  | UnitNode
  | VideoBlockNode;

export type CourseCatalogInput = {
  comments?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  nameForAccountManager?: InputMaybe<Scalars["String"]["input"]>;
  nameForAdminOfAdmin?: InputMaybe<Scalars["String"]["input"]>;
  nameForCertificate?: InputMaybe<Scalars["String"]["input"]>;
  nameForClientAdmin?: InputMaybe<Scalars["String"]["input"]>;
  nameForClientUser?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type CourseCategoryNode = Node & {
  __typename?: "CourseCategoryNode";
  author?: Maybe<ContentAuthorNode>;
  catalogcourseSet: CatalogCourseNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
};

export type CourseCategoryNodeCatalogcourseSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseCategoryNodeConnection = {
  __typename?: "CourseCategoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseCategoryNode` and its cursor. */
export type CourseCategoryNodeEdge = {
  __typename?: "CourseCategoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseCategoryNode>;
};

/** An enumeration. */
export enum CourseCertificateCertificateStatusChoices {
  /** Error */
  Error = "ERROR",
  /** ready and Downloadable */
  Ready = "READY",
  /** Requesting */
  Requesting = "REQUESTING",
  /** Uploading */
  Uploading = "UPLOADING",
  /** Waiting */
  Waiting = "WAITING",
}

/** An enumeration. */
export enum CourseDifficulty {
  Advanced = "ADVANCED",
  Basic = "BASIC",
  Intermediate = "INTERMEDIATE",
}

export type CourseGradeSettingNode = Node & {
  __typename?: "CourseGradeSettingNode";
  course: CourseNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  passingGrade: Scalars["Decimal"]["output"];
  quizunitgradesettingSet: QuizUnitGradeSettingNodeConnection;
};

export type CourseGradeSettingNodeQuizunitgradesettingSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An enumeration. */
export enum CourseLanguage {
  Arabic = "ARABIC",
  English = "ENGLISH",
  French = "FRENCH",
  German = "GERMAN",
  Italian = "ITALIAN",
  Portugese = "PORTUGESE",
  Spanish = "SPANISH",
}

/** An enumeration. */
export enum CourseLevel {
  Advanced = "ADVANCED",
  Basic = "BASIC",
}

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNode = Node & {
  __typename?: "CourseNode";
  active: Scalars["Boolean"]["output"];
  activity: ActivityNode;
  aiSuggestion?: Maybe<AiCourseSuggestionNode>;
  author?: Maybe<ContentAuthorNode>;
  /** Award summary for a course; list of activity types and the number of points expected to be awarded when completed */
  awardSummary?: Maybe<Array<Maybe<CourseAwardSummaryNode>>>;
  campaignSet: CampaignNodeConnection;
  catalogcourseSet: CatalogCourseNodeConnection;
  certificateSet: CertificateNodeConnection;
  children?: Maybe<Array<Maybe<CourseStructureBlockUnionNode>>>;
  childrenIncludeDeleted?: Maybe<Array<Maybe<CourseStructureBlockUnionNode>>>;
  clientLearningActivity?: Maybe<ClientLearningActivityNode>;
  clientSet: ClientNodeConnection;
  competencyskillSet: CompetencySkillNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  courseSet: CourseNodeConnection;
  courseassignmentSet: CourseAssignmentNodeConnection;
  courseblockPtr: CourseBlockNode;
  coursegradesetting?: Maybe<CourseGradeSettingNode>;
  courseteam?: Maybe<CourseTeamNode>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  employeeprofileSet: EmployeeProfileNodeConnection;
  flashcardSet: FlashCardNodeConnection;
  haveExamUnit?: Maybe<Scalars["Boolean"]["output"]>;
  hide: Scalars["Boolean"]["output"];
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  isEmpty?: Maybe<Scalars["Boolean"]["output"]>;
  /** True if the user is assigned to this activity, False otherwise */
  isUserAssigned?: Maybe<Scalars["Boolean"]["output"]>;
  key: Scalars["String"]["output"];
  legacyEdxId?: Maybe<Scalars["String"]["output"]>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  length: Scalars["Decimal"]["output"];
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  /** Total number of points expected to be awarded when completed */
  maxRewardPoints?: Maybe<Scalars["Int"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  overview: Scalars["String"]["output"];
  parent?: Maybe<CourseBlockNode>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  postRecommendations: CourseNodeConnection;
  postRecommendationsProducts?: Maybe<ProductNodeConnection>;
  prerequisite?: Maybe<CourseNode>;
  previous?: Maybe<CourseBlockUnion>;
  product?: Maybe<ProductNode>;
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  totalVideosLength?: Maybe<Scalars["Float"]["output"]>;
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  versions?: Maybe<CourseNodeConnection>;
  workflows: WorkFlowNodeConnection;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeCatalogcourseSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeCertificateSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeCompetencyskillSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeCourseSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeCourseassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeEmployeeprofileSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  employeeId_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<EnterpriseEmployeeProfileStatusChoices>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeFlashcardSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeIsUserAssignedArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeMaxRewardPointsArgs = {
  includeExam?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodePostRecommendationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodePostRecommendationsProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeVersionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `Course` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `Course`'s resolved by `resolve_children`
 */
export type CourseNodeWorkflowsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseNodeConnection = {
  __typename?: "CourseNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CourseNode` and its cursor. */
export type CourseNodeEdge = {
  __typename?: "CourseNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseNode>;
};

/** A graphql Union to represent different types of `ResourceBlockNode`'s */
export type CourseResourceBlockUnionNode =
  | DefinitionBlockNode
  | HtmlBlockNode
  | LosBlockNode
  | LinkBlockNode
  | MultipleChoiceQuestionBlockNode
  | PdfBlockNode
  | ResourceBlockNode
  | TextBlockNode
  | VideoBlockNode;

export type CourseStatsNode = {
  __typename?: "CourseStatsNode";
  availableSubtitles?: Maybe<Scalars["String"]["output"]>;
  brandIdentity?: Maybe<Scalars["String"]["output"]>;
  course?: Maybe<CourseNode>;
  isCustom?: Maybe<Scalars["Boolean"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  language?: Maybe<Scalars["String"]["output"]>;
  mediaType?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalDefinitions?: Maybe<Scalars["Int"]["output"]>;
  totalExamQuestions?: Maybe<Scalars["Int"]["output"]>;
  totalExternalLinks?: Maybe<Scalars["Int"]["output"]>;
  totalImages?: Maybe<Scalars["Int"]["output"]>;
  totalLos?: Maybe<Scalars["Int"]["output"]>;
  totalOtherFiles?: Maybe<Scalars["Int"]["output"]>;
  totalPdfFiles?: Maybe<Scalars["Int"]["output"]>;
  totalQuestions?: Maybe<Scalars["Int"]["output"]>;
};

export type CourseStatsNodeConnection = {
  __typename?: "CourseStatsNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseStatsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CourseStatsNode` and its cursor. */
export type CourseStatsNodeEdge = {
  __typename?: "CourseStatsNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseStatsNode>;
};

/** An enumeration. */
export enum CourseStructureAiCourseSuggestionLanguageChoices {
  /** Arabic */
  Ar = "AR",
  /** German */
  De = "DE",
  /** English */
  En = "EN",
  /** Spanish */
  Es = "ES",
  /** French */
  Fr = "FR",
  /** Italian */
  It = "IT",
  /** Portugese */
  Pt = "PT",
}

/** An enumeration. */
export enum CourseStructureAiCourseSuggestionLevelChoices {
  /** Advanced */
  Advanced = "ADVANCED",
  /** Basic */
  Basic = "BASIC",
}

/** A graphql Union to represent different types of `CourseNode`'s */
export type CourseStructureBlockUnionNode =
  | ChapterNode
  | ExamUnitNode
  | QuizUnitNode
  | SectionNode
  | UnitNode;

/** An enumeration. */
export enum CourseStructureCourseBlockStatusChoices {
  /** ai_created */
  AiCreated = "AI_CREATED",
  /** deleted */
  Deleted = "DELETED",
  /** draft */
  Draft = "DRAFT",
  /** published */
  Published = "PUBLISHED",
}

export type CourseTagNode = Node & {
  __typename?: "CourseTagNode";
  author?: Maybe<ContentAuthorNode>;
  catalogcourseSet: CatalogCourseNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
};

export type CourseTagNodeCatalogcourseSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseTagNodeConnection = {
  __typename?: "CourseTagNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseTagNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseTagNode` and its cursor. */
export type CourseTagNodeEdge = {
  __typename?: "CourseTagNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseTagNode>;
};

export type CourseTeamNode = Node & {
  __typename?: "CourseTeamNode";
  course: CourseNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Who is in this course team? */
  members: UserNodeConnection;
};

export type CourseTeamNodeMembersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourseTeamNodeConnection = {
  __typename?: "CourseTeamNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseTeamNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CourseTeamNode` and its cursor. */
export type CourseTeamNodeEdge = {
  __typename?: "CourseTeamNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CourseTeamNode>;
};

export type CourseWatchGamificationActivityTypeSummaryNode = {
  __typename?: "CourseWatchGamificationActivityTypeSummaryNode";
  activityCount?: Maybe<Scalars["Int"]["output"]>;
  activityType?: Maybe<Scalars["String"]["output"]>;
  pointsCount?: Maybe<Scalars["Int"]["output"]>;
};

export type CourseWatchGamificationAwardSummaryNode = {
  __typename?: "CourseWatchGamificationAwardSummaryNode";
  activityTypes?: Maybe<
    Array<Maybe<CourseWatchGamificationActivityTypeSummaryNode>>
  >;
  totalPoints?: Maybe<Scalars["Int"]["output"]>;
};

export type CourseWatchGamificationSummaryNode = {
  __typename?: "CourseWatchGamificationSummaryNode";
  earned?: Maybe<CourseWatchGamificationAwardSummaryNode>;
  missed?: Maybe<CourseWatchGamificationAwardSummaryNode>;
};

/** An enumeration. */
export enum CourseWorkflowCourseProductionStepStatusChoices {
  /** approved */
  Approved = "APPROVED",
  /** changes_requested */
  ChangesRequested = "CHANGES_REQUESTED",
  /** did_not_start_yet */
  DidNotStartYet = "DID_NOT_START_YET",
  /** in_progress */
  InProgress = "IN_PROGRESS",
  /** paused */
  Paused = "PAUSED",
  /** waiting_for_approval */
  WaitingForApproval = "WAITING_FOR_APPROVAL",
}

/** An enumeration. */
export enum CourseWorkflowCourseProductionStepTemplateStatusChoices {
  /** approved */
  Approved = "APPROVED",
  /** changes_requested */
  ChangesRequested = "CHANGES_REQUESTED",
  /** did_not_start_yet */
  DidNotStartYet = "DID_NOT_START_YET",
  /** in_progress */
  InProgress = "IN_PROGRESS",
  /** paused */
  Paused = "PAUSED",
  /** waiting_for_approval */
  WaitingForApproval = "WAITING_FOR_APPROVAL",
}

export type CreateCampaign = {
  __typename?: "CreateCampaign";
  campaign?: Maybe<CampaignNode>;
};

export type CreateCategory = {
  __typename?: "CreateCategory";
  category?: Maybe<CategoryNode>;
};

export type CreateCertificatePreset = {
  __typename?: "CreateCertificatePreset";
  certificatePreset?: Maybe<CertificatePresetNode>;
};

export type CreateChapter = {
  __typename?: "CreateChapter";
  chapter?: Maybe<ChapterNode>;
};

export type CreateClient = {
  __typename?: "CreateClient";
  client?: Maybe<ClientNode>;
};

export type CreateClientDefinitionResource = {
  __typename?: "CreateClientDefinitionResource";
  definitionResource?: Maybe<DefinitionResourceNode>;
};

export type CreateClientLosResource = {
  __typename?: "CreateClientLOSResource";
  losResource?: Maybe<LosResourceNode>;
};

export type CreateClientLinkResource = {
  __typename?: "CreateClientLinkResource";
  linkResource?: Maybe<LinkResourceNode>;
};

/** Create Multiple Choice Selection resource */
export type CreateClientMcsQuestionResource = {
  __typename?: "CreateClientMCSQuestionResource";
  mcsQuestionResource?: Maybe<MultipleChoiceSelectionQuestionResourceNode>;
};

export type CreateClientPdfResource = {
  __typename?: "CreateClientPDFResource";
  pdfResource?: Maybe<PdfResourceNode>;
};

export type CreateClientTextResource = {
  __typename?: "CreateClientTextResource";
  textResource?: Maybe<TextResourceNode>;
};

export type CreateClientTrainer = {
  __typename?: "CreateClientTrainer";
  trainer?: Maybe<TrainerNode>;
};

export type CreateClientVendor = {
  __typename?: "CreateClientVendor";
  vendor?: Maybe<VendorNode>;
};

export type CreateClientVideoResource = {
  __typename?: "CreateClientVideoResource";
  videoResource?: Maybe<VideoResourceNode>;
};

export type CreateCompetency = {
  __typename?: "CreateCompetency";
  competency?: Maybe<CompetencyNode>;
};

export type CreateCompetencyCategory = {
  __typename?: "CreateCompetencyCategory";
  competencyCategory?: Maybe<CompetencyCategoryNode>;
};

export type CreateCompetencyLevel = {
  __typename?: "CreateCompetencyLevel";
  competencyLevel?: Maybe<CompetencyLevelNode>;
};

export type CreateCompetencyProductsCollection = {
  __typename?: "CreateCompetencyProductsCollection";
  competencyProductsCollection?: Maybe<CompetencyProductsCollectionNode>;
};

export type CreateCompetencySkill = {
  __typename?: "CreateCompetencySkill";
  competencySkill?: Maybe<CompetencySkillNode>;
};

export type CreateConceptResource = {
  __typename?: "CreateConceptResource";
  concept?: Maybe<ConceptResourceNode>;
};

export type CreateCourse = {
  __typename?: "CreateCourse";
  course?: Maybe<CourseNode>;
};

export type CreateCourseAssignmentStatement = {
  __typename?: "CreateCourseAssignmentStatement";
  /** Field contains required data for awarding user in course watch */
  award?: Maybe<AwardNode>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CreateCourseCatalog = {
  __typename?: "CreateCourseCatalog";
  courseCatalog?: Maybe<CatalogCourseNode>;
};

export type CreateCourseExamWithProduct = {
  __typename?: "CreateCourseExamWithProduct";
  exam?: Maybe<ExamNode>;
};

export type CreateCourseGradeSetting = {
  __typename?: "CreateCourseGradeSetting";
  courseGradeSetting?: Maybe<CourseGradeSettingNode>;
};

export type CreateCourseUsingInstructorGpt = {
  __typename?: "CreateCourseUsingInstructorGPT";
  course?: Maybe<CourseNode>;
};

export type CreateDefinition = {
  __typename?: "CreateDefinition";
  definition?: Maybe<DefinitionResourceNode>;
};

export type CreateDefinitionResource = {
  __typename?: "CreateDefinitionResource";
  definitionResource?: Maybe<DefinitionResourceNode>;
};

export type CreateEmployee = {
  __typename?: "CreateEmployee";
  employee?: Maybe<EmployeeProfileNode>;
};

export type CreateEmployeeGroup = {
  __typename?: "CreateEmployeeGroup";
  employeeGroup?: Maybe<EmployeeGroupNode>;
};

export type CreateEmployeeGroupCampaign = {
  __typename?: "CreateEmployeeGroupCampaign";
  employeeGroupCampaign?: Maybe<EmployeeGroupCampaignNode>;
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type CreateEmployeeJobRoleInput = {
  endDate?: InputMaybe<Scalars["Date"]["input"]>;
  jobRoleId?: InputMaybe<Scalars["ID"]["input"]>;
  startDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateEnterpriseCustomer = {
  __typename?: "CreateEnterpriseCustomer";
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
  enterpriseCustomerSuperAdminToken?: Maybe<Scalars["String"]["output"]>;
};

export type CreateEnterpriseCustomerSubscription = {
  __typename?: "CreateEnterpriseCustomerSubscription";
  enterpriseCustomerSubscription?: Maybe<EnterpriseCustomerSubscriptionNode>;
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
};

export type CreateEnterpriseHierarchy = {
  __typename?: "CreateEnterpriseHierarchy";
  hierarchyLevels?: Maybe<Array<Maybe<EnterpriseHierarchyNode>>>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CreateEnterpriseHierarchyLevel = {
  __typename?: "CreateEnterpriseHierarchyLevel";
  hierarchyLevel?: Maybe<EnterpriseHierarchyNode>;
};

export type CreateEnterpriseOnboardingSurvey = {
  __typename?: "CreateEnterpriseOnboardingSurvey";
  enterpriseOnboardingSurvey?: Maybe<EnterpriseOnboardingSurveyNode>;
};

export type CreateEtihadCompetencyFrameworkResultMutation = {
  __typename?: "CreateEtihadCompetencyFrameworkResultMutation";
  competencyFramework?: Maybe<EtihadCompetencyFrameworkResultType>;
};

export type CreateEvidence = {
  __typename?: "CreateEvidence";
  evidence?: Maybe<EvidenceNode>;
};

export type CreateExamBasedOfCourse = {
  __typename?: "CreateExamBasedOfCourse";
  exam?: Maybe<ExamNode>;
  examUnit?: Maybe<ExamUnitNode>;
};

export type CreateExamCompetition = {
  __typename?: "CreateExamCompetition";
  examCompetition?: Maybe<ExamCompetitionNode>;
};

export type CreateExamUnit = {
  __typename?: "CreateExamUnit";
  examUnit?: Maybe<ExamUnitNode>;
};

export type CreateFlashCardStatement = {
  __typename?: "CreateFlashCardStatement";
  details?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CreateFlashCardsMutation = {
  __typename?: "CreateFlashCardsMutation";
  flashcards?: Maybe<Array<Maybe<FlashCardNode>>>;
};

export type CreateImage = {
  __typename?: "CreateImage";
  image?: Maybe<ImageResourceNode>;
};

export type CreateJobRole = {
  __typename?: "CreateJobRole";
  jobRole?: Maybe<JobRoleNode>;
};

export type CreateJobRoleFamily = {
  __typename?: "CreateJobRoleFamily";
  jobRoleFamily?: Maybe<JobRoleFamilyNode>;
};

export type CreateKnowledgeBaseConversation = {
  __typename?: "CreateKnowledgeBaseConversation";
  conversation?: Maybe<BotUserConversationNode>;
};

export type CreateLos = {
  __typename?: "CreateLOS";
  los?: Maybe<LosResourceNode>;
};

export type CreateLosResource = {
  __typename?: "CreateLOSResource";
  losResource?: Maybe<LosResourceNode>;
};

export type CreateLearner = {
  __typename?: "CreateLearner";
  learner?: Maybe<UserNode>;
};

/** Create a new learning activity subscriber */
export type CreateLearningActivitySubscriber = {
  __typename?: "CreateLearningActivitySubscriber";
  learningActivitySubscriber?: Maybe<LearningActivitySubscriberNode>;
};

export type CreateLearningActivitySubscriberSettings = {
  __typename?: "CreateLearningActivitySubscriberSettings";
  subscriberSettings?: Maybe<LearningActivitySubscriberSettingsNode>;
};

export type CreateLearningPlan = {
  __typename?: "CreateLearningPlan";
  learningPlan?: Maybe<LearningPlanNode>;
};

export type CreateLearningPlanSection = {
  __typename?: "CreateLearningPlanSection";
  learningPlanSection?: Maybe<LearningPlanSectionNode>;
};

export type CreateLink = {
  __typename?: "CreateLink";
  link?: Maybe<LinkResourceNode>;
};

export type CreateLinkResource = {
  __typename?: "CreateLinkResource";
  linkResource?: Maybe<LinkResourceNode>;
};

export type CreateMcqChoiceAnswerBlockInput = {
  answer: Scalars["String"]["input"];
  isCorrect: Scalars["Boolean"]["input"];
  isDependable?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CreateMcqResource = {
  __typename?: "CreateMCQResource";
  mcqResource?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type CreateMcQuestionResource = {
  __typename?: "CreateMCQuestionResource";
  mcQuestionResource?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type CreateMagicLink = {
  __typename?: "CreateMagicLink";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CreateMultipleChoiceSelectionQuestion = {
  __typename?: "CreateMultipleChoiceSelectionQuestion";
  question?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type CreateNewExamMcProblem = {
  __typename?: "CreateNewExamMCProblem";
  examProblem?: Maybe<QProblemNode>;
  quiz?: Maybe<ExamNode>;
};

export type CreateOnlineCourse = {
  __typename?: "CreateOnlineCourse";
  onlineCourse?: Maybe<OnlineCourseNode>;
};

export type CreatePdf = {
  __typename?: "CreatePDF";
  pdf?: Maybe<PdfResourceNode>;
};

export type CreatePdfResource = {
  __typename?: "CreatePdfResource";
  pdfResource?: Maybe<PdfResourceNode>;
};

export type CreateProduct = {
  __typename?: "CreateProduct";
  product?: Maybe<ProductNode>;
};

export type CreateProductBookmarkFolder = {
  __typename?: "CreateProductBookmarkFolder";
  folder?: Maybe<ProductBookmarkFolderNode>;
};

export type CreateProductCategory = {
  __typename?: "CreateProductCategory";
  category?: Maybe<ProductCategoryNode>;
};

export type CreateProductTag = {
  __typename?: "CreateProductTag";
  tag?: Maybe<ProductTagNode>;
};

export type CreateProductsPackage = {
  __typename?: "CreateProductsPackage";
  productsPackage?: Maybe<ProductsPackageNode>;
};

export type CreatePublicCompetencyProductsCollection = {
  __typename?: "CreatePublicCompetencyProductsCollection";
  competencyProductsCollection?: Maybe<CompetencyProductsCollectionNode>;
};

export type CreateQuiz = {
  __typename?: "CreateQuiz";
  quiz?: Maybe<ExamNode>;
};

export type CreateQuizUnit = {
  __typename?: "CreateQuizUnit";
  quizUnit?: Maybe<QuizUnitNode>;
};

export type CreateQuizUnitGradeSetting = {
  __typename?: "CreateQuizUnitGradeSetting";
  quizUnitGradeSetting?: Maybe<QuizUnitGradeSettingNode>;
};

export type CreateRoot = {
  __typename?: "CreateRoot";
  tree?: Maybe<BodyOfKnowledgeTreeNode>;
};

export type CreateSection = {
  __typename?: "CreateSection";
  section?: Maybe<SectionNode>;
};

export type CreateSubjectArea = {
  __typename?: "CreateSubjectArea";
  subjectArea?: Maybe<SubjectAreaNode>;
};

export type CreateSubjectSubArea = {
  __typename?: "CreateSubjectSubArea";
  subjectSubArea?: Maybe<SubjectSubAreaNode>;
};

export type CreateSurvey = {
  __typename?: "CreateSurvey";
  survey?: Maybe<ClientSurveyCheckItemNode>;
};

export type CreateTag = {
  __typename?: "CreateTag";
  tag?: Maybe<TagNode>;
};

export type CreateTags = {
  __typename?: "CreateTags";
  tagsData?: Maybe<Array<Maybe<CourseTagNode>>>;
};

export type CreateTemplate = {
  __typename?: "CreateTemplate";
  Template?: Maybe<TemplateNode>;
};

export type CreateText = {
  __typename?: "CreateText";
  text?: Maybe<TextResourceNode>;
};

export type CreateTextResource = {
  __typename?: "CreateTextResource";
  textResource?: Maybe<TextResourceNode>;
};

export type CreateTrainingProgram = {
  __typename?: "CreateTrainingProgram";
  trainingProgram?: Maybe<TrainingProgramNode>;
};

export type CreateTrainingProgramCampaign = {
  __typename?: "CreateTrainingProgramCampaign";
  campaign?: Maybe<CampaignNode>;
};

export type CreateTrainingProgramSection = {
  __typename?: "CreateTrainingProgramSection";
  trainingProgramSection?: Maybe<TrainingProgramSectionNode>;
};

export type CreateTrainingProgramSubscriberSettings = {
  __typename?: "CreateTrainingProgramSubscriberSettings";
  learningActivitySubscriber?: Maybe<LearningActivitySubscriberNode>;
};

export type CreateTree = {
  __typename?: "CreateTree";
  tree?: Maybe<BodyOfKnowledgeTreeNode>;
};

export type CreateUndefinedActivity = {
  __typename?: "CreateUndefinedActivity";
  undefinedActivity?: Maybe<UndefinedActivityNode>;
};

export type CreateUndefinedActivityCompletionChecklist = {
  __typename?: "CreateUndefinedActivityCompletionChecklist";
  undefinedActivityCompletionChecklist?: Maybe<UndefinedActivityCompletionChecklistNode>;
};

export type CreateUnit = {
  __typename?: "CreateUnit";
  unit?: Maybe<UnitNode>;
};

export type CreateUser = {
  __typename?: "CreateUser";
  user?: Maybe<UserNode>;
};

export type CreateVideo = {
  __typename?: "CreateVideo";
  video?: Maybe<VideoResourceNode>;
};

export type CreateVideoResource = {
  __typename?: "CreateVideoResource";
  videoResource?: Maybe<VideoResourceNode>;
};

export type CreateWebinar = {
  __typename?: "CreateWebinar";
  webinar?: Maybe<WebinarNode>;
};

export type CreateWorkFlow = {
  __typename?: "CreateWorkFlow";
  workflow?: Maybe<WorkFlowNode>;
};

export type CreateWorkshop = {
  __typename?: "CreateWorkshop";
  workshop?: Maybe<WorkshopNode>;
};

/** An enumeration. */
export enum CurrencyCodeEnum {
  Aed = "AED",
  Aud = "AUD",
  Bhd = "BHD",
  Cad = "CAD",
  Cny = "CNY",
  Dzd = "DZD",
  Egp = "EGP",
  Eur = "EUR",
  Gbp = "GBP",
  Inr = "INR",
  Iqd = "IQD",
  Irr = "IRR",
  Jod = "JOD",
  Jpy = "JPY",
  Kwd = "KWD",
  Lbp = "LBP",
  Lyd = "LYD",
  Mad = "MAD",
  Omr = "OMR",
  Qar = "QAR",
  Sar = "SAR",
  Syp = "SYP",
  Tnd = "TND",
  Try = "TRY",
  Usd = "USD",
  Yer = "YER",
}

export type DeactivateCourse = {
  __typename?: "DeactivateCourse";
  course?: Maybe<CourseNode>;
};

export type DefaultUserClientNode = Node & {
  __typename?: "DefaultUserClientNode";
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  user: UserNode;
};

export type DefaultUserClientNodeConnection = {
  __typename?: "DefaultUserClientNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DefaultUserClientNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DefaultUserClientNode` and its cursor. */
export type DefaultUserClientNodeEdge = {
  __typename?: "DefaultUserClientNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<DefaultUserClientNode>;
};

/** Representation of the resource block `DefinitionBlock` in the graph */
export type DefinitionBlockNode = Node & {
  __typename?: "DefinitionBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<DefinitionResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type DefinitionResourceNode = Node & {
  __typename?: "DefinitionResourceNode";
  activity?: Maybe<ActivityNode>;
  aisuggesteddefinitionSet: AiSuggestedDefinitionNodeConnection;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  definitionresource?: Maybe<DefinitionResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  textresource?: Maybe<TextResourceNode>;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
};

export type DefinitionResourceNodeAisuggesteddefinitionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DefinitionResourceNodeConnection = {
  __typename?: "DefinitionResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DefinitionResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `DefinitionResourceNode` and its cursor. */
export type DefinitionResourceNodeEdge = {
  __typename?: "DefinitionResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<DefinitionResourceNode>;
};

/**
 * Deletes an AI Suggested course.
 *
 * Args:
 *     suggested_course_id (graphene.ID): The ID of the suggested course to delete.
 *
 * Returns:
 *     DeleteAISuggestedCourse: The mutation result indicating the success of the deletion.
 */
export type DeleteAiSuggestedCourse = {
  __typename?: "DeleteAISuggestedCourse";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteCampaign = {
  __typename?: "DeleteCampaign";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteChapter = {
  __typename?: "DeleteChapter";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteClientLearningActivity = {
  __typename?: "DeleteClientLearningActivity";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteClientResource = {
  __typename?: "DeleteClientResource";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteCompetency = {
  __typename?: "DeleteCompetency";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteCompetencyCategory = {
  __typename?: "DeleteCompetencyCategory";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteCompetencyLevel = {
  __typename?: "DeleteCompetencyLevel";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteCompetencyProductsCollection = {
  __typename?: "DeleteCompetencyProductsCollection";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteCompetencySkill = {
  __typename?: "DeleteCompetencySkill";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteEmployeeGroup = {
  __typename?: "DeleteEmployeeGroup";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteEnterpriseHierarchyLevel = {
  __typename?: "DeleteEnterpriseHierarchyLevel";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteEvidence = {
  __typename?: "DeleteEvidence";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteExamCompetition = {
  __typename?: "DeleteExamCompetition";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteExamUnit = {
  __typename?: "DeleteExamUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

/**
 * To be refactored, mutation should be renamed to "RemoveJobRoleFromEnterpriseCustomer", changes should be reflected
 * on frontend too.
 */
export type DeleteJobRole = {
  __typename?: "DeleteJobRole";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteJobRoleFamily = {
  __typename?: "DeleteJobRoleFamily";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteKnowledgeBaseConversation = {
  __typename?: "DeleteKnowledgeBaseConversation";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteLearningActivitySubscriber = {
  __typename?: "DeleteLearningActivitySubscriber";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteLearningPlan = {
  __typename?: "DeleteLearningPlan";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteProductBookmarkFolder = {
  __typename?: "DeleteProductBookmarkFolder";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteQuiz = {
  __typename?: "DeleteQuiz";
  quiz?: Maybe<ExamNode>;
};

export type DeleteQuizUnit = {
  __typename?: "DeleteQuizUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteResource = {
  __typename?: "DeleteResource";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteSection = {
  __typename?: "DeleteSection";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteSubjectArea = {
  __typename?: "DeleteSubjectArea";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteSubjectSubArea = {
  __typename?: "DeleteSubjectSubArea";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteSubmittedCertificate = {
  __typename?: "DeleteSubmittedCertificate";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteTrainingProgram = {
  __typename?: "DeleteTrainingProgram";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteTrainingProgramSection = {
  __typename?: "DeleteTrainingProgramSection";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteTree = {
  __typename?: "DeleteTree";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteUnit = {
  __typename?: "DeleteUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeltaHistoryRecordConnection = {
  __typename?: "DeltaHistoryRecordConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeltaHistoryRecordEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `DeltaHistoryRecord` and its cursor. */
export type DeltaHistoryRecordEdge = {
  __typename?: "DeltaHistoryRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<DeltaHistoryRecordNode>;
};

export type DeltaHistoryRecordNode = {
  __typename?: "DeltaHistoryRecordNode";
  changes?: Maybe<HistoryRecordConnection>;
  date?: Maybe<Scalars["DateTime"]["output"]>;
  newRecord?: Maybe<Scalars["ID"]["output"]>;
  oldRecord?: Maybe<Scalars["ID"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type DeltaHistoryRecordNodeChangesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An enumeration. */
export enum DeviceTypes {
  Android = "ANDROID",
  Ios = "IOS",
  Web = "WEB",
}

/** Debugging information for the current query. */
export type DjangoDebug = {
  __typename?: "DjangoDebug";
  /** Raise exceptions for this API query. */
  exceptions?: Maybe<Array<Maybe<DjangoDebugException>>>;
  /** Executed SQL queries for this API query. */
  sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single exception raised. */
export type DjangoDebugException = {
  __typename?: "DjangoDebugException";
  /** The class of the exception */
  excType: Scalars["String"]["output"];
  /** The message of the exception */
  message: Scalars["String"]["output"];
  /** The stack trace */
  stack: Scalars["String"]["output"];
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
  __typename?: "DjangoDebugSQL";
  /** The Django database alias (e.g. 'default'). */
  alias: Scalars["String"]["output"];
  /** Duration of this database query in seconds. */
  duration: Scalars["Float"]["output"];
  /** Postgres connection encoding if available. */
  encoding?: Maybe<Scalars["String"]["output"]>;
  /** Whether this database query was a SELECT. */
  isSelect: Scalars["Boolean"]["output"];
  /** Whether this database query took more than 10 seconds. */
  isSlow: Scalars["Boolean"]["output"];
  /** Postgres isolation level if available. */
  isoLevel?: Maybe<Scalars["String"]["output"]>;
  /** JSON encoded database query parameters. */
  params: Scalars["String"]["output"];
  /** The raw SQL of this query, without params. */
  rawSql: Scalars["String"]["output"];
  /** The actual SQL sent to this database. */
  sql?: Maybe<Scalars["String"]["output"]>;
  /** Start time of this database query. */
  startTime: Scalars["Float"]["output"];
  /** Stop time of this database query. */
  stopTime: Scalars["Float"]["output"];
  /** Postgres transaction ID if available. */
  transId?: Maybe<Scalars["String"]["output"]>;
  /** Postgres transaction status if available. */
  transStatus?: Maybe<Scalars["String"]["output"]>;
  /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
  vendor: Scalars["String"]["output"];
};

export type Duration = {
  hours: Scalars["Int"]["input"];
  minutes: Scalars["Int"]["input"];
  seconds: Scalars["Int"]["input"];
};

export type EditCampaign = {
  __typename?: "EditCampaign";
  campaign?: Maybe<CampaignNode>;
};

export type EditCampaignActivities = {
  __typename?: "EditCampaignActivities";
  campaign?: Maybe<CampaignNode>;
};

export type EditCampaignVersion2DataInput = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  assessmentDueTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  campaignActivityId: Scalars["ID"]["input"];
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EditChapter = {
  __typename?: "EditChapter";
  chapter?: Maybe<ChapterNode>;
};

export type EditClientDefinitionResource = {
  __typename?: "EditClientDefinitionResource";
  definitionResource?: Maybe<DefinitionResourceNode>;
};

export type EditClientLosResource = {
  __typename?: "EditClientLOSResource";
  losResource?: Maybe<LosResourceNode>;
};

export type EditClientLinkResource = {
  __typename?: "EditClientLinkResource";
  linkResource?: Maybe<LinkResourceNode>;
};

export type EditClientMcQuestionResource = {
  __typename?: "EditClientMCQuestionResource";
  mcQuestionResource?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type EditClientMcsQuestionResource = {
  __typename?: "EditClientMCSQuestionResource";
  mcsQuestionResource?: Maybe<MultipleChoiceSelectionQuestionResourceNode>;
};

export type EditClientPdfResource = {
  __typename?: "EditClientPDFResource";
  pdfResource?: Maybe<PdfResourceNode>;
};

export type EditClientProductRequestSetting = {
  __typename?: "EditClientProductRequestSetting";
  clientProductRequestSetting?: Maybe<ClientProductRequestSettingNode>;
};

export type EditClientSubtitleResource = {
  __typename?: "EditClientSubtitleResource";
  videoSubtitle?: Maybe<VideoSubtitleResourceNode>;
};

export type EditClientTextResource = {
  __typename?: "EditClientTextResource";
  textResource?: Maybe<TextResourceNode>;
};

export type EditClientTrainer = {
  __typename?: "EditClientTrainer";
  trainer?: Maybe<TrainerNode>;
};

export type EditClientVendor = {
  __typename?: "EditClientVendor";
  vendor?: Maybe<VendorNode>;
};

export type EditClientVideoResource = {
  __typename?: "EditClientVideoResource";
  videoResource?: Maybe<VideoResourceNode>;
};

export type EditCompetency = {
  __typename?: "EditCompetency";
  competency?: Maybe<CompetencyNode>;
};

export type EditCompetencyCategory = {
  __typename?: "EditCompetencyCategory";
  competencyCategory?: Maybe<CompetencyCategoryNode>;
};

export type EditCompetencyLevel = {
  __typename?: "EditCompetencyLevel";
  competencyLevel?: Maybe<CompetencyLevelNode>;
};

export type EditCompetencySkill = {
  __typename?: "EditCompetencySkill";
  competencySkill?: Maybe<CompetencySkillNode>;
};

export type EditConceptResource = {
  __typename?: "EditConceptResource";
  concept?: Maybe<ConceptResourceNode>;
};

export type EditCourse = {
  __typename?: "EditCourse";
  course?: Maybe<CourseNode>;
};

export type EditCourseCatalog = {
  __typename?: "EditCourseCatalog";
  courseCatalog?: Maybe<CatalogCourseNode>;
};

export type EditCourseGradeSetting = {
  __typename?: "EditCourseGradeSetting";
  courseGradeSetting?: Maybe<CourseGradeSettingNode>;
};

export type EditDefinition = {
  __typename?: "EditDefinition";
  definition?: Maybe<DefinitionResourceNode>;
};

export type EditDefinitionBlock = {
  __typename?: "EditDefinitionBlock";
  definitionBlock?: Maybe<DefinitionBlockNode>;
};

export type EditDefinitionResource = {
  __typename?: "EditDefinitionResource";
  definitionResource?: Maybe<DefinitionResourceNode>;
};

export type EditEnterpriseCustomerSubscription = {
  __typename?: "EditEnterpriseCustomerSubscription";
  enterpriseCustomerSubscription?: Maybe<EnterpriseCustomerSubscriptionNode>;
};

export type EditEvidence = {
  __typename?: "EditEvidence";
  evidence?: Maybe<EvidenceNode>;
};

export type EditExamCompetition = {
  __typename?: "EditExamCompetition";
  examCompetition?: Maybe<ExamCompetitionNode>;
};

export type EditExamUnit = {
  __typename?: "EditExamUnit";
  examUnit?: Maybe<ExamUnitNode>;
};

export type EditExternalActivityInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  startingDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EditHtmlBlock = {
  __typename?: "EditHTMLBlock";
  htmlBlock?: Maybe<HtmlBlockNode>;
};

export type EditJobRole = {
  __typename?: "EditJobRole";
  jobRole?: Maybe<JobRoleNode>;
};

export type EditJobRoleFamily = {
  __typename?: "EditJobRoleFamily";
  jobRoleFamily?: Maybe<JobRoleFamilyNode>;
};

export type EditLos = {
  __typename?: "EditLOS";
  los?: Maybe<LosResourceNode>;
};

export type EditLosBlock = {
  __typename?: "EditLOSBlock";
  losBlock?: Maybe<LosBlockNode>;
};

export type EditLosResource = {
  __typename?: "EditLOSResource";
  losResource?: Maybe<LosResourceNode>;
};

export type EditLearningActivitySubscriber = {
  __typename?: "EditLearningActivitySubscriber";
  learningActivitySubscriber?: Maybe<LearningActivitySubscriberNode>;
};

export type EditLearningActivitySubscriberSettings = {
  __typename?: "EditLearningActivitySubscriberSettings";
  subscriberSettings?: Maybe<LearningActivitySubscriberSettingsNode>;
};

export type EditLearningPlanProduct = {
  __typename?: "EditLearningPlanProduct";
  learningPlanProduct?: Maybe<LearningPlanProductNode>;
};

export type EditLink = {
  __typename?: "EditLink";
  link?: Maybe<LinkResourceNode>;
};

export type EditLinkBlock = {
  __typename?: "EditLinkBlock";
  linkBlock?: Maybe<LinkBlockNode>;
};

export type EditLinkResource = {
  __typename?: "EditLinkResource";
  linkResource?: Maybe<LinkResourceNode>;
};

export type EditMcqChoiceAnswerBlockInput = {
  answer: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isCorrect: Scalars["Boolean"]["input"];
  isDependable?: InputMaybe<Scalars["Boolean"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EditMcqResource = {
  __typename?: "EditMCQResource";
  mcqResource?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type EditMultipleChoiceQuestionBlock = {
  __typename?: "EditMultipleChoiceQuestionBlock";
  mcqBlock?: Maybe<MultipleChoiceQuestionBlockNode>;
};

export type EditMultipleChoiceQuestionBlocksCorrectResponsesPattern = {
  __typename?: "EditMultipleChoiceQuestionBlocksCorrectResponsesPattern";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type EditMultipleChoiceSelectionQuestion = {
  __typename?: "EditMultipleChoiceSelectionQuestion";
  question?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type EditOnlineCourse = {
  __typename?: "EditOnlineCourse";
  onlineCourse?: Maybe<OnlineCourseNode>;
};

export type EditPdf = {
  __typename?: "EditPDF";
  pdf?: Maybe<PdfResourceNode>;
};

export type EditPdfBlock = {
  __typename?: "EditPDFBlock";
  pdfBlock?: Maybe<PdfBlockNode>;
};

export type EditPdfResource = {
  __typename?: "EditPdfResource";
  pdfResource?: Maybe<PdfResourceNode>;
};

export type EditProduct = {
  __typename?: "EditProduct";
  product?: Maybe<ProductNode>;
};

export type EditProductCategory = {
  __typename?: "EditProductCategory";
  category?: Maybe<ProductCategoryNode>;
};

export type EditProductTag = {
  __typename?: "EditProductTag";
  tag?: Maybe<ProductTagNode>;
};

/** Mutation to edit the settings of a Package: Name, Subscription, and users count */
export type EditProductsPackage = {
  __typename?: "EditProductsPackage";
  productsPackage?: Maybe<ProductsPackageNode>;
};

export type EditQProblem = {
  __typename?: "EditQProblem";
  quizProblem?: Maybe<QProblemNode>;
};

export type EditQuiz = {
  __typename?: "EditQuiz";
  quiz?: Maybe<ExamNode>;
};

export type EditQuizBaseContentInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type EditQuizInput = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  answerChangeable?: InputMaybe<Scalars["Boolean"]["input"]>;
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  duration?: InputMaybe<Duration>;
};

export type EditQuizLos = {
  __typename?: "EditQuizLOS";
  quizLos?: Maybe<QuizLosNode>;
};

export type EditQuizUnitGradeSetting = {
  __typename?: "EditQuizUnitGradeSetting";
  quizUnitGradeSetting?: Maybe<QuizUnitGradeSettingNode>;
};

export type EditQuizUnitInfo = {
  __typename?: "EditQuizUnitInfo";
  quizUnit?: Maybe<QuizUnitNode>;
};

export type EditQuizUnitSettings = {
  __typename?: "EditQuizUnitSettings";
  quizUnit?: Maybe<QuizUnitNode>;
};

export type EditSection = {
  __typename?: "EditSection";
  section?: Maybe<SectionNode>;
};

export type EditSubmittedCertificate = {
  __typename?: "EditSubmittedCertificate";
  submittedCertificate?: Maybe<SubmittedCertificateNode>;
};

export type EditSurvey = {
  __typename?: "EditSurvey";
  survey?: Maybe<ClientSurveyCheckItemNode>;
};

export type EditTag = {
  __typename?: "EditTag";
  tag?: Maybe<CourseTagNode>;
};

export type EditText = {
  __typename?: "EditText";
  text?: Maybe<TextResourceNode>;
};

export type EditTextBlock = {
  __typename?: "EditTextBlock";
  textBlock?: Maybe<TextBlockNode>;
};

export type EditTextResource = {
  __typename?: "EditTextResource";
  textResource?: Maybe<TextResourceNode>;
};

export type EditTrainingProgram = {
  __typename?: "EditTrainingProgram";
  trainingProgram?: Maybe<TrainingProgramNode>;
};

export type EditTrainingProgramSection = {
  __typename?: "EditTrainingProgramSection";
  trainingProgramSection?: Maybe<TrainingProgramSectionNode>;
};

export type EditTrainingProgramSubscriberSettings = {
  __typename?: "EditTrainingProgramSubscriberSettings";
  learningActivitySubscriber?: Maybe<LearningActivitySubscriberNode>;
};

export type EditTree = {
  __typename?: "EditTree";
  tree?: Maybe<BodyOfKnowledgeTreeNode>;
};

export type EditUndefinedActivity = {
  __typename?: "EditUndefinedActivity";
  undefinedActivity?: Maybe<UndefinedActivityNode>;
};

export type EditUndefinedActivityCompletionChecklistItems = {
  __typename?: "EditUndefinedActivityCompletionChecklistItems";
  undefinedActivityCompletionChecklist?: Maybe<UndefinedActivityCompletionChecklistNode>;
};

export type EditUnit = {
  __typename?: "EditUnit";
  unit?: Maybe<UnitNode>;
};

export type EditVideo = {
  __typename?: "EditVideo";
  video?: Maybe<VideoResourceNode>;
};

export type EditVideoBlock = {
  __typename?: "EditVideoBlock";
  videoBlock?: Maybe<VideoBlockNode>;
};

export type EditVideoBlockCuePoint = {
  __typename?: "EditVideoBlockCuePoint";
  videoBlockCuePoint?: Maybe<VideoBlockCuePointNode>;
};

export type EditVideoResource = {
  __typename?: "EditVideoResource";
  videoResource?: Maybe<VideoResourceNode>;
};

export type EditVideoSubtitle = {
  __typename?: "EditVideoSubtitle";
  videoSubtitle?: Maybe<VideoSubtitleResourceNode>;
};

export type EditWebinar = {
  __typename?: "EditWebinar";
  webinar?: Maybe<WebinarNode>;
};

export type EditWorkshop = {
  __typename?: "EditWorkshop";
  workshop?: Maybe<WorkshopNode>;
};

export type EmployeeGroupCampaignNode = Node & {
  __typename?: "EmployeeGroupCampaignNode";
  campaign: CampaignNode;
  employeeGroup: EmployeeGroupNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

export type EmployeeGroupCampaignNodeConnection = {
  __typename?: "EmployeeGroupCampaignNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EmployeeGroupCampaignNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EmployeeGroupCampaignNode` and its cursor. */
export type EmployeeGroupCampaignNodeEdge = {
  __typename?: "EmployeeGroupCampaignNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EmployeeGroupCampaignNode>;
};

export type EmployeeGroupNode = Node & {
  __typename?: "EmployeeGroupNode";
  areUsersPartOfAnotherCohort?: Maybe<Scalars["Boolean"]["output"]>;
  /** field for `Assignments` linked to this cohort */
  assignmentSet?: Maybe<AssignmentConnection>;
  assignmentsSummary?: Maybe<CohortAssignmentsSummaryNode>;
  basedOn?: Maybe<Scalars["String"]["output"]>;
  campaign?: Maybe<CampaignNode>;
  clientSet: ClientNodeConnection;
  cohortPtr: CohortNode;
  competition?: Maybe<CompetitionNode>;
  created: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  employeegroup?: Maybe<EmployeeGroupNode>;
  employeegroupcampaignSet?: Maybe<EmployeeGroupCampaignNodeConnection>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  /** Summary for the cohort progress on a period of time */
  performanceSummary?: Maybe<CohortPerformanceSummaryNode>;
  supervisors: UserNodeConnection;
  totalCountUsersAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  totalCountUsersNotAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  underHierarchy?: Maybe<EnterpriseHierarchyNode>;
  /** list of users in cohort **Optional Filters** */
  users?: Maybe<UserNodeConnection>;
  workshopSet: WorkshopNodeConnection;
};

export type EmployeeGroupNodeAreUsersPartOfAnotherCohortArgs = {
  activeUsersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  cohortId: Scalars["ID"]["input"];
};

export type EmployeeGroupNodeAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  includeUserTrainingPrograms?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeGroupNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmployeeGroupNodeEmployeegroupcampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type EmployeeGroupNodePerformanceSummaryArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  pointsType?: InputMaybe<PointsTypes>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type EmployeeGroupNodeSupervisorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmployeeGroupNodeTotalCountUsersAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type EmployeeGroupNodeTotalCountUsersNotAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type EmployeeGroupNodeUsersArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  excludeStatuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeGroupNodeWorkshopSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmployeeGroupNodeConnection = {
  __typename?: "EmployeeGroupNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EmployeeGroupNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EmployeeGroupNode` and its cursor. */
export type EmployeeGroupNodeEdge = {
  __typename?: "EmployeeGroupNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EmployeeGroupNode>;
};

export type EmployeeInput = {
  country?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  employeeId: Scalars["String"]["input"];
  employeeJobRole?: InputMaybe<CreateEmployeeJobRoleInput>;
  employmentStatus?: InputMaybe<EmploymentStatusEnum>;
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Scalars["String"]["input"]>;
  hiringDate?: InputMaybe<Scalars["Date"]["input"]>;
  hrLevels: Scalars["JSONString"]["input"];
  lastName: Scalars["String"]["input"];
  levelOfEducation?: InputMaybe<LevelOfEducationEnum>;
  nationality?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  roles: Array<InputMaybe<Scalars["String"]["input"]>>;
  secondaryEmail?: InputMaybe<Scalars["String"]["input"]>;
  showInLeaderboard?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  uploadedProfilePicture?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeJobRoleNode = Node & {
  __typename?: "EmployeeJobRoleNode";
  created: Scalars["DateTime"]["output"];
  employeeProfile: EmployeeProfileNode;
  endDate?: Maybe<Scalars["Date"]["output"]>;
  enterpriseCustomer: EnterpriseCustomerNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  jobRole: JobRoleNode;
  jobRoleTitle: Scalars["String"]["output"];
  modified: Scalars["DateTime"]["output"];
  startDate?: Maybe<Scalars["Date"]["output"]>;
};

export type EmployeeJobRoleNodeConnection = {
  __typename?: "EmployeeJobRoleNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EmployeeJobRoleNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EmployeeJobRoleNode` and its cursor. */
export type EmployeeJobRoleNodeEdge = {
  __typename?: "EmployeeJobRoleNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EmployeeJobRoleNode>;
};

export type EmployeeProfileNode = Node & {
  __typename?: "EmployeeProfileNode";
  allRelevantCompetencies?: Maybe<CompetencyNodeConnection>;
  city?: Maybe<Scalars["String"]["output"]>;
  competencies?: Maybe<CompetencyNodeConnection>;
  competency?: Maybe<CompetencyNode>;
  country?: Maybe<Country>;
  created: Scalars["DateTime"]["output"];
  employeeCompetenciesOnly?: Maybe<CompetencyNodeConnection>;
  employeeCurrentJobRole?: Maybe<EmployeeJobRoleNode>;
  employeeId: Scalars["String"]["output"];
  employeeprofile?: Maybe<EmployeeProfileNode>;
  employmentStatus?: Maybe<UserprofileUserProfileEmploymentStatusChoices>;
  enterpriseCustomer: EnterpriseCustomerNode;
  enterprisecustomerSet: EnterpriseCustomerNodeConnection;
  gender?: Maybe<UserprofileUserProfileGenderChoices>;
  hiringDate?: Maybe<Scalars["Date"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDarkModeEnabled: Scalars["Boolean"]["output"];
  jobRole?: Maybe<JobRoleNode>;
  language: Scalars["String"]["output"];
  levelOfEducation?: Maybe<UserprofileUserProfileLevelOfEducationChoices>;
  modified: Scalars["DateTime"]["output"];
  nationality?: Maybe<Country>;
  providedFullName?: Maybe<Scalars["String"]["output"]>;
  recommendedCourses: CourseNodeConnection;
  relatedJobRoles: EmployeeJobRoleNodeConnection;
  secondaryEmail?: Maybe<Scalars["String"]["output"]>;
  showInLeaderboard: Scalars["Boolean"]["output"];
  status: EnterpriseEmployeeProfileStatusChoices;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  uploadedProfilePicture?: Maybe<Scalars["String"]["output"]>;
  user: UserNode;
  userprofilePtr: UserProfileNode;
  yearOfBirth?: Maybe<Scalars["Int"]["output"]>;
};

export type EmployeeProfileNodeAllRelevantCompetenciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeProfileNodeCompetenciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeProfileNodeCompetencyArgs = {
  competencyId: Scalars["ID"]["input"];
};

export type EmployeeProfileNodeEmployeeCompetenciesOnlyArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeProfileNodeEnterprisecustomerSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmployeeProfileNodeRecommendedCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeProfileNodeRelatedJobRolesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmployeeProfileNodeConnection = {
  __typename?: "EmployeeProfileNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EmployeeProfileNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `EmployeeProfileNode` and its cursor. */
export type EmployeeProfileNodeEdge = {
  __typename?: "EmployeeProfileNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EmployeeProfileNode>;
};

/** An enumeration. */
export enum EmploymentStatusEnum {
  Freelancer = "FREELANCER",
  Full = "FULL",
  Intern = "INTERN",
  Part = "PART",
  Student = "STUDENT",
  Unemployed = "UNEMPLOYED",
}

/** An enumeration. */
export enum EnterpriseBillingEnterpriseCustomerSubscriptionStatusChoices {
  /** a */
  A = "A",
  /** c */
  C = "C",
  /** e */
  E = "E",
  /** i */
  I = "I",
}

/** An enumeration. */
export enum EnterpriseBillingEnterpriseCustomerSubscriptionTypeChoices {
  /** activities */
  Activities = "ACTIVITIES",
  /** assignments */
  Assignments = "ASSIGNMENTS",
}

/** An enumeration. */
export enum EnterpriseBillingPlanRenewalTypeChoices {
  /** ONE-TIME */
  A_0 = "A_0",
  /** AUTO-RENEW */
  A_1 = "A_1",
  /** REPEAT */
  A_2 = "A_2",
}

/** An enumeration. */
export enum EnterpriseBillingTransactionResponseStatusChoices {
  /** A */
  A = "A",
  /** D */
  D = "D",
  /** E */
  E = "E",
  /** H */
  H = "H",
  /** P */
  P = "P",
  /** V */
  V = "V",
}

/** An enumeration. */
export enum EnterpriseCompetencyLevelTypeChoices {
  /** advanced */
  Advanced = "ADVANCED",
  /** basic */
  Basic = "BASIC",
  /** intermediate */
  Intermediate = "INTERMEDIATE",
}

/** An enumeration. */
export enum EnterpriseCompetencyRequiredSkillLevelChoices {
  /** advanced */
  Advanced = "ADVANCED",
  /** basic */
  Basic = "BASIC",
  /** intermediate */
  Intermediate = "INTERMEDIATE",
}

export type EnterpriseCustomerBillingHistoryNode = Node & {
  __typename?: "EnterpriseCustomerBillingHistoryNode";
  created: Scalars["DateTime"]["output"];
  enterpriseCustomer: EnterpriseCustomerNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  package: ProductsPackageNode;
  receiptUrl: Scalars["String"]["output"];
  startingDate: Scalars["Date"]["output"];
  validUntil: Scalars["Date"]["output"];
};

export type EnterpriseCustomerBillingHistoryNodeConnection = {
  __typename?: "EnterpriseCustomerBillingHistoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EnterpriseCustomerBillingHistoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EnterpriseCustomerBillingHistoryNode` and its cursor. */
export type EnterpriseCustomerBillingHistoryNodeEdge = {
  __typename?: "EnterpriseCustomerBillingHistoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EnterpriseCustomerBillingHistoryNode>;
};

export type EnterpriseCustomerDataExport = {
  __typename?: "EnterpriseCustomerDataExport";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type EnterpriseCustomerNode = Node & {
  __typename?: "EnterpriseCustomerNode";
  HRLabels?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  clientPtr: ClientNode;
  competencyproductscollectionSet?: Maybe<CompetencyProductsCollectionNodeConnection>;
  domain: Scalars["String"]["output"];
  employees: EmployeeProfileNodeConnection;
  enterprisecustomersubscriptionSet: EnterpriseCustomerSubscriptionNodeConnection;
  hierarchy?: Maybe<EnterpriseHierarchyNodeConnection>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  /** The most recent subscription for this enterprise customer. Whether completed, active, or expired. */
  recentSubscription?: Maybe<EnterpriseCustomerSubscriptionNode>;
  totalActiveUsers?: Maybe<Scalars["Int"]["output"]>;
  totalCohorts?: Maybe<Scalars["Int"]["output"]>;
};

export type EnterpriseCustomerNodeCompetencyproductscollectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type EnterpriseCustomerNodeEmployeesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  employeeId_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<EnterpriseEmployeeProfileStatusChoices>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type EnterpriseCustomerNodeEnterprisecustomersubscriptionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<EnterpriseBillingEnterpriseCustomerSubscriptionStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type EnterpriseCustomerNodeHierarchyArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnterpriseCustomerNodeConnection = {
  __typename?: "EnterpriseCustomerNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EnterpriseCustomerNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EnterpriseCustomerNode` and its cursor. */
export type EnterpriseCustomerNodeEdge = {
  __typename?: "EnterpriseCustomerNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EnterpriseCustomerNode>;
};

export type EnterpriseCustomerSubscriptionLoTypeConsumptionDetails = {
  __typename?: "EnterpriseCustomerSubscriptionLOTypeConsumptionDetails";
  consumption?: Maybe<Scalars["Float"]["output"]>;
  loType?: Maybe<Scalars["String"]["output"]>;
};

export type EnterpriseCustomerSubscriptionNode = Node & {
  __typename?: "EnterpriseCustomerSubscriptionNode";
  aboutToExpireStatus?: Maybe<Scalars["Boolean"]["output"]>;
  consumptionDetails?: Maybe<
    Array<Maybe<EnterpriseCustomerSubscriptionLoTypeConsumptionDetails>>
  >;
  created: Scalars["DateTime"]["output"];
  daysToExpiration?: Maybe<Scalars["Int"]["output"]>;
  documentUrl?: Maybe<Scalars["String"]["output"]>;
  engagementRate?: Maybe<Scalars["Float"]["output"]>;
  enterpriseCustomer: EnterpriseCustomerNode;
  fromDate: Scalars["Date"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  is30DaysExpiryEmailSent: Scalars["Boolean"]["output"];
  is60DaysExpiryEmailSent: Scalars["Boolean"]["output"];
  is90DaysExpiryEmailSent: Scalars["Boolean"]["output"];
  isAboutToExpireInTime?: Maybe<Scalars["Boolean"]["output"]>;
  isAnnual: Scalars["Boolean"]["output"];
  isAutoRenewed: Scalars["Boolean"]["output"];
  isTrial: Scalars["Boolean"]["output"];
  learningAssignmentsTargetCount: Scalars["Int"]["output"];
  lowCreditEmailSent: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  numberOfUsers: Scalars["Int"]["output"];
  paymentStatus?: Maybe<Scalars["String"]["output"]>;
  plan?: Maybe<PlanNode>;
  productspackageSet: ProductsPackageNodeConnection;
  remainingAssignmentsCount?: Maybe<Scalars["Float"]["output"]>;
  remainingAssignmentsRate?: Maybe<Scalars["Float"]["output"]>;
  renewed: Scalars["Boolean"]["output"];
  report?: Maybe<SubscriptionReportNode>;
  status: EnterpriseBillingEnterpriseCustomerSubscriptionStatusChoices;
  title: Scalars["String"]["output"];
  toDate: Scalars["Date"]["output"];
  totalUsersCount?: Maybe<Scalars["Int"]["output"]>;
  transactionSet: TransactionNodeConnection;
  type: EnterpriseBillingEnterpriseCustomerSubscriptionTypeChoices;
};

export type EnterpriseCustomerSubscriptionNodeProductspackageSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  subscriptionId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type EnterpriseCustomerSubscriptionNodeTransactionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnterpriseCustomerSubscriptionNodeConnection = {
  __typename?: "EnterpriseCustomerSubscriptionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EnterpriseCustomerSubscriptionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EnterpriseCustomerSubscriptionNode` and its cursor. */
export type EnterpriseCustomerSubscriptionNodeEdge = {
  __typename?: "EnterpriseCustomerSubscriptionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EnterpriseCustomerSubscriptionNode>;
};

export type EnterpriseCustomerSuperAdminInput = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

/** An enumeration. */
export enum EnterpriseEmployeeProfileStatusChoices {
  /** Active */
  A = "A",
  /** Inactive */
  I = "I",
  /** Quit */
  Q = "Q",
  /** Removed */
  R = "R",
  /** Account activation email to be sent */
  Ta = "TA",
  /** Vacation */
  V = "V",
}

export type EnterpriseHierarchyCreationInputNode = {
  admins?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  availableInLxp?: InputMaybe<Scalars["Boolean"]["input"]>;
  availableInTms?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type EnterpriseHierarchyNode = Node & {
  __typename?: "EnterpriseHierarchyNode";
  admins: UserNodeConnection;
  availableInLxp: Scalars["Boolean"]["output"];
  availableInTms: Scalars["Boolean"]["output"];
  children: EmployeeGroupNodeConnection;
  clientgamificationsettingSet: ClientGamificationSettingNodeConnection;
  created: Scalars["DateTime"]["output"];
  createdBy: UserNode;
  description?: Maybe<Scalars["String"]["output"]>;
  enterpriseCustomer: EnterpriseCustomerNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
};

export type EnterpriseHierarchyNodeAdminsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnterpriseHierarchyNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  underHierarchyId?: InputMaybe<Scalars["ID"]["input"]>;
  underHierarchy_Name?: InputMaybe<Scalars["String"]["input"]>;
};

export type EnterpriseHierarchyNodeClientgamificationsettingSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnterpriseHierarchyNodeConnection = {
  __typename?: "EnterpriseHierarchyNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EnterpriseHierarchyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EnterpriseHierarchyNode` and its cursor. */
export type EnterpriseHierarchyNodeEdge = {
  __typename?: "EnterpriseHierarchyNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EnterpriseHierarchyNode>;
};

export type EnterpriseOnboardingSurveyNode = Node & {
  __typename?: "EnterpriseOnboardingSurveyNode";
  created: Scalars["DateTime"]["output"];
  department?: Maybe<Scalars["String"]["output"]>;
  enterpriseCustomer: EnterpriseCustomerNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  industry?: Maybe<Scalars["String"]["output"]>;
  interests?: Maybe<Scalars["String"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  numberOfUsers?: Maybe<Scalars["String"]["output"]>;
};

export type EtihadCompetencyFrameworkResultType = {
  __typename?: "EtihadCompetencyFrameworkResultType";
  created: Scalars["DateTime"]["output"];
  cultureRating?: Maybe<BankAlEtihadEtihadCompetencyFrameworkResultCultureRatingChoices>;
  currentCompetencyLevel: BankAlEtihadEtihadCompetencyFrameworkResultCurrentCompetencyLevelChoices;
  currentJobPosition: EtihadJobPositionType;
  id: Scalars["ID"]["output"];
  isKnowledgeJourneyCompleted?: Maybe<Scalars["Boolean"]["output"]>;
  knowledgeAssessmentRating?: Maybe<Scalars["String"]["output"]>;
  /** Completion percentage (0-100) */
  knowledgeJourneyCompletion?: Maybe<Scalars["Int"]["output"]>;
  lastUpdatedBy?: Maybe<UserNode>;
  modified: Scalars["DateTime"]["output"];
  newJobPosition: EtihadJobPositionType;
  performanceRating?: Maybe<BankAlEtihadEtihadCompetencyFrameworkResultPerformanceRatingChoices>;
  postCompetencyLevel: BankAlEtihadEtihadCompetencyFrameworkResultPostCompetencyLevelChoices;
  user: UserNode;
};

export enum EtihadCompetencyLevelEnum {
  Level_1 = "LEVEL_1",
  Level_2 = "LEVEL_2",
  Level_3 = "LEVEL_3",
  Level_4 = "LEVEL_4",
  Level_5 = "LEVEL_5",
}

export enum EtihadCultureRatingEnum {
  AboveLevel = "ABOVE_LEVEL",
  ApproachingLevel = "APPROACHING_LEVEL",
  SameLevel = "SAME_LEVEL",
}

export type EtihadJobPositionType = {
  __typename?: "EtihadJobPositionType";
  currentPositions: Array<EtihadCompetencyFrameworkResultType>;
  id: Scalars["ID"]["output"];
  newPositions: Array<EtihadCompetencyFrameworkResultType>;
  title: Scalars["String"]["output"];
};

export enum EtihadKnowledgeAssessmentRatingEnum {
  AboveLevel = "ABOVE_LEVEL",
  NeedsDevelopment = "NEEDS_DEVELOPMENT",
  NotRequired = "NOT_REQUIRED",
  SameLevel = "SAME_LEVEL",
}

export enum EtihadPerformanceRatingEnum {
  AboveAverage = "ABOVE_AVERAGE",
  BelowAverage = "BELOW_AVERAGE",
  SameAverage = "SAME_AVERAGE",
}

export type EvidenceNode = Node & {
  __typename?: "EvidenceNode";
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  providedBy: UserNode;
  providedTo: UserNode;
  skill: CompetencySkillNode;
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
};

export type EvidenceNodeConnection = {
  __typename?: "EvidenceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EvidenceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `EvidenceNode` and its cursor. */
export type EvidenceNodeEdge = {
  __typename?: "EvidenceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<EvidenceNode>;
};

export type ExamAssignmentNode = Node & {
  __typename?: "ExamAssignmentNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  attemptsLeft?: Maybe<Scalars["Int"]["output"]>;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canTakeAnAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  exam: ExamNode;
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  grade: Scalars["Decimal"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isPending?: Maybe<Scalars["Boolean"]["output"]>;
  lastAttempt?: Maybe<ExamAttemptNode>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  timeLeftToRetakeAttempt?: Maybe<Scalars["Int"]["output"]>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type ExamAssignmentNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type ExamAssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type ExamAssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamAssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamAssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamAssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamAssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamAssignmentNodeConnection = {
  __typename?: "ExamAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamAssignmentNode` and its cursor. */
export type ExamAssignmentNodeEdge = {
  __typename?: "ExamAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamAssignmentNode>;
};

export type ExamAttemptNode = Node & {
  __typename?: "ExamAttemptNode";
  assignment?: Maybe<AssignmentUnion>;
  attempt: Scalars["Int"]["output"];
  attemptedAt?: Maybe<Scalars["DateTime"]["output"]>;
  correctAnswers?: Maybe<Scalars["Int"]["output"]>;
  created: Scalars["DateTime"]["output"];
  grade: Scalars["Decimal"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  identificationDocumentFile?: Maybe<Scalars["String"]["output"]>;
  isPassed?: Maybe<Scalars["Boolean"]["output"]>;
  lastProblemAnswered?: Maybe<ProblemsAttemptNode>;
  modified: Scalars["DateTime"]["output"];
  problemattemptSet: ProblemsAttemptNodeConnection;
  selfieFile?: Maybe<Scalars["String"]["output"]>;
  status: LearnerAssignmentExamAttemptStatusChoices;
  timeTaken?: Maybe<Scalars["Int"]["output"]>;
  totalPoints?: Maybe<Scalars["Float"]["output"]>;
};

export type ExamAttemptNodeProblemattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamAttemptNodeConnection = {
  __typename?: "ExamAttemptNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamAttemptNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamAttemptNode` and its cursor. */
export type ExamAttemptNodeEdge = {
  __typename?: "ExamAttemptNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamAttemptNode>;
};

export type ExamCompetitionAssignmentNode = Node & {
  __typename?: "ExamCompetitionAssignmentNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  answeredQuestions?: Maybe<ExamCompetitionAssignmentQuestionConnection>;
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  attempt?: Maybe<ExamCompetitionAttemptNode>;
  attempts: ExamCompetitionAttemptNodeConnection;
  attemptsLeft?: Maybe<Scalars["Int"]["output"]>;
  bestAttempt?: Maybe<ExamCompetitionAttemptNode>;
  bonusPoints?: Maybe<Array<Maybe<BonusPointItemNode>>>;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canRetake?: Maybe<Scalars["Boolean"]["output"]>;
  canSkipQuestion?: Maybe<Scalars["Boolean"]["output"]>;
  canTakeAnAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  consumedAttempts: Scalars["Int"]["output"];
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  currentQuestion?: Maybe<ExamCompetitionAssignmentQuestionNode>;
  examCompetition: ExamCompetitionNode;
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  getCurrentQuestion?: Maybe<MultipleChoiceQuestionResourceNode>;
  getCurrentQuestionWithoutTimeValidation?: Maybe<ExamCompetitionAssignmentQuestionNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Returns True if the attempt is considered the best attempt */
  isBestAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  isPending?: Maybe<Scalars["Boolean"]["output"]>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  points?: Maybe<Scalars["Int"]["output"]>;
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  streak?: Maybe<Scalars["Int"]["output"]>;
  timeLeftToRetakeAttempt?: Maybe<Scalars["Int"]["output"]>;
  totalTime?: Maybe<Scalars["Int"]["output"]>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type ExamCompetitionAssignmentNodeAnsweredQuestionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  attemptNo?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forBestAttempt?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCorrect?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type ExamCompetitionAssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type ExamCompetitionAssignmentNodeAttemptArgs = {
  attemptNo?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeAttemptsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeBonusPointsArgs = {
  attemptNo?: InputMaybe<Scalars["Int"]["input"]>;
  forBestAttempt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ExamCompetitionAssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeGetCurrentQuestionWithoutTimeValidationArgs =
  {
    getLastGeneratedQuestion?: InputMaybe<Scalars["Boolean"]["input"]>;
  };

export type ExamCompetitionAssignmentNodeIsBestAttemptArgs = {
  attemptNo?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionAssignmentNodePointsArgs = {
  attemptNo?: InputMaybe<Scalars["Int"]["input"]>;
  forBestAttempt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ExamCompetitionAssignmentNodeTotalTimeArgs = {
  attemptNo?: InputMaybe<Scalars["Int"]["input"]>;
  forBestAttempt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ExamCompetitionAssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamCompetitionAssignmentNodeConnection = {
  __typename?: "ExamCompetitionAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamCompetitionAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamCompetitionAssignmentNode` and its cursor. */
export type ExamCompetitionAssignmentNodeEdge = {
  __typename?: "ExamCompetitionAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamCompetitionAssignmentNode>;
};

export type ExamCompetitionAssignmentQuestionConnection = {
  __typename?: "ExamCompetitionAssignmentQuestionConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamCompetitionAssignmentQuestionEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamCompetitionAssignmentQuestion` and its cursor. */
export type ExamCompetitionAssignmentQuestionEdge = {
  __typename?: "ExamCompetitionAssignmentQuestionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamCompetitionAssignmentQuestionNode>;
};

export type ExamCompetitionAssignmentQuestionNode = {
  __typename?: "ExamCompetitionAssignmentQuestionNode";
  answer?: Maybe<ChoiceAnswerResourceNode>;
  generatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  isCorrect?: Maybe<Scalars["Boolean"]["output"]>;
  points?: Maybe<Scalars["Int"]["output"]>;
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  time?: Maybe<Scalars["Int"]["output"]>;
};

export type ExamCompetitionAttemptNode = Node & {
  __typename?: "ExamCompetitionAttemptNode";
  assignment: ExamCompetitionAssignmentNode;
  attempt: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  examcompetitionassignmentSet: ExamCompetitionAssignmentNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  participationPoints: Scalars["Int"]["output"];
  /** reward points count excluding streak points */
  rewardPoints: Scalars["Int"]["output"];
  status: CompetitionExamCompetitionAttemptStatusChoices;
  /** number of consecutive correct answers */
  streak: Scalars["Int"]["output"];
  /** streak points count only */
  streakPoints: Scalars["Int"]["output"];
  /** time points count only */
  timePoints: Scalars["Int"]["output"];
};

export type ExamCompetitionAttemptNodeExamcompetitionassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamCompetitionAttemptNodeConnection = {
  __typename?: "ExamCompetitionAttemptNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamCompetitionAttemptNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamCompetitionAttemptNode` and its cursor. */
export type ExamCompetitionAttemptNodeEdge = {
  __typename?: "ExamCompetitionAttemptNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamCompetitionAttemptNode>;
};

export type ExamCompetitionNode = Node & {
  __typename?: "ExamCompetitionNode";
  activity?: Maybe<ActivityNode>;
  allowedAttempts: Scalars["Int"]["output"];
  areUsersPartOfAnotherCohort?: Maybe<Scalars["Boolean"]["output"]>;
  /** field for `Assignments` linked to this cohort */
  assignmentSet?: Maybe<AssignmentConnection>;
  assignmentsSummary?: Maybe<CohortAssignmentsSummaryNode>;
  basedOn?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<CategoryNode>;
  cohortPtr: CohortNode;
  competitionPtr: CompetitionNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  description: Scalars["String"]["output"];
  exam: ExamNode;
  examCompetitionProblemsSuggestions?: Maybe<ExamCompetitionSuggestedExamProblemNodeConnection>;
  examcompetition?: Maybe<ExamCompetitionNode>;
  examcompetitionassignmentSet: ExamCompetitionAssignmentNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  inviteesReportList?: Maybe<CompetitionInviteeReportConnection>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  isPrevious?: Maybe<Scalars["Boolean"]["output"]>;
  isStarted?: Maybe<Scalars["Boolean"]["output"]>;
  isUpcoming?: Maybe<Scalars["Boolean"]["output"]>;
  leaderBoard?: Maybe<CompetitionLeaderboardParticipantConnection>;
  level: CompetitionCompetitionLevelChoices;
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  /** Summary for the cohort progress on a period of time */
  performanceSummary?: Maybe<CohortPerformanceSummaryNode>;
  pointsPerQuestion?: Maybe<Scalars["Int"]["output"]>;
  reportSummary?: Maybe<CompetitionReportNode>;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  status: CompetitionCompetitionStatusChoices;
  thumbnail: Scalars["String"]["output"];
  timePerQuestion?: Maybe<Scalars["Int"]["output"]>;
  totalCountUsersAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  totalCountUsersNotAssignedActivity?: Maybe<Scalars["Int"]["output"]>;
  totalPoints?: Maybe<Scalars["Int"]["output"]>;
  userAssignment?: Maybe<ExamCompetitionAssignmentNode>;
  /** list of users in cohort **Optional Filters** */
  users?: Maybe<UserNodeConnection>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
  version: Scalars["Int"]["output"];
};

export type ExamCompetitionNodeAreUsersPartOfAnotherCohortArgs = {
  activeUsersOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  cohortId: Scalars["ID"]["input"];
};

export type ExamCompetitionNodeAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  includeUserTrainingPrograms?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExamCompetitionNodeExamCompetitionProblemsSuggestionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionNodeExamcompetitionassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamCompetitionNodeInviteesReportListArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  searchQuery?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompetitionInviteeStatus>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamCompetitionNodeLeaderBoardArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  includeRequestUser?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamCompetitionNodePerformanceSummaryArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  pointsType?: InputMaybe<PointsTypes>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type ExamCompetitionNodeTotalCountUsersAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type ExamCompetitionNodeTotalCountUsersNotAssignedActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type ExamCompetitionNodeUsersArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  excludeStatuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExamCompetitionNodeConnection = {
  __typename?: "ExamCompetitionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamCompetitionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamCompetitionNode` and its cursor. */
export type ExamCompetitionNodeEdge = {
  __typename?: "ExamCompetitionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamCompetitionNode>;
};

export type ExamCompetitionSuggestedExamProblemNode = Node & {
  __typename?: "ExamCompetitionSuggestedExamProblemNode";
  acceptedBy?: Maybe<UserNode>;
  competition: CompetitionNode;
  created: Scalars["DateTime"]["output"];
  extraData?: Maybe<Scalars["String"]["output"]>;
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  problemId: Scalars["UUID"]["output"];
  prompt?: Maybe<Scalars["String"]["output"]>;
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse?: Maybe<Scalars["String"]["output"]>;
  rejectedBy?: Maybe<UserNode>;
};

export type ExamCompetitionSuggestedExamProblemNodeConnection = {
  __typename?: "ExamCompetitionSuggestedExamProblemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamCompetitionSuggestedExamProblemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamCompetitionSuggestedExamProblemNode` and its cursor. */
export type ExamCompetitionSuggestedExamProblemNodeEdge = {
  __typename?: "ExamCompetitionSuggestedExamProblemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamCompetitionSuggestedExamProblemNode>;
};

export type ExamGamificationSummary = {
  __typename?: "ExamGamificationSummary";
  earnedPoints?: Maybe<Scalars["Int"]["output"]>;
  missedPoints?: Maybe<Scalars["Int"]["output"]>;
  totalPoints?: Maybe<Scalars["Int"]["output"]>;
};

export type ExamNode = Node & {
  __typename?: "ExamNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  campaignSet: CampaignNodeConnection;
  clientLearningActivity?: Maybe<ClientLearningActivityNode>;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  examProblemsSuggestions: ExamSuggestedExamProblemNodeConnection;
  examassignmentSet: ExamAssignmentNodeConnection;
  examcompetitionSet: ExamCompetitionNodeConnection;
  examlearningobjectiveSet: QuizLosNodeConnection;
  examproblemSet?: Maybe<QProblemNodeConnection>;
  examsetting?: Maybe<SNode>;
  examunitSet: ExamUnitNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActivePublicAssessment: Scalars["Boolean"]["output"];
  isBasicDataValidForAiSuggestion?: Maybe<Scalars["Boolean"]["output"]>;
  isPublicAssessment: Scalars["Boolean"]["output"];
  isPublicAssessmentPopUpViewed?: Maybe<Scalars["Boolean"]["output"]>;
  /** True if the user is assigned to this activity, False otherwise */
  isUserAssigned?: Maybe<Scalars["Boolean"]["output"]>;
  language: QuizzingExamLanguageChoices;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  /** Total number of points expected to be awarded when completed */
  maxRewardPoints?: Maybe<Scalars["Int"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  problemsLosSet?: Maybe<LosResourceNodeConnection>;
  product?: Maybe<ProductNode>;
  promptMaterials?: Maybe<PromptMaterialNodeConnection>;
  publicassessmentassignmentSet: PublicAssessmentAssignmentNodeConnection;
  /** get rewarded only if the user passes the exam */
  rewardPointsPerQuestion?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  type: QuizzingExamTypeChoices;
};

export type ExamNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodeExamProblemsSuggestionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodeExamassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamNodeExamcompetitionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodeExamlearningobjectiveSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  losId?: InputMaybe<Scalars["UUID"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodeExamproblemSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  difficulties?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  includedLosIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  problemId?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type ExamNodeExamunitSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodeIsUserAssignedArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamNodeProblemsLosSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExamNodePromptMaterialsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamNodePublicassessmentassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExamNodeConnection = {
  __typename?: "ExamNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamNode` and its cursor. */
export type ExamNodeEdge = {
  __typename?: "ExamNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamNode>;
};

export type ExamSettingInput = {
  duration: Scalars["Int"]["input"];
  maxGrade?: InputMaybe<Scalars["Decimal"]["input"]>;
  numberOfProblems: Scalars["Int"]["input"];
  passingGrade: Scalars["Decimal"]["input"];
};

export type ExamSuggestedExamProblemNode = Node & {
  __typename?: "ExamSuggestedExamProblemNode";
  acceptedBy?: Maybe<UserNode>;
  created: Scalars["DateTime"]["output"];
  exam: ExamNode;
  extraData?: Maybe<Scalars["String"]["output"]>;
  generatedFor: UserNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isAccepted: Scalars["Boolean"]["output"];
  isRejected: Scalars["Boolean"]["output"];
  learningObjective?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  prompt?: Maybe<Scalars["String"]["output"]>;
  promptMaterial?: Maybe<PromptMaterialNode>;
  rawResponse?: Maybe<Scalars["String"]["output"]>;
  rejectedBy?: Maybe<UserNode>;
};

export type ExamSuggestedExamProblemNodeConnection = {
  __typename?: "ExamSuggestedExamProblemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamSuggestedExamProblemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamSuggestedExamProblemNode` and its cursor. */
export type ExamSuggestedExamProblemNodeEdge = {
  __typename?: "ExamSuggestedExamProblemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamSuggestedExamProblemNode>;
};

export type ExamUnitNode = Node & {
  __typename?: "ExamUnitNode";
  activity: ActivityNode;
  addingAiContentInProgress?: Maybe<Scalars["Boolean"]["output"]>;
  aiSuggestedDefinitions: AiSuggestedDefinitionNodeConnection;
  aiSuggestedLos: AiSuggestedLosNodeConnection;
  aiSuggestedMcqs: AiSuggestedMultipleChoiceQuestionNodeConnection;
  aiSuggestedText: AiSuggestedTextNodeConnection;
  aiSuggestionAsyncTaskResult?: Maybe<AiSuggestionAsyncTaskResultNodeConnection>;
  author?: Maybe<ContentAuthorNode>;
  children?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  childrenIncludeDeleted?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  exam: ExamNode;
  examunit?: Maybe<ExamUnitNode>;
  hide: Scalars["Boolean"]["output"];
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  losresourceSet: LosResourceNodeConnection;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  previous?: Maybe<CourseBlockUnion>;
  quizunit?: Maybe<QuizUnitNode>;
  resourceSet?: Maybe<ResourceConnection>;
  resourceobjectSet: ResourceObjectNodeConnection;
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  unitPtr: UnitNode;
};

export type ExamUnitNodeAiSuggestedDefinitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamUnitNodeAiSuggestedLosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamUnitNodeAiSuggestedMcqsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamUnitNodeAiSuggestedTextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamUnitNodeAiSuggestionAsyncTaskResultArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<SalalemAiSuggestionsAiSuggestionAsyncTaskResultStatusChoices>;
};

export type ExamUnitNodeLosresourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExamUnitNodeResourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExamUnitNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExamUnitNodeConnection = {
  __typename?: "ExamUnitNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExamUnitNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExamUnitNode` and its cursor. */
export type ExamUnitNodeEdge = {
  __typename?: "ExamUnitNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExamUnitNode>;
};

export type ExplanationBlockInput = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<ResourceInput>;
};

export type ExplanationResourceNode = Node & {
  __typename?: "ExplanationResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  choiceanswer?: Maybe<ChoiceAnswerResourceNode>;
  conceptResourcePool: ConceptResourceNodeConnection;
  conceptresource?: Maybe<ConceptResourceNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  explanationresource?: Maybe<ExplanationResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  imageresource?: Maybe<ImageResourceNode>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  linkresource?: Maybe<LinkResourceNode>;
  losResourcePool: LosResourceNodeConnection;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  losresource?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  pdfresource?: Maybe<PdfResourceNode>;
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  variants: ResourceObjectNodeConnection;
  videoresource?: Maybe<VideoResourceNode>;
  videosubtitleresource?: Maybe<VideoSubtitleResourceNode>;
};

export type ExplanationResourceNodeConceptResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExplanationResourceNodeLosResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExplanationResourceNodeVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExportAssignmentCompletionRequests = {
  __typename?: "ExportAssignmentCompletionRequests";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportAssignmentExtensionRequests = {
  __typename?: "ExportAssignmentExtensionRequests";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportClientInvoices = {
  __typename?: "ExportClientInvoices";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportClientRecentSubscriptionDetailedXlsxReport = {
  __typename?: "ExportClientRecentSubscriptionDetailedXlsxReport";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportClientUsersXlsxReport = {
  __typename?: "ExportClientUsersXlsxReport";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportDataCampaignFiltersInputNode = {
  /** Name of the campaign to filter by **icontains** */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** List of statuses to filter by **in** */
  statuses?: InputMaybe<Array<InputMaybe<CampaignStatusEnum>>>;
};

export type ExportProductRequests = {
  __typename?: "ExportProductRequests";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportProductReviewsXlsxReport = {
  __typename?: "ExportProductReviewsXlsxReport";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportReportData = {
  __typename?: "ExportReportData";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExportUsersData = {
  __typename?: "ExportUsersData";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExtendCampaignAssignments = {
  __typename?: "ExtendCampaignAssignments";
  campaign?: Maybe<CampaignNode>;
};

export type ExtendTrainingProgramAssignment = {
  __typename?: "ExtendTrainingProgramAssignment";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ExtendTrainingProgramAssignmentInputNode = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  assessmentDueTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  trainingProgramItemId: Scalars["ID"]["input"];
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** An enumeration. */
export enum ExternalActivitiesTypes {
  OnlineCourse = "OnlineCourse",
  Webinar = "Webinar",
  Workshop = "Workshop",
}

export type ExternalActivityAssignmentNode = Node & {
  __typename?: "ExternalActivityAssignmentNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  attemptsLeft?: Maybe<Scalars["Int"]["output"]>;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canTakeAnAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalActivity?: Maybe<ExternalActivityUnion>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isPending?: Maybe<Scalars["Boolean"]["output"]>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  timeLeftToRetakeAttempt?: Maybe<Scalars["Int"]["output"]>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type ExternalActivityAssignmentNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type ExternalActivityAssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type ExternalActivityAssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityAssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityAssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityAssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityAssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ExternalActivityAssignmentNodeConnection = {
  __typename?: "ExternalActivityAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExternalActivityAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExternalActivityAssignmentNode` and its cursor. */
export type ExternalActivityAssignmentNodeEdge = {
  __typename?: "ExternalActivityAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExternalActivityAssignmentNode>;
};

export type ExternalActivityConnection = {
  __typename?: "ExternalActivityConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExternalActivityEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExternalActivity` and its cursor. */
export type ExternalActivityEdge = {
  __typename?: "ExternalActivityEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExternalActivityUnion>;
};

export type ExternalActivityInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  startingDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  title: Scalars["String"]["input"];
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ExternalActivityNode = Node & {
  __typename?: "ExternalActivityNode";
  activity?: Maybe<ActivityNode>;
  /** Summary for all assignments, with number of people that didnot start yet, in progress, passed ..etc. */
  assignmentsSummary?: Maybe<ActivityAssignmentsSummaryNode>;
  author?: Maybe<ContentAuthorNode>;
  campaignSet?: Maybe<CampaignNodeConnection>;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  externalactivityassignmentSet?: Maybe<ExternalActivityAssignmentNodeConnection>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  onlinecourse?: Maybe<OnlineCourseNode>;
  schedule: ExternalActivityScheduleNodeConnection;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  title: Scalars["String"]["output"];
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
  webinar?: Maybe<WebinarNode>;
  workshop?: Maybe<WorkshopNode>;
};

export type ExternalActivityNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityNodeExternalactivityassignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type ExternalActivityNodeScheduleArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExternalActivityNodeConnection = {
  __typename?: "ExternalActivityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExternalActivityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExternalActivityNode` and its cursor. */
export type ExternalActivityNodeEdge = {
  __typename?: "ExternalActivityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExternalActivityNode>;
};

export type ExternalActivityScheduleInput = {
  startingDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ExternalActivityScheduleNode = Node & {
  __typename?: "ExternalActivityScheduleNode";
  externalActivity: ExternalActivityNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ExternalActivityScheduleNodeConnection = {
  __typename?: "ExternalActivityScheduleNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExternalActivityScheduleNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ExternalActivityScheduleNode` and its cursor. */
export type ExternalActivityScheduleNodeEdge = {
  __typename?: "ExternalActivityScheduleNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ExternalActivityScheduleNode>;
};

/** An enumeration. */
export enum ExternalActivityUndefinedActivityActivityTypeChoices {
  /** Course */
  Course = "COURSE",
  /** Exam */
  Exam = "EXAM",
  /** Training Program */
  Trainingprogram = "TRAININGPROGRAM",
  /** Webinar */
  Webinar = "WEBINAR",
  /** Workshop */
  Workshop = "WORKSHOP",
}

/** An enumeration. */
export enum ExternalActivityUndefinedActivityAssignmentActivityTypeChoices {
  /** Course */
  Course = "COURSE",
  /** Exam */
  Exam = "EXAM",
  /** Training Program */
  Trainingprogram = "TRAININGPROGRAM",
  /** Webinar */
  Webinar = "WEBINAR",
  /** Workshop */
  Workshop = "WORKSHOP",
}

/** An enumeration. */
export enum ExternalActivityUndefinedActivityCompletionChecklistItemTypeChoices {
  /** BOOLEAN */
  Boolean = "BOOLEAN",
  /** FILE */
  File = "FILE",
}

export type ExternalActivityUnion =
  | OnlineCourseNode
  | WebinarNode
  | WorkshopNode;

/** An enumeration. */
export enum ExternalActivityWorkshopGuideTypeChoices {
  /** COACH */
  Coach = "COACH",
  /** GUIDE */
  Guide = "GUIDE",
  /** MANAGER */
  Manager = "MANAGER",
  /** MENTOR */
  Mentor = "MENTOR",
}

/** An enumeration. */
export enum ExternalActivityWorkshopTypeChoices {
  /** career_guidance */
  CareerGuidance = "CAREER_GUIDANCE",
  /** conference */
  Conference = "CONFERENCE",
  /** education */
  Education = "EDUCATION",
  /** internship */
  Internship = "INTERNSHIP",
  /** job_rotation */
  JobRotation = "JOB_ROTATION",
  /** lecture */
  Lecture = "LECTURE",
  /** offline_course */
  OfflineCourse = "OFFLINE_COURSE",
  /** workshop */
  Workshop = "WORKSHOP",
}

export type ExtractQuestionFromMaterial = {
  __typename?: "ExtractQuestionFromMaterial";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type FileNode = Node & {
  __typename?: "FileNode";
  comment?: Maybe<CommentNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
};

export type FileNodeConnection = {
  __typename?: "FileNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FileNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `FileNode` and its cursor. */
export type FileNodeEdge = {
  __typename?: "FileNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<FileNode>;
};

export type FlashCardConnection = {
  __typename?: "FlashCardConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FlashCardEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FlashCard` and its cursor. */
export type FlashCardEdge = {
  __typename?: "FlashCardEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<FlashCardNode>;
};

export type FlashCardNode = Node & {
  __typename?: "FlashCardNode";
  answer: Scalars["String"]["output"];
  course: CourseNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  lrsObject: ObjectNode;
  modified: Scalars["DateTime"]["output"];
  question: Scalars["String"]["output"];
};

export type FlashCardNodeConnection = {
  __typename?: "FlashCardNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FlashCardNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FlashCardNode` and its cursor. */
export type FlashCardNodeEdge = {
  __typename?: "FlashCardNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<FlashCardNode>;
};

export enum FlashCardStatementVerbEnums {
  Flipped = "FLIPPED",
  Viewed = "VIEWED",
}

/** An enumeration. */
export enum GamificationLeagueAnnouncementTypeChoices {
  /** League Champion */
  LeagueChampion = "LEAGUE_CHAMPION",
}

/** An enumeration. */
export enum GamificationLeagueLevelChoices {
  /** Bronze */
  Bronze = "BRONZE",
  /** Golden */
  Golden = "GOLDEN",
  /** Platinum */
  Platinum = "PLATINUM",
  /** Silver */
  Silver = "SILVER",
}

/** An enumeration. */
export enum GamificationQuoteLanguageChoices {
  /** Arabic */
  Ar = "AR",
  /** English */
  En = "EN",
  /** French */
  Fr = "FR",
}

/** An enumeration. */
export enum GamificationUserOnboardingCheckItemStatusChoices {
  /** Deleted */
  Deleted = "DELETED",
  /** Done */
  Done = "DONE",
  /** Pending */
  Pending = "PENDING",
  /** Viewed */
  Viewed = "VIEWED",
}

/** An enumeration. */
export enum GenericAwardSources {
  Game = "game",
  LearningActivity = "learning_activity",
}

export type GetSuggestedCourseOutline = {
  __typename?: "GetSuggestedCourseOutline";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type GoogleAuth = {
  __typename?: "GoogleAuth";
  message?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

/** Representation of the resource block `HTMLBlock` in the graph */
export type HtmlBlockNode = Node & {
  __typename?: "HTMLBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type HaveEnoughAssignmentsCreditToAssignActivity = {
  __typename?: "HaveEnoughAssignmentsCreditToAssignActivity";
  haveEnoughAssignmentsCreditToAssignActivity?: Maybe<
    Scalars["Boolean"]["output"]
  >;
  reason?: Maybe<Scalars["String"]["output"]>;
};

export type HistoryNode = {
  __typename?: "HistoryNode";
  historyDate?: Maybe<Scalars["String"]["output"]>;
};

export type HistoryRecordConnection = {
  __typename?: "HistoryRecordConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HistoryRecordEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `HistoryRecord` and its cursor. */
export type HistoryRecordEdge = {
  __typename?: "HistoryRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<HistoryRecordNode>;
};

export type HistoryRecordNode = {
  __typename?: "HistoryRecordNode";
  field?: Maybe<Scalars["String"]["output"]>;
  new?: Maybe<Scalars["String"]["output"]>;
  old?: Maybe<Scalars["String"]["output"]>;
};

export type ImageResourceNode = Node & {
  __typename?: "ImageResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  url: Scalars["String"]["output"];
};

export type ImageResourceNodeConnection = {
  __typename?: "ImageResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ImageResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ImageResourceNode` and its cursor. */
export type ImageResourceNodeEdge = {
  __typename?: "ImageResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ImageResourceNode>;
};

export type InActivatedUsersInfoNode = {
  __typename?: "InActivatedUsersInfoNode";
  addedOn?: Maybe<Scalars["Date"]["output"]>;
  usersCount?: Maybe<Scalars["Int"]["output"]>;
};

export type InitiateAnAiSuggestedCourse = {
  __typename?: "InitiateAnAISuggestedCourse";
  suggestedCourse?: Maybe<AiCourseSuggestionNode>;
  titles?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type InitiateSubscriptionPayment = {
  __typename?: "InitiateSubscriptionPayment";
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
};

export type JobRoleFamilyNode = Node & {
  __typename?: "JobRoleFamilyNode";
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  jobroleSet: JobRoleNodeConnection;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
};

export type JobRoleFamilyNodeJobroleSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type JobRoleFamilyNodeConnection = {
  __typename?: "JobRoleFamilyNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobRoleFamilyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `JobRoleFamilyNode` and its cursor. */
export type JobRoleFamilyNodeEdge = {
  __typename?: "JobRoleFamilyNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<JobRoleFamilyNode>;
};

export type JobRoleNode = Node & {
  __typename?: "JobRoleNode";
  competencies: CompetencyNodeConnection;
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionAr?: Maybe<Scalars["String"]["output"]>;
  descriptionEn?: Maybe<Scalars["String"]["output"]>;
  employeejobroleSet: EmployeeJobRoleNodeConnection;
  employeeprofileSet: EmployeeProfileNodeConnection;
  family?: Maybe<JobRoleFamilyNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  numberOfEmployees?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  titleAr?: Maybe<Scalars["String"]["output"]>;
  titleEn?: Maybe<Scalars["String"]["output"]>;
};

export type JobRoleNodeCompetenciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type JobRoleNodeEmployeejobroleSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JobRoleNodeEmployeeprofileSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  employeeId_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<EnterpriseEmployeeProfileStatusChoices>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type JobRoleNodeConnection = {
  __typename?: "JobRoleNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobRoleNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `JobRoleNode` and its cursor. */
export type JobRoleNodeEdge = {
  __typename?: "JobRoleNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<JobRoleNode>;
};

/** An enumeration. */
export enum KnowledgeBaseBotUserMessageRoleChoices {
  /** Assistant */
  Assistant = "ASSISTANT",
  /** User */
  User = "USER",
}

export type KnowledgeBaseDocumentNode = Node & {
  __typename?: "KnowledgeBaseDocumentNode";
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  document?: Maybe<Scalars["String"]["output"]>;
  fileType: KnowledgeBaseKnowledgeBaseDocumentFileTypeChoices;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  relatedObjectId: Scalars["String"]["output"];
  textMaterial?: Maybe<Scalars["String"]["output"]>;
  uploadedBy: UserNode;
};

export type KnowledgeBaseDocumentNodeConnection = {
  __typename?: "KnowledgeBaseDocumentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<KnowledgeBaseDocumentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `KnowledgeBaseDocumentNode` and its cursor. */
export type KnowledgeBaseDocumentNodeEdge = {
  __typename?: "KnowledgeBaseDocumentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<KnowledgeBaseDocumentNode>;
};

/** An enumeration. */
export enum KnowledgeBaseKnowledgeBaseDocumentFileTypeChoices {
  /** CSV */
  Csv = "CSV",
  /** DOCX */
  Docx = "DOCX",
  /** PDF */
  Pdf = "PDF",
  /** PPTX */
  Pptx = "PPTX",
  /** RAW */
  Raw = "RAW",
  /** TXT */
  Txt = "TXT",
  /** XLS */
  Xls = "XLS",
  /** XLSX */
  Xlsx = "XLSX",
}

/** Representation of the resource block `LOSBlock` in the graph */
export type LosBlockNode = Node & {
  __typename?: "LOSBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  canBeDeleted?: Maybe<Scalars["Boolean"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<LosResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  /** Get resource's resources but in block instances */
  resourcesBlocks?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  videoblockcuepointSet: VideoBlockCuePointNodeConnection;
};

/** Representation of the resource block `LOSBlock` in the graph */
export type LosBlockNodeVideoblockcuepointSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNode = Node & {
  __typename?: "LOSResourceNode";
  activity?: Maybe<ActivityNode>;
  aisuggesteddefinitionSet: AiSuggestedDefinitionNodeConnection;
  aisuggestedlosSet: AiSuggestedLosNodeConnection;
  aisuggestedmultiplechoicequestionSet: AiSuggestedMultipleChoiceQuestionNodeConnection;
  aisuggestedtextSet: AiSuggestedTextNodeConnection;
  author?: Maybe<ContentAuthorNode>;
  choiceanswer?: Maybe<ChoiceAnswerResourceNode>;
  conceptResourcePool: ConceptResourceNodeConnection;
  conceptresource?: Maybe<ConceptResourceNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  domain: Scalars["String"]["output"];
  examsuggestedexamproblemSet: ExamSuggestedExamProblemNodeConnection;
  explanationresource?: Maybe<ExplanationResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  imageresource?: Maybe<ImageResourceNode>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  linkresource?: Maybe<LinkResourceNode>;
  losResourcePool: LosResourceNodeConnection;
  losresource?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  pdfresource?: Maybe<PdfResourceNode>;
  references: ReferenceNodeConnection;
  resourceCount?: Maybe<Scalars["Int"]["output"]>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  resources?: Maybe<Array<Maybe<ResourceObjectUnion>>>;
  title: Scalars["String"]["output"];
  treelosSet: TreeLosNodeConnection;
  unit?: Maybe<UnitNode>;
  unitLo?: Maybe<UnitNode>;
  variants: ResourceObjectNodeConnection;
  verb: Scalars["String"]["output"];
  videoblockcuepointSet: VideoBlockCuePointNodeConnection;
  videoresource?: Maybe<VideoResourceNode>;
  videosubtitleresource?: Maybe<VideoSubtitleResourceNode>;
};

export type LosResourceNodeAisuggesteddefinitionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeAisuggestedlosSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeAisuggestedmultiplechoicequestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeAisuggestedtextSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeConceptResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type LosResourceNodeExamsuggestedexamproblemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeLosResourcePoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type LosResourceNodeReferencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeResourceCountArgs = {
  resourceType?: InputMaybe<ResourceObjectTypeEnum>;
};

export type LosResourceNodeResourcesArgs = {
  maxCount?: InputMaybe<Scalars["Int"]["input"]>;
  resourceTitleContains?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ResourceObjectTypeEnum>;
};

export type LosResourceNodeTreelosSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type LosResourceNodeVideoblockcuepointSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LosResourceNodeConnection = {
  __typename?: "LOSResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LosResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LOSResourceNode` and its cursor. */
export type LosResourceNodeEdge = {
  __typename?: "LOSResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LosResourceNode>;
};

export type LqNode = Node & {
  __typename?: "LQNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canReattempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  didPass?: Maybe<Scalars["Boolean"]["output"]>;
  exam: ExamNode;
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  grade: Scalars["Decimal"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isFailed?: Maybe<Scalars["Boolean"]["output"]>;
  isNotStartedYet?: Maybe<Scalars["Boolean"]["output"]>;
  isPassed?: Maybe<Scalars["Boolean"]["output"]>;
  isStarted?: Maybe<Scalars["Boolean"]["output"]>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type LqNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type LqNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type LqNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LqNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LqNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LqNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LqNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type LqNodeConnection = {
  __typename?: "LQNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LqNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LQNode` and its cursor. */
export type LqNodeEdge = {
  __typename?: "LQNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LqNode>;
};

export type LaunchCampaign = {
  __typename?: "LaunchCampaign";
  campaign?: Maybe<CampaignNode>;
};

export type LeadNode = Node & {
  __typename?: "LeadNode";
  campaign: Scalars["String"]["output"];
  country: MarketingLeadCountryChoices;
  created: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  jobTitle: Scalars["String"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  notes: Scalars["String"]["output"];
  numberOfEmployees: Scalars["String"]["output"];
  organizationName: Scalars["String"]["output"];
  origin: Scalars["String"]["output"];
  page: Scalars["String"]["output"];
  phoneNumber: Scalars["String"]["output"];
  selectedDemoDateAndTime?: Maybe<Scalars["DateTime"]["output"]>;
  selectedTimeZone: Scalars["String"]["output"];
  source: Scalars["String"]["output"];
  stage: MarketingLeadStageChoices;
  status: MarketingLeadStatusChoices;
};

export type LeaderboardParticipantConnection = {
  __typename?: "LeaderboardParticipantConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LeaderboardParticipantEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LeaderboardParticipant` and its cursor. */
export type LeaderboardParticipantEdge = {
  __typename?: "LeaderboardParticipantEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LeaderboardParticipantNode>;
};

export type LeaderboardParticipantNode = {
  __typename?: "LeaderboardParticipantNode";
  periodPoints?: Maybe<Scalars["Int"]["output"]>;
  rank?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<UserNode>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type LeagueAnnouncementNode = Node & {
  __typename?: "LeagueAnnouncementNode";
  created: Scalars["DateTime"]["output"];
  data: Scalars["JSONString"]["output"];
  expiryDate: Scalars["Date"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  season: LeaguesSeasonNode;
  type: GamificationLeagueAnnouncementTypeChoices;
};

export type LeagueAnnouncementNodeConnection = {
  __typename?: "LeagueAnnouncementNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LeagueAnnouncementNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LeagueAnnouncementNode` and its cursor. */
export type LeagueAnnouncementNodeEdge = {
  __typename?: "LeagueAnnouncementNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LeagueAnnouncementNode>;
};

export type LeagueChampionNode = Node & {
  __typename?: "LeagueChampionNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  league: LeagueNode;
  modified: Scalars["DateTime"]["output"];
  season: LeaguesSeasonNode;
  userLeagueRecord?: Maybe<UserLeagueRecordNode>;
};

export type LeagueChampionNodeConnection = {
  __typename?: "LeagueChampionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LeagueChampionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LeagueChampionNode` and its cursor. */
export type LeagueChampionNodeEdge = {
  __typename?: "LeagueChampionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LeagueChampionNode>;
};

export type LeagueLeaderboardParticipantConnection = {
  __typename?: "LeagueLeaderboardParticipantConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LeagueLeaderboardParticipantEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LeagueLeaderboardParticipant` and its cursor. */
export type LeagueLeaderboardParticipantEdge = {
  __typename?: "LeagueLeaderboardParticipantEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LeagueLeaderboardParticipantNode>;
};

export type LeagueLeaderboardParticipantNode = {
  __typename?: "LeagueLeaderboardParticipantNode";
  championSince?: Maybe<Scalars["DateTime"]["output"]>;
  isChampion?: Maybe<Scalars["Boolean"]["output"]>;
  leagueScore?: Maybe<Scalars["Int"]["output"]>;
  periodPoints?: Maybe<Scalars["Int"]["output"]>;
  rank?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<UserNode>;
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type LeagueNode = Node & {
  __typename?: "LeagueNode";
  champion: LeagueChampionNodeConnection;
  created: Scalars["DateTime"]["output"];
  icon?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isMyLeague?: Maybe<Scalars["Boolean"]["output"]>;
  leaderboard?: Maybe<LeagueLeaderboardParticipantConnection>;
  level: GamificationLeagueLevelChoices;
  modified: Scalars["DateTime"]["output"];
  season: LeaguesSeasonNode;
  userleaguerecordSet: UserLeagueRecordNodeConnection;
};

export type LeagueNodeChampionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LeagueNodeLeaderboardArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LeagueNodeUserleaguerecordSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LeagueNodeConnection = {
  __typename?: "LeagueNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LeagueNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LeagueNode` and its cursor. */
export type LeagueNodeEdge = {
  __typename?: "LeagueNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LeagueNode>;
};

export type LeaguesSeasonNode = Node & {
  __typename?: "LeaguesSeasonNode";
  announcements: LeagueAnnouncementNodeConnection;
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  endDate: Scalars["Date"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  leaguechampionSet: LeagueChampionNodeConnection;
  leagues: LeagueNodeConnection;
  modified: Scalars["DateTime"]["output"];
  season: Scalars["Int"]["output"];
  startDate: Scalars["Date"]["output"];
};

export type LeaguesSeasonNodeAnnouncementsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LeaguesSeasonNodeLeaguechampionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LeaguesSeasonNodeLeaguesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LeaguesSeasonNodeConnection = {
  __typename?: "LeaguesSeasonNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LeaguesSeasonNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LeaguesSeasonNode` and its cursor. */
export type LeaguesSeasonNodeEdge = {
  __typename?: "LeaguesSeasonNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LeaguesSeasonNode>;
};

/** An enumeration. */
export enum LearnerAssignmentAssignmentStatusChoices {
  /** Awaiting */
  A = "A",
  /** Deleted */
  D = "D",
  /** Failed */
  F = "F",
  /** In Progress */
  I = "I",
  /** Not started yet */
  N = "N",
  /** Overdue */
  O = "O",
  /** Passed */
  P = "P",
  /** Resubmit */
  R = "R",
}

/** An enumeration. */
export enum LearnerAssignmentExamAttemptStatusChoices {
  /** Failed */
  F = "F",
  /** In Progress */
  I = "I",
  /** Not started yet */
  N = "N",
  /** Passed */
  P = "P",
}

export type LearnerInput = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

/** An enumeration. */
export enum LearningActivityAssignmentStatusesEnum {
  Active = "ACTIVE",
  All = "ALL",
  Completed = "COMPLETED",
  Failed = "FAILED",
  Incomplete = "INCOMPLETE",
  Missed = "MISSED",
  Passed = "PASSED",
  Pending = "PENDING",
  Upcoming = "UPCOMING",
}

export type LearningActivitySubscriberNode = Node & {
  __typename?: "LearningActivitySubscriberNode";
  activity?: Maybe<ActivityUnion>;
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  createdBy: UserNode;
  /** The event that will trigger the action */
  event: TriggerLearningActivitySubscriberEventChoices;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  settings?: Maybe<LearningActivitySubscriberSettingsNode>;
  trainingProgramSettings?: Maybe<TrainingProgramSubscriberSettingsNode>;
};

export type LearningActivitySubscriberNodeConnection = {
  __typename?: "LearningActivitySubscriberNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearningActivitySubscriberNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LearningActivitySubscriberNode` and its cursor. */
export type LearningActivitySubscriberNodeEdge = {
  __typename?: "LearningActivitySubscriberNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LearningActivitySubscriberNode>;
};

export type LearningActivitySubscriberSettingsNode = Node & {
  __typename?: "LearningActivitySubscriberSettingsNode";
  /** The number of days after the event is triggered */
  after: Scalars["Int"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  duration: Scalars["Int"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  subscriber: LearningActivitySubscriberNode;
};

/** An enumeration. */
export enum LearningActivityTypeEnum {
  All = "ALL",
  CareerGuidanceAssignments = "CAREER_GUIDANCE_ASSIGNMENTS",
  CompetitionAssignments = "COMPETITION_ASSIGNMENTS",
  ConferencesAssignments = "CONFERENCES_ASSIGNMENTS",
  CourseAssignments = "COURSE_ASSIGNMENTS",
  ExamAssignments = "EXAM_ASSIGNMENTS",
  InternshipAssignments = "INTERNSHIP_ASSIGNMENTS",
  JobRotationAssignments = "JOB_ROTATION_ASSIGNMENTS",
  LectureAssignments = "LECTURE_ASSIGNMENTS",
  OfflineCourseAssignments = "OFFLINE_COURSE_ASSIGNMENTS",
  TrainingProgramAssignments = "TRAINING_PROGRAM_ASSIGNMENTS",
  WorkshopAssignments = "WORKSHOP_ASSIGNMENTS",
}

export type LearningActivityUnion =
  | CourseNode
  | ExamNode
  | UndefinedActivityNode;

export type LearningOverallSummaryNode = {
  __typename?: "LearningOverallSummaryNode";
  actualCompletion?: Maybe<Scalars["Float"]["output"]>;
  actualCompletionChangesRate?: Maybe<Scalars["Float"]["output"]>;
  numberOfLearners?: Maybe<Scalars["Int"]["output"]>;
  numberOfLearnersChangesRate?: Maybe<Scalars["Int"]["output"]>;
  targetCompletion?: Maybe<Scalars["Float"]["output"]>;
  targetCompletionChangesRate?: Maybe<Scalars["Float"]["output"]>;
};

export type LearningPlanAssignmentNode = Node & {
  __typename?: "LearningPlanAssignmentNode";
  assignment: AssignmentNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  section: UserLearningPlanSectionNode;
  title: Scalars["String"]["output"];
};

export type LearningPlanAssignmentNodeConnection = {
  __typename?: "LearningPlanAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearningPlanAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LearningPlanAssignmentNode` and its cursor. */
export type LearningPlanAssignmentNodeEdge = {
  __typename?: "LearningPlanAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LearningPlanAssignmentNode>;
};

/** An enumeration. */
export enum LearningPlanLearningPlanStatusChoices {
  /** Draft Learning Plan */
  Draft = "DRAFT",
  /** Ready Learning Plan */
  Ready = "READY",
}

export type LearningPlanNode = Node & {
  __typename?: "LearningPlanNode";
  author?: Maybe<ContentAuthorNode>;
  badge?: Maybe<BadgeNode>;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  instances: UserLearningPlanNodeConnection;
  learningplansectionSet: LearningPlanSectionNodeConnection;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  status: LearningPlanLearningPlanStatusChoices;
  title: Scalars["String"]["output"];
};

export type LearningPlanNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LearningPlanNodeInstancesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LearningPlanNodeLearningplansectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LearningPlanNodeConnection = {
  __typename?: "LearningPlanNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearningPlanNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LearningPlanNode` and its cursor. */
export type LearningPlanNodeEdge = {
  __typename?: "LearningPlanNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LearningPlanNode>;
};

export type LearningPlanProductNode = Node & {
  __typename?: "LearningPlanProductNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  product: ProductNode;
  section: LearningPlanSectionNode;
  startingDate: Scalars["Date"]["output"];
  title: Scalars["String"]["output"];
  validUntil: Scalars["Date"]["output"];
};

export type LearningPlanProductNodeConnection = {
  __typename?: "LearningPlanProductNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearningPlanProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LearningPlanProductNode` and its cursor. */
export type LearningPlanProductNodeEdge = {
  __typename?: "LearningPlanProductNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LearningPlanProductNode>;
};

export type LearningPlanSectionNode = Node & {
  __typename?: "LearningPlanSectionNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  learningPlan: LearningPlanNode;
  learningplanproductSet: LearningPlanProductNodeConnection;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  /** Sum of all activities cpd in section */
  overallCpd?: Maybe<Scalars["Int"]["output"]>;
  /** User progress on learning plan section */
  progress?: Maybe<Scalars["Float"]["output"]>;
  title: Scalars["String"]["output"];
};

export type LearningPlanSectionNodeLearningplanproductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LearningPlanSectionNodeConnection = {
  __typename?: "LearningPlanSectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearningPlanSectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LearningPlanSectionNode` and its cursor. */
export type LearningPlanSectionNodeEdge = {
  __typename?: "LearningPlanSectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LearningPlanSectionNode>;
};

/** An enumeration. */
export enum LevelOfEducationEnum {
  Associate = "ASSOCIATE",
  Bachelor = "BACHELOR",
  Elementary = "ELEMENTARY",
  HighSchool = "HIGH_SCHOOL",
  Masters = "MASTERS",
  None = "NONE",
  Other = "OTHER",
  Phd = "PHD",
  PreHighSchool = "PRE_HIGH_SCHOOL",
}

/** An enumeration. */
export enum LinkBaseResourcesVideoSubtitleResourceLanguageChoices {
  /** Arabic */
  Ar = "AR",
  /** English */
  En = "EN",
  /** French */
  Fr = "FR",
}

/** Representation of the resource block `LinkBlock` in the graph */
export type LinkBlockNode = Node & {
  __typename?: "LinkBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<LinkResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type LinkClientResourceToLosPool = {
  __typename?: "LinkClientResourceToLOSPool";
  resource?: Maybe<ResourceObjectUnion>;
};

export type LinkLosToLeafNode = {
  __typename?: "LinkLOSToLeafNode";
  treeLosNode?: Maybe<TreeLosNode>;
};

export type LinkProblemToQuiz = {
  __typename?: "LinkProblemToQuiz";
  quiz?: Maybe<PostAssessmentQuizNode>;
};

export type LinkResourceNode = Node & {
  __typename?: "LinkResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  url: Scalars["String"]["output"];
};

export type LinkResourceNodeConnection = {
  __typename?: "LinkResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LinkResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `LinkResourceNode` and its cursor. */
export type LinkResourceNodeEdge = {
  __typename?: "LinkResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LinkResourceNode>;
};

export type LinkResourceToLosPool = {
  __typename?: "LinkResourceToLOSPool";
  resource?: Maybe<ResourceObjectUnion>;
};

export type Logout = {
  __typename?: "Logout";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MagicLinkAuth = {
  __typename?: "MagicLinkAuth";
  message?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type MainCategoryNode = Node & {
  __typename?: "MainCategoryNode";
  categorySet: CategoryNodeConnection;
  created: Scalars["DateTime"]["output"];
  icon: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
};

export type MainCategoryNodeCategorySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MainCategoryNodeConnection = {
  __typename?: "MainCategoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MainCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `MainCategoryNode` and its cursor. */
export type MainCategoryNodeEdge = {
  __typename?: "MainCategoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<MainCategoryNode>;
};

export type MainLearningReportNode = {
  __typename?: "MainLearningReportNode";
  allTypes?: Maybe<Array<Maybe<TypeSummaryNode>>>;
  overallSummary?: Maybe<LearningOverallSummaryNode>;
};

/** An enumeration. */
export enum MainResourceObjectTypeEnum {
  AudioResource = "AudioResource",
  BookReference = "BookReference",
  ChoiceAnswer = "ChoiceAnswer",
  ConceptResource = "ConceptResource",
  ExplanationResource = "ExplanationResource",
  ImageResource = "ImageResource",
  LosResource = "LOSResource",
  LinkResource = "LinkResource",
  MultipleChoiceQuestion = "MultipleChoiceQuestion",
  MultipleChoiceSelectionQuestion = "MultipleChoiceSelectionQuestion",
  PdfResource = "PDFResource",
  PastPaperReference = "PastPaperReference",
  Problem = "Problem",
  QuestionIdeaResource = "QuestionIdeaResource",
  TeacherReference = "TeacherReference",
  TrueFalseQuestion = "TrueFalseQuestion",
  VideoResource = "VideoResource",
  VideoSubtitleResource = "VideoSubtitleResource",
}

export type MarkAllNotificationsAsReadOrUnread = {
  __typename?: "MarkAllNotificationsAsReadOrUnread";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MarkAssignmentAsCompleted = {
  __typename?: "MarkAssignmentAsCompleted";
  assignment?: Maybe<AssignmentUnion>;
};

/** An enumeration. */
export enum MarketingLeadCountryChoices {
  /** Andorra */
  Ad = "AD",
  /** United Arab Emirates */
  Ae = "AE",
  /** Afghanistan */
  Af = "AF",
  /** Antigua and Barbuda */
  Ag = "AG",
  /** Anguilla */
  Ai = "AI",
  /** Albania */
  Al = "AL",
  /** Armenia */
  Am = "AM",
  /** Angola */
  Ao = "AO",
  /** Antarctica */
  Aq = "AQ",
  /** Argentina */
  Ar = "AR",
  /** American Samoa */
  As = "AS",
  /** Austria */
  At = "AT",
  /** Australia */
  Au = "AU",
  /** Aruba */
  Aw = "AW",
  /** Åland Islands */
  Ax = "AX",
  /** Azerbaijan */
  Az = "AZ",
  /** Bosnia and Herzegovina */
  Ba = "BA",
  /** Barbados */
  Bb = "BB",
  /** Bangladesh */
  Bd = "BD",
  /** Belgium */
  Be = "BE",
  /** Burkina Faso */
  Bf = "BF",
  /** Bulgaria */
  Bg = "BG",
  /** Bahrain */
  Bh = "BH",
  /** Burundi */
  Bi = "BI",
  /** Benin */
  Bj = "BJ",
  /** Saint Barthélemy */
  Bl = "BL",
  /** Bermuda */
  Bm = "BM",
  /** Brunei */
  Bn = "BN",
  /** Bolivia */
  Bo = "BO",
  /** Bonaire, Sint Eustatius and Saba */
  Bq = "BQ",
  /** Brazil */
  Br = "BR",
  /** Bahamas */
  Bs = "BS",
  /** Bhutan */
  Bt = "BT",
  /** Bouvet Island */
  Bv = "BV",
  /** Botswana */
  Bw = "BW",
  /** Belarus */
  By = "BY",
  /** Belize */
  Bz = "BZ",
  /** Canada */
  Ca = "CA",
  /** Cocos (Keeling) Islands */
  Cc = "CC",
  /** Congo (the Democratic Republic of the) */
  Cd = "CD",
  /** Central African Republic */
  Cf = "CF",
  /** Congo */
  Cg = "CG",
  /** Switzerland */
  Ch = "CH",
  /** Côte d'Ivoire */
  Ci = "CI",
  /** Cook Islands */
  Ck = "CK",
  /** Chile */
  Cl = "CL",
  /** Cameroon */
  Cm = "CM",
  /** China */
  Cn = "CN",
  /** Colombia */
  Co = "CO",
  /** Costa Rica */
  Cr = "CR",
  /** Cuba */
  Cu = "CU",
  /** Cabo Verde */
  Cv = "CV",
  /** Curaçao */
  Cw = "CW",
  /** Christmas Island */
  Cx = "CX",
  /** Cyprus */
  Cy = "CY",
  /** Czechia */
  Cz = "CZ",
  /** Germany */
  De = "DE",
  /** Djibouti */
  Dj = "DJ",
  /** Denmark */
  Dk = "DK",
  /** Dominica */
  Dm = "DM",
  /** Dominican Republic */
  Do = "DO",
  /** Algeria */
  Dz = "DZ",
  /** Ecuador */
  Ec = "EC",
  /** Estonia */
  Ee = "EE",
  /** Egypt */
  Eg = "EG",
  /** Western Sahara */
  Eh = "EH",
  /** Eritrea */
  Er = "ER",
  /** Spain */
  Es = "ES",
  /** Ethiopia */
  Et = "ET",
  /** Finland */
  Fi = "FI",
  /** Fiji */
  Fj = "FJ",
  /** Falkland Islands (Malvinas) */
  Fk = "FK",
  /** Micronesia (Federated States of) */
  Fm = "FM",
  /** Faroe Islands */
  Fo = "FO",
  /** France */
  Fr = "FR",
  /** Gabon */
  Ga = "GA",
  /** United Kingdom */
  Gb = "GB",
  /** Grenada */
  Gd = "GD",
  /** Georgia */
  Ge = "GE",
  /** French Guiana */
  Gf = "GF",
  /** Guernsey */
  Gg = "GG",
  /** Ghana */
  Gh = "GH",
  /** Gibraltar */
  Gi = "GI",
  /** Greenland */
  Gl = "GL",
  /** Gambia */
  Gm = "GM",
  /** Guinea */
  Gn = "GN",
  /** Guadeloupe */
  Gp = "GP",
  /** Equatorial Guinea */
  Gq = "GQ",
  /** Greece */
  Gr = "GR",
  /** South Georgia and the South Sandwich Islands */
  Gs = "GS",
  /** Guatemala */
  Gt = "GT",
  /** Guam */
  Gu = "GU",
  /** Guinea-Bissau */
  Gw = "GW",
  /** Guyana */
  Gy = "GY",
  /** Hong Kong */
  Hk = "HK",
  /** Heard Island and McDonald Islands */
  Hm = "HM",
  /** Honduras */
  Hn = "HN",
  /** Croatia */
  Hr = "HR",
  /** Haiti */
  Ht = "HT",
  /** Hungary */
  Hu = "HU",
  /** Indonesia */
  Id = "ID",
  /** Ireland */
  Ie = "IE",
  /** Israel */
  Il = "IL",
  /** Isle of Man */
  Im = "IM",
  /** India */
  In = "IN",
  /** British Indian Ocean Territory */
  Io = "IO",
  /** Iraq */
  Iq = "IQ",
  /** Iran */
  Ir = "IR",
  /** Iceland */
  Is = "IS",
  /** Italy */
  It = "IT",
  /** Jersey */
  Je = "JE",
  /** Jamaica */
  Jm = "JM",
  /** Jordan */
  Jo = "JO",
  /** Japan */
  Jp = "JP",
  /** Kenya */
  Ke = "KE",
  /** Kyrgyzstan */
  Kg = "KG",
  /** Cambodia */
  Kh = "KH",
  /** Kiribati */
  Ki = "KI",
  /** Comoros */
  Km = "KM",
  /** Saint Kitts and Nevis */
  Kn = "KN",
  /** North Korea */
  Kp = "KP",
  /** South Korea */
  Kr = "KR",
  /** Kuwait */
  Kw = "KW",
  /** Cayman Islands */
  Ky = "KY",
  /** Kazakhstan */
  Kz = "KZ",
  /** Laos */
  La = "LA",
  /** Lebanon */
  Lb = "LB",
  /** Saint Lucia */
  Lc = "LC",
  /** Liechtenstein */
  Li = "LI",
  /** Sri Lanka */
  Lk = "LK",
  /** Liberia */
  Lr = "LR",
  /** Lesotho */
  Ls = "LS",
  /** Lithuania */
  Lt = "LT",
  /** Luxembourg */
  Lu = "LU",
  /** Latvia */
  Lv = "LV",
  /** Libya */
  Ly = "LY",
  /** Morocco */
  Ma = "MA",
  /** Monaco */
  Mc = "MC",
  /** Moldova */
  Md = "MD",
  /** Montenegro */
  Me = "ME",
  /** Saint Martin (French part) */
  Mf = "MF",
  /** Madagascar */
  Mg = "MG",
  /** Marshall Islands */
  Mh = "MH",
  /** North Macedonia */
  Mk = "MK",
  /** Mali */
  Ml = "ML",
  /** Myanmar */
  Mm = "MM",
  /** Mongolia */
  Mn = "MN",
  /** Macao */
  Mo = "MO",
  /** Northern Mariana Islands */
  Mp = "MP",
  /** Martinique */
  Mq = "MQ",
  /** Mauritania */
  Mr = "MR",
  /** Montserrat */
  Ms = "MS",
  /** Malta */
  Mt = "MT",
  /** Mauritius */
  Mu = "MU",
  /** Maldives */
  Mv = "MV",
  /** Malawi */
  Mw = "MW",
  /** Mexico */
  Mx = "MX",
  /** Malaysia */
  My = "MY",
  /** Mozambique */
  Mz = "MZ",
  /** Namibia */
  Na = "NA",
  /** New Caledonia */
  Nc = "NC",
  /** Niger */
  Ne = "NE",
  /** Norfolk Island */
  Nf = "NF",
  /** Nigeria */
  Ng = "NG",
  /** Nicaragua */
  Ni = "NI",
  /** Netherlands */
  Nl = "NL",
  /** Norway */
  No = "NO",
  /** Nepal */
  Np = "NP",
  /** Nauru */
  Nr = "NR",
  /** Niue */
  Nu = "NU",
  /** New Zealand */
  Nz = "NZ",
  /** Oman */
  Om = "OM",
  /** Panama */
  Pa = "PA",
  /** Peru */
  Pe = "PE",
  /** French Polynesia */
  Pf = "PF",
  /** Papua New Guinea */
  Pg = "PG",
  /** Philippines */
  Ph = "PH",
  /** Pakistan */
  Pk = "PK",
  /** Poland */
  Pl = "PL",
  /** Saint Pierre and Miquelon */
  Pm = "PM",
  /** Pitcairn */
  Pn = "PN",
  /** Puerto Rico */
  Pr = "PR",
  /** Palestine, State of */
  Ps = "PS",
  /** Portugal */
  Pt = "PT",
  /** Palau */
  Pw = "PW",
  /** Paraguay */
  Py = "PY",
  /** Qatar */
  Qa = "QA",
  /** Réunion */
  Re = "RE",
  /** Romania */
  Ro = "RO",
  /** Serbia */
  Rs = "RS",
  /** Russia */
  Ru = "RU",
  /** Rwanda */
  Rw = "RW",
  /** Saudi Arabia */
  Sa = "SA",
  /** Solomon Islands */
  Sb = "SB",
  /** Seychelles */
  Sc = "SC",
  /** Sudan */
  Sd = "SD",
  /** Sweden */
  Se = "SE",
  /** Singapore */
  Sg = "SG",
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = "SH",
  /** Slovenia */
  Si = "SI",
  /** Svalbard and Jan Mayen */
  Sj = "SJ",
  /** Slovakia */
  Sk = "SK",
  /** Sierra Leone */
  Sl = "SL",
  /** San Marino */
  Sm = "SM",
  /** Senegal */
  Sn = "SN",
  /** Somalia */
  So = "SO",
  /** Suriname */
  Sr = "SR",
  /** South Sudan */
  Ss = "SS",
  /** Sao Tome and Principe */
  St = "ST",
  /** El Salvador */
  Sv = "SV",
  /** Sint Maarten (Dutch part) */
  Sx = "SX",
  /** Syria */
  Sy = "SY",
  /** Eswatini */
  Sz = "SZ",
  /** Turks and Caicos Islands */
  Tc = "TC",
  /** Chad */
  Td = "TD",
  /** French Southern Territories */
  Tf = "TF",
  /** Togo */
  Tg = "TG",
  /** Thailand */
  Th = "TH",
  /** Tajikistan */
  Tj = "TJ",
  /** Tokelau */
  Tk = "TK",
  /** Timor-Leste */
  Tl = "TL",
  /** Turkmenistan */
  Tm = "TM",
  /** Tunisia */
  Tn = "TN",
  /** Tonga */
  To = "TO",
  /** Turkey */
  Tr = "TR",
  /** Trinidad and Tobago */
  Tt = "TT",
  /** Tuvalu */
  Tv = "TV",
  /** Taiwan */
  Tw = "TW",
  /** Tanzania */
  Tz = "TZ",
  /** Ukraine */
  Ua = "UA",
  /** Uganda */
  Ug = "UG",
  /** United States Minor Outlying Islands */
  Um = "UM",
  /** United States of America */
  Us = "US",
  /** Uruguay */
  Uy = "UY",
  /** Uzbekistan */
  Uz = "UZ",
  /** Holy See */
  Va = "VA",
  /** Saint Vincent and the Grenadines */
  Vc = "VC",
  /** Venezuela */
  Ve = "VE",
  /** Virgin Islands (British) */
  Vg = "VG",
  /** Virgin Islands (U.S.) */
  Vi = "VI",
  /** Vietnam */
  Vn = "VN",
  /** Vanuatu */
  Vu = "VU",
  /** Wallis and Futuna */
  Wf = "WF",
  /** Samoa */
  Ws = "WS",
  /** Yemen */
  Ye = "YE",
  /** Mayotte */
  Yt = "YT",
  /** South Africa */
  Za = "ZA",
  /** Zambia */
  Zm = "ZM",
  /** Zimbabwe */
  Zw = "ZW",
}

/** An enumeration. */
export enum MarketingLeadStageChoices {
  /** Oppurtunity */
  Oppurtunity = "OPPURTUNITY",
  /** QML */
  Qml = "QML",
  /** QSL */
  Qsl = "QSL",
  /** Sale */
  Sale = "SALE",
}

/** An enumeration. */
export enum MarketingLeadStatusChoices {
  /** Action Required */
  ActionRequired = "ACTION_REQUIRED",
  /** Deleted */
  Deleted = "DELETED",
  /** Dropped */
  Dropped = "DROPPED",
  /** Waiting For Response */
  WaitingForResponse = "WAITING_FOR_RESPONSE",
}

/** An enumeration. */
export enum MarketplaceProductCurrencyChoices {
  /** AED */
  Aed = "AED",
  /** AUD */
  Aud = "AUD",
  /** BHD */
  Bhd = "BHD",
  /** CAD */
  Cad = "CAD",
  /** CNY */
  Cny = "CNY",
  /** DZD */
  Dzd = "DZD",
  /** EGP */
  Egp = "EGP",
  /** EUR */
  Eur = "EUR",
  /** GBP */
  Gbp = "GBP",
  /** INR */
  Inr = "INR",
  /** IQD */
  Iqd = "IQD",
  /** IRR */
  Irr = "IRR",
  /** JOD */
  Jod = "JOD",
  /** JPY */
  Jpy = "JPY",
  /** KWD */
  Kwd = "KWD",
  /** LBP */
  Lbp = "LBP",
  /** LYD */
  Lyd = "LYD",
  /** MAD */
  Mad = "MAD",
  /** OMR */
  Omr = "OMR",
  /** QAR */
  Qar = "QAR",
  /** SAR */
  Sar = "SAR",
  /** SYP */
  Syp = "SYP",
  /** TND */
  Tnd = "TND",
  /** TRY */
  Try = "TRY",
  /** USD */
  Usd = "USD",
  /** YER */
  Yer = "YER",
}

/** An enumeration. */
export enum MarketplaceProductLanguageChoices {
  /** Arabic */
  Ar = "AR",
  /** English */
  En = "EN",
  /** French */
  Fr = "FR",
}

/** An enumeration. */
export enum MarketplaceProductLevelChoices {
  /** advanced */
  Advanced = "ADVANCED",
  /** beginner */
  Beginner = "BEGINNER",
  /** intermediate */
  Intermediate = "INTERMEDIATE",
}

/** An enumeration. */
export enum MarketplaceProductPriceTypeChoices {
  /** per_learner */
  PerLearner = "PER_LEARNER",
  /** total */
  Total = "TOTAL",
}

/** An enumeration. */
export enum MarketplaceProductReviewStatusChoices {
  /** Approved */
  Approved = "APPROVED",
  /** In Review */
  InReview = "IN_REVIEW",
  /** Rejected */
  Rejected = "REJECTED",
}

/** Representation of the resource block`MultipleChoiceQuestionBlock` in the graph */
export type MultipleChoiceQuestionBlockNode = Node & {
  __typename?: "MultipleChoiceQuestionBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<MultipleChoiceQuestionResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type MultipleChoiceQuestionResourceNode = Node & {
  __typename?: "MultipleChoiceQuestionResourceNode";
  activity?: Maybe<ActivityNode>;
  aisuggestedmultiplechoicequestionSet: AiSuggestedMultipleChoiceQuestionNodeConnection;
  answers?: Maybe<Array<Maybe<ChoiceAnswerResourceNode>>>;
  author?: Maybe<ContentAuthorNode>;
  bundledResource?: Maybe<ResourceObjectNode>;
  choiceanswerSet: ChoiceAnswerResourceNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  difficulty: Scalars["Int"]["output"];
  examsuggestedexamproblemSet: ExamSuggestedExamProblemNodeConnection;
  explanation?: Maybe<ExplanationResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  multiplechoicequestion?: Maybe<MultipleChoiceQuestionResourceNode>;
  multiplechoiceselectionquestion?: Maybe<MultipleChoiceSelectionQuestionResourceNode>;
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
};

export type MultipleChoiceQuestionResourceNodeAisuggestedmultiplechoicequestionSetArgs =
  {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    id?: InputMaybe<Scalars["ID"]["input"]>;
    isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
    isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
  };

export type MultipleChoiceQuestionResourceNodeChoiceanswerSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  isCorrect?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  questionId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MultipleChoiceQuestionResourceNodeExamsuggestedexamproblemSetArgs =
  {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    examId?: InputMaybe<Scalars["ID"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    id?: InputMaybe<Scalars["ID"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
  };

export type MultipleChoiceQuestionResourceNodeConnection = {
  __typename?: "MultipleChoiceQuestionResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MultipleChoiceQuestionResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `MultipleChoiceQuestionResourceNode` and its cursor. */
export type MultipleChoiceQuestionResourceNodeEdge = {
  __typename?: "MultipleChoiceQuestionResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<MultipleChoiceQuestionResourceNode>;
};

export type MultipleChoiceSelectionQuestionResourceNode = Node & {
  __typename?: "MultipleChoiceSelectionQuestionResourceNode";
  activity?: Maybe<ActivityNode>;
  answers?: Maybe<Array<Maybe<ChoiceAnswerResourceNode>>>;
  author?: Maybe<ContentAuthorNode>;
  bundledResource?: Maybe<ResourceObjectNode>;
  choiceanswerSet: ChoiceAnswerResourceNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  difficulty: Scalars["Int"]["output"];
  explanation?: Maybe<ExplanationResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  multiplechoicequestion?: Maybe<MultipleChoiceQuestionResourceNode>;
  multiplechoiceselectionquestion?: Maybe<MultipleChoiceSelectionQuestionResourceNode>;
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
};

export type MultipleChoiceSelectionQuestionResourceNodeChoiceanswerSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  isCorrect?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  questionId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  CanStartActivity?: Maybe<CanStartActivity>;
  acceptAllExamCompetitionProblemSuggestions?: Maybe<AcceptAllExamCompetitionProblemSuggestions>;
  acceptExamCompetitionSuggestion?: Maybe<AcceptExamCompetitionProblemSuggestion>;
  acceptExamSuggestions?: Maybe<AcceptExamProblemSuggestions>;
  acceptSuggestedDefinitionForUnit?: Maybe<AcceptSuggestedDefinitionForUnit>;
  acceptSuggestedLosForUnit?: Maybe<AcceptSuggestedLosForUnit>;
  acceptSuggestedMultipleChoiceQuestionsForUnit?: Maybe<AcceptSuggestedMultipleChoiceQuestionsForUnit>;
  acceptSuggestedTextForUnit?: Maybe<AcceptSuggestedTextForUnit>;
  /** Mutation to create statement when the user accept any terms */
  acceptTerms?: Maybe<AcceptTerms>;
  activateCourse?: Maybe<ActivateCourse>;
  addApproverToStep?: Maybe<AddApproverToStep>;
  addApproverToStepTemplate?: Maybe<AddApproverToStepTemplate>;
  addComment?: Maybe<AddComment>;
  addCompetencyToEnterpriseCustomer?: Maybe<AddCompetencyToEnterpriseCustomer>;
  addCompetencyToJobRole?: Maybe<AddCompetencyToJobRole>;
  addCompetencyToUser?: Maybe<AddCompetencyToUser>;
  addCourse?: Maybe<AddCourse>;
  addCourseTeamMember?: Maybe<AddCourseTeamMember>;
  addCourseToSkill?: Maybe<AddCourseToCompetencySkill>;
  addCuePointToVideoBlock?: Maybe<AddCuePointToVideoBlock>;
  addCuePointToVideoResource?: Maybe<AddCuePointToVideoResource>;
  addDefinitionBlockToUnit?: Maybe<AddDefinitionBlockToUnit>;
  addEmployeesToEnterpriseCustomer?: Maybe<AddEmployeesToEnterpriseCustomer>;
  addExamToClient?: Maybe<AddExamToClient>;
  addExternalActivity?: Maybe<AddExternalActivity>;
  addFile?: Maybe<AddFile>;
  addHtmlBlockToUnit?: Maybe<AddHtmlBlockToUnit>;
  addItemsToUndefinedActivityCompletionChecklist?: Maybe<AddItemsToUndefinedActivityCompletionChecklist>;
  addLevelToCompetency?: Maybe<AddLevelToCompetency>;
  addLinkBlockToUnit?: Maybe<AddLinkBlockToUnit>;
  addLosBlockToUnit?: Maybe<AddLosBlockToUnit>;
  /** Mutation: Add a `Learning Objective` to an `Exam` if its type is *Personalized* */
  addLosToQuiz?: Maybe<AddLosToQuiz>;
  addMultipleChoiceQuestionBlockToUnit?: Maybe<AddMultipleChoiceQuestionBlockToUnit>;
  addNotificationToStep?: Maybe<AddNotificationToStep>;
  addNotificationToStepTemplate?: Maybe<AddNotificationToStepTemplate>;
  addPdfBlockToUnit?: Maybe<AddPdfBlockToUnit>;
  /** Mutation: Add `Problem` to an `Exam` if its type is *Static* */
  addProblemToQuiz?: Maybe<AddProblemToQuiz>;
  addProblemsToExam?: Maybe<AddProblemsToExam>;
  /** create a new product bookmark and add it to folder */
  addProductBookmark?: Maybe<AddProductBookmark>;
  addProductToClientCatalog?: Maybe<AddProductToClientCatalog>;
  /** Mutation: Add a `product` to a `learning plan section` */
  addProductToLearningPlanSection?: Maybe<AddProductToLearningPlanSection>;
  addProductToProductsPackage?: Maybe<AddProductToProductsPackage>;
  /** Mutation: Add a `Product` to a `Training Program Section` */
  addProductToTrainingProgramSection?: Maybe<AddProductToTrainingProgramSection>;
  addProductsToCompetencyProductsCollection?: Maybe<AddProductsToCompetencyProductsCollection>;
  addPromptMaterialToExam?: Maybe<AddPromptMaterialToExam>;
  addPromptMaterialToExamCompetition?: Maybe<AddPromptMaterialToExamCompetition>;
  addResourcesToConcept?: Maybe<AddResourcesToConcept>;
  addResourcesToLos?: Maybe<AddResourcesToLos>;
  addResponsibilityToStep?: Maybe<AddResponsibilityToStep>;
  addResponsibilityToStepTemplate?: Maybe<AddResponsibilityToStepTemplate>;
  addSkillToLevel?: Maybe<AddSkillToCompetencyLevel>;
  addStepTemplate?: Maybe<AddStepTemplate>;
  addSubtitleToClientVideoResource?: Maybe<AddSubtitleToClientVideoResource>;
  addSubtitleToVideo?: Maybe<AddSubtitleToVideo>;
  addSupervisorsToEmployeeGroup?: Maybe<AddSupervisorsToEmployeeGroup>;
  addTextBlockToUnit?: Maybe<AddTextBlockToUnit>;
  addUserToClient?: Maybe<AddUserToClient>;
  addUsersToCampaign?: Maybe<AddUsersToCampaign>;
  addUsersToCompetition?: Maybe<AddUsersToCompetition>;
  addUsersToEmployeeGroup?: Maybe<AddUsersToEmployeeGroup>;
  addUsersToSurvey?: Maybe<AddUsersToSurvey>;
  addVideoBlockToUnit?: Maybe<AddVideoBlockToUnit>;
  /** get last generated problem and answer it */
  answerCurrentProblem?: Maybe<AnswerCurrentProblem>;
  answerCurrentProblemWithoutTimeValidation?: Maybe<AnswerCurrentProblemWithoutTimeValidation>;
  answerVideoBlockCuePointProblem?: Maybe<AnswerVideoBlockCuePointProblem>;
  askBotAboutKnowledgeBase?: Maybe<AskBotAboutKnowledgeBase>;
  /** Mutation: Assign an `course` to `User` */
  assignCourse?: Maybe<AssignCourse>;
  /** Mutation: Assign an `Exam` to `User` */
  assignExam?: Maybe<AssignExam>;
  /** Mutation: Assign an `External Activity` to `Employee`.can be a *Workshop* *Webinar* or an *Online Course* */
  assignExternalActivity?: Maybe<AssignExternalActivity>;
  /** Mutation: Assign an `Exam` to `User` */
  assignLearnerToAQuiz?: Maybe<AssignLearner>;
  assignPublicAssessment?: Maybe<AssignPublicAssessment>;
  assignQuizUnitGradeSetting?: Maybe<AssignQuizUnitGradeSetting>;
  /** Launch assignments of Training Program Campaign */
  assignTrainingProgramCampaign?: Maybe<AssignTrainingProgramCampaign>;
  /** Mutation: Assign an `Undefined Activity` to `Employee`. */
  assignUndefinedActivity?: Maybe<AssignUndefinedActivity>;
  /** Mutation: Assign `user` to `learning plan` (create `user learning plan` */
  assignUsersToLearningPlan?: Maybe<AssignUsersToALearningPlan>;
  /** Mutation: Assign a `User` to a `Training Program` */
  assignUsersToTrainingProgram?: Maybe<AssignUserToTrainingProgram>;
  /** Mutation to create a record for a newly captured lead */
  captureLead?: Maybe<CaptureLead>;
  changeAnswer?: Maybe<ChangeAnswer>;
  changeLearningObjectiveOrder?: Maybe<ChangeLearningObjectiveOrder>;
  /** Change read status for a given notification */
  changeNotificationReadStatus?: Maybe<ChangeNotificationReadStatus>;
  changeResourceOrder?: Maybe<ChangeResourceOrder>;
  /** Mutation: change Training Program Base Object order(left: move it to the left of product, right: move it to the left of product, parent: move to first child to parent */
  changeTrainingProgramBaseObjectOrder?: Maybe<ChangeTrainingProgramBaseObjectOrder>;
  changeWorkshopSchedule?: Maybe<ChangeWorkshopSchedule>;
  /** Mutation Not complete yet, it's a mock and dummy for caliming */
  claimPoints?: Maybe<ClaimPoints>;
  cloneCourse?: Maybe<CloneCourse>;
  cloneLearningActivity?: Maybe<CloneLearningActivity>;
  /** Create an identical clone from an existing training_program */
  cloneTrainingProgram?: Maybe<CloneTrainingProgram>;
  /** Clone TrainingProgramSections from one training_program to another */
  cloneTrainingProgramSections?: Maybe<CloneTrainingProgramSections>;
  /** Complete undefined activity assignments that do not have completion requests */
  completeUndefinedActivityAssignmentsWithNoCompletionRequests?: Maybe<CompleteUndefinedActivityAssignmentsWithNoCompletionRequests>;
  copyExamCompetition?: Maybe<CopyExamCompetition>;
  courseBlockMoveTo?: Maybe<CourseBlockMoveTo>;
  /** Mutation: Create a **NEW** `Campaign` and assignthe `Activity` to all selected `Employees`. */
  createCampaign?: Maybe<CreateCampaign>;
  createCategory?: Maybe<CreateCategory>;
  createChapter?: Maybe<CreateChapter>;
  createClient?: Maybe<CreateClient>;
  /** Create a default certificate preset for a client. */
  createClientCertificatePreset?: Maybe<CreateCertificatePreset>;
  createClientDefinitionResource?: Maybe<CreateClientDefinitionResource>;
  createClientLinkResource?: Maybe<CreateClientLinkResource>;
  /** Create LOSResource object and link it with ClientResource object. */
  createClientLosResource?: Maybe<CreateClientLosResource>;
  /** Create MultipleChoiceQuestion object and link it withClientResource object. */
  createClientMcQuestionResource?: Maybe<CreateMcQuestionResource>;
  /** Create Multiple Choice Selection resource */
  createClientMcsQuestionResource?: Maybe<CreateClientMcsQuestionResource>;
  createClientPdfResource?: Maybe<CreateClientPdfResource>;
  createClientTextResource?: Maybe<CreateClientTextResource>;
  createClientTrainer?: Maybe<CreateClientTrainer>;
  createClientVendor?: Maybe<CreateClientVendor>;
  createClientVideoResource?: Maybe<CreateClientVideoResource>;
  createCompetency?: Maybe<CreateCompetency>;
  createCompetencyCategory?: Maybe<CreateCompetencyCategory>;
  createCompetencyLevel?: Maybe<CreateCompetencyLevel>;
  createCompetencyProductsCollection?: Maybe<CreateCompetencyProductsCollection>;
  createCompetencySkill?: Maybe<CreateCompetencySkill>;
  createConcept?: Maybe<CreateConceptResource>;
  createCourse?: Maybe<CreateCourse>;
  createCourseAssignmentStatement?: Maybe<CreateCourseAssignmentStatement>;
  createCourseCatalog?: Maybe<CreateCourseCatalog>;
  createCourseGradingSettings?: Maybe<CreateCourseGradeSetting>;
  createCourseUsingInstructorGpt?: Maybe<CreateCourseUsingInstructorGpt>;
  createDefinition?: Maybe<CreateDefinition>;
  createDefinitionResource?: Maybe<CreateDefinitionResource>;
  /** Mutation: Create a **NEW** employee and add him/her to `client` employees */
  createEmployee?: Maybe<CreateEmployee>;
  createEmployeeGroup?: Maybe<CreateEmployeeGroup>;
  /** Mutation: Create a **NEW** `EmployeeGroupCampaign` and add the `Activity` to all eligible employee group users. */
  createEmployeeGroupCampaign?: Maybe<CreateEmployeeGroupCampaign>;
  createEnterpriseCustomer?: Maybe<CreateEnterpriseCustomer>;
  createEnterpriseCustomerSubscription?: Maybe<CreateEnterpriseCustomerSubscription>;
  createEnterpriseHierarchy?: Maybe<CreateEnterpriseHierarchy>;
  createEnterpriseHierarchyLevel?: Maybe<CreateEnterpriseHierarchyLevel>;
  createEnterpriseOnboardingSurvey?: Maybe<CreateEnterpriseOnboardingSurvey>;
  createEtihadCompetencyFrameworkResult?: Maybe<CreateEtihadCompetencyFrameworkResultMutation>;
  createEvidence?: Maybe<CreateEvidence>;
  createExamBasedOfCourse?: Maybe<CreateExamBasedOfCourse>;
  createExamCompetition?: Maybe<CreateExamCompetition>;
  createExamUnit?: Maybe<CreateExamUnit>;
  createExamWithProduct?: Maybe<CreateCourseExamWithProduct>;
  /** Creates an LRS xAPI statement for the flashcard */
  createFlashcardStatement?: Maybe<CreateFlashCardStatement>;
  /** Creates Flashcards for a given course */
  createFlashcards?: Maybe<CreateFlashCardsMutation>;
  createImage?: Maybe<CreateImage>;
  createJobRole?: Maybe<CreateJobRole>;
  createJobRoleFamily?: Maybe<CreateJobRoleFamily>;
  createKnowledgebaseConversation?: Maybe<CreateKnowledgeBaseConversation>;
  createLearner?: Maybe<CreateLearner>;
  /** Create subscriber settings for a learning activity(Course, Exam, ExternalActivity) */
  createLearningActivitySubscriberSettings?: Maybe<CreateLearningActivitySubscriberSettings>;
  /** Mutation: Create a **NEW** `learning plan` */
  createLearningPlan?: Maybe<CreateLearningPlan>;
  /** Mutation: Create a **NEW** `learning plan section` and add it to a learning plan */
  createLearningPlanSection?: Maybe<CreateLearningPlanSection>;
  createLink?: Maybe<CreateLink>;
  createLinkResource?: Maybe<CreateLinkResource>;
  createLos?: Maybe<CreateLos>;
  createLosResource?: Maybe<CreateLosResource>;
  createMagicLink?: Maybe<CreateMagicLink>;
  createMcqResource?: Maybe<CreateMcqResource>;
  createMultipleChoiceQuestion?: Maybe<CreateMultipleChoiceSelectionQuestion>;
  createNewExamMcProblem?: Maybe<CreateNewExamMcProblem>;
  /** Mutation: Create a **NEW** `Online Course` */
  createOnlineCourse?: Maybe<CreateOnlineCourse>;
  createPdf?: Maybe<CreatePdf>;
  createPdfResource?: Maybe<CreatePdfResource>;
  createProduct?: Maybe<CreateProduct>;
  /** create a new product bookmark folder */
  createProductBookmarkFolder?: Maybe<CreateProductBookmarkFolder>;
  createProductCategory?: Maybe<CreateProductCategory>;
  createProductTag?: Maybe<CreateProductTag>;
  createProductsPackage?: Maybe<CreateProductsPackage>;
  createPublicCompetencyProductsCollection?: Maybe<CreatePublicCompetencyProductsCollection>;
  /** Mutation: Create a **NEW** `Exam` */
  createQuiz?: Maybe<CreateQuiz>;
  createQuizUnit?: Maybe<CreateQuizUnit>;
  createQuizUnitGradeSetting?: Maybe<CreateQuizUnitGradeSetting>;
  createRoot?: Maybe<CreateRoot>;
  createSection?: Maybe<CreateSection>;
  createSubjectArea?: Maybe<CreateSubjectArea>;
  createSubjectSubArea?: Maybe<CreateSubjectSubArea>;
  /** Create a new learning activity subscriber */
  createSubscriber?: Maybe<CreateLearningActivitySubscriber>;
  createSurvey?: Maybe<CreateSurvey>;
  createTag?: Maybe<CreateTag>;
  createTags?: Maybe<CreateTags>;
  createText?: Maybe<CreateText>;
  createTextResource?: Maybe<CreateTextResource>;
  /** Mutation: Create a **NEW** `Training Program` */
  createTrainingProgram?: Maybe<CreateTrainingProgram>;
  /** Creates a campaign that contains the activities of the training program items */
  createTrainingProgramCampaign?: Maybe<CreateTrainingProgramCampaign>;
  /** Mutation: Create a **NEW** `Training Program Section` and add it to a Training Program */
  createTrainingProgramSection?: Maybe<CreateTrainingProgramSection>;
  /** Create subscriber settings for a training program */
  createTrainingProgramSubscriberSettings?: Maybe<CreateTrainingProgramSubscriberSettings>;
  createTree?: Maybe<CreateTree>;
  /** Mutation: Create a **NEW** `Undefined Activity` */
  createUndefinedActivity?: Maybe<CreateUndefinedActivity>;
  createUndefinedActivityCompletionChecklist?: Maybe<CreateUndefinedActivityCompletionChecklist>;
  createUnit?: Maybe<CreateUnit>;
  createUser?: Maybe<CreateUser>;
  createVideo?: Maybe<CreateVideo>;
  createVideoResource?: Maybe<CreateVideoResource>;
  /** Mutation: Create a **NEW** `Webinar` */
  createWebinar?: Maybe<CreateWebinar>;
  createWorkflow?: Maybe<CreateWorkFlow>;
  createWorkflowTemplate?: Maybe<CreateTemplate>;
  /** Mutation: Create a **NEW** `Workshop` */
  createWorkshop?: Maybe<CreateWorkshop>;
  deactivateCourse?: Maybe<DeactivateCourse>;
  /**
   * Deletes an AI Suggested course.
   *
   * Args:
   *     suggested_course_id (graphene.ID): The ID of the suggested course to delete.
   *
   * Returns:
   *     DeleteAISuggestedCourse: The mutation result indicating the success of the deletion.
   */
  deleteAiSuggestedCourse?: Maybe<DeleteAiSuggestedCourse>;
  /** Mutation: Delete an **existing** `Campaign` and only remove`Assignment` with not started status, keep the rest as individual `Assignments`. */
  deleteCampaign?: Maybe<DeleteCampaign>;
  deleteChapter?: Maybe<DeleteChapter>;
  deleteClientLearningActivity?: Maybe<DeleteClientLearningActivity>;
  deleteClientResource?: Maybe<DeleteClientResource>;
  deleteCompetency?: Maybe<DeleteCompetency>;
  deleteCompetencyCategory?: Maybe<DeleteCompetencyCategory>;
  deleteCompetencyProductsCollection?: Maybe<DeleteCompetencyProductsCollection>;
  deleteEmployeeGroup?: Maybe<DeleteEmployeeGroup>;
  deleteEnterpriseHierarchyLevel?: Maybe<DeleteEnterpriseHierarchyLevel>;
  deleteEvidence?: Maybe<DeleteEvidence>;
  deleteExamCompetition?: Maybe<DeleteExamCompetition>;
  deleteExamUnit?: Maybe<DeleteExamUnit>;
  /**
   * To be refactored, mutation should be renamed to "RemoveJobRoleFromEnterpriseCustomer", changes should be reflected
   * on frontend too.
   */
  deleteJobRole?: Maybe<DeleteJobRole>;
  deleteJobRoleFamily?: Maybe<DeleteJobRoleFamily>;
  deleteKnowledgebaseConversation?: Maybe<DeleteKnowledgeBaseConversation>;
  deleteLearningActivitySubscriber?: Maybe<DeleteLearningActivitySubscriber>;
  /** Mutation: Delete a `learning plan` (if the learning plan already assign to a `user` it will not be deleted */
  deleteLearningPlan?: Maybe<DeleteLearningPlan>;
  deleteLevel?: Maybe<DeleteCompetencyLevel>;
  /** Delete product bookmark folder and all bookmarks in it */
  deleteProductBookmarkFolder?: Maybe<DeleteProductBookmarkFolder>;
  deleteQuiz?: Maybe<DeleteQuiz>;
  deleteQuizUnit?: Maybe<DeleteQuizUnit>;
  deleteResource?: Maybe<DeleteResource>;
  deleteSection?: Maybe<DeleteSection>;
  deleteSkill?: Maybe<DeleteCompetencySkill>;
  deleteSubjectArea?: Maybe<DeleteSubjectArea>;
  deleteSubjectSubArea?: Maybe<DeleteSubjectSubArea>;
  deleteSubmittedCertificate?: Maybe<DeleteSubmittedCertificate>;
  /** Mutation: Delete a `Training Program` (if the Training Program already assign to a `user` it will not be deleted */
  deleteTrainingProgram?: Maybe<DeleteTrainingProgram>;
  /** Mutation: Delete a `Training Program Section` (if the Training Program that this section is from already assign to a `user` it will not be deleted */
  deleteTrainingProgramSection?: Maybe<DeleteTrainingProgramSection>;
  deleteTree?: Maybe<DeleteTree>;
  deleteUnit?: Maybe<DeleteUnit>;
  editCampaign?: Maybe<EditCampaign>;
  /** Campaign Version 2, edit `valid_until` date and `allowed_attempts` for campaign's activities. */
  editCampaignActivities?: Maybe<EditCampaignActivities>;
  editChapter?: Maybe<EditChapter>;
  editClientDefinitionResource?: Maybe<EditClientDefinitionResource>;
  editClientLinkResource?: Maybe<EditClientLinkResource>;
  /** Edit LOSResource if it corresponds to the client provided in the request */
  editClientLosResource?: Maybe<EditClientLosResource>;
  /** Edit MultipleChoiceQuestion if it corresponds to the client provided in the request */
  editClientMcQuestionResource?: Maybe<EditClientMcQuestionResource>;
  editClientMcsQuestionResource?: Maybe<EditClientMcsQuestionResource>;
  editClientPdfResource?: Maybe<EditClientPdfResource>;
  /** edit client product request setting */
  editClientProductRequestSetting?: Maybe<EditClientProductRequestSetting>;
  editClientSubtitleResource?: Maybe<EditClientSubtitleResource>;
  editClientTextResource?: Maybe<EditClientTextResource>;
  editClientTrainer?: Maybe<EditClientTrainer>;
  editClientVendor?: Maybe<EditClientVendor>;
  editClientVideoResource?: Maybe<EditClientVideoResource>;
  editCompetency?: Maybe<EditCompetency>;
  editCompetencyCategory?: Maybe<EditCompetencyCategory>;
  editConcept?: Maybe<EditConceptResource>;
  editCourse?: Maybe<EditCourse>;
  editCourseCatalog?: Maybe<EditCourseCatalog>;
  editCourseGradingSettings?: Maybe<EditCourseGradeSetting>;
  editDefinition?: Maybe<EditDefinition>;
  editDefinitionBlock?: Maybe<EditDefinitionBlock>;
  editDefinitionResource?: Maybe<EditDefinitionResource>;
  editEnterpriseCustomerSubscription?: Maybe<EditEnterpriseCustomerSubscription>;
  editEvidence?: Maybe<EditEvidence>;
  editExamCompetition?: Maybe<EditExamCompetition>;
  editExamUnit?: Maybe<EditExamUnit>;
  editHtmlBlock?: Maybe<EditHtmlBlock>;
  editJobRole?: Maybe<EditJobRole>;
  editJobRoleFamily?: Maybe<EditJobRoleFamily>;
  editLearningActivitySubscriber?: Maybe<EditLearningActivitySubscriber>;
  /** Edit subscriber settings for a learning activity(Course, Exam, ExternalActivity) */
  editLearningActivitySubscriberSettings?: Maybe<EditLearningActivitySubscriberSettings>;
  /** Mutation: Edit `learning plan product` (starting_date and  valid_until) */
  editLearningPlanProduct?: Maybe<EditLearningPlanProduct>;
  editLevel?: Maybe<EditCompetencyLevel>;
  editLink?: Maybe<EditLink>;
  editLinkBlock?: Maybe<EditLinkBlock>;
  editLinkResource?: Maybe<EditLinkResource>;
  editLos?: Maybe<EditLos>;
  editLosBlock?: Maybe<EditLosBlock>;
  editLosResource?: Maybe<EditLosResource>;
  editMcqResource?: Maybe<EditMcqResource>;
  editMultipleChoiceQuestion?: Maybe<EditMultipleChoiceSelectionQuestion>;
  editMultipleChoiceQuestionBlock?: Maybe<EditMultipleChoiceQuestionBlock>;
  editMultipleChoiceQuestionBlocksCorrectResponsesPattern?: Maybe<EditMultipleChoiceQuestionBlocksCorrectResponsesPattern>;
  editOnlineCourse?: Maybe<EditOnlineCourse>;
  editPdf?: Maybe<EditPdf>;
  editPdfBlock?: Maybe<EditPdfBlock>;
  editPdfResource?: Maybe<EditPdfResource>;
  editProduct?: Maybe<EditProduct>;
  editProductCategory?: Maybe<EditProductCategory>;
  editProductTag?: Maybe<EditProductTag>;
  /** Mutation to edit the settings of a Package: Name, Subscription, and users count */
  editProductsPackage?: Maybe<EditProductsPackage>;
  editQuiz?: Maybe<EditQuiz>;
  editQuizLos?: Maybe<EditQuizLos>;
  editQuizProblem?: Maybe<EditQProblem>;
  editQuizUnitGradeSetting?: Maybe<EditQuizUnitGradeSetting>;
  editQuizUnitInfo?: Maybe<EditQuizUnitInfo>;
  editQuizUnitSettings?: Maybe<EditQuizUnitSettings>;
  editSection?: Maybe<EditSection>;
  editSkill?: Maybe<EditCompetencySkill>;
  editSubmittedCertificate?: Maybe<EditSubmittedCertificate>;
  editSurvey?: Maybe<EditSurvey>;
  editTag?: Maybe<EditTag>;
  editText?: Maybe<EditText>;
  editTextBlock?: Maybe<EditTextBlock>;
  editTextResource?: Maybe<EditTextResource>;
  /** Mutation: Edit `Training Program` attribute (Title, Content, Outcomes and Thumbnail */
  editTrainingProgram?: Maybe<EditTrainingProgram>;
  /** Edit subscriber settings for a training program item */
  editTrainingProgramItemSubscriberSettings?: Maybe<EditTrainingProgramSubscriberSettings>;
  /** Mutation: Edit `Training Program Section` attribute (Title and Content) */
  editTrainingProgramSection?: Maybe<EditTrainingProgramSection>;
  editTree?: Maybe<EditTree>;
  editUndefinedActivity?: Maybe<EditUndefinedActivity>;
  editUndefinedActivityCompletionChecklistItems?: Maybe<EditUndefinedActivityCompletionChecklistItems>;
  editUnit?: Maybe<EditUnit>;
  editVideo?: Maybe<EditVideo>;
  editVideoBlock?: Maybe<EditVideoBlock>;
  editVideoBlockCuePoint?: Maybe<EditVideoBlockCuePoint>;
  editVideoResource?: Maybe<EditVideoResource>;
  editVideoSubtitle?: Maybe<EditVideoSubtitle>;
  editWebinar?: Maybe<EditWebinar>;
  editWorkshop?: Maybe<EditWorkshop>;
  enterpriseCustomerDataExport?: Maybe<EnterpriseCustomerDataExport>;
  /** Change training admin assignment completion request status, either to accepted or rejected */
  exportAssignmentCompletionRequests?: Maybe<ExportAssignmentCompletionRequests>;
  /** Change training admin assignment extension request status, either to accepted or rejected */
  exportAssignmentExtensionRequests?: Maybe<ExportAssignmentExtensionRequests>;
  exportClientInvoices?: Maybe<ExportClientInvoices>;
  exportClientRecentSubscriptionDetailedXlsxReport?: Maybe<ExportClientRecentSubscriptionDetailedXlsxReport>;
  exportClientUsersXlsxReport?: Maybe<ExportClientUsersXlsxReport>;
  /** Change training admin product request status, either to accepted or rejected */
  exportProductRequests?: Maybe<ExportProductRequests>;
  exportProductReviewsXlsxReport?: Maybe<ExportProductReviewsXlsxReport>;
  /** Export reporting data based on fields sent, and send excel sheet to requester email */
  exportReportData?: Maybe<ExportReportData>;
  /** Export reporting users data based on fields sent, and send excel sheet to requester email */
  exportUsersData?: Maybe<ExportUsersData>;
  extendCampaignAssignments?: Maybe<ExtendCampaignAssignments>;
  /** Extend `TrainingProgram` allowed attempts and valid until date. For individually assigned user */
  extendTrainingProgramAssignment?: Maybe<ExtendTrainingProgramAssignment>;
  extractQuestionFromMaterial?: Maybe<ExtractQuestionFromMaterial>;
  getSuggestedCourseOutline?: Maybe<GetSuggestedCourseOutline>;
  googleAuth?: Maybe<GoogleAuth>;
  /** Check if an enterprise customer has enough assignments credit to assign activity: Course, exam, external activity, training program, campaign */
  haveEnoughAssignmentsCreditToAssignActivity?: Maybe<HaveEnoughAssignmentsCreditToAssignActivity>;
  initiateAnAiSuggestedCourse?: Maybe<InitiateAnAiSuggestedCourse>;
  initiateSubscriptionPayment?: Maybe<InitiateSubscriptionPayment>;
  launchCampaign?: Maybe<LaunchCampaign>;
  linkClientResourceToLosPool?: Maybe<LinkClientResourceToLosPool>;
  linkLosToLeafNode?: Maybe<LinkLosToLeafNode>;
  linkProblemToQuiz?: Maybe<LinkProblemToQuiz>;
  linkResourceToLosPool?: Maybe<LinkResourceToLosPool>;
  logout?: Maybe<Logout>;
  magicLinkAuth?: Maybe<MagicLinkAuth>;
  /** Change read status for a all notifications for a given user */
  markAllNotificationsAsReadOrUnread?: Maybe<MarkAllNotificationsAsReadOrUnread>;
  markAssignmentAsCompleted?: Maybe<MarkAssignmentAsCompleted>;
  /** Mutation to verify an OTP and authenticate the user. */
  phoneOtpAuth?: Maybe<PhoneOtpAuth>;
  populateCourse?: Maybe<PopulateCourse>;
  proofread?: Maybe<Proofread>;
  qaCourseMaterial?: Maybe<QaCourseMaterial>;
  referResource?: Maybe<ReferResource>;
  refreshToken?: Maybe<Refresh>;
  regenerateCertificate?: Maybe<RegenerateCertificate>;
  registerDevice?: Maybe<RegisterDevice>;
  rejectAllExamCompetitionProblemSuggestions?: Maybe<RejectAllExamCompetitionProblemSuggestions>;
  rejectExamCompetitionSuggestion?: Maybe<RejectExamCompetitionProblemSuggestion>;
  rejectExamSuggestions?: Maybe<RejectExamCProblemSuggestions>;
  removeClientLosFromResource?: Maybe<RemoveClientResourceFromLos>;
  removeCompetencyFromEnterpriseCustomer?: Maybe<RemoveCompetencyFromEnterpriseCustomer>;
  removeCompetencyFromJobRole?: Maybe<RemoveCompetencyFromJobRole>;
  removeCompetencyFromUser?: Maybe<RemoveCompetencyFromUser>;
  removeCourse?: Maybe<RemoveCourse>;
  removeCourseFromSkill?: Maybe<RemoveCourseFromCompetencySkill>;
  removeCourseTeamMember?: Maybe<RemoveCourseTeamMember>;
  removeCuePointFromVideoBlock?: Maybe<RemoveCuePointFromVideoBlock>;
  removeDefinitionBlockFromUnit?: Maybe<RemoveDefinitionBlockFromUnit>;
  removeEnterpriseCustomerSubscription?: Maybe<RemoveEnterpriseCustomerSubscription>;
  removeExamFromClient?: Maybe<RemoveExamFromClient>;
  /** Mutate: Remove External Activity From a Client */
  removeExternalActivity?: Maybe<RemoveExternalActivity>;
  removeHtmlBlockFromUnit?: Maybe<RemoveHtmlBlockFromUnit>;
  removeItemsFromUndefinedActivityCompletionChecklist?: Maybe<RemoveItemsFromUndefinedActivityCompletionChecklist>;
  removeLevelFromCompetency?: Maybe<RemoveLevelFromCompetency>;
  removeLinkBlockFromUnit?: Maybe<RemoveLinkBlockFromUnit>;
  removeLosBlockFromUnit?: Maybe<RemoveLosBlockFromUnit>;
  removeLosFromQuiz?: Maybe<RemoveLosFromQuiz>;
  removeMultipleChoiceQuestionBlockFromUnit?: Maybe<RemoveMultipleChoiceQuestionBlockFromUnit>;
  removePdfBlockFromUnit?: Maybe<RemovePdfBlockFromUnit>;
  removeProblemFromQuiz?: Maybe<RemoveProblemFromQuiz>;
  /** remove product bookmark from folder and delete it */
  removeProductBookmark?: Maybe<RemoveProductBookmark>;
  removeProductFromClientCatalog?: Maybe<RemoveProductFromPClientCatalog>;
  /** Mutation: Remove `product` From `learning plan section` (delete learning plan product) */
  removeProductFromLearningPlanSection?: Maybe<RemoveProductFromLearningPlanSection>;
  removeProductFromProductsPackage?: Maybe<RemoveProductFromProductsPackage>;
  /** Mutation: Remove a `Activity` From a `Training Program Item` (delete Training Program Item) */
  removeProductFromTrainingProgramSection?: Maybe<RemoveProductFromTrainingProgramSection>;
  removeProductsFromCompetencyProductsCollection?: Maybe<RemoveProductsFromCompetencyProductsCollection>;
  removeResourceBlock?: Maybe<RemoveResourceBlock>;
  removeResourceFromConcept?: Maybe<RemoveResourceFromConcept>;
  removeResourceFromLos?: Maybe<RemoveResourceFromLos>;
  removeSkillFromLevel?: Maybe<RemoveSkillFromCompetencyLevel>;
  removeSocialAuth?: Maybe<RemoveSocialAuth>;
  removeSubtitleFromVideo?: Maybe<RemoveSubtitleFromVideo>;
  removeSupervisorsFromEmployeeGroup?: Maybe<RemoveSupervisorsFromEmployeeGroup>;
  removeTextBlockFromUnit?: Maybe<RemoveTextBlockFromUnit>;
  removeUserFromClient?: Maybe<RemoveUserFromClient>;
  removeUsersFromCampaign?: Maybe<RemoveUsersFromCampaign>;
  removeUsersFromCompetition?: Maybe<RemoveUsersFromCompetition>;
  removeUsersFromEmployeeGroup?: Maybe<RemoveUsersFromEmployeeGroup>;
  removeUsersFromSurvey?: Maybe<RemoveUsersFromSurvey>;
  removeVideoBlockFromUnit?: Maybe<RemoveVideoBlockFromUnit>;
  renewEnterpriseCustomerSubscription?: Maybe<RenewEnterpriseCustomerSubscription>;
  /** Make a new request to complete an an assignment, and have request status pending as default */
  requestAssignmentCompletion?: Maybe<RequestAssignmentCompletion>;
  /** Make a new request to extend an an assignment, and have request status pending as default */
  requestAssignmentExtension?: Maybe<RequestAssignmentExtension>;
  /** Mutation to request an OTP for authentication via WhatsApp. */
  requestPhoneOtp?: Maybe<RequestPhoneOtp>;
  /** Mutation to request a verification code for a phone number. */
  requestPhoneVerification?: Maybe<RequestPhoneVerification>;
  /** Make a new request to product, and have request status pending as default */
  requestProduct?: Maybe<RequestProduct>;
  resetCourseAssignment?: Maybe<ResetCourseAssignment>;
  resetEnterpriseCustomerSubscriptionRenewedStatus?: Maybe<ResetEnterpriseCustomerSubscriptionRenewedStatus>;
  resetPassword?: Maybe<ResetPassword>;
  resetPasswordRequestToken?: Maybe<ResetPasswordRequestToken>;
  resetPasswordValidateToken?: Maybe<ResetPasswordValidateToken>;
  retakeExamCompetition?: Maybe<RetakeExamCompetition>;
  /** add/edit review to a product, could include comment or not */
  reviewProduct?: Maybe<ReviewProduct>;
  /** Mutation: Self Assign a `course` to and integrated `User` */
  selfAssignCourse?: Maybe<SelfAssignCourse>;
  sendActivationEmail?: Maybe<SendActivationEmail>;
  sendActivationEmailToBulkUsers?: Maybe<SendBulkUserInfo>;
  sendAssignmentReminderNotification?: Maybe<SendReminder>;
  /** Mutation to send congratulations to a certain user */
  sendCongratulation?: Maybe<SendCongratulation>;
  sendCustomEmailNotificationToCampaignUsers?: Maybe<SendCustomEmailNotificationToCampaignUsers>;
  sendReminderToCampaignUsers?: Maybe<SendReminderToCampaignUsers>;
  /** Campaign Version 2, send reminder to campaign users */
  sendReminderToCampaignUsersVersionTwo?: Maybe<SendReminderToCampaignUsersVersion2>;
  setAiSuggestedCourseTitle?: Maybe<SetAiSuggestedCourseTitle>;
  setClientLosResource?: Maybe<SetClientLosResource>;
  setClientVideoResourceTranscript?: Maybe<SetClientVideoResourceTranscript>;
  setDefaultClientForUser?: Maybe<SetDefaultClientForUser>;
  setExamProblems?: Maybe<SetExamProblems>;
  /** Set starting_date, valid_until, and allowed attempts fields for campaign activities */
  setTrainingProgramCampaignActivitiesFields?: Maybe<SetTrainingProgramCampaignActivitiesFields>;
  /** Create/Update weekly goal for user */
  setWeeklyGoal?: Maybe<SetWeeklyGoal>;
  skipCurrentProblem?: Maybe<SkipCurrentProblem>;
  socialTokenAuth?: Maybe<ObtainJsonWebTokenThroughSocial>;
  startCompetition?: Maybe<StartCompetition>;
  startQuiz?: Maybe<StartQuiz>;
  submitAiSuggestedCourseOutline?: Maybe<SubmitAiSuggestedCourseOutline>;
  submitCertificate?: Maybe<SubmitCertificate>;
  submitQuiz?: Maybe<SubmitQuiz>;
  /**
   * Mutation to suggest AI course titles.
   *
   * Args:
   *     suggested_course_id (str): The ID of the suggested course.
   *
   * Returns:
   *     SuggestAICourseTitles: The mutation result containing the suggested course and titles.
   */
  suggestAiCourseTitles?: Maybe<SuggestAiCourseTitles>;
  suggestDefinitionForUnit?: Maybe<SuggestDefinitionForUnit>;
  suggestExamCompetitionProblem?: Maybe<SuggestExamCompetitionProblem>;
  suggestExamProblem?: Maybe<SuggestExamProblem>;
  suggestLosForUnit?: Maybe<SuggestLosForUnit>;
  suggestMultipleChoiceQuestionForUnit?: Maybe<SuggestMultipleChoiceQuestionForUnit>;
  suggestSingleExamProblem?: Maybe<SuggestSingleExamProblem>;
  suggestTextForUnit?: Maybe<SuggestTextForUnit>;
  syncUserSocialAuth?: Maybe<SyncUserSocialAuth>;
  tagCourse?: Maybe<TagCourse>;
  /** Toggle `is_dark_mode_enabled` for user */
  toggleDarkMode?: Maybe<ToggleUserDarkMode>;
  /** Toggle the notification setting for the user */
  toggleNotificationSetting?: Maybe<ToggleNotificationSetting>;
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** Training Admin request a product to be added to its client catalog */
  trainingAdminRequestProduct?: Maybe<TrainingAdminRequestProduct>;
  treeNodeMoveTo?: Maybe<TreeNodeMoveTo>;
  /** Mutation to unassign user from activity */
  unassignLearner?: Maybe<UnassignLearner>;
  unlinkLosToLeafNode?: Maybe<UnlinkLosToLeafNode>;
  unlinkProblemFromQuiz?: Maybe<UnlinkProblemFromQuiz>;
  unlock?: Maybe<UnlockAccount>;
  updateAssignmentAllowAttempts?: Maybe<UpdateAssignmentAllowAttempts>;
  /** Change assignment extension request status */
  updateAssignmentCompletionRequest?: Maybe<UpdateAssignmentCompletionRequest>;
  /** TODO */
  updateAssignmentCompletionRequests?: Maybe<UpdateAssignmentCompletionRequests>;
  /** Change assignment extension request status, either to accepted or rejected */
  updateAssignmentExtensionRequest?: Maybe<UpdateRequestAssignmentExtension>;
  updateAssignmentValidUntil?: Maybe<UpdateAssignmentValidUntil>;
  updateClient?: Maybe<UpdateClient>;
  /** Update client-related auth settings */
  updateClientAuthSetting?: Maybe<UpdateClientAuthSetting>;
  updateClientConfiguration?: Maybe<UpdateClientConfiguration>;
  updateClientGamificationSetting?: Maybe<UpdateClientGamificationSetting>;
  updateClientLearningActivityStatus?: Maybe<UpdateClientLearningActivityStatus>;
  updateCompetencyProductsCollection?: Maybe<UpdateCompetencyProductsCollection>;
  updateCompetitionStatus?: Maybe<UpdateCompetitionStatus>;
  updateCourseBlockStatus?: Maybe<UpdateCourseBlockStatus>;
  updateCourseKey?: Maybe<UpdateCourseKey>;
  updateCurrentClient?: Maybe<UpdateCurrentClient>;
  /** Mutation: Update `Employee` info */
  updateEmployee?: Maybe<UpdateEmployee>;
  updateEmployeeGroup?: Maybe<UpdateEmployeeGroup>;
  updateEnterpriseCustomer?: Maybe<UpdateEnterpriseCustomer>;
  updateEnterpriseHierarchyLevel?: Maybe<UpdateEnterpriseHierarchyLevel>;
  updateEtihadCompetencyFrameworkResult?: Maybe<UpdateEtihadCompetencyFrameworkResultMutation>;
  /** Mutation to update an already captured lead data */
  updateLead?: Maybe<UpdateLead>;
  /** Change product request status, either to accepted or rejected */
  updateProductRequest?: Maybe<UpdateProductRequest>;
  updatePublicAssessmentPopUpStatus?: Maybe<UpdatePublicAssessmentPopUpStatus>;
  updateStatus?: Maybe<UpdateStatus>;
  updateSubjectArea?: Maybe<UpdateSubjectArea>;
  updateSubjectSubArea?: Maybe<UpdateSubjectSubArea>;
  updateSubscriptionAutoRenewalStatus?: Maybe<UpdateSubscriptionAutoRenewalStatus>;
  /** Change training admin product request status, either to accepted or rejected */
  updateTrainingAdminProductRequest?: Maybe<UpdateTrainingAdminProductRequest>;
  updateUndefinedActivityAssignmentCompletionChecklistItem?: Maybe<UpdateUndefinedActivityAssignmentCompletionChecklistItem>;
  updateUser?: Maybe<UpdateUser>;
  /** Change the default language of the current user */
  updateUserProfileLanguage?: Maybe<UpdateUserProfileLanguage>;
  updateUserSurveyStatus?: Maybe<UpdateUserSurveyStatus>;
  updateUserTutorialCheckItemStatus?: Maybe<UpdateUserTutorialCheckItemStatus>;
  /** Upload identity verification requirments for assignment */
  verifyIdentityForAssignment?: Maybe<VerifyIdentityForAssignmentMutation>;
  /** Mutation to verify a phone number using the OTP code. */
  verifyPhoneNumber?: Maybe<VerifyPhoneNumber>;
  verifyToken?: Maybe<Verify>;
  viewVideoBlockCuePointProblem?: Maybe<ViewVideoBlockCuePointProblem>;
};

export type MutationCanStartActivityArgs = {
  activityId: Scalars["ID"]["input"];
  assignmentId: Scalars["ID"]["input"];
};

export type MutationAcceptAllExamCompetitionProblemSuggestionsArgs = {
  competitionId: Scalars["ID"]["input"];
};

export type MutationAcceptExamCompetitionSuggestionArgs = {
  competitionId: Scalars["ID"]["input"];
  problemId: Scalars["ID"]["input"];
};

export type MutationAcceptExamSuggestionsArgs = {
  examSuggestedExamProblemsIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAcceptSuggestedDefinitionForUnitArgs = {
  editedContent?: InputMaybe<Scalars["String"]["input"]>;
  editedLoResourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  editedTitle?: InputMaybe<Scalars["String"]["input"]>;
  suggestedDefinitionId: Scalars["ID"]["input"];
};

export type MutationAcceptSuggestedLosForUnitArgs = {
  suggestedLosIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAcceptSuggestedMultipleChoiceQuestionsForUnitArgs = {
  suggestedMcqIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAcceptSuggestedTextForUnitArgs = {
  editedContent?: InputMaybe<Scalars["String"]["input"]>;
  editedTitle?: InputMaybe<Scalars["String"]["input"]>;
  suggestedTextId: Scalars["ID"]["input"];
};

export type MutationAcceptTermsArgs = {
  activityId: Scalars["ID"]["input"];
};

export type MutationActivateCourseArgs = {
  courseId: Scalars["ID"]["input"];
};

export type MutationAddApproverToStepArgs = {
  stepId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddApproverToStepTemplateArgs = {
  stepTemplateId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddCommentArgs = {
  commentContent: Scalars["String"]["input"];
  stepId: Scalars["ID"]["input"];
};

export type MutationAddCompetencyToEnterpriseCustomerArgs = {
  competencyId: Scalars["ID"]["input"];
};

export type MutationAddCompetencyToJobRoleArgs = {
  competencyId: Scalars["ID"]["input"];
  jobRoleId: Scalars["ID"]["input"];
};

export type MutationAddCompetencyToUserArgs = {
  competencyId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddCourseArgs = {
  clientId: Scalars["ID"]["input"];
  courseId: Scalars["ID"]["input"];
};

export type MutationAddCourseTeamMemberArgs = {
  courseTeamId: Scalars["ID"]["input"];
  memberEmail: Scalars["String"]["input"];
};

export type MutationAddCourseToSkillArgs = {
  courseId: Scalars["ID"]["input"];
  skillId: Scalars["ID"]["input"];
};

export type MutationAddCuePointToVideoBlockArgs = {
  cuePointTime: Scalars["Float"]["input"];
  losBlockId?: InputMaybe<Scalars["ID"]["input"]>;
  questionResourceId?: InputMaybe<Scalars["ID"]["input"]>;
  videoBlockId: Scalars["ID"]["input"];
};

export type MutationAddCuePointToVideoResourceArgs = {
  cuePointTime: Scalars["Float"]["input"];
  losResourceId?: InputMaybe<Scalars["ID"]["input"]>;
  questionResourceId?: InputMaybe<Scalars["ID"]["input"]>;
  videoResourceId: Scalars["ID"]["input"];
};

export type MutationAddDefinitionBlockToUnitArgs = {
  definitionDataList: Array<InputMaybe<ResourceBlockInput>>;
  parentId: Scalars["ID"]["input"];
};

export type MutationAddEmployeesToEnterpriseCustomerArgs = {
  employeesJsonArray: Scalars["JSONString"]["input"];
  enterpriseCustomerId: Scalars["ID"]["input"];
};

export type MutationAddExamToClientArgs = {
  clientId: Scalars["ID"]["input"];
  examId: Scalars["ID"]["input"];
};

export type MutationAddExternalActivityArgs = {
  clientId: Scalars["ID"]["input"];
  externalActivityId: Scalars["ID"]["input"];
};

export type MutationAddFileArgs = {
  commentId?: InputMaybe<Scalars["ID"]["input"]>;
  fileUrl: Scalars["String"]["input"];
};

export type MutationAddHtmlBlockToUnitArgs = {
  htmlDataList: Array<InputMaybe<ResourceBlockInput>>;
  parentId: Scalars["ID"]["input"];
};

export type MutationAddItemsToUndefinedActivityCompletionChecklistArgs = {
  checklistId: Scalars["ID"]["input"];
  itemsData: Array<
    InputMaybe<UndefinedActivityCompletionChecklistItemCreationInput>
  >;
};

export type MutationAddLevelToCompetencyArgs = {
  competencyId: Scalars["ID"]["input"];
  levelId: Scalars["ID"]["input"];
};

export type MutationAddLinkBlockToUnitArgs = {
  linkDataList: Array<InputMaybe<ResourceBlockInput>>;
  parentId: Scalars["ID"]["input"];
};

export type MutationAddLosBlockToUnitArgs = {
  losDataList: Array<InputMaybe<ResourceBlockInput>>;
  parentId: Scalars["ID"]["input"];
};

export type MutationAddLosToQuizArgs = {
  losId: Scalars["ID"]["input"];
  quizId: Scalars["ID"]["input"];
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationAddMultipleChoiceQuestionBlockToUnitArgs = {
  mcqDataList: Array<InputMaybe<ResourceBlockInput>>;
  parentId: Scalars["ID"]["input"];
};

export type MutationAddNotificationToStepArgs = {
  stepId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddNotificationToStepTemplateArgs = {
  stepTemplateId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddPdfBlockToUnitArgs = {
  parentId: Scalars["ID"]["input"];
  pdfDataList: Array<InputMaybe<ResourceBlockInput>>;
};

export type MutationAddProblemToQuizArgs = {
  answerTime?: InputMaybe<Scalars["Int"]["input"]>;
  problemId: Scalars["ID"]["input"];
  quizId: Scalars["ID"]["input"];
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationAddProblemsToExamArgs = {
  examId: Scalars["ID"]["input"];
  problemsData: Array<InputMaybe<ResourceWeightInput>>;
};

export type MutationAddProductBookmarkArgs = {
  folderId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationAddProductToClientCatalogArgs = {
  clientId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
};

export type MutationAddProductToLearningPlanSectionArgs = {
  learningPlanSectionId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
  startingDate: Scalars["Date"]["input"];
  validUntil: Scalars["Date"]["input"];
};

export type MutationAddProductToProductsPackageArgs = {
  productId: Scalars["ID"]["input"];
  productsPackageId: Scalars["ID"]["input"];
};

export type MutationAddProductToTrainingProgramSectionArgs = {
  productId: Scalars["ID"]["input"];
  trainingProgramSectionId: Scalars["ID"]["input"];
};

export type MutationAddProductsToCompetencyProductsCollectionArgs = {
  competencyProductsCollectionId: Scalars["ID"]["input"];
  productsIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAddPromptMaterialToExamArgs = {
  examId: Scalars["ID"]["input"];
  materialBase64Data: Scalars["String"]["input"];
};

export type MutationAddPromptMaterialToExamCompetitionArgs = {
  competitionId: Scalars["ID"]["input"];
  materialBase64Data: Scalars["String"]["input"];
};

export type MutationAddResourcesToConceptArgs = {
  conceptId: Scalars["ID"]["input"];
  resourceIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAddResourcesToLosArgs = {
  losId: Scalars["ID"]["input"];
  resourceIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAddResponsibilityToStepArgs = {
  stepId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddResponsibilityToStepTemplateArgs = {
  stepTemplateId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddSkillToLevelArgs = {
  levelId: Scalars["ID"]["input"];
  skillId: Scalars["ID"]["input"];
};

export type MutationAddStepTemplateArgs = {
  stepDescription: Scalars["String"]["input"];
  stepStatus: Scalars["String"]["input"];
  stepTitle: Scalars["String"]["input"];
  stepWorkflowId: Scalars["ID"]["input"];
};

export type MutationAddSubtitleToClientVideoResourceArgs = {
  videoId: Scalars["ID"]["input"];
  videoSubtitleLanguage: Scalars["String"]["input"];
  videoSubtitleUrl: Scalars["String"]["input"];
};

export type MutationAddSubtitleToVideoArgs = {
  videoId: Scalars["ID"]["input"];
  videoSubtitleLanguage: Scalars["String"]["input"];
  videoSubtitleUrl: Scalars["String"]["input"];
};

export type MutationAddSupervisorsToEmployeeGroupArgs = {
  addAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  addUsersBasedOfAdvancedFilters?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId: Scalars["ID"]["input"];
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationAddTextBlockToUnitArgs = {
  parentId: Scalars["ID"]["input"];
  textDataList: Array<InputMaybe<ResourceBlockInput>>;
};

export type MutationAddUserToClientArgs = {
  clientId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAddUsersToCampaignArgs = {
  addAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  campaignId: Scalars["ID"]["input"];
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  usersEmails?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationAddUsersToCompetitionArgs = {
  addAllActiveUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  competitionId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  usersEmails?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationAddUsersToEmployeeGroupArgs = {
  addAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  addAllUsersInSameLevelWithoutGroup?: InputMaybe<Scalars["Boolean"]["input"]>;
  addUsersBasedOfAdvancedFilters?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId: Scalars["ID"]["input"];
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationAddUsersToSurveyArgs = {
  addAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  surveyId: Scalars["ID"]["input"];
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationAddVideoBlockToUnitArgs = {
  parentId: Scalars["ID"]["input"];
  videoDataList: Array<InputMaybe<ResourceBlockInput>>;
};

export type MutationAnswerCurrentProblemArgs = {
  examCompetitionAssignmentId: Scalars["ID"]["input"];
  newAnswerId: Scalars["ID"]["input"];
  timeTaken: Scalars["Int"]["input"];
};

export type MutationAnswerCurrentProblemWithoutTimeValidationArgs = {
  examCompetitionAssignmentId: Scalars["ID"]["input"];
  newAnswerId: Scalars["ID"]["input"];
  timeTaken: Scalars["Int"]["input"];
};

export type MutationAnswerVideoBlockCuePointProblemArgs = {
  answerId: Scalars["ID"]["input"];
  assignmentId: Scalars["ID"]["input"];
  videoBlockCuePointId: Scalars["ID"]["input"];
};

export type MutationAskBotAboutKnowledgeBaseArgs = {
  question: Scalars["String"]["input"];
};

export type MutationAssignCourseArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  archiveAccess?: InputMaybe<Scalars["Boolean"]["input"]>;
  courseId: Scalars["ID"]["input"];
  enableFlashcards?: InputMaybe<Scalars["Boolean"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate: Scalars["DateTime"]["input"];
  minCompletionProgress?: InputMaybe<Scalars["Decimal"]["input"]>;
  startDate: Scalars["DateTime"]["input"];
  strictMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId: Scalars["ID"]["input"];
};

export type MutationAssignExamArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate: Scalars["DateTime"]["input"];
  examId: Scalars["ID"]["input"];
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideGrade?: InputMaybe<Scalars["Boolean"]["input"]>;
  startDate: Scalars["DateTime"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAssignExternalActivityArgs = {
  externalActivityId: Scalars["ID"]["input"];
  startingDate: Scalars["DateTime"]["input"];
  userId: Scalars["ID"]["input"];
  validUntil: Scalars["DateTime"]["input"];
};

export type MutationAssignLearnerToAQuizArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  endDate: Scalars["DateTime"]["input"];
  quizId: Scalars["ID"]["input"];
  startDate: Scalars["DateTime"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAssignPublicAssessmentArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  endDate: Scalars["DateTime"]["input"];
  examId: Scalars["ID"]["input"];
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  startDate: Scalars["DateTime"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationAssignQuizUnitGradeSettingArgs = {
  quizUnitGradeSettingId: Scalars["ID"]["input"];
  quizUnitId: Scalars["ID"]["input"];
};

export type MutationAssignTrainingProgramCampaignArgs = {
  campaignId: Scalars["ID"]["input"];
};

export type MutationAssignUndefinedActivityArgs = {
  activityType?: InputMaybe<UndefinedActivityTypesEnum>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  extraInfo?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  scheduledTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  startingDate: Scalars["DateTime"]["input"];
  undefinedActivityId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
  validUntil: Scalars["DateTime"]["input"];
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationAssignUsersToLearningPlanArgs = {
  learningPlanId: Scalars["ID"]["input"];
  usersIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationAssignUsersToTrainingProgramArgs = {
  trainingProductItemAssignmentData: Array<
    InputMaybe<TrainingProductItemAssignmentInput>
  >;
  trainingProgramId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationCaptureLeadArgs = {
  campaign?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  source: Scalars["String"]["input"];
};

export type MutationChangeAnswerArgs = {
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  newAnswerId?: InputMaybe<Scalars["ID"]["input"]>;
  newAnswerIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  problemAttemptId: Scalars["ID"]["input"];
};

export type MutationChangeLearningObjectiveOrderArgs = {
  learningObjectiveId: Scalars["ID"]["input"];
  newOrder: Scalars["Int"]["input"];
};

export type MutationChangeNotificationReadStatusArgs = {
  notificationId: Scalars["ID"]["input"];
  read: Scalars["Boolean"]["input"];
};

export type MutationChangeResourceOrderArgs = {
  newOrder: Scalars["Int"]["input"];
  resourceId: Scalars["ID"]["input"];
};

export type MutationChangeTrainingProgramBaseObjectOrderArgs = {
  position: TrainingProgramBaseObjectPositionEnum;
  targetId: Scalars["ID"]["input"];
  trainingProgramObjectId: Scalars["ID"]["input"];
};

export type MutationChangeWorkshopScheduleArgs = {
  schedule: Array<InputMaybe<ExternalActivityScheduleInput>>;
  workshopId: Scalars["ID"]["input"];
};

export type MutationClaimPointsArgs = {
  event?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCloneCourseArgs = {
  courseId: Scalars["ID"]["input"];
  key: Scalars["String"]["input"];
};

export type MutationCloneLearningActivityArgs = {
  learningActivityId: Scalars["ID"]["input"];
};

export type MutationCloneTrainingProgramArgs = {
  trainingProgramId: Scalars["ID"]["input"];
};

export type MutationCloneTrainingProgramSectionsArgs = {
  cloneFromTrainingProgramId: Scalars["ID"]["input"];
  cloneToTrainingProgramId: Scalars["ID"]["input"];
};

export type MutationCompleteUndefinedActivityAssignmentsWithNoCompletionRequestsArgs =
  {
    assignmentId?: InputMaybe<Scalars["ID"]["input"]>;
    campaignId?: InputMaybe<Scalars["ID"]["input"]>;
    undefinedActivityId?: InputMaybe<Scalars["ID"]["input"]>;
    undefinedActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
    undefinedActivityVendorId?: InputMaybe<Scalars["ID"]["input"]>;
  };

export type MutationCopyExamCompetitionArgs = {
  competitionId: Scalars["ID"]["input"];
};

export type MutationCourseBlockMoveToArgs = {
  courseBlockId: Scalars["ID"]["input"];
  newPosition: Scalars["Int"]["input"];
};

export type MutationCreateCampaignArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  assignmentActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  externalActivityId?: InputMaybe<Scalars["ID"]["input"]>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  extraInfo?: InputMaybe<Scalars["String"]["input"]>;
  generateCertificate?: InputMaybe<Scalars["Boolean"]["input"]>;
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideGrade?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version: Scalars["Int"]["input"];
};

export type MutationCreateCategoryArgs = {
  mainCategoryId?: InputMaybe<Scalars["ID"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreateChapterArgs = {
  chapterData: CourseBlockInput;
  parentId: Scalars["ID"]["input"];
};

export type MutationCreateClientArgs = {
  autoGeneratePassword?: InputMaybe<Scalars["Boolean"]["input"]>;
  brandLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  customConfig?: InputMaybe<Scalars["JSONString"]["input"]>;
  defaultLanguage: Scalars["String"]["input"];
  domain: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  sector?: InputMaybe<Scalars["String"]["input"]>;
  theme?: InputMaybe<Scalars["JSONString"]["input"]>;
};

export type MutationCreateClientCertificatePresetArgs = {
  clientId: Scalars["ID"]["input"];
};

export type MutationCreateClientDefinitionResourceArgs = {
  definitionData: ResourceInput;
};

export type MutationCreateClientLinkResourceArgs = {
  linkData: ResourceInput;
  linkUrl: Scalars["String"]["input"];
};

export type MutationCreateClientLosResourceArgs = {
  domain: Scalars["String"]["input"];
  losData: ResourceInput;
  verb: Scalars["String"]["input"];
};

export type MutationCreateClientMcQuestionResourceArgs = {
  answersData: Array<InputMaybe<CreateMcqChoiceAnswerBlockInput>>;
  explanationData: ResourceInput;
  questionData: QuestionInput;
};

export type MutationCreateClientMcsQuestionResourceArgs = {
  answersData: Array<InputMaybe<ChoiceAnswerBlockInput>>;
  explanationData: ResourceInput;
  questionData: QuestionInput;
};

export type MutationCreateClientPdfResourceArgs = {
  pdfData: ResourceInput;
  pdfUrl: Scalars["String"]["input"];
};

export type MutationCreateClientTextResourceArgs = {
  textData: ResourceInput;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateClientTrainerArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  specialization?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateClientVendorArgs = {
  country?: InputMaybe<Scalars["String"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  nameAbbreviation?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateClientVideoResourceArgs = {
  videoData: ResourceInput;
  videoLength?: InputMaybe<Scalars["Float"]["input"]>;
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl: Scalars["String"]["input"];
};

export type MutationCreateCompetencyArgs = {
  categoryId: Scalars["ID"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  requiredSkillLevel: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationCreateCompetencyCategoryArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateCompetencyLevelArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type MutationCreateCompetencyProductsCollectionArgs = {
  competencyCategoryId?: InputMaybe<Scalars["ID"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateCompetencySkillArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  importance?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateConceptArgs = {
  conceptData: ResourceInput;
};

export type MutationCreateCourseArgs = {
  courseData: CourseBlockInput;
  image: Scalars["String"]["input"];
  key: Scalars["String"]["input"];
  overview: Scalars["String"]["input"];
  postRecommendations?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  workflowTemplateId: Scalars["ID"]["input"];
};

export type MutationCreateCourseAssignmentStatementArgs = {
  activityId: Scalars["ID"]["input"];
  courseAssignmentId: Scalars["ID"]["input"];
  duration: Scalars["Int"]["input"];
  platform?: InputMaybe<Scalars["String"]["input"]>;
  response: Scalars["String"]["input"];
  reward?: InputMaybe<Scalars["Boolean"]["input"]>;
  verbId: Scalars["ID"]["input"];
};

export type MutationCreateCourseCatalogArgs = {
  courseCatalogData?: InputMaybe<CourseCatalogInput>;
  courseId: Scalars["ID"]["input"];
  tagsId: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationCreateCourseGradingSettingsArgs = {
  courseId: Scalars["ID"]["input"];
  passingGrade: Scalars["Float"]["input"];
};

export type MutationCreateCourseUsingInstructorGptArgs = {
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  difficulty: CourseDifficulty;
  length: Scalars["Int"]["input"];
  targetAudience: Scalars["String"]["input"];
  topic: Scalars["String"]["input"];
};

export type MutationCreateDefinitionArgs = {
  definitionData: ResourceInput;
};

export type MutationCreateDefinitionResourceArgs = {
  definitionData: ResourceInput;
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  unitId: Scalars["ID"]["input"];
};

export type MutationCreateEmployeeArgs = {
  addEmployeeGroups?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeData: EmployeeInput;
  enterpriseCustomerId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationCreateEmployeeGroupArgs = {
  name: Scalars["String"]["input"];
  underHierarchyId: Scalars["ID"]["input"];
};

export type MutationCreateEmployeeGroupCampaignArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  assignmentActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId: Scalars["ID"]["input"];
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  externalActivityId?: InputMaybe<Scalars["ID"]["input"]>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  extraInfo?: InputMaybe<Scalars["String"]["input"]>;
  generateCertificate?: InputMaybe<Scalars["Boolean"]["input"]>;
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideGrade?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version: Scalars["Int"]["input"];
};

export type MutationCreateEnterpriseCustomerArgs = {
  ad?: InputMaybe<Scalars["String"]["input"]>;
  autoGeneratePassword?: InputMaybe<Scalars["Boolean"]["input"]>;
  brandLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  campaign?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  couponId?: InputMaybe<Scalars["String"]["input"]>;
  defaultLanguage?: InputMaybe<Scalars["String"]["input"]>;
  domain?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerSuperAdminData?: InputMaybe<EnterpriseCustomerSuperAdminInput>;
  isAnnual?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  planSlug?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  theme?: InputMaybe<Scalars["JSONString"]["input"]>;
};

export type MutationCreateEnterpriseCustomerSubscriptionArgs = {
  coupon?: InputMaybe<Scalars["String"]["input"]>;
  documentUrl?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId: Scalars["ID"]["input"];
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  isAnnual?: InputMaybe<Scalars["Boolean"]["input"]>;
  learningAssignmentsTargetCount?: InputMaybe<Scalars["Int"]["input"]>;
  numberOfUsers?: InputMaybe<Scalars["Int"]["input"]>;
  planId?: InputMaybe<Scalars["ID"]["input"]>;
  subscriptionType?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type MutationCreateEnterpriseHierarchyArgs = {
  enterpriseCustomerId: Scalars["ID"]["input"];
  hierarchyDataList: Array<InputMaybe<EnterpriseHierarchyCreationInputNode>>;
};

export type MutationCreateEnterpriseHierarchyLevelArgs = {
  admins?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  availableInLxp?: InputMaybe<Scalars["Boolean"]["input"]>;
  availableInTms?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["ID"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreateEnterpriseOnboardingSurveyArgs = {
  department?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId: Scalars["ID"]["input"];
  industry?: InputMaybe<Scalars["String"]["input"]>;
  interests?: InputMaybe<Scalars["String"]["input"]>;
  numberOfUsers?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateEtihadCompetencyFrameworkResultArgs = {
  cultureRating?: InputMaybe<EtihadCultureRatingEnum>;
  currentCompetencyLevel: EtihadCompetencyLevelEnum;
  currentJobPositionId: Scalars["ID"]["input"];
  knowledgeAssessmentRating?: InputMaybe<EtihadKnowledgeAssessmentRatingEnum>;
  knowledgeJourneyCompletion?: InputMaybe<Scalars["Int"]["input"]>;
  newJobPositionId: Scalars["ID"]["input"];
  performanceRating?: InputMaybe<EtihadPerformanceRatingEnum>;
  postCompetencyLevel: EtihadCompetencyLevelEnum;
  userId: Scalars["ID"]["input"];
};

export type MutationCreateEvidenceArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  providedToId: Scalars["ID"]["input"];
  skillId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationCreateExamBasedOfCourseArgs = {
  courseId: Scalars["ID"]["input"];
  examSettingData: ExamSettingInput;
  numberOfQuestionsToGenerate: Scalars["Int"]["input"];
};

export type MutationCreateExamCompetitionArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  description: Scalars["String"]["input"];
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  language: Scalars["String"]["input"];
  level: CompetitionLevels;
  name: Scalars["String"]["input"];
  numberOfQuestions: Scalars["Int"]["input"];
  startingDate: Scalars["DateTime"]["input"];
  thumbnail: Scalars["String"]["input"];
  validUntil: Scalars["DateTime"]["input"];
};

export type MutationCreateExamUnitArgs = {
  examId: Scalars["ID"]["input"];
  examUnitData: CourseBlockInput;
  parentId: Scalars["ID"]["input"];
};

export type MutationCreateExamWithProductArgs = {
  courseId: Scalars["ID"]["input"];
  losPoolData?: InputMaybe<Array<InputMaybe<ResourceWeightInput>>>;
  problemsPoolData?: InputMaybe<Array<InputMaybe<ResourceWeightInput>>>;
  quizSettingsData: QuizSettingInput;
  thumbnail: Scalars["String"]["input"];
};

export type MutationCreateFlashcardStatementArgs = {
  assignmentId: Scalars["ID"]["input"];
  flashcardId: Scalars["ID"]["input"];
  verb: FlashCardStatementVerbEnums;
};

export type MutationCreateFlashcardsArgs = {
  courseId: Scalars["ID"]["input"];
  numOfFlashcards: Scalars["Int"]["input"];
};

export type MutationCreateImageArgs = {
  imageData: ResourceInput;
  imageUrl: Scalars["String"]["input"];
};

export type MutationCreateJobRoleArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  familyId?: InputMaybe<Scalars["ID"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateJobRoleFamilyArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateLearnerArgs = {
  activityOffer?: InputMaybe<Scalars["String"]["input"]>;
  learnerData: LearnerInput;
  referral?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateLearningActivitySubscriberSettingsArgs = {
  learningActivitySubscriberId: Scalars["ID"]["input"];
  settings?: InputMaybe<SettingsInputNode>;
};

export type MutationCreateLearningPlanArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateLearningPlanSectionArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  learningPlanId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationCreateLinkArgs = {
  linkData: ResourceInput;
  linkUrl: Scalars["String"]["input"];
};

export type MutationCreateLinkResourceArgs = {
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  linkData: ResourceInput;
  linkUrl: Scalars["String"]["input"];
  unitId: Scalars["ID"]["input"];
};

export type MutationCreateLosArgs = {
  domain: Scalars["String"]["input"];
  losData: ResourceInput;
  verb: Scalars["String"]["input"];
};

export type MutationCreateLosResourceArgs = {
  domain: Scalars["String"]["input"];
  statement: Scalars["String"]["input"];
  unitId: Scalars["ID"]["input"];
  verb: Scalars["String"]["input"];
};

export type MutationCreateMagicLinkArgs = {
  email: Scalars["String"]["input"];
};

export type MutationCreateMcqResourceArgs = {
  answers: Array<InputMaybe<CreateMcqChoiceAnswerBlockInput>>;
  difficulty?: InputMaybe<Scalars["String"]["input"]>;
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  question: Scalars["String"]["input"];
  unitId: Scalars["ID"]["input"];
};

export type MutationCreateMultipleChoiceQuestionArgs = {
  answersData: Array<InputMaybe<ChoiceAnswerBlockInput>>;
  explanationData: ResourceInput;
  questionData: QuestionInput;
};

export type MutationCreateNewExamMcProblemArgs = {
  answerTime?: InputMaybe<Scalars["Int"]["input"]>;
  answers: Array<InputMaybe<CreateMcqChoiceAnswerBlockInput>>;
  difficulty?: InputMaybe<Scalars["String"]["input"]>;
  examId: Scalars["ID"]["input"];
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  problemType: ProblemTypes;
  question: Scalars["String"]["input"];
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationCreateOnlineCourseArgs = {
  externalActivityData: ExternalActivityInput;
  url: Scalars["String"]["input"];
};

export type MutationCreatePdfArgs = {
  pdfData: ResourceInput;
  pdfUrl: Scalars["String"]["input"];
};

export type MutationCreatePdfResourceArgs = {
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  pdfData: ResourceInput;
  pdfUrl: Scalars["String"]["input"];
  unitId: Scalars["ID"]["input"];
};

export type MutationCreateProductArgs = {
  activityId: Scalars["ID"]["input"];
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  countries?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cpdHours: Scalars["Int"]["input"];
  currency?: InputMaybe<CurrencyCodeEnum>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  level: ProductLevelEnum;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  priceType?: InputMaybe<PriceTypesEnum>;
  showInMarketplace?: InputMaybe<Scalars["Boolean"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationCreateProductBookmarkFolderArgs = {
  title: Scalars["String"]["input"];
};

export type MutationCreateProductCategoryArgs = {
  name: Scalars["String"]["input"];
};

export type MutationCreateProductTagArgs = {
  name: Scalars["String"]["input"];
};

export type MutationCreateProductsPackageArgs = {
  name: Scalars["String"]["input"];
  subscriptionId: Scalars["ID"]["input"];
  usersCount?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationCreatePublicCompetencyProductsCollectionArgs = {
  competencyCategoryId?: InputMaybe<Scalars["ID"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateQuizArgs = {
  losPoolData?: InputMaybe<Array<InputMaybe<ResourceWeightInput>>>;
  problemsPoolData?: InputMaybe<Array<InputMaybe<ResourceWeightInput>>>;
  quizData: QuizBaseContentInput;
  quizSettingsData: QuizSettingInput;
};

export type MutationCreateQuizUnitArgs = {
  parentId: Scalars["ID"]["input"];
  quizData: QuizInput;
  quizUnitData: CourseBlockInput;
};

export type MutationCreateQuizUnitGradeSettingArgs = {
  isExam: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
  parentId: Scalars["ID"]["input"];
  shortName: Scalars["String"]["input"];
  weight: Scalars["Float"]["input"];
};

export type MutationCreateRootArgs = {
  treeContent?: InputMaybe<Scalars["String"]["input"]>;
  treeTitle: Scalars["String"]["input"];
};

export type MutationCreateSectionArgs = {
  parentId: Scalars["ID"]["input"];
  sectionData: CourseBlockInput;
};

export type MutationCreateSubjectAreaArgs = {
  name: Scalars["String"]["input"];
};

export type MutationCreateSubjectSubAreaArgs = {
  name: Scalars["String"]["input"];
};

export type MutationCreateSubscriberArgs = {
  event: Scalars["String"]["input"];
  learningActivityId: Scalars["ID"]["input"];
};

export type MutationCreateSurveyArgs = {
  dueDate: Scalars["Date"]["input"];
  surveySmid: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationCreateTagArgs = {
  name: Scalars["String"]["input"];
};

export type MutationCreateTagsArgs = {
  tagsData: Array<InputMaybe<BaseContentInput>>;
};

export type MutationCreateTextArgs = {
  textData: ResourceInput;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateTextResourceArgs = {
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  textData: ResourceInput;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  unitId: Scalars["ID"]["input"];
};

export type MutationCreateTrainingProgramArgs = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  content: Scalars["String"]["input"];
  outcomes: Scalars["String"]["input"];
  showInMarketplace?: InputMaybe<Scalars["Boolean"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationCreateTrainingProgramCampaignArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  trainingProgramId: Scalars["ID"]["input"];
};

export type MutationCreateTrainingProgramSectionArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  trainingProgramId: Scalars["ID"]["input"];
};

export type MutationCreateTrainingProgramSubscriberSettingsArgs = {
  settingsData: Array<InputMaybe<TrainingProgramItemSettingsInputNode>>;
  trainingProgramSubscriberId: Scalars["ID"]["input"];
};

export type MutationCreateTreeArgs = {
  parentId: Scalars["ID"]["input"];
  treeContent?: InputMaybe<Scalars["String"]["input"]>;
  treeTitle: Scalars["String"]["input"];
};

export type MutationCreateUndefinedActivityArgs = {
  activityType: UndefinedActivityTypesEnum;
  externalActivityData: BaseContentInput;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  scheduledTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationCreateUndefinedActivityCompletionChecklistArgs = {
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  undefinedActivityId: Scalars["ID"]["input"];
};

export type MutationCreateUnitArgs = {
  parentId: Scalars["ID"]["input"];
  unitData: CourseBlockInput;
};

export type MutationCreateUserArgs = {
  userData: UserCreationInput;
};

export type MutationCreateVideoArgs = {
  videoData: ResourceInput;
  videoLength: Scalars["Decimal"]["input"];
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl: Scalars["String"]["input"];
};

export type MutationCreateVideoResourceArgs = {
  learningObjectivesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  unitId: Scalars["ID"]["input"];
  videoData: ResourceInput;
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateWebinarArgs = {
  externalActivityData: ExternalActivityInput;
  meetingNumber: Scalars["String"]["input"];
};

export type MutationCreateWorkflowArgs = {
  courseId: Scalars["ID"]["input"];
  useDefaultValues?: InputMaybe<Scalars["Boolean"]["input"]>;
  workflowDescription?: InputMaybe<Scalars["String"]["input"]>;
  workflowTemplateId: Scalars["ID"]["input"];
  workflowTitle?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateWorkflowTemplateArgs = {
  workflowTemplateDescription: Scalars["String"]["input"];
  workflowTemplateTitle: Scalars["String"]["input"];
};

export type MutationCreateWorkshopArgs = {
  activityOwnerId?: InputMaybe<Scalars["ID"]["input"]>;
  assignmentFees?: InputMaybe<Scalars["Float"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  countries?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cpdHours: Scalars["Int"]["input"];
  externalActivityData: ExternalActivityInput;
  guideId?: InputMaybe<Scalars["ID"]["input"]>;
  guideName?: InputMaybe<Scalars["String"]["input"]>;
  guideType?: InputMaybe<WorkshopGuidanceTypesEnum>;
  institute?: InputMaybe<Scalars["String"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  level: ProductLevelEnum;
  location: Scalars["String"]["input"];
  major?: InputMaybe<Scalars["String"]["input"]>;
  otherFees?: InputMaybe<Scalars["Float"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  positionId?: InputMaybe<Scalars["ID"]["input"]>;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerId?: InputMaybe<Scalars["ID"]["input"]>;
  registrationFees?: InputMaybe<Scalars["Float"]["input"]>;
  requiredProof?: InputMaybe<Scalars["Boolean"]["input"]>;
  schedule?: InputMaybe<Array<InputMaybe<ExternalActivityScheduleInput>>>;
  showInMarketplace?: InputMaybe<Scalars["Boolean"]["input"]>;
  subjectAreaId?: InputMaybe<Scalars["ID"]["input"]>;
  subjectSubAreaId?: InputMaybe<Scalars["ID"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  trainerFees?: InputMaybe<Scalars["Float"]["input"]>;
  trainerId?: InputMaybe<Scalars["ID"]["input"]>;
  trainingType?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<WorkshopTypesEnum>;
  venueFees?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationDeactivateCourseArgs = {
  courseId: Scalars["ID"]["input"];
};

export type MutationDeleteAiSuggestedCourseArgs = {
  suggestedCourseId: Scalars["ID"]["input"];
};

export type MutationDeleteCampaignArgs = {
  campaignId: Scalars["ID"]["input"];
};

export type MutationDeleteChapterArgs = {
  chapterId: Scalars["ID"]["input"];
};

export type MutationDeleteClientLearningActivityArgs = {
  clientLearningActivityId: Scalars["ID"]["input"];
};

export type MutationDeleteClientResourceArgs = {
  resourceId: Scalars["ID"]["input"];
};

export type MutationDeleteCompetencyArgs = {
  competencyId: Scalars["ID"]["input"];
};

export type MutationDeleteCompetencyCategoryArgs = {
  competencyId: Scalars["ID"]["input"];
};

export type MutationDeleteCompetencyProductsCollectionArgs = {
  competencyProductsCollectionId: Scalars["ID"]["input"];
};

export type MutationDeleteEmployeeGroupArgs = {
  employeeGroupId: Scalars["ID"]["input"];
  moveUsersToEmployeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationDeleteEnterpriseHierarchyLevelArgs = {
  hierarchyLevelId: Scalars["ID"]["input"];
};

export type MutationDeleteEvidenceArgs = {
  evidenceId: Scalars["ID"]["input"];
};

export type MutationDeleteExamCompetitionArgs = {
  examCompetitionId: Scalars["ID"]["input"];
};

export type MutationDeleteExamUnitArgs = {
  examUnitId: Scalars["ID"]["input"];
};

export type MutationDeleteJobRoleArgs = {
  jobRoleId: Scalars["ID"]["input"];
};

export type MutationDeleteJobRoleFamilyArgs = {
  familyId: Scalars["ID"]["input"];
};

export type MutationDeleteKnowledgebaseConversationArgs = {
  conversationId: Scalars["ID"]["input"];
};

export type MutationDeleteLearningActivitySubscriberArgs = {
  learningActivitySubscriberId: Scalars["ID"]["input"];
};

export type MutationDeleteLearningPlanArgs = {
  learningPlanId: Scalars["ID"]["input"];
};

export type MutationDeleteLevelArgs = {
  levelId: Scalars["ID"]["input"];
};

export type MutationDeleteProductBookmarkFolderArgs = {
  folderId: Scalars["ID"]["input"];
};

export type MutationDeleteQuizArgs = {
  quizId: Scalars["ID"]["input"];
};

export type MutationDeleteQuizUnitArgs = {
  quizUnitId: Scalars["ID"]["input"];
};

export type MutationDeleteResourceArgs = {
  resourceId: Scalars["ID"]["input"];
};

export type MutationDeleteSectionArgs = {
  sectionId: Scalars["ID"]["input"];
};

export type MutationDeleteSkillArgs = {
  skillId: Scalars["ID"]["input"];
};

export type MutationDeleteSubjectAreaArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteSubjectSubAreaArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteSubmittedCertificateArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteTrainingProgramArgs = {
  trainingProgramId: Scalars["ID"]["input"];
};

export type MutationDeleteTrainingProgramSectionArgs = {
  trainingProgramSectionId: Scalars["ID"]["input"];
};

export type MutationDeleteTreeArgs = {
  treeId: Scalars["ID"]["input"];
};

export type MutationDeleteUnitArgs = {
  unitId: Scalars["ID"]["input"];
};

export type MutationEditCampaignArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  archiveAccess?: InputMaybe<Scalars["Boolean"]["input"]>;
  assignmentActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
  campaignId: Scalars["ID"]["input"];
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  externalActivityId?: InputMaybe<Scalars["ID"]["input"]>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  extraInfo?: InputMaybe<Scalars["String"]["input"]>;
  generateCertificate?: InputMaybe<Scalars["Boolean"]["input"]>;
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hideGrade?: InputMaybe<Scalars["Boolean"]["input"]>;
  minCompletionProgress?: InputMaybe<Scalars["Decimal"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  strictMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationEditCampaignActivitiesArgs = {
  campaignId: Scalars["ID"]["input"];
  cohortIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  data: Array<InputMaybe<EditCampaignVersion2DataInput>>;
};

export type MutationEditChapterArgs = {
  chapterData?: InputMaybe<CourseBlockInput>;
  chapterId: Scalars["ID"]["input"];
};

export type MutationEditClientDefinitionResourceArgs = {
  definitionData?: InputMaybe<ResourceInput>;
  definitionId: Scalars["ID"]["input"];
};

export type MutationEditClientLinkResourceArgs = {
  linkData?: InputMaybe<ResourceInput>;
  linkId: Scalars["ID"]["input"];
  linkUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditClientLosResourceArgs = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  losData?: InputMaybe<ResourceInput>;
  losId: Scalars["ID"]["input"];
  verb?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditClientMcQuestionResourceArgs = {
  answersData?: InputMaybe<Array<InputMaybe<ChoiceAnswerBlockInput>>>;
  explanationData?: InputMaybe<ExplanationBlockInput>;
  questionData?: InputMaybe<QuestionInput>;
  questionId: Scalars["ID"]["input"];
};

export type MutationEditClientMcsQuestionResourceArgs = {
  answersData?: InputMaybe<Array<InputMaybe<ChoiceAnswerBlockInput>>>;
  explanationData?: InputMaybe<ExplanationBlockInput>;
  questionData?: InputMaybe<QuestionInput>;
  questionId: Scalars["ID"]["input"];
};

export type MutationEditClientPdfResourceArgs = {
  pdfData?: InputMaybe<ResourceInput>;
  pdfId: Scalars["ID"]["input"];
  pdfUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditClientProductRequestSettingArgs = {
  autoApprove?: InputMaybe<Scalars["Boolean"]["input"]>;
  clientProductRequestSettingId: Scalars["ID"]["input"];
};

export type MutationEditClientSubtitleResourceArgs = {
  videoSubtitleId: Scalars["ID"]["input"];
  videoSubtitleLanguage?: InputMaybe<Scalars["String"]["input"]>;
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditClientTextResourceArgs = {
  textData?: InputMaybe<ResourceInput>;
  textId: Scalars["ID"]["input"];
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditClientTrainerArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  specialization?: InputMaybe<Scalars["String"]["input"]>;
  trainerId: Scalars["ID"]["input"];
};

export type MutationEditClientVendorArgs = {
  country?: InputMaybe<Scalars["String"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  nameAbbreviation?: InputMaybe<Scalars["String"]["input"]>;
  vendorId: Scalars["ID"]["input"];
};

export type MutationEditClientVideoResourceArgs = {
  videoData?: InputMaybe<ResourceInput>;
  videoId: Scalars["ID"]["input"];
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditCompetencyArgs = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  competencyId: Scalars["ID"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  requiredSkillLevel?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditCompetencyCategoryArgs = {
  categoryId: Scalars["ID"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditConceptArgs = {
  conceptData?: InputMaybe<ResourceInput>;
  conceptId: Scalars["ID"]["input"];
};

export type MutationEditCourseArgs = {
  courseData?: InputMaybe<CourseBlockInput>;
  courseId: Scalars["ID"]["input"];
  courseImage?: InputMaybe<Scalars["String"]["input"]>;
  overview?: InputMaybe<Scalars["String"]["input"]>;
  postRecommendations?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationEditCourseCatalogArgs = {
  courseCatalogData?: InputMaybe<CourseCatalogInput>;
  courseCatalogId: Scalars["ID"]["input"];
};

export type MutationEditCourseGradingSettingsArgs = {
  courseGradeSettingId: Scalars["ID"]["input"];
  passingGrade: Scalars["Float"]["input"];
};

export type MutationEditDefinitionArgs = {
  definitionData?: InputMaybe<ResourceInput>;
  definitionId: Scalars["ID"]["input"];
};

export type MutationEditDefinitionBlockArgs = {
  definitionBlockData: CourseBlockInput;
  definitionBlockPoints: Scalars["Int"]["input"];
  definitionId: Scalars["ID"]["input"];
};

export type MutationEditDefinitionResourceArgs = {
  definitionData?: InputMaybe<ResourceInput>;
  definitionId: Scalars["ID"]["input"];
  learningObjectivesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationEditEnterpriseCustomerSubscriptionArgs = {
  documentUrl?: InputMaybe<Scalars["String"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  learningAssignmentsTargetCount?: InputMaybe<Scalars["Int"]["input"]>;
  planId?: InputMaybe<Scalars["String"]["input"]>;
  subscriptionId: Scalars["ID"]["input"];
  subscriptionType?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type MutationEditEvidenceArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  evidenceId: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditExamCompetitionArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  competitionId: Scalars["ID"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<CompetitionLevels>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  numberOfQuestions?: InputMaybe<Scalars["Int"]["input"]>;
  startingDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MutationEditExamUnitArgs = {
  examUnitData?: InputMaybe<CourseBlockInput>;
  examUnitId: Scalars["ID"]["input"];
};

export type MutationEditHtmlBlockArgs = {
  htmlBlockData: CourseBlockInput;
  htmlBlockPoints: Scalars["Int"]["input"];
  htmlId: Scalars["ID"]["input"];
};

export type MutationEditJobRoleArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  familyId?: InputMaybe<Scalars["ID"]["input"]>;
  jobRoleId: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditJobRoleFamilyArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  familyId: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditLearningActivitySubscriberArgs = {
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  learningActivitySubscriberId: Scalars["ID"]["input"];
};

export type MutationEditLearningActivitySubscriberSettingsArgs = {
  after?: InputMaybe<Scalars["Int"]["input"]>;
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  learningActivitySubscriberId: Scalars["ID"]["input"];
};

export type MutationEditLearningPlanProductArgs = {
  learningPlanProductId: Scalars["ID"]["input"];
  learningPlanSectionId?: InputMaybe<Scalars["ID"]["input"]>;
  startingDate?: InputMaybe<Scalars["Date"]["input"]>;
  validUntil?: InputMaybe<Scalars["Date"]["input"]>;
};

export type MutationEditLevelArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  levelId: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditLinkArgs = {
  linkData?: InputMaybe<ResourceInput>;
  linkId: Scalars["ID"]["input"];
  linkUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditLinkBlockArgs = {
  linkBlockData: CourseBlockInput;
  linkBlockPoints: Scalars["Int"]["input"];
  linkId: Scalars["ID"]["input"];
};

export type MutationEditLinkResourceArgs = {
  learningObjectivesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  linkData?: InputMaybe<ResourceInput>;
  linkId: Scalars["ID"]["input"];
  linkUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditLosArgs = {
  domain: Scalars["String"]["input"];
  losData?: InputMaybe<ResourceInput>;
  losId: Scalars["ID"]["input"];
  verb: Scalars["String"]["input"];
};

export type MutationEditLosBlockArgs = {
  losBlockData: CourseBlockInput;
  losBlockPoints: Scalars["Int"]["input"];
  losId: Scalars["ID"]["input"];
};

export type MutationEditLosResourceArgs = {
  domain?: InputMaybe<Scalars["String"]["input"]>;
  losId: Scalars["ID"]["input"];
  statement?: InputMaybe<Scalars["String"]["input"]>;
  verb?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditMcqResourceArgs = {
  answers?: InputMaybe<Array<InputMaybe<EditMcqChoiceAnswerBlockInput>>>;
  difficulty?: InputMaybe<Scalars["String"]["input"]>;
  learningObjectivesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  mcqId: Scalars["ID"]["input"];
  questionData?: InputMaybe<ResourceInput>;
};

export type MutationEditMultipleChoiceQuestionArgs = {
  answersData: Array<InputMaybe<ChoiceAnswerBlockInput>>;
  explanationData?: InputMaybe<ExplanationBlockInput>;
  questionData?: InputMaybe<QuestionInput>;
  questionId: Scalars["ID"]["input"];
};

export type MutationEditMultipleChoiceQuestionBlockArgs = {
  mcqBlockData: CourseBlockInput;
  mcqBlockPoints: Scalars["Int"]["input"];
  mcqId: Scalars["ID"]["input"];
};

export type MutationEditMultipleChoiceQuestionBlocksCorrectResponsesPatternArgs =
  {
    resourceId: Scalars["ID"]["input"];
  };

export type MutationEditOnlineCourseArgs = {
  externalActivityData?: InputMaybe<EditExternalActivityInput>;
  onlineCourseId: Scalars["ID"]["input"];
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditPdfArgs = {
  pdfData?: InputMaybe<ResourceInput>;
  pdfId: Scalars["ID"]["input"];
  pdfUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditPdfBlockArgs = {
  pdfBlockData: CourseBlockInput;
  pdfBlockPoints: Scalars["Int"]["input"];
  pdfId: Scalars["ID"]["input"];
};

export type MutationEditPdfResourceArgs = {
  learningObjectivesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  pdfData?: InputMaybe<ResourceInput>;
  pdfId: Scalars["ID"]["input"];
  pdfUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditProductArgs = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  countries?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["Int"]["input"]>;
  currency?: InputMaybe<CurrencyCodeEnum>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<ProductLevelEnum>;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  priceType?: InputMaybe<PriceTypesEnum>;
  productId: Scalars["ID"]["input"];
  showInMarketplace?: InputMaybe<Scalars["Boolean"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationEditProductCategoryArgs = {
  categoryId: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditProductTagArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  tagId: Scalars["ID"]["input"];
};

export type MutationEditProductsPackageArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  productsPackageId: Scalars["ID"]["input"];
  subscriptionId?: InputMaybe<Scalars["ID"]["input"]>;
  usersCount?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationEditQuizArgs = {
  quizData?: InputMaybe<EditQuizBaseContentInput>;
  quizId: Scalars["ID"]["input"];
  quizSettingsData?: InputMaybe<QuizSettingInput>;
};

export type MutationEditQuizLosArgs = {
  quizLosId: Scalars["ID"]["input"];
  weight: Scalars["Int"]["input"];
};

export type MutationEditQuizProblemArgs = {
  quizProblemId: Scalars["ID"]["input"];
  weight: Scalars["Int"]["input"];
};

export type MutationEditQuizUnitGradeSettingArgs = {
  isExam: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
  quizUnitGradeSettingId: Scalars["ID"]["input"];
  shortName: Scalars["String"]["input"];
  weight: Scalars["Float"]["input"];
};

export type MutationEditQuizUnitInfoArgs = {
  quizUnitData: CourseBlockInput;
  quizUnitId: Scalars["ID"]["input"];
};

export type MutationEditQuizUnitSettingsArgs = {
  quizData: EditQuizInput;
  quizUnitId: Scalars["ID"]["input"];
};

export type MutationEditSectionArgs = {
  sectionData?: InputMaybe<CourseBlockInput>;
  sectionId: Scalars["ID"]["input"];
};

export type MutationEditSkillArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  importance?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<Scalars["String"]["input"]>;
  skillId: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditSubmittedCertificateArgs = {
  credentialId?: InputMaybe<Scalars["String"]["input"]>;
  fileBase64Data?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  issueDate?: InputMaybe<Scalars["Date"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditSurveyArgs = {
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  surveyId: Scalars["ID"]["input"];
  surveySmid?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditTagArgs = {
  tagData?: InputMaybe<BaseContentInput>;
  tagId: Scalars["ID"]["input"];
};

export type MutationEditTextArgs = {
  textData?: InputMaybe<ResourceInput>;
  textId: Scalars["ID"]["input"];
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditTextBlockArgs = {
  textBlockData: CourseBlockInput;
  textBlockPoints: Scalars["Int"]["input"];
  textId: Scalars["ID"]["input"];
};

export type MutationEditTextResourceArgs = {
  learningObjectivesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  textData?: InputMaybe<ResourceInput>;
  textId: Scalars["ID"]["input"];
  textThumbnail?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditTrainingProgramArgs = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  outcomes?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  trainingProgramId: Scalars["ID"]["input"];
};

export type MutationEditTrainingProgramItemSubscriberSettingsArgs = {
  settingsData: Array<InputMaybe<TrainingProgramItemSettingsInputNode>>;
  trainingProgramSubscriberId: Scalars["ID"]["input"];
};

export type MutationEditTrainingProgramSectionArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  trainingProgramSectionId: Scalars["ID"]["input"];
};

export type MutationEditTreeArgs = {
  treeContent: Scalars["String"]["input"];
  treeId: Scalars["ID"]["input"];
  treeTitle: Scalars["String"]["input"];
};

export type MutationEditUndefinedActivityArgs = {
  activityType?: InputMaybe<UndefinedActivityTypesEnum>;
  externalActivityData?: InputMaybe<BaseContentInput>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  location?: InputMaybe<Scalars["String"]["input"]>;
  scheduledTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationEditUndefinedActivityCompletionChecklistItemsArgs = {
  checklistId: Scalars["ID"]["input"];
  itemsData: Array<
    InputMaybe<UndefinedActivityCompletionChecklistItemEditInput>
  >;
};

export type MutationEditUnitArgs = {
  unitData?: InputMaybe<CourseBlockInput>;
  unitId: Scalars["ID"]["input"];
};

export type MutationEditVideoArgs = {
  videoData?: InputMaybe<ResourceInput>;
  videoId: Scalars["ID"]["input"];
  videoLength?: InputMaybe<Scalars["Decimal"]["input"]>;
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditVideoBlockArgs = {
  videoBlockData: CourseBlockInput;
  videoBlockPoints: Scalars["Int"]["input"];
  videoId: Scalars["ID"]["input"];
};

export type MutationEditVideoBlockCuePointArgs = {
  cuePointTime: Scalars["Decimal"]["input"];
  videoBlockCuePointId: Scalars["ID"]["input"];
};

export type MutationEditVideoResourceArgs = {
  learningObjectivesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  videoData?: InputMaybe<ResourceInput>;
  videoId: Scalars["ID"]["input"];
  videoSubtitleUrl?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditVideoSubtitleArgs = {
  videoSubtitleId: Scalars["ID"]["input"];
  videoSubtitleLanguage?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditWebinarArgs = {
  externalActivityData?: InputMaybe<EditExternalActivityInput>;
  meetingNumber?: InputMaybe<Scalars["String"]["input"]>;
  webinarId: Scalars["ID"]["input"];
};

export type MutationEditWorkshopArgs = {
  activityOwnerId?: InputMaybe<Scalars["ID"]["input"]>;
  assignmentFees?: InputMaybe<Scalars["Float"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  countries?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cpdHours: Scalars["Int"]["input"];
  externalActivityData?: InputMaybe<EditExternalActivityInput>;
  guideId?: InputMaybe<Scalars["ID"]["input"]>;
  guideName?: InputMaybe<Scalars["String"]["input"]>;
  guideType?: InputMaybe<WorkshopGuidanceTypesEnum>;
  institute?: InputMaybe<Scalars["String"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  level: ProductLevelEnum;
  location?: InputMaybe<Scalars["String"]["input"]>;
  major?: InputMaybe<Scalars["String"]["input"]>;
  otherFees?: InputMaybe<Scalars["Float"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  positionId?: InputMaybe<Scalars["ID"]["input"]>;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  providerId?: InputMaybe<Scalars["ID"]["input"]>;
  registrationFees?: InputMaybe<Scalars["Float"]["input"]>;
  requiredProof?: InputMaybe<Scalars["Boolean"]["input"]>;
  schedule?: InputMaybe<Array<InputMaybe<ExternalActivityScheduleInput>>>;
  showInMarketplace?: InputMaybe<Scalars["Boolean"]["input"]>;
  subjectAreaId?: InputMaybe<Scalars["ID"]["input"]>;
  subjectSubAreaId?: InputMaybe<Scalars["ID"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  trainerFees?: InputMaybe<Scalars["Float"]["input"]>;
  trainerId?: InputMaybe<Scalars["ID"]["input"]>;
  trainingType?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<WorkshopTypesEnum>;
  venueFees?: InputMaybe<Scalars["Float"]["input"]>;
  workshopId: Scalars["ID"]["input"];
};

export type MutationExportAssignmentCompletionRequestsArgs = {
  activityType?: InputMaybe<ActivityTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<RequestStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type MutationExportAssignmentExtensionRequestsArgs = {
  activityType?: InputMaybe<ActivityTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<RequestStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type MutationExportClientRecentSubscriptionDetailedXlsxReportArgs = {
  clientId: Scalars["ID"]["input"];
};

export type MutationExportClientUsersXlsxReportArgs = {
  clientId: Scalars["ID"]["input"];
};

export type MutationExportProductRequestsArgs = {
  activityType?: InputMaybe<ProductTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<RequestStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type MutationExportProductReviewsXlsxReportArgs = {
  productId: Scalars["ID"]["input"];
};

export type MutationExportReportDataArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  activityTitle?: InputMaybe<Scalars["String"]["input"]>;
  activityType?: InputMaybe<ProductTypesEnum>;
  assignmentType?: InputMaybe<AssignmentTypesEnum>;
  campaignFilters?: InputMaybe<ExportDataCampaignFiltersInputNode>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  groupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  inAssignmentStatuses?: InputMaybe<Array<InputMaybe<AssignmentStatusesEnum>>>;
  includeExamQuestionsStats?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeQuestions?: InputMaybe<Scalars["Boolean"]["input"]>;
  ofCompetitionType?: InputMaybe<Scalars["Boolean"]["input"]>;
  requestedColumns?: InputMaybe<AssignmentReportRequestedColumnsInput>;
  summaryFields?: InputMaybe<AssignmentReportSummaryFieldsInput>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type MutationExportUsersDataArgs = {
  groupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationExtendCampaignAssignmentsArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  assessmentDueTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  campaignId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  validUntil?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MutationExtendTrainingProgramAssignmentArgs = {
  data: Array<InputMaybe<ExtendTrainingProgramAssignmentInputNode>>;
  userId: Scalars["ID"]["input"];
};

export type MutationExtractQuestionFromMaterialArgs = {
  examId: Scalars["ID"]["input"];
  materialId: Scalars["ID"]["input"];
};

export type MutationGetSuggestedCourseOutlineArgs = {
  suggestedCourseId: Scalars["ID"]["input"];
};

export type MutationGoogleAuthArgs = {
  accessToken: Scalars["String"]["input"];
};

export type MutationHaveEnoughAssignmentsCreditToAssignActivityArgs = {
  activityId: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationInitiateAnAiSuggestedCourseArgs = {
  input: AiCourseSuggestionInput;
};

export type MutationInitiateSubscriptionPaymentArgs = {
  coupon?: InputMaybe<Scalars["String"]["input"]>;
  subscriptionId: Scalars["ID"]["input"];
};

export type MutationLaunchCampaignArgs = {
  campaignId: Scalars["ID"]["input"];
};

export type MutationLinkClientResourceToLosPoolArgs = {
  losIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationLinkLosToLeafNodeArgs = {
  losId: Scalars["ID"]["input"];
  treeNodeId: Scalars["ID"]["input"];
};

export type MutationLinkProblemToQuizArgs = {
  problemId: Scalars["ID"]["input"];
  quizId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationLinkResourceToLosPoolArgs = {
  losIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationMagicLinkAuthArgs = {
  magicLinkToken: Scalars["String"]["input"];
};

export type MutationMarkAllNotificationsAsReadOrUnreadArgs = {
  read: Scalars["Boolean"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationMarkAssignmentAsCompletedArgs = {
  assignmentId: Scalars["ID"]["input"];
};

export type MutationPhoneOtpAuthArgs = {
  otp: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
};

export type MutationPopulateCourseArgs = {
  courseId: Scalars["ID"]["input"];
};

export type MutationProofreadArgs = {
  blockId?: InputMaybe<Scalars["ID"]["input"]>;
  text: Scalars["String"]["input"];
};

export type MutationQaCourseMaterialArgs = {
  blockId: Scalars["ID"]["input"];
};

export type MutationReferResourceArgs = {
  referencesIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRegenerateCertificateArgs = {
  certId: Scalars["ID"]["input"];
};

export type MutationRegisterDeviceArgs = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceType: DeviceTypes;
  registrationId: Scalars["String"]["input"];
};

export type MutationRejectAllExamCompetitionProblemSuggestionsArgs = {
  competitionId: Scalars["ID"]["input"];
};

export type MutationRejectExamCompetitionSuggestionArgs = {
  competitionId: Scalars["ID"]["input"];
  problemId: Scalars["ID"]["input"];
};

export type MutationRejectExamSuggestionsArgs = {
  examSuggestedExamProblemsIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationRemoveClientLosFromResourceArgs = {
  losId: Scalars["ID"]["input"];
  resourceId: Scalars["ID"]["input"];
};

export type MutationRemoveCompetencyFromEnterpriseCustomerArgs = {
  competencyId: Scalars["ID"]["input"];
};

export type MutationRemoveCompetencyFromJobRoleArgs = {
  competencyId: Scalars["ID"]["input"];
  jobRoleId: Scalars["ID"]["input"];
};

export type MutationRemoveCompetencyFromUserArgs = {
  competencyId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationRemoveCourseArgs = {
  clientId: Scalars["ID"]["input"];
  courseId: Scalars["ID"]["input"];
};

export type MutationRemoveCourseFromSkillArgs = {
  courseId: Scalars["ID"]["input"];
  skillId: Scalars["ID"]["input"];
};

export type MutationRemoveCourseTeamMemberArgs = {
  courseTeamId: Scalars["ID"]["input"];
  memberId: Scalars["ID"]["input"];
};

export type MutationRemoveCuePointFromVideoBlockArgs = {
  videoBlockCuePointId: Scalars["ID"]["input"];
};

export type MutationRemoveDefinitionBlockFromUnitArgs = {
  definitionBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveEnterpriseCustomerSubscriptionArgs = {
  enterpriseCustomerSubscriptionId: Scalars["ID"]["input"];
};

export type MutationRemoveExamFromClientArgs = {
  clientId: Scalars["ID"]["input"];
  examId: Scalars["ID"]["input"];
};

export type MutationRemoveExternalActivityArgs = {
  clientId: Scalars["ID"]["input"];
  externalActivityId: Scalars["ID"]["input"];
};

export type MutationRemoveHtmlBlockFromUnitArgs = {
  htmlBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveItemsFromUndefinedActivityCompletionChecklistArgs = {
  checklistId: Scalars["ID"]["input"];
  itemsIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationRemoveLevelFromCompetencyArgs = {
  competencyId: Scalars["ID"]["input"];
  levelId: Scalars["ID"]["input"];
};

export type MutationRemoveLinkBlockFromUnitArgs = {
  linkBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveLosBlockFromUnitArgs = {
  losBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveLosFromQuizArgs = {
  quizLosId: Scalars["ID"]["input"];
};

export type MutationRemoveMultipleChoiceQuestionBlockFromUnitArgs = {
  mcqBlockId: Scalars["ID"]["input"];
};

export type MutationRemovePdfBlockFromUnitArgs = {
  pdfBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveProblemFromQuizArgs = {
  quizProblemId: Scalars["ID"]["input"];
};

export type MutationRemoveProductBookmarkArgs = {
  bookmarkId: Scalars["ID"]["input"];
};

export type MutationRemoveProductFromClientCatalogArgs = {
  clientId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
};

export type MutationRemoveProductFromLearningPlanSectionArgs = {
  learningPlanProductId: Scalars["ID"]["input"];
};

export type MutationRemoveProductFromProductsPackageArgs = {
  productId: Scalars["ID"]["input"];
  productsPackageId: Scalars["ID"]["input"];
};

export type MutationRemoveProductFromTrainingProgramSectionArgs = {
  trainingProgramItemId: Scalars["ID"]["input"];
};

export type MutationRemoveProductsFromCompetencyProductsCollectionArgs = {
  competencyProductsCollectionId: Scalars["ID"]["input"];
  productsIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationRemoveResourceBlockArgs = {
  resourceBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveResourceFromConceptArgs = {
  conceptId: Scalars["ID"]["input"];
  resourceId: Scalars["ID"]["input"];
};

export type MutationRemoveResourceFromLosArgs = {
  losId: Scalars["ID"]["input"];
  resourceId: Scalars["ID"]["input"];
};

export type MutationRemoveSkillFromLevelArgs = {
  levelId: Scalars["ID"]["input"];
  skillId: Scalars["ID"]["input"];
};

export type MutationRemoveSocialAuthArgs = {
  socialAuthId: Scalars["ID"]["input"];
};

export type MutationRemoveSubtitleFromVideoArgs = {
  videoId: Scalars["ID"]["input"];
  videoSubtitleId: Scalars["ID"]["input"];
};

export type MutationRemoveSupervisorsFromEmployeeGroupArgs = {
  employeeGroupId: Scalars["ID"]["input"];
  removeAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  removeUsersBasedOfAdvancedFilters?: InputMaybe<Scalars["String"]["input"]>;
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationRemoveTextBlockFromUnitArgs = {
  textBlockId: Scalars["ID"]["input"];
};

export type MutationRemoveUserFromClientArgs = {
  clientId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationRemoveUsersFromCampaignArgs = {
  campaignId: Scalars["ID"]["input"];
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  removeAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationRemoveUsersFromCompetitionArgs = {
  competitionId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  removeAll?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationRemoveUsersFromEmployeeGroupArgs = {
  employeeGroupId: Scalars["ID"]["input"];
  removeAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  removeUsersBasedOfAdvancedFilters?: InputMaybe<Scalars["String"]["input"]>;
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationRemoveUsersFromSurveyArgs = {
  addAllUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  surveyId: Scalars["ID"]["input"];
  usersIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationRemoveVideoBlockFromUnitArgs = {
  videoBlockId: Scalars["ID"]["input"];
};

export type MutationRenewEnterpriseCustomerSubscriptionArgs = {
  enterpriseCustomerSubscriptionId: Scalars["ID"]["input"];
};

export type MutationRequestAssignmentCompletionArgs = {
  assignmentId: Scalars["ID"]["input"];
  proofBase64Data?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRequestAssignmentExtensionArgs = {
  assignmentId: Scalars["ID"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRequestPhoneOtpArgs = {
  phoneNumber: Scalars["String"]["input"];
};

export type MutationRequestPhoneVerificationArgs = {
  phoneNumber: Scalars["String"]["input"];
};

export type MutationRequestProductArgs = {
  activityType?: InputMaybe<ActivityTypesEnum>;
  productId: Scalars["ID"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetCourseAssignmentArgs = {
  assignmentId: Scalars["ID"]["input"];
};

export type MutationResetEnterpriseCustomerSubscriptionRenewedStatusArgs = {
  enterpriseCustomerSubscriptionId: Scalars["ID"]["input"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationResetPasswordRequestTokenArgs = {
  email: Scalars["String"]["input"];
};

export type MutationResetPasswordValidateTokenArgs = {
  token: Scalars["String"]["input"];
};

export type MutationRetakeExamCompetitionArgs = {
  examCompetitionAssignmentId: Scalars["ID"]["input"];
};

export type MutationReviewProductArgs = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  productId: Scalars["ID"]["input"];
  reviewNumber: Scalars["Int"]["input"];
};

export type MutationSelfAssignCourseArgs = {
  courseId: Scalars["ID"]["input"];
};

export type MutationSendActivationEmailArgs = {
  email: Scalars["String"]["input"];
};

export type MutationSendActivationEmailToBulkUsersArgs = {
  addedOn?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  clientId: Scalars["ID"]["input"];
};

export type MutationSendAssignmentReminderNotificationArgs = {
  assignmentId: Scalars["ID"]["input"];
};

export type MutationSendCongratulationArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationSendCustomEmailNotificationToCampaignUsersArgs = {
  body: Scalars["String"]["input"];
  campaignId: Scalars["ID"]["input"];
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  statuses?: InputMaybe<Array<InputMaybe<AssignmentStatusesEnum>>>;
  subject: Scalars["String"]["input"];
};

export type MutationSendReminderToCampaignUsersArgs = {
  campaignId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationSendReminderToCampaignUsersVersionTwoArgs = {
  campaignActivitiesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  campaignId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationSetAiSuggestedCourseTitleArgs = {
  suggestedCourseId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationSetClientLosResourceArgs = {
  losIds: Array<InputMaybe<Scalars["ID"]["input"]>>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationSetClientVideoResourceTranscriptArgs = {
  videoId: Scalars["ID"]["input"];
  videoSubtitleId: Scalars["ID"]["input"];
};

export type MutationSetDefaultClientForUserArgs = {
  clientId: Scalars["ID"]["input"];
};

export type MutationSetExamProblemsArgs = {
  examId: Scalars["ID"]["input"];
  problemsData: Array<InputMaybe<ResourceWeightInput>>;
};

export type MutationSetTrainingProgramCampaignActivitiesFieldsArgs = {
  campaignId: Scalars["ID"]["input"];
  trainingProductItemAssignmentData: Array<
    InputMaybe<TrainingProductItemAssignmentInput>
  >;
};

export type MutationSetWeeklyGoalArgs = {
  cpdGoal?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationSkipCurrentProblemArgs = {
  examCompetitionAssignmentId: Scalars["ID"]["input"];
};

export type MutationSocialTokenAuthArgs = {
  accessToken: Scalars["String"]["input"];
  provider: Scalars["String"]["input"];
};

export type MutationStartCompetitionArgs = {
  competitionId: Scalars["ID"]["input"];
};

export type MutationStartQuizArgs = {
  identificationDocumentBase64Data?: InputMaybe<Scalars["String"]["input"]>;
  learnerQuizId: Scalars["ID"]["input"];
  platform?: InputMaybe<Scalars["String"]["input"]>;
  selfieBase64Data?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSubmitAiSuggestedCourseOutlineArgs = {
  approvedOutline: Scalars["JSONString"]["input"];
  suggestedCourseId: Scalars["ID"]["input"];
};

export type MutationSubmitCertificateArgs = {
  credentialId?: InputMaybe<Scalars["String"]["input"]>;
  fileBase64Data?: InputMaybe<Scalars["String"]["input"]>;
  issueDate: Scalars["Date"]["input"];
  name: Scalars["String"]["input"];
  organization: Scalars["String"]["input"];
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSubmitQuizArgs = {
  learnerQuizId: Scalars["ID"]["input"];
  reward?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSuggestAiCourseTitlesArgs = {
  suggestedCourseId: Scalars["ID"]["input"];
};

export type MutationSuggestDefinitionForUnitArgs = {
  unitId: Scalars["ID"]["input"];
};

export type MutationSuggestExamCompetitionProblemArgs = {
  competitionId: Scalars["ID"]["input"];
  numberOfProblems?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationSuggestExamProblemArgs = {
  examId: Scalars["ID"]["input"];
  numberOfProblems?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationSuggestLosForUnitArgs = {
  preferedLanguage?: InputMaybe<Scalars["String"]["input"]>;
  unitId: Scalars["ID"]["input"];
};

export type MutationSuggestMultipleChoiceQuestionForUnitArgs = {
  unitId: Scalars["ID"]["input"];
};

export type MutationSuggestSingleExamProblemArgs = {
  examId: Scalars["ID"]["input"];
};

export type MutationSuggestTextForUnitArgs = {
  unitId: Scalars["ID"]["input"];
};

export type MutationSyncUserSocialAuthArgs = {
  accessToken: Scalars["String"]["input"];
  provider: Scalars["String"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationTagCourseArgs = {
  catalogCourseId: Scalars["ID"]["input"];
  tagsId: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationToggleNotificationSettingArgs = {
  notificationSetting: Scalars["String"]["input"];
};

export type MutationTokenAuthArgs = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationTrainingAdminRequestProductArgs = {
  productId: Scalars["ID"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTreeNodeMoveToArgs = {
  newPosition: Scalars["Int"]["input"];
  nodeId: Scalars["ID"]["input"];
};

export type MutationUnassignLearnerArgs = {
  assignmentId: Scalars["ID"]["input"];
};

export type MutationUnlinkLosToLeafNodeArgs = {
  losId: Scalars["ID"]["input"];
  treeNodeId: Scalars["ID"]["input"];
};

export type MutationUnlinkProblemFromQuizArgs = {
  problemId: Scalars["ID"]["input"];
  quizId: Scalars["ID"]["input"];
};

export type MutationUnlockArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationUpdateAssignmentAllowAttemptsArgs = {
  allowAttempts: Scalars["Int"]["input"];
  assignmentId: Scalars["ID"]["input"];
};

export type MutationUpdateAssignmentCompletionRequestArgs = {
  requestId: Scalars["ID"]["input"];
  response?: InputMaybe<Scalars["String"]["input"]>;
  status: RequestStatusesEnum;
};

export type MutationUpdateAssignmentCompletionRequestsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  assignmentExtensionRequestId?: InputMaybe<Scalars["ID"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  response?: InputMaybe<Scalars["String"]["input"]>;
  status: RequestStatusesEnum;
  undefinedActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
  undefinedActivityVendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationUpdateAssignmentExtensionRequestArgs = {
  assignmentExtensionRequestId: Scalars["ID"]["input"];
  response?: InputMaybe<Scalars["String"]["input"]>;
  status: RequestStatusesEnum;
};

export type MutationUpdateAssignmentValidUntilArgs = {
  assessmentDueTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  assignmentId: Scalars["ID"]["input"];
  validUntil: Scalars["DateTime"]["input"];
};

export type MutationUpdateClientArgs = {
  autoGeneratePassword?: InputMaybe<Scalars["Boolean"]["input"]>;
  brandLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  clientId: Scalars["ID"]["input"];
  customConfig?: InputMaybe<Scalars["JSONString"]["input"]>;
  defaultLanguage?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  theme?: InputMaybe<Scalars["JSONString"]["input"]>;
};

export type MutationUpdateClientAuthSettingArgs = {
  clientId: Scalars["ID"]["input"];
  superAdminEmail?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateClientConfigurationArgs = {
  brandLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  clientId: Scalars["ID"]["input"];
  customConfig?: InputMaybe<Scalars["JSONString"]["input"]>;
  defaultLanguage?: InputMaybe<Scalars["String"]["input"]>;
  theme?: InputMaybe<Scalars["JSONString"]["input"]>;
};

export type MutationUpdateClientGamificationSettingArgs = {
  isLeaguesActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaderboardBasedOnHierarchyLevelId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationUpdateClientLearningActivityStatusArgs = {
  clientLearningActivityId: Scalars["ID"]["input"];
  status: ClientLearningActivityStatusEnum;
};

export type MutationUpdateCompetencyProductsCollectionArgs = {
  competencyProductsCollectionId: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateCompetitionStatusArgs = {
  competitionId: Scalars["ID"]["input"];
  status: CompetitionStatuses;
};

export type MutationUpdateCourseBlockStatusArgs = {
  courseBlockId: Scalars["ID"]["input"];
  status: CourseBlockStatusesEnum;
};

export type MutationUpdateCourseKeyArgs = {
  courseId: Scalars["ID"]["input"];
  key: Scalars["String"]["input"];
};

export type MutationUpdateCurrentClientArgs = {
  autoGeneratePassword?: InputMaybe<Scalars["Boolean"]["input"]>;
  brandLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<CurrencyCodeEnum>;
  customConfig?: InputMaybe<Scalars["JSONString"]["input"]>;
  defaultLanguage?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sector?: InputMaybe<SectorChoicesEnum>;
  theme?: InputMaybe<Scalars["JSONString"]["input"]>;
};

export type MutationUpdateEmployeeArgs = {
  addEmployeeGroups?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeData: UpdateEmployeeInput;
  userId: Scalars["ID"]["input"];
};

export type MutationUpdateEmployeeGroupArgs = {
  employeeGroupId: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationUpdateEnterpriseCustomerArgs = {
  autoGeneratePassword?: InputMaybe<Scalars["Boolean"]["input"]>;
  brandLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  customConfig?: InputMaybe<Scalars["JSONString"]["input"]>;
  defaultLanguage?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  theme?: InputMaybe<Scalars["JSONString"]["input"]>;
};

export type MutationUpdateEnterpriseHierarchyLevelArgs = {
  admins?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  availableInLxp?: InputMaybe<Scalars["Boolean"]["input"]>;
  availableInTms?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  hierarchyLevelId: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationUpdateEtihadCompetencyFrameworkResultArgs = {
  cultureRating?: InputMaybe<EtihadCultureRatingEnum>;
  currentCompetencyLevel?: InputMaybe<EtihadCompetencyLevelEnum>;
  currentJobPositionId?: InputMaybe<Scalars["ID"]["input"]>;
  knowledgeAssessmentRating?: InputMaybe<EtihadKnowledgeAssessmentRatingEnum>;
  knowledgeJourneyCompletion?: InputMaybe<Scalars["Int"]["input"]>;
  newJobPositionId?: InputMaybe<Scalars["ID"]["input"]>;
  performanceRating?: InputMaybe<EtihadPerformanceRatingEnum>;
  postCompetencyLevel?: InputMaybe<EtihadCompetencyLevelEnum>;
  userId: Scalars["ID"]["input"];
};

export type MutationUpdateLeadArgs = {
  jobTitle?: InputMaybe<Scalars["String"]["input"]>;
  leadId: Scalars["ID"]["input"];
  numberOfEmployees?: InputMaybe<Scalars["String"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  selectedDemoDateAndTime?: InputMaybe<Scalars["DateTime"]["input"]>;
  selectedTimezone?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateProductRequestArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  archiveAccess?: InputMaybe<Scalars["Boolean"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  extraInfo?: InputMaybe<Scalars["String"]["input"]>;
  generateCertificate?: InputMaybe<Scalars["Boolean"]["input"]>;
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  minCompletionProgress?: InputMaybe<Scalars["Decimal"]["input"]>;
  productRequestId: Scalars["ID"]["input"];
  response?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  status: RequestStatusesEnum;
  strictMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  undefinedActivityConfig?: InputMaybe<UndefinedActivityInput>;
};

export type MutationUpdatePublicAssessmentPopUpStatusArgs = {
  publicAssessmentId: Scalars["ID"]["input"];
  viewed: Scalars["Boolean"]["input"];
};

export type MutationUpdateStatusArgs = {
  status: Scalars["String"]["input"];
  stepId: Scalars["ID"]["input"];
};

export type MutationUpdateSubjectAreaArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationUpdateSubjectSubAreaArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  subjectAreaId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationUpdateSubscriptionAutoRenewalStatusArgs = {
  isAutoRenewed: Scalars["Boolean"]["input"];
  subscriptionId: Scalars["ID"]["input"];
};

export type MutationUpdateTrainingAdminProductRequestArgs = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  generateCertificate?: InputMaybe<Scalars["Boolean"]["input"]>;
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  requestId: Scalars["ID"]["input"];
  response?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  status: RequestStatusesEnum;
  undefinedActivityConfig?: InputMaybe<UndefinedActivityInput>;
};

export type MutationUpdateUndefinedActivityAssignmentCompletionChecklistItemArgs =
  {
    assignmentCompletionChecklistItemId: Scalars["ID"]["input"];
    fileUrl?: InputMaybe<Scalars["String"]["input"]>;
    isCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  };

export type MutationUpdateUserArgs = {
  userData: UserUpdateInput;
  userId: Scalars["ID"]["input"];
};

export type MutationUpdateUserProfileLanguageArgs = {
  languageCode: Scalars["String"]["input"];
};

export type MutationUpdateUserSurveyStatusArgs = {
  status: UserCheckItemStatusesEnum;
  surveyId: Scalars["ID"]["input"];
};

export type MutationUpdateUserTutorialCheckItemStatusArgs = {
  status: UserCheckItemStatusesEnum;
  userTutorialCheckItemId: Scalars["ID"]["input"];
};

export type MutationVerifyIdentityForAssignmentArgs = {
  assignmentId: Scalars["ID"]["input"];
  identificationDocumentBase64Data: Scalars["String"]["input"];
  selfieBase64Data: Scalars["String"]["input"];
};

export type MutationVerifyPhoneNumberArgs = {
  phoneNumber: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationViewVideoBlockCuePointProblemArgs = {
  assignmentId: Scalars["ID"]["input"];
  problemId: Scalars["ID"]["input"];
  videoBlockCuePointId: Scalars["ID"]["input"];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

export type NotificationNode = Node & {
  __typename?: "NotificationNode";
  actionObject?: Maybe<ActionObjectUnion>;
  actionUrl?: Maybe<Scalars["String"]["output"]>;
  actor?: Maybe<ActorUnion>;
  created: Scalars["DateTime"]["output"];
  data?: Maybe<Scalars["GenericScalar"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  icon: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  recipient: UserNode;
  target?: Maybe<TargetUnion>;
  type: Scalars["String"]["output"];
  unread: Scalars["Boolean"]["output"];
  verb: Scalars["String"]["output"];
};

export type NotificationNodeConnection = {
  __typename?: "NotificationNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotificationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `NotificationNode` and its cursor. */
export type NotificationNodeEdge = {
  __typename?: "NotificationNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<NotificationNode>;
};

export type NotificationSettingsNode = Node & {
  __typename?: "NotificationSettingsNode";
  actionObjectObjectId?: Maybe<Scalars["String"]["output"]>;
  actionUrl?: Maybe<Scalars["String"]["output"]>;
  actorObjectId: Scalars["String"]["output"];
  created: Scalars["DateTime"]["output"];
  data?: Maybe<Scalars["GenericScalar"]["output"]>;
  deleted: Scalars["Boolean"]["output"];
  deliveryReports?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  icon: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  level: NotificationsNotificationLevelChoices;
  modified: Scalars["DateTime"]["output"];
  public: Scalars["Boolean"]["output"];
  recipient: UserNode;
  sentAndroid: Scalars["Boolean"]["output"];
  sentApns: Scalars["Boolean"]["output"];
  sentEmail: Scalars["Boolean"]["output"];
  status?: Maybe<NotificationsNotificationStatusChoices>;
  targetObjectId?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  unread: Scalars["Boolean"]["output"];
  verb: Scalars["String"]["output"];
  visible: Scalars["Boolean"]["output"];
};

/** An enumeration. */
export enum NotificationsNotificationLevelChoices {
  /** error */
  Error = "ERROR",
  /** info */
  Info = "INFO",
  /** success */
  Success = "SUCCESS",
  /** warning */
  Warning = "WARNING",
}

/** An enumeration. */
export enum NotificationsNotificationStatusChoices {
  /** Approved */
  Approved = "APPROVED",
  /** Delivered */
  Delivered = "DELIVERED",
  /** Error */
  Error = "ERROR",
  /** In Review */
  InReview = "IN_REVIEW",
  /** Rejected */
  Rejected = "REJECTED",
  /** Sent */
  Sent = "SENT",
}

export type ObjectNode = {
  __typename?: "ObjectNode";
  flashcard?: Maybe<FlashCardNode>;
  id: Scalars["ID"]["output"];
  object?: Maybe<ObjectUnion>;
  objectId?: Maybe<Scalars["String"]["output"]>;
  objectSubstatement: Array<SubStatementNode>;
  objectType: Scalars["String"]["output"];
  statementRelatedObjects: StatementNodeConnection;
};

export type ObjectNodeStatementRelatedObjectsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ObjectUnion =
  | ActivityNode
  | ActorNode
  | StatementRefNode
  | SubStatementNode;

export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
  user?: Maybe<UserNode>;
};

export type ObtainJsonWebTokenThroughSocial = {
  __typename?: "ObtainJSONWebTokenThroughSocial";
  social?: Maybe<SocialType>;
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type OnboardingCheckItemNode = Node & {
  __typename?: "OnboardingCheckItemNode";
  activity?: Maybe<ActivityNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  useronboardingcheckitemSet: UserOnboardingCheckItemNodeConnection;
};

export type OnboardingCheckItemNodeUseronboardingcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OnboardingCheckItemNodeConnection = {
  __typename?: "OnboardingCheckItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OnboardingCheckItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `OnboardingCheckItemNode` and its cursor. */
export type OnboardingCheckItemNodeEdge = {
  __typename?: "OnboardingCheckItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<OnboardingCheckItemNode>;
};

export type OnlineCourseNode = Node & {
  __typename?: "OnlineCourseNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  campaignSet: CampaignNodeConnection;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  externalactivityPtr: ExternalActivityNode;
  externalactivityassignmentSet: ExternalActivityAssignmentNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  onlinecourse?: Maybe<OnlineCourseNode>;
  product?: Maybe<ProductNode>;
  schedule: ExternalActivityScheduleNodeConnection;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  title: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
  webinar?: Maybe<WebinarNode>;
  workshop?: Maybe<WorkshopNode>;
};

export type OnlineCourseNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OnlineCourseNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OnlineCourseNodeExternalactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type OnlineCourseNodeScheduleArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OverallCertificateReport = {
  __typename?: "OverallCertificateReport";
  currentMonthCertificates?: Maybe<Scalars["Int"]["output"]>;
  currentYearCertificates?: Maybe<Scalars["Int"]["output"]>;
  lastIssuedCertificates?: Maybe<CertificateNodeConnection>;
  todayCertificates?: Maybe<Scalars["Int"]["output"]>;
};

export type OverallCertificateReportLastIssuedCertificatesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  assignment_User_Id?: InputMaybe<Scalars["ID"]["input"]>;
  assignment_User_Username?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  course_Title?: InputMaybe<Scalars["String"]["input"]>;
  course_Title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CourseCertificateCertificateStatusChoices>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type OverallPerformanceNode = {
  __typename?: "OverallPerformanceNode";
  /** AVG `watchTime` of Users in a given period **in minutes** */
  avgViewDuration?: Maybe<Scalars["Float"]["output"]>;
  /** Total number of assignments that the user completed */
  completedAssignments?: Maybe<Scalars["Int"]["output"]>;
  /** Total number of competitions that the user completed */
  completedCompetitions?: Maybe<Scalars["Int"]["output"]>;
  /** Total number of assignments that the user assigned to */
  totalAssignments?: Maybe<Scalars["Int"]["output"]>;
  /** Total number of certificates that the user has */
  totalCertificates?: Maybe<Scalars["Int"]["output"]>;
  /** Total number of points on a period of time */
  totalPoints?: Maybe<Scalars["Int"]["output"]>;
  /** Total `watchTime` of Users in a given period **in hours** */
  totalWatchTime?: Maybe<Scalars["Float"]["output"]>;
};

/** Representation of the resource block `PDFBlock` in the graph */
export type PdfBlockNode = Node & {
  __typename?: "PDFBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<PdfResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type PdfResourceNode = Node & {
  __typename?: "PDFResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  url: Scalars["String"]["output"];
};

export type PdfResourceNodeConnection = {
  __typename?: "PDFResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PdfResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PDFResourceNode` and its cursor. */
export type PdfResourceNodeEdge = {
  __typename?: "PDFResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PdfResourceNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PastPaperReferenceResourceNode = Node & {
  __typename?: "PastPaperReferenceResourceNode";
  bookreference?: Maybe<BookReferenceResourceNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  pastpaperreference?: Maybe<PastPaperReferenceResourceNode>;
  referencePtr: ReferenceNode;
  resourceobjectSet: ResourceObjectNodeConnection;
  teacherreference?: Maybe<TeacherReferenceResourceNode>;
  term: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  year: Scalars["Int"]["output"];
};

export type PastPaperReferenceResourceNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type PastPaperReferenceResourceNodeConnection = {
  __typename?: "PastPaperReferenceResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PastPaperReferenceResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PastPaperReferenceResourceNode` and its cursor. */
export type PastPaperReferenceResourceNodeEdge = {
  __typename?: "PastPaperReferenceResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PastPaperReferenceResourceNode>;
};

export type PerformanceHrsdSummaryNode = {
  __typename?: "PerformanceHRSDSummaryNode";
  completedLearningUnit?: Maybe<Scalars["Float"]["output"]>;
  overallHoursPerEmployee?: Maybe<Scalars["Int"]["output"]>;
  overallUnitsPerEmployee?: Maybe<Scalars["Float"]["output"]>;
  period?: Maybe<Array<Maybe<PeriodPerformanceHrsdNode>>>;
  totalLearningUnit?: Maybe<Scalars["Float"]["output"]>;
};

/** Contains period progress, overall progress, and courses with percentages */
export type PerformanceSummaryNode = {
  __typename?: "PerformanceSummaryNode";
  /** Summary containing counts for active learners, certificates and assignments. */
  clientLearningSummary?: Maybe<ClientLearningSummaryNode>;
  /** Object containing summary of a given period */
  overall?: Maybe<OverallPerformanceNode>;
  /** List of days containing summary of each day */
  period?: Maybe<Array<Maybe<PeriodPerformanceNode>>>;
};

export type PeriodPerformanceHrsdNode = {
  __typename?: "PeriodPerformanceHRSDNode";
  /** Start date of the period */
  fromDate?: Maybe<Scalars["Date"]["output"]>;
  /** Number of hours taken on a given month */
  hoursTaken?: Maybe<Scalars["Int"]["output"]>;
  /** End date of the period */
  toDate?: Maybe<Scalars["Date"]["output"]>;
  /** Number of units taken on a given month */
  unitsTaken?: Maybe<Scalars["Float"]["output"]>;
};

export type PeriodPerformanceNode = {
  __typename?: "PeriodPerformanceNode";
  /** Course Completion ratio of Users on a given day */
  actualCompletion?: Maybe<Scalars["Float"]["output"]>;
  /** Average `watchTime` of Users on a given day **in minutes** */
  avgViewDuration?: Maybe<Scalars["Float"]["output"]>;
  /** Number of `certificates` earned on a given day */
  certificatesTaken?: Maybe<Scalars["Int"]["output"]>;
  /** Total number of assignments that the user completed */
  completedAssignments?: Maybe<Scalars["Int"]["output"]>;
  /** Start date of the period */
  fromDate?: Maybe<Scalars["Date"]["output"]>;
  /** Target Course Completion ratio of Users on a given day */
  targetCompletion?: Maybe<Scalars["Float"]["output"]>;
  /** End date of the period */
  toDate?: Maybe<Scalars["Date"]["output"]>;
  /** Total number of points on a period of time */
  totalPoints?: Maybe<Scalars["Int"]["output"]>;
  /** Total `watchTime` of Users on a given day **in hours** */
  watchTime?: Maybe<Scalars["Float"]["output"]>;
};

/** An enumeration. */
export enum PeriodTypesEnum {
  Day = "day",
  Month = "month",
}

export type PeriodicPointsHistoryNode = {
  __typename?: "PeriodicPointsHistoryNode";
  /** The learning activity */
  activity?: Maybe<ActivityNode>;
  /** The date points were earned */
  awardedOn?: Maybe<Scalars["DateTime"]["output"]>;
  /** Amount of points earned */
  pointsAwarded?: Maybe<Scalars["Int"]["output"]>;
};

/** Mutation to verify an OTP and authenticate the user. */
export type PhoneOtpAuth = {
  __typename?: "PhoneOTPAuth";
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

export type PlanNode = Node & {
  __typename?: "PlanNode";
  annualAmount: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  discontinuedAt?: Maybe<Scalars["DateTime"]["output"]>;
  enterprisecustomersubscriptionSet: EnterpriseCustomerSubscriptionNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isEndless: Scalars["Boolean"]["output"];
  isNotPriced: Scalars["Boolean"]["output"];
  monthlyAmount: Scalars["Decimal"]["output"];
  renewalType: EnterpriseBillingPlanRenewalTypeChoices;
  setupAmount: Scalars["Int"]["output"];
  slug: Scalars["String"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  unit: Scalars["String"]["output"];
};

export type PlanNodeEnterprisecustomersubscriptionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<EnterpriseBillingEnterpriseCustomerSubscriptionStatusChoices>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type PlanNodeConnection = {
  __typename?: "PlanNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlanNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PlanNode` and its cursor. */
export type PlanNodeEdge = {
  __typename?: "PlanNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PlanNode>;
};

export type PointsHistory = {
  __typename?: "PointsHistory";
  history?: Maybe<PointsHistoryConnectionNodeConnection>;
  totalPoints?: Maybe<Scalars["Int"]["output"]>;
};

export type PointsHistoryHistoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PointsHistoryConnectionNodeConnection = {
  __typename?: "PointsHistoryConnectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PointsHistoryConnectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PointsHistoryConnectionNode` and its cursor. */
export type PointsHistoryConnectionNodeEdge = {
  __typename?: "PointsHistoryConnectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PeriodicPointsHistoryNode>;
};

export type PointsRecordStoreConnection = {
  __typename?: "PointsRecordStoreConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PointsRecordStoreEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PointsRecordStore` and its cursor. */
export type PointsRecordStoreEdge = {
  __typename?: "PointsRecordStoreEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PointsRecordStoreNode>;
};

export type PointsRecordStoreNode = {
  __typename?: "PointsRecordStoreNode";
  claimed?: Maybe<Scalars["Boolean"]["output"]>;
  numberOfPoints?: Maybe<Scalars["Int"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

/** An enumeration. */
export enum PointsTypes {
  Experience = "experience",
  Skill = "skill",
}

export type PopulateCourse = {
  __typename?: "PopulateCourse";
  course?: Maybe<CourseNode>;
  tasksIds?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type PostAssessmentQuizNode = Node & {
  __typename?: "PostAssessmentQuizNode";
  allowedAttempts: Scalars["Int"]["output"];
  answerChangeable: Scalars["Boolean"]["output"];
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  dueDate?: Maybe<Scalars["Date"]["output"]>;
  duration: Scalars["Float"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  postassessmentquiz?: Maybe<PostAssessmentQuizNode>;
  quizPtr: QuizNode;
  quizType: QuizzingQuizQuizTypeChoices;
  quizproblemSet: QuizProblemNodeConnection;
  quizunitSet: QuizUnitNodeConnection;
  title: Scalars["String"]["output"];
  userquizattemptSet: UserQuizAttemptNodeConnection;
};

export type PostAssessmentQuizNodeQuizproblemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostAssessmentQuizNodeQuizunitSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostAssessmentQuizNodeUserquizattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An enumeration. */
export enum PriceTypesEnum {
  PerLearner = "per_learner",
  Total = "total",
}

/** An enumeration. */
export enum ProblemTypes {
  MultipleChoice = "MULTIPLE_CHOICE",
  MultipleChoiceSelection = "MULTIPLE_CHOICE_SELECTION",
}

export type ProblemUnion =
  | MultipleChoiceQuestionResourceNode
  | MultipleChoiceSelectionQuestionResourceNode;

export type ProblemsAttemptNode = Node & {
  __typename?: "ProblemsAttemptNode";
  answer?: Maybe<ChoiceAnswerResourceNode>;
  answerId?: Maybe<Scalars["UUID"]["output"]>;
  answerIds?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  answerQs?: Maybe<Array<Maybe<ChoiceAnswerResourceNode>>>;
  created: Scalars["DateTime"]["output"];
  examAttempt: ExamAttemptNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isCorrect: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  points?: Maybe<Scalars["Float"]["output"]>;
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  problemId: Scalars["UUID"]["output"];
  problemUnion?: Maybe<ProblemUnion>;
  weight: Scalars["Decimal"]["output"];
};

export type ProblemsAttemptNodeConnection = {
  __typename?: "ProblemsAttemptNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProblemsAttemptNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProblemsAttemptNode` and its cursor. */
export type ProblemsAttemptNodeEdge = {
  __typename?: "ProblemsAttemptNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProblemsAttemptNode>;
};

export type ProductBookmarkFolderNode = Node & {
  __typename?: "ProductBookmarkFolderNode";
  client: ClientNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  productbookmarkSet: ProductBookmarkNodeConnection;
  title: Scalars["String"]["output"];
  user: UserNode;
};

export type ProductBookmarkFolderNodeProductbookmarkSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductBookmarkFolderNodeConnection = {
  __typename?: "ProductBookmarkFolderNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductBookmarkFolderNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductBookmarkFolderNode` and its cursor. */
export type ProductBookmarkFolderNodeEdge = {
  __typename?: "ProductBookmarkFolderNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductBookmarkFolderNode>;
};

export type ProductBookmarkNode = Node & {
  __typename?: "ProductBookmarkNode";
  created: Scalars["DateTime"]["output"];
  folder: ProductBookmarkFolderNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  product: ProductNode;
  title: Scalars["String"]["output"];
};

export type ProductBookmarkNodeConnection = {
  __typename?: "ProductBookmarkNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductBookmarkNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductBookmarkNode` and its cursor. */
export type ProductBookmarkNodeEdge = {
  __typename?: "ProductBookmarkNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductBookmarkNode>;
};

/** An enumeration. */
export enum ProductCatalogClientCatalogLearningActivityTrainingTypeChoices {
  /** External */
  External = "EXTERNAL",
  /** Local */
  Local = "LOCAL",
}

export type ProductCategoryNode = Node & {
  __typename?: "ProductCategoryNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
};

export type ProductCategoryNodeConnection = {
  __typename?: "ProductCategoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductCategoryNode` and its cursor. */
export type ProductCategoryNodeEdge = {
  __typename?: "ProductCategoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductCategoryNode>;
};

export type ProductCommentNode = Node & {
  __typename?: "ProductCommentNode";
  comment: Scalars["String"]["output"];
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  product: ProductNode;
  productreview?: Maybe<ProductReviewNode>;
  user: UserNode;
};

export type ProductCommentNodeConnection = {
  __typename?: "ProductCommentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductCommentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductCommentNode` and its cursor. */
export type ProductCommentNodeEdge = {
  __typename?: "ProductCommentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductCommentNode>;
};

/** An enumeration. */
export enum ProductLevelEnum {
  Advanced = "advanced",
  Beginner = "beginner",
  Intermediate = "intermediate",
}

export type ProductNode = Node & {
  __typename?: "ProductNode";
  assignmentCompletionRequestSet?: Maybe<AssignmentCompletionRequestNodeConnection>;
  assignmentExtensionRequestSet?: Maybe<AssignmentExtensionRequestNodeConnection>;
  author?: Maybe<ContentAuthorNode>;
  /** Average of all reviews to the product */
  averageReview?: Maybe<Scalars["Float"]["output"]>;
  /** Boolean about whether this product has been bookmarked before by the user logged in */
  bookmarked?: Maybe<Scalars["Boolean"]["output"]>;
  canBeAddedToClientCatalog?: Maybe<Scalars["Boolean"]["output"]>;
  catalogSet: CatalogNodeConnection;
  category?: Maybe<CategoryNode>;
  clientCatalogLearningActivity?: Maybe<ClientCatalogLearningActivityNode>;
  clientcataloglearningactivitySet: ClientCatalogLearningActivityNodeConnection;
  competencyproductscollectionSet: CompetencyProductsCollectionNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  countries?: Maybe<Array<Maybe<Country>>>;
  cpdHours: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  currency?: Maybe<MarketplaceProductCurrencyChoices>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** If client passed has active assignments (in progress) for this products */
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  isInClientCatalog?: Maybe<Scalars["Boolean"]["output"]>;
  language: MarketplaceProductLanguageChoices;
  learningplanproductSet: LearningPlanProductNodeConnection;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: MarketplaceProductLevelChoices;
  license?: Maybe<ContentLicenseNode>;
  maxRewardPoints?: Maybe<Scalars["Int"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  object?: Maybe<ActivityUnion>;
  objectId?: Maybe<Scalars["UUID"]["output"]>;
  price: Scalars["Float"]["output"];
  priceType: MarketplaceProductPriceTypeChoices;
  productbookmarkSet: ProductBookmarkNodeConnection;
  productcommentSet: ProductCommentNodeConnection;
  productrequestSet?: Maybe<ProductRequestNodeConnection>;
  productreviewSet?: Maybe<ProductReviewNodeConnection>;
  productspackageSet: ProductsPackageNodeConnection;
  public: Scalars["Boolean"]["output"];
  showInMarketplace: Scalars["Boolean"]["output"];
  slug: Scalars["String"]["output"];
  tags: ProductTagNodeConnection;
  thumbnail: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  /** Product Request object containing user request for this product, if field is **null**, means user **did not** request this product */
  userRequest?: Maybe<ProductRequestNode>;
  vendor: VendorNode;
};

export type ProductNodeAssignmentCompletionRequestSetArgs = {
  activityId?: InputMaybe<Scalars["String"]["input"]>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type ProductNodeAssignmentExtensionRequestSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type ProductNodeCanBeAddedToClientCatalogArgs = {
  clientId: Scalars["ID"]["input"];
};

export type ProductNodeCatalogSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductNodeClientcataloglearningactivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductNodeCompetencyproductscollectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductNodeIsActiveArgs = {
  clientId: Scalars["ID"]["input"];
};

export type ProductNodeLearningplanproductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductNodeProductbookmarkSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductNodeProductcommentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  comment_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductNodeProductrequestSetArgs = {
  activityType?: InputMaybe<RequestProductRequestActivityTypeChoices>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  productId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<RequestProductRequestStatusChoices>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type ProductNodeProductreviewSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  commentIsnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  review?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductNodeProductspackageSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  subscriptionId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ProductNodeTagsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductNodeConnection = {
  __typename?: "ProductNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductNode` and its cursor. */
export type ProductNodeEdge = {
  __typename?: "ProductNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
};

export type ProductRequestNode = Node & {
  __typename?: "ProductRequestNode";
  activityType?: Maybe<RequestProductRequestActivityTypeChoices>;
  clientSet: ClientNodeConnection;
  created: Scalars["DateTime"]["output"];
  handledBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isLearnerRequest: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  product: ProductNode;
  reason?: Maybe<Scalars["String"]["output"]>;
  requestedBy: UserNode;
  response?: Maybe<Scalars["String"]["output"]>;
  status: RequestProductRequestStatusChoices;
};

export type ProductRequestNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductRequestNodeConnection = {
  __typename?: "ProductRequestNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductRequestNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductRequestNode` and its cursor. */
export type ProductRequestNodeEdge = {
  __typename?: "ProductRequestNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductRequestNode>;
};

export type ProductReviewNode = Node & {
  __typename?: "ProductReviewNode";
  comment?: Maybe<ProductCommentNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  product: ProductNode;
  review: Scalars["Int"]["output"];
  status?: Maybe<MarketplaceProductReviewStatusChoices>;
  user: UserNode;
};

export type ProductReviewNodeConnection = {
  __typename?: "ProductReviewNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductReviewNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductReviewNode` and its cursor. */
export type ProductReviewNodeEdge = {
  __typename?: "ProductReviewNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductReviewNode>;
};

export type ProductTagNode = Node & {
  __typename?: "ProductTagNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  productSet: ProductNodeConnection;
};

export type ProductTagNodeProductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductTagNodeConnection = {
  __typename?: "ProductTagNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductTagNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductTagNode` and its cursor. */
export type ProductTagNodeEdge = {
  __typename?: "ProductTagNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductTagNode>;
};

/** An enumeration. */
export enum ProductTypesEnum {
  Course = "Course",
  Exam = "Exam",
  OnlineCourse = "OnlineCourse",
  TrainingProgram = "TrainingProgram",
  UndefinedActivity = "UndefinedActivity",
  Webinar = "Webinar",
  Workshop = "Workshop",
}

export type ProductsPackageNode = Node & {
  __typename?: "ProductsPackageNode";
  created: Scalars["DateTime"]["output"];
  enterprisecustomerbillinghistorySet: EnterpriseCustomerBillingHistoryNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  products: ProductNodeConnection;
  report?: Maybe<ProductsPackageReportNode>;
  subscription?: Maybe<EnterpriseCustomerSubscriptionNode>;
  usersCount: Scalars["Int"]["output"];
};

export type ProductsPackageNodeEnterprisecustomerbillinghistorySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductsPackageNodeProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductsPackageNodeConnection = {
  __typename?: "ProductsPackageNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductsPackageNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ProductsPackageNode` and its cursor. */
export type ProductsPackageNodeEdge = {
  __typename?: "ProductsPackageNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProductsPackageNode>;
};

export type ProductsPackageReportNode = {
  __typename?: "ProductsPackageReportNode";
  courseAssignmentsCount?: Maybe<Scalars["Int"]["output"]>;
  examAssignmentsCount?: Maybe<Scalars["Int"]["output"]>;
  externalActivityAssignmentsCount?: Maybe<Scalars["Int"]["output"]>;
  learningAssignmentsCount?: Maybe<Scalars["Int"]["output"]>;
};

export type PromptMaterialNode = Node & {
  __typename?: "PromptMaterialNode";
  aicoursesuggestionSet: AiCourseSuggestionNodeConnection;
  aiproofreadingsuggestionSet: AiProofReadingSuggestionNodeConnection;
  aisuggesteddefinitionSet: AiSuggestedDefinitionNodeConnection;
  aisuggestedlosSet: AiSuggestedLosNodeConnection;
  aisuggestedmultiplechoicequestionSet: AiSuggestedMultipleChoiceQuestionNodeConnection;
  aisuggestedtextSet: AiSuggestedTextNodeConnection;
  created: Scalars["DateTime"]["output"];
  examcompetitionsuggestedexamproblemSet: ExamCompetitionSuggestedExamProblemNodeConnection;
  examsuggestedexamproblemSet: ExamSuggestedExamProblemNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  objectId?: Maybe<Scalars["UUID"]["output"]>;
  rawMaterial: Scalars["String"]["output"];
};

export type PromptMaterialNodeAicoursesuggestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeAiproofreadingsuggestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeAisuggesteddefinitionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeAisuggestedlosSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeAisuggestedmultiplechoicequestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeAisuggestedtextSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeExamcompetitionsuggestedexamproblemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeExamsuggestedexamproblemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PromptMaterialNodeConnection = {
  __typename?: "PromptMaterialNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PromptMaterialNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PromptMaterialNode` and its cursor. */
export type PromptMaterialNodeEdge = {
  __typename?: "PromptMaterialNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PromptMaterialNode>;
};

export type Proofread = {
  __typename?: "Proofread";
  explanation?: Maybe<Scalars["String"]["output"]>;
  originalText?: Maybe<Scalars["String"]["output"]>;
  suggestion?: Maybe<Scalars["String"]["output"]>;
};

export type PublicAssessmentAssignmentNode = Node & {
  __typename?: "PublicAssessmentAssignmentNode";
  active: Scalars["Boolean"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  exam: ExamNode;
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  grade: Scalars["Decimal"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  lastAttempt?: Maybe<ExamAttemptNode>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
};

export type PublicAssessmentAssignmentNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type PublicAssessmentAssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type PublicAssessmentAssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PublicAssessmentAssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PublicAssessmentAssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PublicAssessmentAssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PublicAssessmentAssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type PublicAssessmentAssignmentNodeConnection = {
  __typename?: "PublicAssessmentAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PublicAssessmentAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `PublicAssessmentAssignmentNode` and its cursor. */
export type PublicAssessmentAssignmentNodeEdge = {
  __typename?: "PublicAssessmentAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PublicAssessmentAssignmentNode>;
};

export type QaCourseMaterial = {
  __typename?: "QACourseMaterial";
  result?: Maybe<Scalars["String"]["output"]>;
};

export type QProblemNode = Node & {
  __typename?: "QProblemNode";
  /** answer time is measured in seconds */
  answerTime: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  exam: ExamNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  problemId: Scalars["UUID"]["output"];
  problemUnion?: Maybe<ProblemUnion>;
  problemUsageCount?: Maybe<Scalars["Int"]["output"]>;
  weight: Scalars["Int"]["output"];
};

export type QProblemNodeConnection = {
  __typename?: "QProblemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QProblemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `QProblemNode` and its cursor. */
export type QProblemNodeEdge = {
  __typename?: "QProblemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QProblemNode>;
};

export type Query = {
  __typename?: "Query";
  TaskResult?: Maybe<TaskResultNode>;
  _debug?: Maybe<DjangoDebug>;
  _service: _Service;
  /** List of Course Accepted Languages */
  acceptedLanguages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  account?: Maybe<UserNode>;
  /** Query that calculates and returns the accumulative performancesummary for a client. */
  accumulativePerformanceSummary?: Maybe<ClientLearningSummaryNode>;
  /** Query **distinct** activities that areassigned to a client's employees, with summary on them. */
  activeLearningAssignments?: Maybe<AssignmentAndOverallSummaryNode>;
  /** returns activity details based on **activity_id** sent */
  activity?: Maybe<ActivityUnionNode>;
  aiSuggestedCourse?: Maybe<AiCourseSuggestionNode>;
  allExternalActivities?: Maybe<ExternalActivityConnection>;
  androidAppSupportedVersion?: Maybe<Scalars["Float"]["output"]>;
  assignment?: Maybe<AssignmentUnion>;
  assignmentCompletionRequest?: Maybe<AssignmentCompletionRequestNodeConnection>;
  /** A list representing the requests sent by users to complete an assignment */
  assignmentCompletionRequests?: Maybe<AssignmentCompletionRequestNodeConnection>;
  assignments?: Maybe<AssignmentConnection>;
  /** Generic high level assignments reporting by group assignments either by client or activity. */
  assignmentsReport?: Maybe<ReportDataConnectionNodeConnection>;
  assignmentsSummary?: Maybe<ActivityAssignmentsSummaryNode>;
  authors?: Maybe<ContentAuthorNodeConnection>;
  badgesRegistry?: Maybe<Array<Maybe<BadgeNode>>>;
  /** Query to get all Billing history for enterprise customer */
  billingHistory?: Maybe<EnterpriseCustomerBillingHistoryNodeConnection>;
  booksReferences?: Maybe<BookReferenceResourceNodeConnection>;
  brandIdentities?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  campaign?: Maybe<CampaignNode>;
  campaigns?: Maybe<CampaignNodeConnection>;
  canAssignUsersToCampaign?: Maybe<CanAssignUsersToCampaignNode>;
  catalogClients?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  catalogCourses?: Maybe<CatalogCourseNodeConnection>;
  categories?: Maybe<CategoryNodeConnection>;
  certificatesReport?: Maybe<ReportDataConnectionNodeConnection>;
  /** Query: Resolve `Client` info, includes *Configuration* and *External Activities* */
  client?: Maybe<ClientNode>;
  /** Reporting detailed client assignments */
  clientAssignmentsReport?: Maybe<ClientAssignmentReportConnection>;
  /** Calculate clients assignments utilization;to measure client's subscription progress. */
  clientAssignmentsUtilization?: Maybe<ClientAssignmentsUtilization>;
  clientDateTimeRangeAssignmentsCount?: Maybe<AssignmentsCountNode>;
  /** Calculate the engagement of a client according to some variables. */
  clientEngagement?: Maybe<ClientEngagementConnectionNodeConnection>;
  clientSectors?: Maybe<Array<Maybe<SectorChoicesEnum>>>;
  clientTransactions?: Maybe<TransactionNodeConnection>;
  clients?: Maybe<ClientNodeConnection>;
  cohorts?: Maybe<CohortNodeConnection>;
  comment?: Maybe<CommentNode>;
  comments?: Maybe<CommentNodeConnection>;
  competencies?: Maybe<CompetencyNodeConnection>;
  competency?: Maybe<CompetencyNode>;
  competencyCategories?: Maybe<CompetencyCategoryNodeConnection>;
  competencyLevel?: Maybe<CompetencyLevelNode>;
  competencyLevels?: Maybe<CompetencyLevelNodeConnection>;
  competencySkill?: Maybe<CompetencySkillNode>;
  competencySkills?: Maybe<CompetencySkillNodeConnection>;
  competitions?: Maybe<CompetitionConnection>;
  competitionsConfig?: Maybe<CompetitionConfigNode>;
  competitionsPointsInfo?: Maybe<CompetitionPointsInfoNode>;
  concept?: Maybe<ConceptResourceNode>;
  conceptPool?: Maybe<ConceptResourceNodeConnection>;
  countries?: Maybe<Array<Maybe<CountryNode>>>;
  course?: Maybe<CourseNode>;
  /** Assignments for a specific course with filtering */
  courseAssignments?: Maybe<CourseAssignmentNodeConnection>;
  courseBlock?: Maybe<CourseBlockUnion>;
  courseBlockDefinitions?: Maybe<DefinitionResourceNodeConnection>;
  courseBlockLinks?: Maybe<LinkResourceNodeConnection>;
  courseBlockLosPool?: Maybe<LosResourceNodeConnection>;
  courseBlockPdfs?: Maybe<PdfResourceNodeConnection>;
  courseBlockQuestions?: Maybe<MultipleChoiceQuestionResourceNodeConnection>;
  courseBlockVideos?: Maybe<VideoResourceNodeConnection>;
  courseLosPool?: Maybe<Array<Maybe<LosResourceNode>>>;
  courseMediaType?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  courseWatchGamificationSummary?: Maybe<CourseWatchGamificationSummaryNode>;
  courseWorkflow?: Maybe<WorkFlowNode>;
  /** Query: Resolve **All** `Courses` */
  courses?: Maybe<CourseNodeConnection>;
  coursesGapAnalysis?: Maybe<CourseStatsNodeConnection>;
  currentLanguage?: Maybe<Scalars["String"]["output"]>;
  currentLeaguesSeason?: Maybe<LeaguesSeasonNode>;
  definitions?: Maybe<DefinitionResourceNodeConnection>;
  employee?: Maybe<UserNode>;
  /** Gets all the *Departments/Cohorts* the `Employees` are in */
  employeeGroups?: Maybe<EmployeeGroupNodeConnection>;
  /** Gets a list of employees for `client` according to  **Optional Filters** */
  employees?: Maybe<UserNodeConnection>;
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
  enterpriseCustomerCompetencies?: Maybe<CompetencyNodeConnection>;
  enterpriseCustomerSubscription?: Maybe<EnterpriseCustomerSubscriptionNodeConnection>;
  enterpriseCustomers?: Maybe<EnterpriseCustomerNodeConnection>;
  etihadJobPositions?: Maybe<Array<Maybe<EtihadJobPositionType>>>;
  exam?: Maybe<ExamNode>;
  /** Assignments for a specific exam with filtering */
  examAssignments?: Maybe<ExamAssignmentNodeConnection>;
  examGamificationSummary?: Maybe<ExamGamificationSummary>;
  examsProblems?: Maybe<QProblemNodeConnection>;
  externalActivities?: Maybe<ExternalActivityConnection>;
  externalActivity?: Maybe<ExternalActivityUnion>;
  /** Assignments for a specific external activity with filtering */
  externalActivityAssignments?: Maybe<ExternalActivityAssignmentNodeConnection>;
  file?: Maybe<FileNode>;
  files?: Maybe<FileNodeConnection>;
  flashcards?: Maybe<FlashCardConnection>;
  getAQuote?: Maybe<QuoteNode>;
  getServiceProviderLoginUrls?: Maybe<
    Array<Maybe<Scalars["String"]["output"]>>
  >;
  history?: Maybe<DeltaHistoryRecordConnection>;
  images?: Maybe<ImageResourceNodeConnection>;
  inactivatedUsersInfo?: Maybe<Array<Maybe<InActivatedUsersInfoNode>>>;
  iosAppSupportedVersion?: Maybe<Scalars["Float"]["output"]>;
  isApiVersionSupported?: Maybe<Scalars["Boolean"]["output"]>;
  isBasicCourseDataValidForAiSuggestion?: Maybe<Scalars["Boolean"]["output"]>;
  jobRole?: Maybe<JobRoleNode>;
  jobRoles?: Maybe<JobRoleNodeConnection>;
  jobRolesFamilies?: Maybe<JobRoleFamilyNodeConnection>;
  /** **Query** to get all users and their points on a period of time ranked based on points in a **descending order**. period is calculated based on from_date and to_date sent. if no date was sent, query ranks and returns based on **total points** for users */
  leaderBoard?: Maybe<LeaderboardParticipantConnection>;
  leafNodes?: Maybe<BodyOfKnowledgeTreeNodeConnection>;
  leagues?: Maybe<LeagueNodeConnection>;
  learningActivitySubscribers?: Maybe<LearningActivitySubscriberNodeConnection>;
  learningPlan?: Maybe<LearningPlanNodeConnection>;
  licenses?: Maybe<ContentLicenseNodeConnection>;
  losConcepts?: Maybe<Array<Maybe<ConceptResourceNode>>>;
  losPool?: Maybe<LosResourceNodeConnection>;
  mainCategories?: Maybe<MainCategoryNodeConnection>;
  marketingProducts?: Maybe<ProductNodeConnection>;
  /** Get published products */
  marketplaceProducts?: Maybe<ProductNodeConnection>;
  me?: Maybe<UserNode>;
  overallCampaigns?: Maybe<CampaignsSummeryNode>;
  overallCertificateReport?: Maybe<OverallCertificateReport>;
  overallLearningReport?: Maybe<MainLearningReportNode>;
  pastPapersReferences?: Maybe<PastPaperReferenceResourceNodeConnection>;
  pdfs?: Maybe<PdfResourceNodeConnection>;
  performanceHrsdSummary?: Maybe<PerformanceHrsdSummaryNode>;
  /** Query that calculates and returns the performancesummary for a client. */
  performanceSummary?: Maybe<PerformanceSummaryNode>;
  plans?: Maybe<PlanNodeConnection>;
  privacyPolicyUrl?: Maybe<Scalars["String"]["output"]>;
  productCategories?: Maybe<ProductCategoryNodeConnection>;
  productRequests?: Maybe<ProductRequestNodeConnection>;
  productTags?: Maybe<ProductTagNodeConnection>;
  /** Get all products, or only a product type based on activity_type sent */
  products?: Maybe<ProductNodeConnection>;
  productsPackage?: Maybe<ProductsPackageNodeConnection>;
  publicAssessmentFromAssignment?: Maybe<ExamNode>;
  publicCompetencyProductsCollections?: Maybe<CompetencyProductsCollectionNodeConnection>;
  questions?: Maybe<MultipleChoiceQuestionResourceNodeConnection>;
  quizLos?: Maybe<QuizLosNodeConnection>;
  quizUnit?: Maybe<QuizUnitNode>;
  /** Query: Resolve **All** `Quizzes` */
  quizzes?: Maybe<ExamNodeConnection>;
  references?: Maybe<Array<Maybe<ResourceObjectUnion>>>;
  reportsRequests?: Maybe<ReportsAuditEntryNodeConnection>;
  requestCompletionAssignments?: Maybe<UndefinedActivityAssignmentNodeConnection>;
  requestedProducts?: Maybe<ProductNodeConnection>;
  requests?: Maybe<RequestConnection>;
  resource?: Maybe<ResourceObjectUnion>;
  resources?: Maybe<Array<Maybe<ResourceObjectUnion>>>;
  roles?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Query to search through everything in the system for reporting. */
  searchReports?: Maybe<ReportSearchRecordConnection>;
  serverTime?: Maybe<Scalars["DateTime"]["output"]>;
  /** Simple health check endpoint that returns status of server */
  status?: Maybe<Scalars["String"]["output"]>;
  step?: Maybe<StepNode>;
  /** Query to get all subscription activities weights */
  subscriptionActivitiesWeights?: Maybe<
    Array<Maybe<SubscriptionActivitiesWeightsNode>>
  >;
  surveys?: Maybe<ClientSurveyCheckItemNodeConnection>;
  tags?: Maybe<CourseTagNodeConnection>;
  teachersReferences?: Maybe<TeacherReferenceResourceNodeConnection>;
  termsOfUseUrl?: Maybe<Scalars["String"]["output"]>;
  texts?: Maybe<TextResourceNodeConnection>;
  trainer?: Maybe<TrainerNode>;
  trainers?: Maybe<TrainerNodeConnection>;
  trainingPrograms?: Maybe<TrainingProgramNodeConnection>;
  tree?: Maybe<BodyOfKnowledgeTreeNodeConnection>;
  treeNode?: Maybe<BodyOfKnowledgeTreeNode>;
  /** List of all available events */
  triggerEvents?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  undefinedActivity?: Maybe<UndefinedActivityNode>;
  unit?: Maybe<UnitNode>;
  user?: Maybe<UserNode>;
  userClients?: Maybe<Array<Maybe<ClientNode>>>;
  userLearningPlanActivities?: Maybe<LearningPlanProductNodeConnection>;
  userQuizzes?: Maybe<LqNodeConnection>;
  userResources?: Maybe<ResourceConnection>;
  userResourcesCount?: Maybe<Scalars["Int"]["output"]>;
  users?: Maybe<UserNodeConnection>;
  usersCanBePartOfCompetition?: Maybe<UserNodeConnection>;
  validateInvitationToken?: Maybe<ValidateInvitationToken>;
  vendor?: Maybe<VendorNode>;
  vendors?: Maybe<VendorNodeConnection>;
  videoBlockCuePointDuration?: Maybe<Scalars["Int"]["output"]>;
  videos?: Maybe<VideoResourceNodeConnection>;
  workflow?: Maybe<WorkFlowNode>;
  workflows?: Maybe<WorkFlowNodeConnection>;
};

export type QueryTaskResultArgs = {
  extraData?: InputMaybe<Scalars["String"]["input"]>;
  taskId: Scalars["String"]["input"];
};

export type QueryAccountArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAccumulativePerformanceSummaryArgs = {
  clientId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryActiveLearningAssignmentsArgs = {
  activityType?: InputMaybe<ProductTypesEnum>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type QueryActivityArgs = {
  activityId: Scalars["ID"]["input"];
};

export type QueryAiSuggestedCourseArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAllExternalActivitiesArgs = {
  activityType: ExternalActivitiesTypes;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  excludeActivitiesWithProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  titleIcontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAssignmentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAssignmentCompletionRequestArgs = {
  activityId?: InputMaybe<Scalars["String"]["input"]>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  undefinedActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
  undefinedActivityVendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryAssignmentCompletionRequestsArgs = {
  activityId?: InputMaybe<Scalars["String"]["input"]>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyVerifyProofRequests?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryAssignmentsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  activityType?: InputMaybe<UndefinedActivityTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  assignmentId?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  cohortId?: InputMaybe<Scalars["ID"]["input"]>;
  completionRequested?: InputMaybe<Scalars["Boolean"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeTrainingProgramAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  inStatus?: InputMaybe<Array<InputMaybe<AssignmentStatusesEnum>>>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<AssignmentStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryAssignmentsReportArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  clientId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  onlyActivityType?: InputMaybe<ActivityTypesEnum>;
  status?: InputMaybe<AssignmentStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryAssignmentsSummaryArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryBillingHistoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryBooksReferencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  publishingYear?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCampaignArgs = {
  campaignId: Scalars["ID"]["input"];
};

export type QueryCampaignsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  activityType?: InputMaybe<ProductTypesEnum>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  assignmentActivityType?: InputMaybe<UndefinedActivityTypesEnum>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
  workhopType?: InputMaybe<WorkshopTypesEnum>;
};

export type QueryCanAssignUsersToCampaignArgs = {
  activityId: Scalars["ID"]["input"];
  campaignId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryCatalogCoursesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCertificatesReportArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  clientId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryClientAssignmentsReportArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  clientId: Scalars["ID"]["input"];
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryClientAssignmentsUtilizationArgs = {
  clientId: Scalars["ID"]["input"];
};

export type QueryClientDateTimeRangeAssignmentsCountArgs = {
  clientId: Scalars["ID"]["input"];
  endDateTime: Scalars["DateTime"]["input"];
  startDateTime: Scalars["DateTime"]["input"];
};

export type QueryClientEngagementArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  clientId?: InputMaybe<Scalars["ID"]["input"]>;
  descending?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientTransactionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryClientsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  excludeEnterpriseCustomers?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCohortsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCommentArgs = {
  commentId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  stepId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryCompetenciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCompetencyArgs = {
  competencyId: Scalars["ID"]["input"];
};

export type QueryCompetencyCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCompetencyLevelArgs = {
  levelId: Scalars["ID"]["input"];
};

export type QueryCompetencyLevelsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCompetencySkillArgs = {
  skillId: Scalars["ID"]["input"];
};

export type QueryCompetencySkillsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCompetitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  customStatuses?: InputMaybe<Array<InputMaybe<CompetitionCustomStatus>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  includedLosIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  levels?: InputMaybe<Array<InputMaybe<CompetitionLevels>>>;
  nameIcontains?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  statuses?: InputMaybe<Array<InputMaybe<CompetitionStatuses>>>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryConceptArgs = {
  conceptId: Scalars["ID"]["input"];
};

export type QueryConceptPoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCourseAssignmentsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  courseId: Scalars["ID"]["input"];
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryCourseBlockArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCourseBlockDefinitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  courseBlockId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseBlockLinksArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  courseBlockId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseBlockLosPoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  courseBlockId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseBlockPdfsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  courseBlockId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseBlockQuestionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  courseBlockId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseBlockVideosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  courseBlockId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCourseLosPoolArgs = {
  courseId: Scalars["ID"]["input"];
};

export type QueryCourseWatchGamificationSummaryArgs = {
  courseAssignmentId: Scalars["ID"]["input"];
};

export type QueryCourseWorkflowArgs = {
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryCoursesArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  excludeCoursesWithProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  key?: InputMaybe<Scalars["String"]["input"]>;
  key_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyOrigin?: InputMaybe<Scalars["Boolean"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CourseStructureCourseBlockStatusChoices>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCoursesGapAnalysisArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  titleIcontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryDefinitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryEmployeeArgs = {
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryEmployeeGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  underHierarchyId?: InputMaybe<Scalars["ID"]["input"]>;
  underHierarchy_Name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryEmployeesArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  excludeStatuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryEnterpriseCustomerCompetenciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryEnterpriseCustomerSubscriptionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<EnterpriseBillingEnterpriseCustomerSubscriptionStatusChoices>;
};

export type QueryEnterpriseCustomersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryExamArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryExamAssignmentsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  examId: Scalars["ID"]["input"];
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryExamGamificationSummaryArgs = {
  assignmentId: Scalars["ID"]["input"];
};

export type QueryExamsProblemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  problemId?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type QueryExternalActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  titleIcontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryExternalActivityArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryExternalActivityAssignmentsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  externalActivityId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryFileArgs = {
  fileId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryFilesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  stepId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryFlashcardsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetServiceProviderLoginUrlsArgs = {
  email: Scalars["String"]["input"];
};

export type QueryHistoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["ID"]["input"];
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryInactivatedUsersInfoArgs = {
  clientId: Scalars["ID"]["input"];
};

export type QueryIsApiVersionSupportedArgs = {
  apiVersion: Scalars["Float"]["input"];
};

export type QueryIsBasicCourseDataValidForAiSuggestionArgs = {
  courseId: Scalars["ID"]["input"];
};

export type QueryJobRoleArgs = {
  jobId: Scalars["ID"]["input"];
};

export type QueryJobRolesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryJobRolesFamiliesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryLeaderBoardArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOnHierarchyGroup?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  includeRequestUser?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  pointsType?: InputMaybe<PointsTypes>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryLeafNodesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId: Scalars["ID"]["input"];
};

export type QueryLeaguesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLearningActivitySubscribersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLearningPlanArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryLicensesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLosConceptsArgs = {
  losId: Scalars["ID"]["input"];
};

export type QueryLosPoolArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  losPerNode?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryMainCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryMarketingProductsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["String"]["input"]>;
  excludeCompetencyProductsCollectionProductsId?: InputMaybe<
    Scalars["ID"]["input"]
  >;
  excludeDraftClientLearningActivities?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
  excludeExpiredWebinars?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeExpiredWorkshops?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeProductsInClientCatalog?: InputMaybe<Scalars["ID"]["input"]>;
  excludeUserIdAssignedProducts?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPackaged?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  length?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  mainCategoryId?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyNonClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyType?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type QueryMarketplaceProductsArgs = {
  activityType?: InputMaybe<ProductTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["String"]["input"]>;
  excludeCompetencyProductsCollectionProductsId?: InputMaybe<
    Scalars["ID"]["input"]
  >;
  excludeDraftClientLearningActivities?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
  excludeExpiredWebinars?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeExpiredWorkshops?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeProductsInClientCatalog?: InputMaybe<Scalars["ID"]["input"]>;
  excludeUserIdAssignedProducts?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  includeUndefinedActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPackaged?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  length?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  mainCategoryId?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyNonClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyRequestedProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyType?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type QueryOverallCampaignsArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryOverallLearningReportArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  includeUndefinedActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryPastPapersReferencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPdfsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryPerformanceHrsdSummaryArgs = {
  fromDate: Scalars["Date"]["input"];
  toDate: Scalars["Date"]["input"];
};

export type QueryPerformanceSummaryArgs = {
  clientId?: InputMaybe<Scalars["ID"]["input"]>;
  fromDate: Scalars["Date"]["input"];
  periodType: PeriodTypesEnum;
  toDate: Scalars["Date"]["input"];
};

export type QueryPlansArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductRequestsArgs = {
  activityType?: InputMaybe<RequestProductRequestActivityTypeChoices>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  isLearnerRequest?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  productId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<RequestProductRequestStatusChoices>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryProductTagsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProductsArgs = {
  activityType?: InputMaybe<ProductTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["String"]["input"]>;
  excludeCompetencyProductsCollectionProductsId?: InputMaybe<
    Scalars["ID"]["input"]
  >;
  excludeDraftClientLearningActivities?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
  excludeExpiredWebinars?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeExpiredWorkshops?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeProductsInClientCatalog?: InputMaybe<Scalars["ID"]["input"]>;
  excludeUserIdAssignedProducts?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  includeUndefinedActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPackaged?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  length?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  mainCategoryId?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyNonClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyPublished?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyRequestedProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyType?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type QueryProductsPackageArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  subscriptionId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryPublicAssessmentFromAssignmentArgs = {
  publicAssessmentAssignmentId: Scalars["ID"]["input"];
};

export type QueryPublicCompetencyProductsCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryQuestionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryQuizLosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  losId?: InputMaybe<Scalars["UUID"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryQuizUnitArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryQuizzesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  excludeQuizzesWithProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<QuizzingExamTypeChoices>;
};

export type QueryReportsRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRequestCompletionAssignmentsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  activityType?: InputMaybe<UndefinedActivityTypesEnum>;
  activityType_Iexact?: InputMaybe<ExternalActivityUndefinedActivityAssignmentActivityTypeChoices>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRequestedProductsArgs = {
  activityType?: InputMaybe<ProductTypesEnum>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  cpdHours?: InputMaybe<Scalars["String"]["input"]>;
  excludeCompetencyProductsCollectionProductsId?: InputMaybe<
    Scalars["ID"]["input"]
  >;
  excludeDraftClientLearningActivities?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
  excludeExpiredWebinars?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeExpiredWorkshops?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeProductsInClientCatalog?: InputMaybe<Scalars["ID"]["input"]>;
  excludeUserIdAssignedProducts?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  includeUndefinedActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPackaged?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  length?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  mainCategoryId?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  onlyClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyNonClientLearningActivities?: InputMaybe<Scalars["Boolean"]["input"]>;
  onlyType?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  requestStatus?: InputMaybe<RequestStatusesEnum>;
  requestTypes?: InputMaybe<Array<InputMaybe<RequestTypesEnum>>>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type QueryRequestsArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  requestTypes?: InputMaybe<Array<InputMaybe<RequestTypesEnum>>>;
  status?: InputMaybe<RequestStatusesEnum>;
};

export type QueryResourceArgs = {
  resourceId: Scalars["ID"]["input"];
};

export type QueryResourcesArgs = {
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  maxCount?: InputMaybe<Scalars["Int"]["input"]>;
  resourceType?: InputMaybe<MainResourceObjectTypeEnum>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerySearchReportsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryStepArgs = {
  stepId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QuerySurveysArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Gt?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Gte?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Lt?: InputMaybe<Scalars["Date"]["input"]>;
  dueDate_Lte?: InputMaybe<Scalars["Date"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTagsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTeachersReferencesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTextsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTrainerArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTrainersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  notes_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  phone_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  specialization?: InputMaybe<Scalars["String"]["input"]>;
  specialization_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTrainingProgramsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  exclude_Title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  hasActivityId?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type QueryTreeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTreeNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUndefinedActivityArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUnitArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserClientsArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryUserLearningPlanActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userLearningPlanId: Scalars["ID"]["input"];
};

export type QueryUserQuizzesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  exam_Title?: InputMaybe<Scalars["String"]["input"]>;
  exam_Title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  exam_Title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<LearnerAssignmentAssignmentStatusChoices>;
  userId: Scalars["ID"]["input"];
};

export type QueryUserResourcesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  maxCount?: InputMaybe<Scalars["Int"]["input"]>;
  resourceType?: InputMaybe<MainResourceObjectTypeEnum>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["ID"]["input"];
};

export type QueryUserResourcesCountArgs = {
  resourceType?: InputMaybe<MainResourceObjectTypeEnum>;
  userId: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  username_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryUsersCanBePartOfCompetitionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  competitionId: Scalars["ID"]["input"];
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  username_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryValidateInvitationTokenArgs = {
  token: Scalars["String"]["input"];
};

export type QueryVendorArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryVendorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  nameAbbreviation?: InputMaybe<Scalars["String"]["input"]>;
  nameAbbreviation_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryVideosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  content_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  treeNodeId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryWorkflowArgs = {
  workflowId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryWorkflowsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuestionInput = {
  difficulty?: InputMaybe<Scalars["Int"]["input"]>;
  info: ResourceInput;
};

export type QuizBaseContentInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  language: Scalars["String"]["input"];
  quizType: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type QuizInput = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  answerChangeable?: InputMaybe<Scalars["Boolean"]["input"]>;
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  duration?: InputMaybe<Duration>;
  losIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  maxProblemsPerLos?: InputMaybe<Scalars["Int"]["input"]>;
  numberOfProblems: Scalars["Int"]["input"];
  problemsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  quizDistributionStrategy: Scalars["String"]["input"];
};

export type QuizLosNode = Node & {
  __typename?: "QuizLOSNode";
  created: Scalars["DateTime"]["output"];
  exam: ExamNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  losId: Scalars["UUID"]["output"];
  modified: Scalars["DateTime"]["output"];
  resource?: Maybe<LosResourceNode>;
  weight: Scalars["Int"]["output"];
};

export type QuizLosNodeConnection = {
  __typename?: "QuizLOSNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuizLosNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `QuizLOSNode` and its cursor. */
export type QuizLosNodeEdge = {
  __typename?: "QuizLOSNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QuizLosNode>;
};

export type QuizNode = Node & {
  __typename?: "QuizNode";
  allowedAttempts: Scalars["Int"]["output"];
  answerChangeable: Scalars["Boolean"]["output"];
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  dueDate?: Maybe<Scalars["Date"]["output"]>;
  duration: Scalars["Float"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  postassessmentquiz?: Maybe<PostAssessmentQuizNode>;
  quizType: QuizzingQuizQuizTypeChoices;
  quizproblemSet: QuizProblemNodeConnection;
  title: Scalars["String"]["output"];
  userquizattemptSet: UserQuizAttemptNodeConnection;
};

export type QuizNodeQuizproblemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuizNodeUserquizattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuizNodeConnection = {
  __typename?: "QuizNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuizNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `QuizNode` and its cursor. */
export type QuizNodeEdge = {
  __typename?: "QuizNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QuizNode>;
};

export type QuizProblemNode = Node & {
  __typename?: "QuizProblemNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  problemId: Scalars["UUID"]["output"];
  quiz: QuizNode;
  weight: Scalars["Decimal"]["output"];
};

export type QuizProblemNodeConnection = {
  __typename?: "QuizProblemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuizProblemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `QuizProblemNode` and its cursor. */
export type QuizProblemNodeEdge = {
  __typename?: "QuizProblemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QuizProblemNode>;
};

export type QuizSettingInput = {
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  maxGrade?: InputMaybe<Scalars["Decimal"]["input"]>;
  numberOfProblems?: InputMaybe<Scalars["Int"]["input"]>;
  passingGrade?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type QuizUnitGradeSettingNode = Node & {
  __typename?: "QuizUnitGradeSettingNode";
  courseGradingSetting: CourseGradeSettingNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isExam: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  quizUnit?: Maybe<QuizUnitNode>;
  shortName?: Maybe<Scalars["String"]["output"]>;
  weight: Scalars["Decimal"]["output"];
};

export type QuizUnitGradeSettingNodeConnection = {
  __typename?: "QuizUnitGradeSettingNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuizUnitGradeSettingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `QuizUnitGradeSettingNode` and its cursor. */
export type QuizUnitGradeSettingNodeEdge = {
  __typename?: "QuizUnitGradeSettingNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QuizUnitGradeSettingNode>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNode = Node & {
  __typename?: "QuizUnitNode";
  activity: ActivityNode;
  addingAiContentInProgress?: Maybe<Scalars["Boolean"]["output"]>;
  aiSuggestedDefinitions: AiSuggestedDefinitionNodeConnection;
  aiSuggestedLos: AiSuggestedLosNodeConnection;
  aiSuggestedMcqs: AiSuggestedMultipleChoiceQuestionNodeConnection;
  aiSuggestedText: AiSuggestedTextNodeConnection;
  aiSuggestionAsyncTaskResult?: Maybe<AiSuggestionAsyncTaskResultNodeConnection>;
  allowedAttempts?: Maybe<Scalars["Int"]["output"]>;
  author?: Maybe<ContentAuthorNode>;
  children?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  childrenIncludeDeleted?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  examunit?: Maybe<ExamUnitNode>;
  hide: Scalars["Boolean"]["output"];
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  losresourceSet: LosResourceNodeConnection;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  numberOfProblems?: Maybe<Scalars["Int"]["output"]>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  passingGrade?: Maybe<Scalars["Float"]["output"]>;
  previous?: Maybe<CourseBlockUnion>;
  quiz: PostAssessmentQuizNode;
  quizunit?: Maybe<QuizUnitNode>;
  quizunitgradesetting?: Maybe<QuizUnitGradeSettingNode>;
  resourceSet?: Maybe<ResourceConnection>;
  resourceobjectSet: ResourceObjectNodeConnection;
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  unitPtr: UnitNode;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeAiSuggestedDefinitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeAiSuggestedLosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeAiSuggestedMcqsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeAiSuggestedTextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeAiSuggestionAsyncTaskResultArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<SalalemAiSuggestionsAiSuggestionAsyncTaskResultStatusChoices>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeChildrenArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  viewOnly: Scalars["Boolean"]["input"];
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeLosresourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeResourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `QuizUnit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type QuizUnitNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuizUnitNodeConnection = {
  __typename?: "QuizUnitNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuizUnitNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `QuizUnitNode` and its cursor. */
export type QuizUnitNodeEdge = {
  __typename?: "QuizUnitNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QuizUnitNode>;
};

/** An enumeration. */
export enum QuizzingExamLanguageChoices {
  /** Arabic */
  Ar = "AR",
  /** English */
  En = "EN",
  /** French */
  Fr = "FR",
}

/** An enumeration. */
export enum QuizzingExamTypeChoices {
  /** fixed order */
  FixedOrder = "FIXED_ORDER",
  /** personalized */
  Personalized = "PERSONALIZED",
  /** static */
  Static = "STATIC",
}

/** An enumeration. */
export enum QuizzingQuizQuizTypeChoices {
  /** forms */
  Forms = "FORMS",
  /** random */
  Random = "RANDOM",
  /** static */
  Static = "STATIC",
  /** variants */
  Variants = "VARIANTS",
}

/** An enumeration. */
export enum QuizzingUserQuizAttemptStatusChoices {
  /** Created */
  C = "C",
  /** Started */
  S = "S",
  /** Submitted */
  T = "T",
}

export type QuoteNode = Node & {
  __typename?: "QuoteNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  language: GamificationQuoteLanguageChoices;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
};

export type QuoteNodeConnection = {
  __typename?: "QuoteNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuoteNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `QuoteNode` and its cursor. */
export type QuoteNodeEdge = {
  __typename?: "QuoteNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<QuoteNode>;
};

export type ReferResource = {
  __typename?: "ReferResource";
  resource?: Maybe<ResourceObjectUnion>;
};

export type ReferenceNode = Node & {
  __typename?: "ReferenceNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
};

export type ReferenceNodeConnection = {
  __typename?: "ReferenceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReferenceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ReferenceNode` and its cursor. */
export type ReferenceNodeEdge = {
  __typename?: "ReferenceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ReferenceNode>;
};

export type ReferenceObjectUnion =
  | BookReferenceResourceNode
  | PastPaperReferenceResourceNode
  | ReferenceNode
  | TeacherReferenceResourceNode;

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
};

export type RegenerateCertificate = {
  __typename?: "RegenerateCertificate";
  certificate?: Maybe<CertificateNode>;
};

export type RegisterDevice = {
  __typename?: "RegisterDevice";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RejectAllExamCompetitionProblemSuggestions = {
  __typename?: "RejectAllExamCompetitionProblemSuggestions";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RejectExamCProblemSuggestions = {
  __typename?: "RejectExamCProblemSuggestions";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RejectExamCompetitionProblemSuggestion = {
  __typename?: "RejectExamCompetitionProblemSuggestion";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveClientResourceFromLos = {
  __typename?: "RemoveClientResourceFromLOS";
  losResource?: Maybe<LosResourceNode>;
  resource?: Maybe<ResourceObjectUnion>;
};

export type RemoveCompetencyFromEnterpriseCustomer = {
  __typename?: "RemoveCompetencyFromEnterpriseCustomer";
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
};

export type RemoveCompetencyFromJobRole = {
  __typename?: "RemoveCompetencyFromJobRole";
  jobRole?: Maybe<JobRoleNode>;
};

export type RemoveCompetencyFromUser = {
  __typename?: "RemoveCompetencyFromUser";
  user?: Maybe<UserNode>;
};

export type RemoveCourse = {
  __typename?: "RemoveCourse";
  client?: Maybe<ClientNode>;
};

export type RemoveCourseFromCompetencySkill = {
  __typename?: "RemoveCourseFromCompetencySkill";
  skill?: Maybe<CompetencySkillNode>;
};

export type RemoveCourseTeamMember = {
  __typename?: "RemoveCourseTeamMember";
  courseTeam?: Maybe<CourseTeamNode>;
};

export type RemoveCuePointFromVideoBlock = {
  __typename?: "RemoveCuePointFromVideoBlock";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveDefinitionBlockFromUnit = {
  __typename?: "RemoveDefinitionBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveEnterpriseCustomerSubscription = {
  __typename?: "RemoveEnterpriseCustomerSubscription";
  enterpriseCustomerSubscription?: Maybe<EnterpriseCustomerSubscriptionNode>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveExamFromClient = {
  __typename?: "RemoveExamFromClient";
  client?: Maybe<ClientNode>;
};

export type RemoveExternalActivity = {
  __typename?: "RemoveExternalActivity";
  client?: Maybe<ClientNode>;
};

export type RemoveHtmlBlockFromUnit = {
  __typename?: "RemoveHTMLBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveItemsFromUndefinedActivityCompletionChecklist = {
  __typename?: "RemoveItemsFromUndefinedActivityCompletionChecklist";
  undefinedActivityCompletionChecklist?: Maybe<UndefinedActivityCompletionChecklistNode>;
};

export type RemoveLosBlockFromUnit = {
  __typename?: "RemoveLOSBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveLosFromQuiz = {
  __typename?: "RemoveLOSFromQuiz";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveLevelFromCompetency = {
  __typename?: "RemoveLevelFromCompetency";
  competency?: Maybe<CompetencyNode>;
};

export type RemoveLinkBlockFromUnit = {
  __typename?: "RemoveLinkBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveMultipleChoiceQuestionBlockFromUnit = {
  __typename?: "RemoveMultipleChoiceQuestionBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemovePdfBlockFromUnit = {
  __typename?: "RemovePDFBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveProblemFromQuiz = {
  __typename?: "RemoveProblemFromQuiz";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveProductBookmark = {
  __typename?: "RemoveProductBookmark";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveProductFromLearningPlanSection = {
  __typename?: "RemoveProductFromLearningPlanSection";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveProductFromPClientCatalog = {
  __typename?: "RemoveProductFromPClientCatalog";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveProductFromProductsPackage = {
  __typename?: "RemoveProductFromProductsPackage";
  productsPackage?: Maybe<ProductsPackageNode>;
};

export type RemoveProductFromTrainingProgramSection = {
  __typename?: "RemoveProductFromTrainingProgramSection";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveProductsFromCompetencyProductsCollection = {
  __typename?: "RemoveProductsFromCompetencyProductsCollection";
  competencyProductsCollection?: Maybe<CompetencyProductsCollectionNode>;
};

export type RemoveResourceBlock = {
  __typename?: "RemoveResourceBlock";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveResourceFromConcept = {
  __typename?: "RemoveResourceFromConcept";
  concept?: Maybe<ConceptResourceNode>;
};

export type RemoveResourceFromLos = {
  __typename?: "RemoveResourceFromLOS";
  los?: Maybe<LosResourceNode>;
  resource?: Maybe<ResourceObjectUnion>;
};

export type RemoveSkillFromCompetencyLevel = {
  __typename?: "RemoveSkillFromCompetencyLevel";
  competencyLevel?: Maybe<CompetencyLevelNode>;
};

export type RemoveSocialAuth = {
  __typename?: "RemoveSocialAuth";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveSubtitleFromVideo = {
  __typename?: "RemoveSubtitleFromVideo";
  video?: Maybe<VideoResourceNode>;
};

export type RemoveSupervisorsFromEmployeeGroup = {
  __typename?: "RemoveSupervisorsFromEmployeeGroup";
  employeeGroup?: Maybe<EmployeeGroupNode>;
};

export type RemoveTextBlockFromUnit = {
  __typename?: "RemoveTextBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveUserFromClient = {
  __typename?: "RemoveUserFromClient";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RemoveUsersFromCampaign = {
  __typename?: "RemoveUsersFromCampaign";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type RemoveUsersFromCompetition = {
  __typename?: "RemoveUsersFromCompetition";
  competition?: Maybe<CompetitionUnion>;
};

export type RemoveUsersFromEmployeeGroup = {
  __typename?: "RemoveUsersFromEmployeeGroup";
  employeeGroup?: Maybe<EmployeeGroupNode>;
};

export type RemoveUsersFromSurvey = {
  __typename?: "RemoveUsersFromSurvey";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type RemoveVideoBlockFromUnit = {
  __typename?: "RemoveVideoBlockFromUnit";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RenewEnterpriseCustomerSubscription = {
  __typename?: "RenewEnterpriseCustomerSubscription";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ReportDataConnectionNodeConnection = {
  __typename?: "ReportDataConnectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReportDataConnectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ReportDataConnectionNode` and its cursor. */
export type ReportDataConnectionNodeEdge = {
  __typename?: "ReportDataConnectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ReportDataNode>;
};

export type ReportDataNode = {
  __typename?: "ReportDataNode";
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["Int"]["output"]>;
};

export type ReportSearchRecordConnection = {
  __typename?: "ReportSearchRecordConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReportSearchRecordEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ReportSearchRecord` and its cursor. */
export type ReportSearchRecordEdge = {
  __typename?: "ReportSearchRecordEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ReportSearchRecordNode>;
};

export type ReportSearchRecordNode = {
  __typename?: "ReportSearchRecordNode";
  /** Number of people that didn't interactwith the activity at all */
  absentCount?: Maybe<Scalars["Int"]["output"]>;
  /** Number of people enrolled with this activity */
  enrolledCount?: Maybe<Scalars["Int"]["output"]>;
  extraFields?: Maybe<Scalars["JSONString"]["output"]>;
  /** Id of the search result object, to be used for getting object details. */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Number of people that started taking the activity, whether they failed or passed. */
  performedCount?: Maybe<Scalars["Int"]["output"]>;
  /** Image of search record returned, could be thumbnail of product, or user image. */
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  /** Main title of interest for search record */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Type of search record returned */
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ReportsAuditEntryNode = Node & {
  __typename?: "ReportsAuditEntryNode";
  created: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  downloadUrl?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  requestedBy: UserNode;
  requestedForClient: ClientNode;
  /** Celery ID for the Task that was run */
  taskId: Scalars["String"]["output"];
  timeTaken?: Maybe<Scalars["Float"]["output"]>;
  type: ReportsAuditReportsAuditEntryTypeChoices;
  xlsFile?: Maybe<Scalars["String"]["output"]>;
};

export type ReportsAuditEntryNodeConnection = {
  __typename?: "ReportsAuditEntryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReportsAuditEntryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ReportsAuditEntryNode` and its cursor. */
export type ReportsAuditEntryNodeEdge = {
  __typename?: "ReportsAuditEntryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ReportsAuditEntryNode>;
};

/** An enumeration. */
export enum ReportsAuditReportsAuditEntryTypeChoices {
  /** Assignments Report */
  AssignmentsReport = "ASSIGNMENTS_REPORT",
  /** Mass Registration Report */
  MassRegistrationReport = "MASS_REGISTRATION_REPORT",
  /** Product Requests Report */
  ProductRequestReport = "PRODUCT_REQUEST_REPORT",
  /** Users Report */
  UsersReport = "USERS_REPORT",
}

export type RequestAssignmentCompletion = {
  __typename?: "RequestAssignmentCompletion";
  request?: Maybe<AssignmentCompletionRequestNode>;
};

/** An enumeration. */
export enum RequestAssignmentCompletionRequestStatusChoices {
  /** accepted */
  Accepted = "ACCEPTED",
  /** deleted */
  Deleted = "DELETED",
  /** pending */
  Pending = "PENDING",
  /** rejected */
  Rejected = "REJECTED",
}

export type RequestAssignmentExtension = {
  __typename?: "RequestAssignmentExtension";
  request?: Maybe<AssignmentExtensionRequestNode>;
};

/** An enumeration. */
export enum RequestAssignmentExtensionRequestStatusChoices {
  /** accepted */
  Accepted = "ACCEPTED",
  /** deleted */
  Deleted = "DELETED",
  /** pending */
  Pending = "PENDING",
  /** rejected */
  Rejected = "REJECTED",
}

export type RequestConnection = {
  __typename?: "RequestConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RequestEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `Request` and its cursor. */
export type RequestEdge = {
  __typename?: "RequestEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<RequestUnion>;
};

/** Mutation to request an OTP for authentication via WhatsApp. */
export type RequestPhoneOtp = {
  __typename?: "RequestPhoneOTP";
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Mutation to request a verification code for a phone number. */
export type RequestPhoneVerification = {
  __typename?: "RequestPhoneVerification";
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RequestProduct = {
  __typename?: "RequestProduct";
  request?: Maybe<ProductRequestNode>;
};

/** An enumeration. */
export enum RequestProductRequestActivityTypeChoices {
  /** Course */
  Course = "COURSE",
  /** Exam */
  Exam = "EXAM",
  /** Workshop */
  Workshop = "WORKSHOP",
}

/** An enumeration. */
export enum RequestProductRequestStatusChoices {
  /** accepted */
  Accepted = "ACCEPTED",
  /** deleted */
  Deleted = "DELETED",
  /** pending */
  Pending = "PENDING",
  /** rejected */
  Rejected = "REJECTED",
}

/** An enumeration. */
export enum RequestStatusesEnum {
  Accepted = "accepted",
  Deleted = "deleted",
  Pending = "pending",
  Rejected = "rejected",
}

/** An enumeration. */
export enum RequestTypesEnum {
  AssignmentCompletionRequest = "AssignmentCompletionRequest",
  AssignmentExtensionRequest = "AssignmentExtensionRequest",
  ProductRequest = "ProductRequest",
}

export type RequestUnion =
  | AssignmentCompletionRequestNode
  | AssignmentExtensionRequestNode
  | ProductRequestNode;

export type ResetCourseAssignment = {
  __typename?: "ResetCourseAssignment";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ResetEnterpriseCustomerSubscriptionRenewedStatus = {
  __typename?: "ResetEnterpriseCustomerSubscriptionRenewedStatus";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ResetPassword = {
  __typename?: "ResetPassword";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ResetPasswordRequestToken = {
  __typename?: "ResetPasswordRequestToken";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ResetPasswordValidateToken = {
  __typename?: "ResetPasswordValidateToken";
  extra?: Maybe<Scalars["JSONString"]["output"]>;
  isValid?: Maybe<Scalars["Boolean"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
};

export type ResourceBlockInput = {
  resourceBlockData: CourseBlockInput;
  resourceBlockPoints?: InputMaybe<Scalars["Int"]["input"]>;
  resourceId: Scalars["ID"]["input"];
};

/**
 * Representation of the `StructureBlock` in the graph
 *
 * Attributes:
 *     type (graphene.String()): Tells graphene to retreive the field `type` that represents the sub-type of
 *         the `CourseResourceBlock` since it does not automatically pick it because it is a python field and django only
 *         picks django fields for now. It also tells graphene that this field should be represented as a string for
 *         querying purposes.
 * order (graphene.String()): Tells graphene to retreive the field `order` which represents the
 *     order of this node in the course structure relative to it's parent  since it does not automatically pick it
 *     because it is a python field and django only picks django fields for now. It also tells graphene that this field
 *     should be represented as a string for querying purposes.
 */
export type ResourceBlockNode = Node & {
  __typename?: "ResourceBlockNode";
  activity: ActivityNode;
  aiproofreadingsuggestionSet: AiProofReadingSuggestionNodeConnection;
  author?: Maybe<ContentAuthorNode>;
  chapter?: Maybe<ChapterNode>;
  children: CourseBlockNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  course?: Maybe<CourseNode>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  definitionblock?: Maybe<DefinitionBlockNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  htmlblock?: Maybe<HtmlBlockNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  linkblock?: Maybe<LinkBlockNode>;
  losblock?: Maybe<LosBlockNode>;
  modified: Scalars["DateTime"]["output"];
  multiplechoicequestionblock?: Maybe<MultipleChoiceQuestionBlockNode>;
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  pdfblock?: Maybe<PdfBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  section?: Maybe<SectionNode>;
  status: CourseStructureCourseBlockStatusChoices;
  textblock?: Maybe<TextBlockNode>;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<UnitNode>;
  videoblock?: Maybe<VideoBlockNode>;
};

/**
 * Representation of the `StructureBlock` in the graph
 *
 * Attributes:
 *     type (graphene.String()): Tells graphene to retreive the field `type` that represents the sub-type of
 *         the `CourseResourceBlock` since it does not automatically pick it because it is a python field and django only
 *         picks django fields for now. It also tells graphene that this field should be represented as a string for
 *         querying purposes.
 * order (graphene.String()): Tells graphene to retreive the field `order` which represents the
 *     order of this node in the course structure relative to it's parent  since it does not automatically pick it
 *     because it is a python field and django only picks django fields for now. It also tells graphene that this field
 *     should be represented as a string for querying purposes.
 */
export type ResourceBlockNodeAiproofreadingsuggestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the `StructureBlock` in the graph
 *
 * Attributes:
 *     type (graphene.String()): Tells graphene to retreive the field `type` that represents the sub-type of
 *         the `CourseResourceBlock` since it does not automatically pick it because it is a python field and django only
 *         picks django fields for now. It also tells graphene that this field should be represented as a string for
 *         querying purposes.
 * order (graphene.String()): Tells graphene to retreive the field `order` which represents the
 *     order of this node in the course structure relative to it's parent  since it does not automatically pick it
 *     because it is a python field and django only picks django fields for now. It also tells graphene that this field
 *     should be represented as a string for querying purposes.
 */
export type ResourceBlockNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResourceConnection = {
  __typename?: "ResourceConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResourceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `Resource` and its cursor. */
export type ResourceEdge = {
  __typename?: "ResourceEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ResourceObjectUnion>;
};

export type ResourceInput = {
  authorId?: InputMaybe<Scalars["ID"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  licenseId?: InputMaybe<Scalars["ID"]["input"]>;
  title: Scalars["String"]["input"];
};

export type ResourceObjectNode = Node & {
  __typename?: "ResourceObjectNode";
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  title: Scalars["String"]["output"];
};

export type ResourceObjectNodeConnection = {
  __typename?: "ResourceObjectNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResourceObjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `ResourceObjectNode` and its cursor. */
export type ResourceObjectNodeEdge = {
  __typename?: "ResourceObjectNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ResourceObjectNode>;
};

/** An enumeration. */
export enum ResourceObjectTypeEnum {
  AudioResource = "AudioResource",
  BookReference = "BookReference",
  ChoiceAnswer = "ChoiceAnswer",
  ConceptResource = "ConceptResource",
  ExplanationResource = "ExplanationResource",
  ImageResource = "ImageResource",
  LosResource = "LOSResource",
  LinkResource = "LinkResource",
  MultipleChoiceQuestion = "MultipleChoiceQuestion",
  MultipleChoiceSelectionQuestion = "MultipleChoiceSelectionQuestion",
  PdfResource = "PDFResource",
  PastPaperReference = "PastPaperReference",
  Problem = "Problem",
  QuestionIdeaResource = "QuestionIdeaResource",
  TeacherReference = "TeacherReference",
  TrueFalseQuestion = "TrueFalseQuestion",
  VideoResource = "VideoResource",
  VideoSubtitleResource = "VideoSubtitleResource",
}

export type ResourceObjectUnion =
  | BookReferenceResourceNode
  | ChoiceAnswerResourceNode
  | ClientResourceNode
  | ConceptResourceNode
  | DefinitionResourceNode
  | ExplanationResourceNode
  | ImageResourceNode
  | LosResourceNode
  | LinkResourceNode
  | MultipleChoiceQuestionResourceNode
  | MultipleChoiceSelectionQuestionResourceNode
  | PdfResourceNode
  | PastPaperReferenceResourceNode
  | ResourceObjectNode
  | TeacherReferenceResourceNode
  | TextResourceNode
  | VideoResourceNode
  | VideoSubtitleResourceNode;

/** An enumeration. */
export enum ResourceTypesEnum {
  Los = "LOS",
  McQuestion = "MC_QUESTION",
}

export type ResourceWeightInput = {
  /** **FOR QUESTION RESOURCE**Estimated answer time in seconds */
  answerTime?: InputMaybe<Scalars["Int"]["input"]>;
  resourceId: Scalars["ID"]["input"];
  weight: Scalars["Int"]["input"];
};

export type RetakeExamCompetition = {
  __typename?: "RetakeExamCompetition";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ReviewProduct = {
  __typename?: "ReviewProduct";
  productReview?: Maybe<ProductReviewNode>;
};

export type SNode = Node & {
  __typename?: "SNode";
  allowedAttempts: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  duration: Scalars["Float"]["output"];
  exam: ExamNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  maxGrade: Scalars["Decimal"]["output"];
  modified: Scalars["DateTime"]["output"];
  numberOfProblems: Scalars["Int"]["output"];
  passingGrade: Scalars["Decimal"]["output"];
  recommendedTimeToFinish: Scalars["Float"]["output"];
};

/** An enumeration. */
export enum SalalemAiSuggestionsAiSuggestionAsyncTaskResultStatusChoices {
  /** Failure */
  Failure = "FAILURE",
  /** Pending */
  Pending = "PENDING",
  /** Retry */
  Retry = "RETRY",
  /** Revoked */
  Revoked = "REVOKED",
  /** Started */
  Started = "STARTED",
  /** Success */
  Success = "SUCCESS",
}

/** An enumeration. */
export enum SalalemAiSuggestionsAiSuggestionAsyncTaskResultTypeChoices {
  /** Competition Content Suggestion */
  CompetitionContentSuggestion = "COMPETITION_CONTENT_SUGGESTION",
  /** Course Content Suggestion */
  CourseContentSuggestion = "COURSE_CONTENT_SUGGESTION",
  /** Exam Content Suggestion */
  ExamContentSuggestion = "EXAM_CONTENT_SUGGESTION",
}

/**
 * Representation of the structure block `Section` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type SectionNode = Node & {
  __typename?: "SectionNode";
  activity: ActivityNode;
  children?: Maybe<Array<Maybe<UnitNode>>>;
  childrenIncludeDeleted?: Maybe<Array<Maybe<UnitNode>>>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  previous?: Maybe<CourseBlockUnion>;
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

/** An enumeration. */
export enum SectorChoicesEnum {
  AgricultureAndForestry = "agriculture_and_forestry",
  Automotive = "automotive",
  BankingAndFinance = "banking_and_finance",
  Biotechnology = "biotechnology",
  Chemicals = "chemicals",
  Construction = "construction",
  ConsumerGoods = "consumer_goods",
  Education = "education",
  EnergyAndUtilities = "energy_and_utilities",
  EntertainmentAndMedia = "entertainment_and_media",
  FoodAndBeverage = "food_and_beverage",
  GovernmentAndPublicSector = "government_and_public_sector",
  Healthcare = "healthcare",
  HospitalityAndTourism = "hospitality_and_tourism",
  InformationTechnology = "information_technology",
  Insurance = "insurance",
  Manufacturing = "manufacturing",
  MiningAndMetals = "mining_and_metals",
  Pharmaceuticals = "pharmaceuticals",
  RealEstate = "real_estate",
  Retail = "retail",
  Telecommunications = "telecommunications",
  TransportationAndLogistics = "transportation_and_logistics",
  WholesaleAndDistribution = "wholesale_and_distribution",
}

export type SelfAssignCourse = {
  __typename?: "SelfAssignCourse";
  courseAssignment?: Maybe<CourseAssignmentNode>;
};

export type SendActivationEmail = {
  __typename?: "SendActivationEmail";
  user?: Maybe<UserNode>;
};

export type SendBulkUserInfo = {
  __typename?: "SendBulkUserInfo";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type SendCongratulation = {
  __typename?: "SendCongratulation";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SendCustomEmailNotificationToCampaignUsers = {
  __typename?: "SendCustomEmailNotificationToCampaignUsers";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SendReminder = {
  __typename?: "SendReminder";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SendReminderToCampaignUsers = {
  __typename?: "SendReminderToCampaignUsers";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SendReminderToCampaignUsersVersion2 = {
  __typename?: "SendReminderToCampaignUsersVersion2";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SetAiSuggestedCourseTitle = {
  __typename?: "SetAISuggestedCourseTitle";
  suggestedCourse?: Maybe<AiCourseSuggestionNode>;
};

export type SetClientLosResource = {
  __typename?: "SetClientLOSResource";
  resource?: Maybe<ResourceObjectUnion>;
};

export type SetClientVideoResourceTranscript = {
  __typename?: "SetClientVideoResourceTranscript";
  videoSubtitle?: Maybe<VideoSubtitleResourceNode>;
};

export type SetDefaultClientForUser = {
  __typename?: "SetDefaultClientForUser";
  record?: Maybe<DefaultUserClientNode>;
};

export type SetExamProblems = {
  __typename?: "SetExamProblems";
  exam?: Maybe<ExamNode>;
};

export type SetTrainingProgramCampaignActivitiesFields = {
  __typename?: "SetTrainingProgramCampaignActivitiesFields";
  campaign?: Maybe<CampaignNode>;
};

export type SetWeeklyGoal = {
  __typename?: "SetWeeklyGoal";
  weeklyGoal?: Maybe<UserWeeklyGoalNode>;
};

export type SettingsInputNode = {
  after?: InputMaybe<Scalars["Int"]["input"]>;
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SkipCurrentProblem = {
  __typename?: "SkipCurrentProblem";
  examCompetitionAssignment?: Maybe<ExamCompetitionAssignmentNode>;
};

export type SocialType = {
  __typename?: "SocialType";
  created: Scalars["DateTime"]["output"];
  extraData?: Maybe<Scalars["SocialCamelJSON"]["output"]>;
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  provider: Scalars["String"]["output"];
  uid: Scalars["String"]["output"];
  user: UserNode;
};

export type StartCompetition = {
  __typename?: "StartCompetition";
  examCompetitionAssignment?: Maybe<ExamCompetitionAssignmentNode>;
};

export type StartQuiz = {
  __typename?: "StartQuiz";
  learnerQuiz?: Maybe<ExamAttemptNode>;
};

export type StatementNode = Node & {
  __typename?: "StatementNode";
  actor: ActorNode;
  attachments: Array<AttachmentsNode>;
  authority?: Maybe<ActorNode>;
  contextCaCategory: ActivityNodeConnection;
  contextCaGrouping: ActivityNodeConnection;
  contextCaOther: ActivityNodeConnection;
  contextCaParent: ActivityNodeConnection;
  contextExtensions?: Maybe<Scalars["String"]["output"]>;
  contextInstructor?: Maybe<AgentNode>;
  contextLanguage: Scalars["String"]["output"];
  contextPlatform: Scalars["String"]["output"];
  contextRegistration: Scalars["UUID"]["output"];
  contextRevision: Scalars["String"]["output"];
  contextStatement: Scalars["String"]["output"];
  contextTeam?: Maybe<AgentNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  object: ObjectNode;
  resultCompletion?: Maybe<Scalars["Boolean"]["output"]>;
  resultDuration?: Maybe<Scalars["Float"]["output"]>;
  resultExtensions?: Maybe<Scalars["String"]["output"]>;
  resultResponse: Scalars["String"]["output"];
  resultScoreMax?: Maybe<Scalars["Float"]["output"]>;
  resultScoreMin?: Maybe<Scalars["Float"]["output"]>;
  resultScoreRaw?: Maybe<Scalars["Float"]["output"]>;
  resultScoreScaled?: Maybe<Scalars["Float"]["output"]>;
  resultSuccess?: Maybe<Scalars["Boolean"]["output"]>;
  stored: Scalars["DateTime"]["output"];
  timestamp: Scalars["DateTime"]["output"];
  tmpCa?: Maybe<ContextActivityNode>;
  useronboardingcheckitemSet: UserOnboardingCheckItemNodeConnection;
  usersurveycheckitemSet: UserSurveyCheckItemNodeConnection;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  usertutorialcheckitemSet: UserTutorialCheckItemNodeConnection;
  verb: VerbNode;
  version: Scalars["String"]["output"];
  voided?: Maybe<Scalars["Boolean"]["output"]>;
};

export type StatementNodeContextCaCategoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatementNodeContextCaGroupingArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatementNodeContextCaOtherArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatementNodeContextCaParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatementNodeUseronboardingcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatementNodeUsersurveycheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  checkItem_IsActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<ChecklistUserSurveyCheckItemStatusChoices>;
};

export type StatementNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type StatementNodeUsertutorialcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  checkItem_Platform?: InputMaybe<ChecklistTutorialCheckItemPlatformChoices>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<ChecklistUserTutorialCheckItemStatusChoices>;
};

export type StatementNodeConnection = {
  __typename?: "StatementNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StatementNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `StatementNode` and its cursor. */
export type StatementNodeEdge = {
  __typename?: "StatementNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<StatementNode>;
};

export type StatementRefNode = {
  __typename?: "StatementRefNode";
  id: Scalars["UUID"]["output"];
};

export type StepNode = Node & {
  __typename?: "StepNode";
  approvers: UserNodeConnection;
  commentSet: CommentNodeConnection;
  created: Scalars["DateTime"]["output"];
  dependents: StepNodeConnection;
  dependsOn: StepNodeConnection;
  description: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  notifiedUsers: UserNodeConnection;
  order: Scalars["Int"]["output"];
  responsibleUsers: UserNodeConnection;
  status: CourseWorkflowCourseProductionStepStatusChoices;
  title: Scalars["String"]["output"];
  workflow: WorkFlowNode;
};

export type StepNodeApproversArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepNodeCommentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepNodeDependentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepNodeDependsOnArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepNodeNotifiedUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepNodeResponsibleUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepNodeConnection = {
  __typename?: "StepNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StepNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `StepNode` and its cursor. */
export type StepNodeEdge = {
  __typename?: "StepNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<StepNode>;
};

export type StepTemplateNode = Node & {
  __typename?: "StepTemplateNode";
  approvers: UserNodeConnection;
  created: Scalars["DateTime"]["output"];
  dependents: StepTemplateNodeConnection;
  dependsOn: StepTemplateNodeConnection;
  description: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  notifiedUsers: UserNodeConnection;
  order: Scalars["Int"]["output"];
  responsibleUsers: UserNodeConnection;
  status: CourseWorkflowCourseProductionStepTemplateStatusChoices;
  title: Scalars["String"]["output"];
  workflowTemplate: TemplateNode;
};

export type StepTemplateNodeApproversArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepTemplateNodeDependentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepTemplateNodeDependsOnArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepTemplateNodeNotifiedUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepTemplateNodeResponsibleUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StepTemplateNodeConnection = {
  __typename?: "StepTemplateNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StepTemplateNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `StepTemplateNode` and its cursor. */
export type StepTemplateNodeEdge = {
  __typename?: "StepTemplateNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<StepTemplateNode>;
};

/**
 * Representation of the `StructureBlock` in the graph
 *
 * Attributes:
 *     type (graphene.String()): Tells graphene to retreive the field `type` that represents the sub-type of
 *         the `CourseStructureBlock` since it does not automatically pick it because it is a python field and django only
 *         picks django fields for now. It also tells graphene that this field should be represented as a string for
 *         querying purposes.
 * order (graphene.String()): Tells graphene to retreive the field `order` which represents the
 *     order of this node in the course structure relative to it's parent  since it does not automatically pick it
 *     because it is a python field and django only picks django fields for now. It also tells graphene that this field
 *     should be represented as a string for querying purposes.
 */
export type StructureBlockNode = Node & {
  __typename?: "StructureBlockNode";
  activity: ActivityNode;
  aiproofreadingsuggestionSet: AiProofReadingSuggestionNodeConnection;
  author?: Maybe<ContentAuthorNode>;
  chapter?: Maybe<ChapterNode>;
  children: CourseBlockNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  course?: Maybe<CourseNode>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  definitionblock?: Maybe<DefinitionBlockNode>;
  hide: Scalars["Boolean"]["output"];
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  htmlblock?: Maybe<HtmlBlockNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  linkblock?: Maybe<LinkBlockNode>;
  losblock?: Maybe<LosBlockNode>;
  modified: Scalars["DateTime"]["output"];
  multiplechoicequestionblock?: Maybe<MultipleChoiceQuestionBlockNode>;
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  pdfblock?: Maybe<PdfBlockNode>;
  previous?: Maybe<CourseBlockUnion>;
  rght: Scalars["Int"]["output"];
  section?: Maybe<SectionNode>;
  status: CourseStructureCourseBlockStatusChoices;
  textblock?: Maybe<TextBlockNode>;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<UnitNode>;
  videoblock?: Maybe<VideoBlockNode>;
};

/**
 * Representation of the `StructureBlock` in the graph
 *
 * Attributes:
 *     type (graphene.String()): Tells graphene to retreive the field `type` that represents the sub-type of
 *         the `CourseStructureBlock` since it does not automatically pick it because it is a python field and django only
 *         picks django fields for now. It also tells graphene that this field should be represented as a string for
 *         querying purposes.
 * order (graphene.String()): Tells graphene to retreive the field `order` which represents the
 *     order of this node in the course structure relative to it's parent  since it does not automatically pick it
 *     because it is a python field and django only picks django fields for now. It also tells graphene that this field
 *     should be represented as a string for querying purposes.
 */
export type StructureBlockNodeAiproofreadingsuggestionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the `StructureBlock` in the graph
 *
 * Attributes:
 *     type (graphene.String()): Tells graphene to retreive the field `type` that represents the sub-type of
 *         the `CourseStructureBlock` since it does not automatically pick it because it is a python field and django only
 *         picks django fields for now. It also tells graphene that this field should be represented as a string for
 *         querying purposes.
 * order (graphene.String()): Tells graphene to retreive the field `order` which represents the
 *     order of this node in the course structure relative to it's parent  since it does not automatically pick it
 *     because it is a python field and django only picks django fields for now. It also tells graphene that this field
 *     should be represented as a string for querying purposes.
 */
export type StructureBlockNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubStatementNode = {
  __typename?: "SubStatementNode";
  actor: ActorNode;
  attachments?: Maybe<AttachmentsNode>;
  contextCaCategory: ActivityNodeConnection;
  contextCaGrouping: ActivityNodeConnection;
  contextCaOther: ActivityNodeConnection;
  contextCaParent: ActivityNodeConnection;
  contextExtensions?: Maybe<Scalars["String"]["output"]>;
  contextInstructor?: Maybe<AgentNode>;
  contextLanguage: Scalars["String"]["output"];
  contextPlatform: Scalars["String"]["output"];
  contextRegistration: Scalars["UUID"]["output"];
  contextRevision: Scalars["String"]["output"];
  contextStatement: Scalars["String"]["output"];
  contextTeam?: Maybe<AgentNode>;
  id: Scalars["ID"]["output"];
  object: ObjectNode;
  resultCompletion?: Maybe<Scalars["Boolean"]["output"]>;
  resultDuration?: Maybe<Scalars["Float"]["output"]>;
  resultExtensions?: Maybe<Scalars["String"]["output"]>;
  resultResponse: Scalars["String"]["output"];
  resultScoreMax?: Maybe<Scalars["Float"]["output"]>;
  resultScoreMin?: Maybe<Scalars["Float"]["output"]>;
  resultScoreRaw?: Maybe<Scalars["Float"]["output"]>;
  resultScoreScaled?: Maybe<Scalars["Float"]["output"]>;
  resultSuccess?: Maybe<Scalars["Boolean"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
  verb: VerbNode;
};

export type SubStatementNodeContextCaCategoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubStatementNodeContextCaGroupingArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubStatementNodeContextCaOtherArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubStatementNodeContextCaParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubjectAreaNode = Node & {
  __typename?: "SubjectAreaNode";
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type SubjectAreaNodeConnection = {
  __typename?: "SubjectAreaNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubjectAreaNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SubjectAreaNode` and its cursor. */
export type SubjectAreaNodeEdge = {
  __typename?: "SubjectAreaNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<SubjectAreaNode>;
};

export type SubjectSubAreaNode = Node & {
  __typename?: "SubjectSubAreaNode";
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type SubjectSubAreaNodeConnection = {
  __typename?: "SubjectSubAreaNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubjectSubAreaNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SubjectSubAreaNode` and its cursor. */
export type SubjectSubAreaNodeEdge = {
  __typename?: "SubjectSubAreaNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<SubjectSubAreaNode>;
};

export type SubmitAiSuggestedCourseOutline = {
  __typename?: "SubmitAISuggestedCourseOutline";
  suggestedCourse?: Maybe<AiCourseSuggestionNode>;
};

export type SubmitCertificate = {
  __typename?: "SubmitCertificate";
  submittedCertificate?: Maybe<SubmittedCertificateNode>;
};

export type SubmitQuiz = {
  __typename?: "SubmitQuiz";
  learnerQuiz?: Maybe<ExamAttemptNode>;
  recommendedProducts?: Maybe<ProductNodeConnection>;
};

export type SubmitQuizRecommendedProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubmittedCertificateNode = Node & {
  __typename?: "SubmittedCertificateNode";
  created: Scalars["DateTime"]["output"];
  credentialId: Scalars["String"]["output"];
  file?: Maybe<Scalars["String"]["output"]>;
  fileUrl?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  issueDate: Scalars["Date"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  organization: Scalars["String"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type SubmittedCertificateNodeConnection = {
  __typename?: "SubmittedCertificateNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubmittedCertificateNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `SubmittedCertificateNode` and its cursor. */
export type SubmittedCertificateNodeEdge = {
  __typename?: "SubmittedCertificateNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<SubmittedCertificateNode>;
};

export type SubscriptionActivitiesWeightsNode = {
  __typename?: "SubscriptionActivitiesWeightsNode";
  activityType?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type SubscriptionReportNode = {
  __typename?: "SubscriptionReportNode";
  remainingAssignmentsCount?: Maybe<Scalars["Int"]["output"]>;
  runningAssignmentsCount?: Maybe<Scalars["Int"]["output"]>;
};

/**
 * Mutation to suggest AI course titles.
 *
 * Args:
 *     suggested_course_id (str): The ID of the suggested course.
 *
 * Returns:
 *     SuggestAICourseTitles: The mutation result containing the suggested course and titles.
 */
export type SuggestAiCourseTitles = {
  __typename?: "SuggestAICourseTitles";
  suggestedCourse?: Maybe<AiCourseSuggestionNode>;
  titles?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type SuggestDefinitionForUnit = {
  __typename?: "SuggestDefinitionForUnit";
  suggestedDefinition?: Maybe<AiSuggestedDefinitionNode>;
};

export type SuggestExamCompetitionProblem = {
  __typename?: "SuggestExamCompetitionProblem";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type SuggestExamProblem = {
  __typename?: "SuggestExamProblem";
  taskId?: Maybe<Scalars["String"]["output"]>;
};

export type SuggestLosForUnit = {
  __typename?: "SuggestLOSForUnit";
  suggestedLos?: Maybe<AiSuggestedLosNode>;
};

export type SuggestMultipleChoiceQuestionForUnit = {
  __typename?: "SuggestMultipleChoiceQuestionForUnit";
  suggestedMcq?: Maybe<AiSuggestedMultipleChoiceQuestionNode>;
};

export type SuggestSingleExamProblem = {
  __typename?: "SuggestSingleExamProblem";
  errors?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  suggestedProblem?: Maybe<ExamSuggestedExamProblemNode>;
};

export type SuggestTextForUnit = {
  __typename?: "SuggestTextForUnit";
  suggestedText?: Maybe<AiSuggestedTextNode>;
};

export type SyncUserSocialAuth = {
  __typename?: "SyncUserSocialAuth";
  social?: Maybe<SocialType>;
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type TagCourse = {
  __typename?: "TagCourse";
  catalogCourse?: Maybe<CatalogCourseNode>;
};

export type TagNode = Node & {
  __typename?: "TagNode";
  clientSet: ClientNodeConnection;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
};

export type TagNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TagNodeConnection = {
  __typename?: "TagNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TagNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TagNode` and its cursor. */
export type TagNodeEdge = {
  __typename?: "TagNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TagNode>;
};

export type TargetUnion =
  | CourseAssignmentNode
  | ExamAssignmentNode
  | ExternalActivityAssignmentNode
  | UndefinedActivityAssignmentNode
  | UserNode;

export type TaskResultNode = {
  __typename?: "TaskResultNode";
  extraFields?: Maybe<Scalars["String"]["output"]>;
  result?: Maybe<Scalars["String"]["output"]>;
};

export type TeacherReferenceResourceNode = Node & {
  __typename?: "TeacherReferenceResourceNode";
  bookreference?: Maybe<BookReferenceResourceNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  pastpaperreference?: Maybe<PastPaperReferenceResourceNode>;
  referencePtr: ReferenceNode;
  resourceobjectSet: ResourceObjectNodeConnection;
  teacherreference?: Maybe<TeacherReferenceResourceNode>;
  title: Scalars["String"]["output"];
};

export type TeacherReferenceResourceNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type TeacherReferenceResourceNodeConnection = {
  __typename?: "TeacherReferenceResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeacherReferenceResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TeacherReferenceResourceNode` and its cursor. */
export type TeacherReferenceResourceNodeEdge = {
  __typename?: "TeacherReferenceResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TeacherReferenceResourceNode>;
};

export type TemplateNode = Node & {
  __typename?: "TemplateNode";
  courseproductionsteptemplateSet: StepTemplateNodeConnection;
  created: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
};

export type TemplateNodeCourseproductionsteptemplateSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TextBlockNode = Node & {
  __typename?: "TextBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<TextResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type TextResourceNode = Node & {
  __typename?: "TextResourceNode";
  activity?: Maybe<ActivityNode>;
  aisuggestedtextSet: AiSuggestedTextNodeConnection;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  definitionresource?: Maybe<DefinitionResourceNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  textresource?: Maybe<TextResourceNode>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
};

export type TextResourceNodeAisuggestedtextSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TextResourceNodeConnection = {
  __typename?: "TextResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TextResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TextResourceNode` and its cursor. */
export type TextResourceNodeEdge = {
  __typename?: "TextResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TextResourceNode>;
};

export type ToggleNotificationSetting = {
  __typename?: "ToggleNotificationSetting";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ToggleUserDarkMode = {
  __typename?: "ToggleUserDarkMode";
  userProfile?: Maybe<UserProfileUnionType>;
};

export type TrainerNode = Node & {
  __typename?: "TrainerNode";
  clientCatalogLearningActivities?: Maybe<ClientCatalogLearningActivityNodeConnection>;
  created: Scalars["DateTime"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  specialization?: Maybe<Scalars["String"]["output"]>;
  visibleForClient: ClientNodeConnection;
};

export type TrainerNodeClientCatalogLearningActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainerNodeVisibleForClientArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainerNodeConnection = {
  __typename?: "TrainerNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrainerNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TrainerNode` and its cursor. */
export type TrainerNodeEdge = {
  __typename?: "TrainerNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TrainerNode>;
};

export type TrainingAdminRequestProduct = {
  __typename?: "TrainingAdminRequestProduct";
  productRequest?: Maybe<ProductRequestNode>;
};

export type TrainingProductItemAssignmentInput = {
  allowedAttempts: Scalars["Int"]["input"];
  archiveAccess?: InputMaybe<Scalars["Boolean"]["input"]>;
  enableProctoring?: InputMaybe<Scalars["Boolean"]["input"]>;
  graded?: InputMaybe<Scalars["Boolean"]["input"]>;
  minCompletionProgress?: InputMaybe<Scalars["Decimal"]["input"]>;
  startingDate: Scalars["DateTime"]["input"];
  strictMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  trainingProgramItemId: Scalars["ID"]["input"];
  validUntil: Scalars["DateTime"]["input"];
};

export type TrainingProgramBaseObjectNode = Node & {
  __typename?: "TrainingProgramBaseObjectNode";
  children: TrainingProgramBaseObjectNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  parent?: Maybe<TrainingProgramBaseObjectNode>;
  rght: Scalars["Int"]["output"];
  trainingprogram?: Maybe<TrainingProgramNode>;
  trainingprogramitem?: Maybe<TrainingProgramItemNode>;
  trainingprogramsection?: Maybe<TrainingProgramSectionNode>;
  treeId: Scalars["Int"]["output"];
};

export type TrainingProgramBaseObjectNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramBaseObjectNodeConnection = {
  __typename?: "TrainingProgramBaseObjectNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrainingProgramBaseObjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TrainingProgramBaseObjectNode` and its cursor. */
export type TrainingProgramBaseObjectNodeEdge = {
  __typename?: "TrainingProgramBaseObjectNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TrainingProgramBaseObjectNode>;
};

/** An enumeration. */
export enum TrainingProgramBaseObjectPositionEnum {
  FirstChild = "first_child",
  LastChild = "last_child",
  Left = "left",
  Right = "right",
}

export type TrainingProgramItemNode = Node & {
  __typename?: "TrainingProgramItemNode";
  activity: ActivityNode;
  children: TrainingProgramBaseObjectNodeConnection;
  created: Scalars["DateTime"]["output"];
  getTrainingProgramSubscriberItemSettings?: Maybe<TrainingProgramItemSettingsNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  modified: Scalars["DateTime"]["output"];
  parent?: Maybe<TrainingProgramBaseObjectNode>;
  product?: Maybe<ProductNode>;
  rght: Scalars["Int"]["output"];
  trainingprogram?: Maybe<TrainingProgramNode>;
  trainingprogrambaseobjectPtr: TrainingProgramBaseObjectNode;
  trainingprogramitem?: Maybe<TrainingProgramItemNode>;
  trainingprogramitemsettingsSet: TrainingProgramItemSettingsNodeConnection;
  trainingprogramsection?: Maybe<TrainingProgramSectionNode>;
  treeId: Scalars["Int"]["output"];
  usertrainingprogramitemSet?: Maybe<UserTrainingProgramItemNodeConnection>;
};

export type TrainingProgramItemNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramItemNodeGetTrainingProgramSubscriberItemSettingsArgs =
  {
    trainingProgramSubscriberId: Scalars["String"]["input"];
  };

export type TrainingProgramItemNodeTrainingprogramitemsettingsSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramItemNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramItemNodeConnection = {
  __typename?: "TrainingProgramItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrainingProgramItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TrainingProgramItemNode` and its cursor. */
export type TrainingProgramItemNodeEdge = {
  __typename?: "TrainingProgramItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TrainingProgramItemNode>;
};

export type TrainingProgramItemSettingsInputNode = {
  after?: InputMaybe<Scalars["Int"]["input"]>;
  allowedAttempts?: InputMaybe<Scalars["Int"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  trainingProgramItemId: Scalars["ID"]["input"];
};

export type TrainingProgramItemSettingsNode = Node & {
  __typename?: "TrainingProgramItemSettingsNode";
  /** The number of days after the event is triggered */
  after: Scalars["Int"]["output"];
  allowedAttempts: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  duration: Scalars["Int"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  trainingProgramItem: TrainingProgramItemNode;
  trainingProgramSubscriberSettings: TrainingProgramSubscriberSettingsNode;
};

export type TrainingProgramItemSettingsNodeConnection = {
  __typename?: "TrainingProgramItemSettingsNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrainingProgramItemSettingsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TrainingProgramItemSettingsNode` and its cursor. */
export type TrainingProgramItemSettingsNodeEdge = {
  __typename?: "TrainingProgramItemSettingsNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TrainingProgramItemSettingsNode>;
};

export type TrainingProgramNode = Node & {
  __typename?: "TrainingProgramNode";
  /** Course, Exam, and External Activity assignments associated with the **Training Program** */
  assignmentSet?: Maybe<UserTrainingProgramNodeConnection>;
  author?: Maybe<ContentAuthorNode>;
  /** Award summary for a course; list of activity types and the number of points expected to be awarded when completed */
  awardSummary?: Maybe<Array<Maybe<CourseAwardSummaryNode>>>;
  campaignSet?: Maybe<CampaignNodeConnection>;
  children: TrainingProgramBaseObjectNodeConnection;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** Duration of the section in days */
  duration?: Maybe<Scalars["Int"]["output"]>;
  /** User progress in Training Program */
  getUserProgress?: Maybe<Scalars["Float"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  individuallyassignedSet?: Maybe<UserNodeConnection>;
  /** If there exist an active assignment */
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  /** Checks if the training program is assignable */
  isAssignable?: Maybe<Scalars["Boolean"]["output"]>;
  /** True if the user is a guide in one of the activities in this Training program, False otherwise */
  isUserAGuide?: Maybe<Scalars["Boolean"]["output"]>;
  /** True if the user is assigned to this activity, False otherwise */
  isUserAssigned?: Maybe<Scalars["Boolean"]["output"]>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  /** Max reward points for this training program */
  maxRewardPoints?: Maybe<Scalars["Int"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  outcomes: Scalars["String"]["output"];
  /** Sum of all activities cpd in Training Program */
  overallCpd?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<TrainingProgramBaseObjectNode>;
  product?: Maybe<ProductNode>;
  rght: Scalars["Int"]["output"];
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  summary?: Maybe<TrainingProgramSummaryNode>;
  title: Scalars["String"]["output"];
  totalCpd: Scalars["Int"]["output"];
  trainingProgramItems?: Maybe<TrainingProgramItemNodeConnection>;
  trainingProgramSections?: Maybe<TrainingProgramSectionNodeConnection>;
  trainingprogram?: Maybe<TrainingProgramNode>;
  trainingprogrambaseobjectPtr: TrainingProgramBaseObjectNode;
  trainingprogramitem?: Maybe<TrainingProgramItemNode>;
  trainingprogramsection?: Maybe<TrainingProgramSectionNode>;
  treeId: Scalars["Int"]["output"];
  unsubscribedProducts?: Maybe<ProductNodeConnection>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TrainingProgramNodeAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  individual?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<AssignmentStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramNodeDurationArgs = {
  subscriberId: Scalars["ID"]["input"];
};

export type TrainingProgramNodeGetUserProgressArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramNodeIndividuallyassignedSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  enterpriseCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  firstName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  hiringDateFrom?: InputMaybe<Scalars["Date"]["input"]>;
  hiringDateTo?: InputMaybe<Scalars["Date"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  lastName_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  withoutEmployeeGroupLevelId?: InputMaybe<Scalars["String"]["input"]>;
};

export type TrainingProgramNodeIsUserAGuideArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramNodeIsUserAssignedArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramNodeStartingDateArgs = {
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramNodeSummaryArgs = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  individuallyAssignedUser?: InputMaybe<Scalars["Boolean"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type TrainingProgramNodeTrainingProgramItemsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  productTitle?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type TrainingProgramNodeTrainingProgramSectionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramNodeUnsubscribedProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type TrainingProgramNodeValidUntilArgs = {
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramNodeConnection = {
  __typename?: "TrainingProgramNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrainingProgramNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TrainingProgramNode` and its cursor. */
export type TrainingProgramNodeEdge = {
  __typename?: "TrainingProgramNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TrainingProgramNode>;
};

export type TrainingProgramSectionNode = Node & {
  __typename?: "TrainingProgramSectionNode";
  author?: Maybe<ContentAuthorNode>;
  children: TrainingProgramBaseObjectNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** Duration of the section in days */
  duration?: Maybe<Scalars["Int"]["output"]>;
  /** User progress in Training Program section */
  getUserProgress?: Maybe<Scalars["Float"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** If there exist an active assignment */
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  /** Sum of all activities cpd in section */
  overallCpd?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<TrainingProgramBaseObjectNode>;
  rght: Scalars["Int"]["output"];
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  title: Scalars["String"]["output"];
  totalCpd: Scalars["Int"]["output"];
  trainingProgram?: Maybe<TrainingProgramNode>;
  trainingProgramItems?: Maybe<TrainingProgramItemNodeConnection>;
  trainingprogram?: Maybe<TrainingProgramNode>;
  trainingprogrambaseobjectPtr: TrainingProgramBaseObjectNode;
  trainingprogramitem?: Maybe<TrainingProgramItemNode>;
  trainingprogramsection?: Maybe<TrainingProgramSectionNode>;
  treeId: Scalars["Int"]["output"];
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TrainingProgramSectionNodeChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramSectionNodeDurationArgs = {
  subscriberId: Scalars["ID"]["input"];
};

export type TrainingProgramSectionNodeGetUserProgressArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramSectionNodeStartingDateArgs = {
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramSectionNodeTrainingProgramItemsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramSectionNodeValidUntilArgs = {
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TrainingProgramSectionNodeConnection = {
  __typename?: "TrainingProgramSectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrainingProgramSectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TrainingProgramSectionNode` and its cursor. */
export type TrainingProgramSectionNodeEdge = {
  __typename?: "TrainingProgramSectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TrainingProgramSectionNode>;
};

export type TrainingProgramSubscriberSettingsNode = Node & {
  __typename?: "TrainingProgramSubscriberSettingsNode";
  created: Scalars["DateTime"]["output"];
  duration?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  itemsSettings: TrainingProgramItemSettingsNodeConnection;
  modified: Scalars["DateTime"]["output"];
  subscriber: LearningActivitySubscriberNode;
};

export type TrainingProgramSubscriberSettingsNodeItemsSettingsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TrainingProgramSummaryNode = {
  __typename?: "TrainingProgramSummaryNode";
  failed?: Maybe<Scalars["Int"]["output"]>;
  failedPercentage?: Maybe<Scalars["Float"]["output"]>;
  inProgress?: Maybe<Scalars["Int"]["output"]>;
  inProgressPercentage?: Maybe<Scalars["Float"]["output"]>;
  nonPerformedPercentage?: Maybe<Scalars["Float"]["output"]>;
  notStartedYet?: Maybe<Scalars["Int"]["output"]>;
  numberOfLearners?: Maybe<Scalars["Int"]["output"]>;
  overdue?: Maybe<Scalars["Int"]["output"]>;
  passed?: Maybe<Scalars["Int"]["output"]>;
  passedPercentage?: Maybe<Scalars["Float"]["output"]>;
  pending?: Maybe<Scalars["Int"]["output"]>;
  performedPercentage?: Maybe<Scalars["Float"]["output"]>;
  resubmit?: Maybe<Scalars["Int"]["output"]>;
  resubmittedPercentage?: Maybe<Scalars["Float"]["output"]>;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

export type TransactionNode = Node & {
  __typename?: "TransactionNode";
  acquirerMessage?: Maybe<Scalars["String"]["output"]>;
  acquirerRRN?: Maybe<Scalars["String"]["output"]>;
  amount: Scalars["Int"]["output"];
  cartId?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  customerEmail?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  invoiceDownloadUrl?: Maybe<Scalars["String"]["output"]>;
  invoiceId?: Maybe<Scalars["String"]["output"]>;
  invoicePdfFile?: Maybe<Scalars["String"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  responseCode?: Maybe<Scalars["String"]["output"]>;
  responseMessage?: Maybe<Scalars["String"]["output"]>;
  responseStatus: EnterpriseBillingTransactionResponseStatusChoices;
  signature?: Maybe<Scalars["String"]["output"]>;
  subscription: EnterpriseCustomerSubscriptionNode;
  token?: Maybe<Scalars["String"]["output"]>;
  transactionRef?: Maybe<Scalars["String"]["output"]>;
  user: UserNode;
};

export type TransactionNodeConnection = {
  __typename?: "TransactionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TransactionNode` and its cursor. */
export type TransactionNodeEdge = {
  __typename?: "TransactionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TransactionNode>;
};

export type TreeCategoryNode = Node & {
  __typename?: "TreeCategoryNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  treeSet: BodyOfKnowledgeTreeNodeConnection;
};

export type TreeCategoryNodeTreeSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type TreeCategoryNodeConnection = {
  __typename?: "TreeCategoryNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TreeCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TreeCategoryNode` and its cursor. */
export type TreeCategoryNodeEdge = {
  __typename?: "TreeCategoryNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TreeCategoryNode>;
};

export type TreeLosNode = Node & {
  __typename?: "TreeLOSNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  los: LosResourceNode;
  modified: Scalars["DateTime"]["output"];
  treeNodeId: Scalars["UUID"]["output"];
};

export type TreeLosNodeConnection = {
  __typename?: "TreeLOSNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TreeLosNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TreeLOSNode` and its cursor. */
export type TreeLosNodeEdge = {
  __typename?: "TreeLOSNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TreeLosNode>;
};

export type TreeNodeMoveTo = {
  __typename?: "TreeNodeMoveTo";
  node?: Maybe<BodyOfKnowledgeTreeNode>;
};

export type TreeTagNode = Node & {
  __typename?: "TreeTagNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  treeSet: BodyOfKnowledgeTreeNodeConnection;
};

export type TreeTagNodeTreeSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type TreeTagNodeConnection = {
  __typename?: "TreeTagNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TreeTagNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TreeTagNode` and its cursor. */
export type TreeTagNodeEdge = {
  __typename?: "TreeTagNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TreeTagNode>;
};

/** An enumeration. */
export enum TriggerLearningActivitySubscriberEventChoices {
  /** New User Registration */
  NewRegistration = "NEW_REGISTRATION",
}

export type TutorialCheckItemNode = Node & {
  __typename?: "TutorialCheckItemNode";
  activity?: Maybe<ActivityNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  platform: ChecklistTutorialCheckItemPlatformChoices;
  title: Scalars["String"]["output"];
  usertutorialcheckitemSet: UserTutorialCheckItemNodeConnection;
};

export type TutorialCheckItemNodeUsertutorialcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  checkItem_Platform?: InputMaybe<ChecklistTutorialCheckItemPlatformChoices>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<ChecklistUserTutorialCheckItemStatusChoices>;
};

export type TutorialCheckItemNodeConnection = {
  __typename?: "TutorialCheckItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TutorialCheckItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `TutorialCheckItemNode` and its cursor. */
export type TutorialCheckItemNodeEdge = {
  __typename?: "TutorialCheckItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TutorialCheckItemNode>;
};

export type TypeSummaryNode = {
  __typename?: "TypeSummaryNode";
  nonPerformedPercentage?: Maybe<Scalars["Float"]["output"]>;
  numberOfInstances?: Maybe<Scalars["Int"]["output"]>;
  numberOfLearners?: Maybe<Scalars["Int"]["output"]>;
  performedPercentage?: Maybe<Scalars["Float"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** An enumeration. */
export enum Types {
  Boolean = "BOOLEAN",
  File = "FILE",
}

export type UnassignLearner = {
  __typename?: "UnassignLearner";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UndefinedActivityAssignmentCompletionChecklistItemNode = Node & {
  __typename?: "UndefinedActivityAssignmentCompletionChecklistItemNode";
  assignment: UndefinedActivityAssignmentNode;
  created: Scalars["DateTime"]["output"];
  fileUrl: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isCompleted: Scalars["Boolean"]["output"];
  item: UndefinedActivityCompletionChecklistItemNode;
  modified: Scalars["DateTime"]["output"];
};

export type UndefinedActivityAssignmentCompletionChecklistItemNodeConnection = {
  __typename?: "UndefinedActivityAssignmentCompletionChecklistItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<
    Maybe<UndefinedActivityAssignmentCompletionChecklistItemNodeEdge>
  >;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UndefinedActivityAssignmentCompletionChecklistItemNode` and its cursor. */
export type UndefinedActivityAssignmentCompletionChecklistItemNodeEdge = {
  __typename?: "UndefinedActivityAssignmentCompletionChecklistItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UndefinedActivityAssignmentCompletionChecklistItemNode>;
};

export type UndefinedActivityAssignmentNode = Node & {
  __typename?: "UndefinedActivityAssignmentNode";
  active: Scalars["Boolean"]["output"];
  activityType: ExternalActivityUndefinedActivityAssignmentActivityTypeChoices;
  allowedAttempts: Scalars["Int"]["output"];
  assessmentDueTime?: Maybe<Scalars["DateTime"]["output"]>;
  assignmentPtr: AssignmentNode;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestSet: AssignmentExtensionRequestNodeConnection;
  attemptsLeft?: Maybe<Scalars["Int"]["output"]>;
  campaignactivityassignmentSet: CampaignActivityAssignmentNodeConnection;
  canTakeAnAttempt?: Maybe<Scalars["Boolean"]["output"]>;
  certificate?: Maybe<CertificateNode>;
  clientSet: ClientNodeConnection;
  cohort?: Maybe<CohortNode>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  courseassignment?: Maybe<CourseAssignmentNode>;
  created: Scalars["DateTime"]["output"];
  examassignment?: Maybe<ExamAssignmentNode>;
  examattemptSet: ExamAttemptNodeConnection;
  examcompetitionassignment?: Maybe<ExamCompetitionAssignmentNode>;
  externalUrl?: Maybe<Scalars["String"]["output"]>;
  externalactivityassignment?: Maybe<ExternalActivityAssignmentNode>;
  extraInfo?: Maybe<Scalars["String"]["output"]>;
  generateCertificate: Scalars["Boolean"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isPending?: Maybe<Scalars["Boolean"]["output"]>;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  location?: Maybe<Scalars["String"]["output"]>;
  lrsActivity: ActivityNode;
  modified: Scalars["DateTime"]["output"];
  publicassessmentassignment?: Maybe<PublicAssessmentAssignmentNode>;
  rewardedPoints: Scalars["Int"]["output"];
  scheduledTime?: Maybe<Scalars["DateTime"]["output"]>;
  setting?: Maybe<AssignmentSettingNode>;
  startingDate: Scalars["DateTime"]["output"];
  status?: Maybe<LearnerAssignmentAssignmentStatusChoices>;
  statusDisplay?: Maybe<Scalars["String"]["output"]>;
  timeLeftToRetakeAttempt?: Maybe<Scalars["Int"]["output"]>;
  undefinedActivity: UndefinedActivityNode;
  undefinedactivityassignment?: Maybe<UndefinedActivityAssignmentNode>;
  undefinedactivityassignmentcompletionchecklistitemSet: UndefinedActivityAssignmentCompletionChecklistItemNodeConnection;
  user: UserNode;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  validUntil: Scalars["DateTime"]["output"];
  vendor: VendorNode;
};

export type UndefinedActivityAssignmentNodeAssignmentcompletionrequestSetArgs =
  {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
  };

export type UndefinedActivityAssignmentNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type UndefinedActivityAssignmentNodeCampaignactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UndefinedActivityAssignmentNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UndefinedActivityAssignmentNodeExamattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UndefinedActivityAssignmentNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UndefinedActivityAssignmentNodeUndefinedactivityassignmentcompletionchecklistitemSetArgs =
  {
    after?: InputMaybe<Scalars["String"]["input"]>;
    assignmentId?: InputMaybe<Scalars["ID"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    id?: InputMaybe<Scalars["ID"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
  };

export type UndefinedActivityAssignmentNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UndefinedActivityAssignmentNodeConnection = {
  __typename?: "UndefinedActivityAssignmentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UndefinedActivityAssignmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UndefinedActivityAssignmentNode` and its cursor. */
export type UndefinedActivityAssignmentNodeEdge = {
  __typename?: "UndefinedActivityAssignmentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UndefinedActivityAssignmentNode>;
};

export type UndefinedActivityAssignmentsSummaryNode = {
  __typename?: "UndefinedActivityAssignmentsSummaryNode";
  complete?: Maybe<Scalars["Int"]["output"]>;
  incomplete?: Maybe<Scalars["Int"]["output"]>;
  learnersCount?: Maybe<Scalars["Int"]["output"]>;
  vendor?: Maybe<VendorNode>;
};

export type UndefinedActivityCompletionChecklistItemCreationInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  type?: InputMaybe<Types>;
};

export type UndefinedActivityCompletionChecklistItemEditInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
  type?: InputMaybe<Types>;
};

export type UndefinedActivityCompletionChecklistItemNode = Node & {
  __typename?: "UndefinedActivityCompletionChecklistItemNode";
  assignmentItemSet: UndefinedActivityAssignmentCompletionChecklistItemNodeConnection;
  checklist: UndefinedActivityCompletionChecklistNode;
  created: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  order: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  type: ExternalActivityUndefinedActivityCompletionChecklistItemTypeChoices;
};

export type UndefinedActivityCompletionChecklistItemNodeAssignmentItemSetArgs =
  {
    after?: InputMaybe<Scalars["String"]["input"]>;
    assignmentId?: InputMaybe<Scalars["ID"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    id?: InputMaybe<Scalars["ID"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
  };

export type UndefinedActivityCompletionChecklistItemNodeConnection = {
  __typename?: "UndefinedActivityCompletionChecklistItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UndefinedActivityCompletionChecklistItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UndefinedActivityCompletionChecklistItemNode` and its cursor. */
export type UndefinedActivityCompletionChecklistItemNodeEdge = {
  __typename?: "UndefinedActivityCompletionChecklistItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UndefinedActivityCompletionChecklistItemNode>;
};

export type UndefinedActivityCompletionChecklistNode = Node & {
  __typename?: "UndefinedActivityCompletionChecklistNode";
  campaign?: Maybe<CampaignNode>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  items: UndefinedActivityCompletionChecklistItemNodeConnection;
  modified: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  undefinedActivity: UndefinedActivityNode;
};

export type UndefinedActivityCompletionChecklistNodeItemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UndefinedActivityCompletionChecklistNodeConnection = {
  __typename?: "UndefinedActivityCompletionChecklistNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UndefinedActivityCompletionChecklistNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UndefinedActivityCompletionChecklistNode` and its cursor. */
export type UndefinedActivityCompletionChecklistNodeEdge = {
  __typename?: "UndefinedActivityCompletionChecklistNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UndefinedActivityCompletionChecklistNode>;
};

export type UndefinedActivityInput = {
  activityType: UndefinedActivityTypesEnum;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  vendorId: Scalars["ID"]["input"];
};

export type UndefinedActivityNode = Node & {
  __typename?: "UndefinedActivityNode";
  activity?: Maybe<ActivityNode>;
  activityType: ExternalActivityUndefinedActivityActivityTypeChoices;
  /** Summary for all assignments, with number of complete and incomplete assignments */
  assignmentsSummary?: Maybe<
    Array<Maybe<UndefinedActivityAssignmentsSummaryNode>>
  >;
  author?: Maybe<ContentAuthorNode>;
  clientLearningActivity?: Maybe<ClientLearningActivityNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  externalUrl?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** True if the user is assigned to this activity, False otherwise */
  isUserAssigned?: Maybe<Scalars["Boolean"]["output"]>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  location?: Maybe<Scalars["String"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  product?: Maybe<ProductNode>;
  scheduledTime?: Maybe<Scalars["DateTime"]["output"]>;
  title: Scalars["String"]["output"];
  undefinedactivityassignmentSet?: Maybe<UndefinedActivityAssignmentNodeConnection>;
  undefinedactivitycompletionchecklistSet: UndefinedActivityCompletionChecklistNodeConnection;
  vendor?: Maybe<VendorNode>;
};

export type UndefinedActivityNodeAssignmentsSummaryArgs = {
  activityType?: InputMaybe<UndefinedActivityTypesEnum>;
  employeeGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  employeeGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  employeeGroupIdsExact?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UndefinedActivityNodeIsUserAssignedArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UndefinedActivityNodeUndefinedactivityassignmentSetArgs = {
  activityType_Iexact?: InputMaybe<ExternalActivityUndefinedActivityAssignmentActivityTypeChoices>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  employeeGroupId?: InputMaybe<Scalars["String"]["input"]>;
  excludeCampaignAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UndefinedActivityNodeUndefinedactivitycompletionchecklistSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UndefinedActivityNodeConnection = {
  __typename?: "UndefinedActivityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UndefinedActivityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UndefinedActivityNode` and its cursor. */
export type UndefinedActivityNodeEdge = {
  __typename?: "UndefinedActivityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UndefinedActivityNode>;
};

/** An enumeration. */
export enum UndefinedActivityTypesEnum {
  Course = "course",
  Exam = "exam",
  TrainingProgram = "training_program",
  Webinar = "webinar",
  Workshop = "workshop",
}

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNode = Node & {
  __typename?: "UnitNode";
  activity: ActivityNode;
  addingAiContentInProgress?: Maybe<Scalars["Boolean"]["output"]>;
  aiSuggestedDefinitions: AiSuggestedDefinitionNodeConnection;
  aiSuggestedLos: AiSuggestedLosNodeConnection;
  aiSuggestedMcqs: AiSuggestedMultipleChoiceQuestionNodeConnection;
  aiSuggestedText: AiSuggestedTextNodeConnection;
  aiSuggestionAsyncTaskResult?: Maybe<AiSuggestionAsyncTaskResultNodeConnection>;
  author?: Maybe<ContentAuthorNode>;
  children?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  childrenIncludeDeleted?: Maybe<Array<Maybe<CourseResourceBlockUnionNode>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  examunit?: Maybe<ExamUnitNode>;
  hide: Scalars["Boolean"]["output"];
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  losresourceSet: LosResourceNodeConnection;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  previous?: Maybe<CourseBlockUnion>;
  quizunit?: Maybe<QuizUnitNode>;
  resourceSet?: Maybe<ResourceConnection>;
  resourceobjectSet: ResourceObjectNodeConnection;
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeAiSuggestedDefinitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeAiSuggestedLosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeAiSuggestedMcqsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeAiSuggestedTextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeAiSuggestionAsyncTaskResultArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<SalalemAiSuggestionsAiSuggestionAsyncTaskResultStatusChoices>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeLosresourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeResourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Representation of the structure block `Unit` in the graph
 *
 * Attributes:
 *     children (graphene.List): A list of `CourseResourceBlockUnionNode`'s resolved by `resolve_children`
 */
export type UnitNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UnlinkLosToLeafNode = {
  __typename?: "UnlinkLOSToLeafNode";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UnlinkProblemFromQuiz = {
  __typename?: "UnlinkProblemFromQuiz";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UnlockAccount = {
  __typename?: "UnlockAccount";
  user?: Maybe<UserNode>;
};

export type UpdateAssignmentAllowAttempts = {
  __typename?: "UpdateAssignmentAllowAttempts";
  assignment?: Maybe<AssignmentUnion>;
};

export type UpdateAssignmentCompletionRequest = {
  __typename?: "UpdateAssignmentCompletionRequest";
  request?: Maybe<AssignmentCompletionRequestNode>;
};

export type UpdateAssignmentCompletionRequests = {
  __typename?: "UpdateAssignmentCompletionRequests";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UpdateAssignmentValidUntil = {
  __typename?: "UpdateAssignmentValidUntil";
  assignment?: Maybe<AssignmentUnion>;
};

export type UpdateClient = {
  __typename?: "UpdateClient";
  client?: Maybe<ClientNode>;
};

/** Update client-related auth settings */
export type UpdateClientAuthSetting = {
  __typename?: "UpdateClientAuthSetting";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UpdateClientConfiguration = {
  __typename?: "UpdateClientConfiguration";
  client?: Maybe<ClientNode>;
};

export type UpdateClientGamificationSetting = {
  __typename?: "UpdateClientGamificationSetting";
  clientGamificationSetting?: Maybe<ClientGamificationSettingNode>;
};

export type UpdateClientLearningActivityStatus = {
  __typename?: "UpdateClientLearningActivityStatus";
  clientLearningActivity?: Maybe<ClientLearningActivityNode>;
};

export type UpdateCompetencyProductsCollection = {
  __typename?: "UpdateCompetencyProductsCollection";
  competencyProductsCollection?: Maybe<CompetencyProductsCollectionNode>;
};

export type UpdateCompetitionStatus = {
  __typename?: "UpdateCompetitionStatus";
  competition?: Maybe<CompetitionUnion>;
};

export type UpdateCourseBlockStatus = {
  __typename?: "UpdateCourseBlockStatus";
  courseBlock?: Maybe<CourseBlockNode>;
};

export type UpdateCourseKey = {
  __typename?: "UpdateCourseKey";
  course?: Maybe<CourseNode>;
};

export type UpdateCurrentClient = {
  __typename?: "UpdateCurrentClient";
  client?: Maybe<ClientNode>;
};

export type UpdateEmployee = {
  __typename?: "UpdateEmployee";
  employee?: Maybe<EmployeeProfileNode>;
};

export type UpdateEmployeeGroup = {
  __typename?: "UpdateEmployeeGroup";
  employeeGroup?: Maybe<EmployeeGroupNode>;
};

export type UpdateEmployeeInput = {
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  /** TrainingAdmin update learner's current job role */
  employeeJobRole?: InputMaybe<CreateEmployeeJobRoleInput>;
  employmentStatus?: InputMaybe<EmploymentStatusEnum>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  hiringDate?: InputMaybe<Scalars["Date"]["input"]>;
  hrLevels?: InputMaybe<Scalars["JSONString"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  levelOfEducation?: InputMaybe<LevelOfEducationEnum>;
  nationality?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  providedFullName?: InputMaybe<Scalars["String"]["input"]>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  secondaryEmail?: InputMaybe<Scalars["String"]["input"]>;
  showInLeaderboard?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  uploadedProfilePicture?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateEnterpriseCustomer = {
  __typename?: "UpdateEnterpriseCustomer";
  enterpriseCustomer?: Maybe<EnterpriseCustomerNode>;
};

export type UpdateEnterpriseHierarchyLevel = {
  __typename?: "UpdateEnterpriseHierarchyLevel";
  hierarchyLevel?: Maybe<EnterpriseHierarchyNode>;
};

export type UpdateEtihadCompetencyFrameworkResultMutation = {
  __typename?: "UpdateEtihadCompetencyFrameworkResultMutation";
  competencyFramework?: Maybe<EtihadCompetencyFrameworkResultType>;
};

export type UpdateLead = {
  __typename?: "UpdateLead";
  lead?: Maybe<LeadNode>;
};

export type UpdateProductRequest = {
  __typename?: "UpdateProductRequest";
  request?: Maybe<ProductRequestNode>;
};

export type UpdatePublicAssessmentPopUpStatus = {
  __typename?: "UpdatePublicAssessmentPopUpStatus";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UpdateRequestAssignmentExtension = {
  __typename?: "UpdateRequestAssignmentExtension";
  request?: Maybe<AssignmentExtensionRequestNode>;
};

export type UpdateStatus = {
  __typename?: "UpdateStatus";
  step?: Maybe<StepNode>;
};

export type UpdateSubjectArea = {
  __typename?: "UpdateSubjectArea";
  subjectArea?: Maybe<SubjectAreaNode>;
};

export type UpdateSubjectSubArea = {
  __typename?: "UpdateSubjectSubArea";
  subjectSubArea?: Maybe<SubjectSubAreaNode>;
};

export type UpdateSubscriptionAutoRenewalStatus = {
  __typename?: "UpdateSubscriptionAutoRenewalStatus";
  subscription?: Maybe<EnterpriseCustomerSubscriptionNode>;
};

export type UpdateTrainingAdminProductRequest = {
  __typename?: "UpdateTrainingAdminProductRequest";
  productRequest?: Maybe<ProductRequestNode>;
};

export type UpdateUndefinedActivityAssignmentCompletionChecklistItem = {
  __typename?: "UpdateUndefinedActivityAssignmentCompletionChecklistItem";
  undefinedActivityCompletionChecklist?: Maybe<UndefinedActivityCompletionChecklistNode>;
};

export type UpdateUser = {
  __typename?: "UpdateUser";
  user?: Maybe<UserNode>;
};

export type UpdateUserProfileLanguage = {
  __typename?: "UpdateUserProfileLanguage";
  userProfile?: Maybe<UserProfileUnionType>;
};

export type UpdateUserSurveyStatus = {
  __typename?: "UpdateUserSurveyStatus";
  userSurveyCheckItem?: Maybe<UserSurveyCheckItemNode>;
};

export type UpdateUserTutorialCheckItemStatus = {
  __typename?: "UpdateUserTutorialCheckItemStatus";
  userTutorialCheckItem?: Maybe<UserTutorialCheckItemNode>;
};

/** An enumeration. */
export enum UserCheckItemStatusesEnum {
  Deleted = "deleted",
  Done = "done",
  Pending = "pending",
  Viewed = "viewed",
}

export type UserCreationInput = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  roles: Array<InputMaybe<Scalars["String"]["input"]>>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserHeartsNode = Node & {
  __typename?: "UserHeartsNode";
  created: Scalars["DateTime"]["output"];
  heartsAmount: Scalars["Int"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  lastAddition: Scalars["DateTime"]["output"];
  lastSubtraction: Scalars["DateTime"]["output"];
  maxAmount?: Maybe<Scalars["Int"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  timeLeftToNextAddition?: Maybe<Scalars["Int"]["output"]>;
  user: UserNode;
};

export type UserLeagueRecordNode = Node & {
  __typename?: "UserLeagueRecordNode";
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  league?: Maybe<LeagueNode>;
  leaguechampionSet: LeagueChampionNodeConnection;
  modified: Scalars["DateTime"]["output"];
  rewardPoints: Scalars["Int"]["output"];
  user: UserNode;
};

export type UserLeagueRecordNodeLeaguechampionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserLeagueRecordNodeConnection = {
  __typename?: "UserLeagueRecordNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserLeagueRecordNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserLeagueRecordNode` and its cursor. */
export type UserLeagueRecordNodeEdge = {
  __typename?: "UserLeagueRecordNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserLeagueRecordNode>;
};

export type UserLearningPlanNode = Node & {
  __typename?: "UserLearningPlanNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  /** User progress on learning plan */
  progress?: Maybe<Scalars["Float"]["output"]>;
  /** Percentage target for user completion. **Cumulative** */
  target?: Maybe<Scalars["Float"]["output"]>;
  template: LearningPlanNode;
  title: Scalars["String"]["output"];
  user: UserNode;
  userlearningplansectionSet: UserLearningPlanSectionNodeConnection;
};

export type UserLearningPlanNodeUserlearningplansectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserLearningPlanNodeConnection = {
  __typename?: "UserLearningPlanNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserLearningPlanNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserLearningPlanNode` and its cursor. */
export type UserLearningPlanNodeEdge = {
  __typename?: "UserLearningPlanNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserLearningPlanNode>;
};

export type UserLearningPlanSectionNode = Node & {
  __typename?: "UserLearningPlanSectionNode";
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  /** Sum of all activities cpd in section */
  overallCpd?: Maybe<Scalars["Int"]["output"]>;
  /** User progress on learning plan section */
  progress?: Maybe<Scalars["Float"]["output"]>;
  title: Scalars["String"]["output"];
  userLearningPlan: UserLearningPlanNode;
};

export type UserLearningPlanSectionNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserLearningPlanSectionNodeConnection = {
  __typename?: "UserLearningPlanSectionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserLearningPlanSectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserLearningPlanSectionNode` and its cursor. */
export type UserLearningPlanSectionNodeEdge = {
  __typename?: "UserLearningPlanSectionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserLearningPlanSectionNode>;
};

export type UserNode = Node & {
  __typename?: "UserNode";
  acceptedAicoursesuggestion: AiCourseSuggestionNodeConnection;
  acceptedAiproofreadingsuggestion: AiProofReadingSuggestionNodeConnection;
  acceptedAisuggesteddefinition: AiSuggestedDefinitionNodeConnection;
  acceptedAisuggestedlos: AiSuggestedLosNodeConnection;
  acceptedAisuggestedmultiplechoicequestion: AiSuggestedMultipleChoiceQuestionNodeConnection;
  acceptedAisuggestedtext: AiSuggestedTextNodeConnection;
  acceptedExamcompetitionsuggestedexamproblem: ExamCompetitionSuggestedExamProblemNodeConnection;
  acceptedExamsuggestedexamproblem: ExamSuggestedExamProblemNodeConnection;
  /** Summary for the learner performance in the last year */
  annualPerformanceSummary?: Maybe<Array<Maybe<PeriodPerformanceNode>>>;
  approverInSteps: StepNodeConnection;
  approverInTemplateSteps: StepTemplateNodeConnection;
  /** List of `Assignment`s for each `User` */
  assignmentSet?: Maybe<AssignmentConnection>;
  assignmentcompletionrequestHandledByMe: AssignmentCompletionRequestNodeConnection;
  assignmentcompletionrequestSet: AssignmentCompletionRequestNodeConnection;
  assignmentextensionrequestHandledByMe: AssignmentExtensionRequestNodeConnection;
  assignmentextensionrequestSet?: Maybe<AssignmentExtensionRequestNodeConnection>;
  badgesEarned: BadgeAwardNodeConnection;
  botuserconversationSet: BotUserConversationNodeConnection;
  botusermessageSet: BotUserMessageNodeConnection;
  campaignSet: CampaignNodeConnection;
  canGrantRolesList?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  catalogcourseSet: CatalogCourseNodeConnection;
  certificateSet?: Maybe<CertificateNodeConnection>;
  clientSet: ClientNodeConnection;
  clientauthsettingSet: ClientAuthSettingNodeConnection;
  clientcataloglearningactivitySet: ClientCatalogLearningActivityNodeConnection;
  cohortSet: CohortNodeConnection;
  competencyUpdates: Array<EtihadCompetencyFrameworkResultType>;
  competitionSet: CompetitionNodeConnection;
  competitions?: Maybe<CompetitionConnection>;
  contentauthorSet: ContentAuthorNodeConnection;
  /** Who is in this course team? */
  courseTeamMemberships: CourseTeamNodeConnection;
  courseblockSet: CourseBlockNodeConnection;
  coursecategorySet: CourseCategoryNodeConnection;
  courseproductioncommentSet: CommentNodeConnection;
  coursetagSet: CourseTagNodeConnection;
  created: Scalars["DateTime"]["output"];
  createdOrganizationalHierarchies: EnterpriseHierarchyNodeConnection;
  dateJoined: Scalars["DateTime"]["output"];
  defaultClient?: Maybe<DefaultUserClientNode>;
  email: Scalars["String"]["output"];
  employeeGroups?: Maybe<Array<Maybe<EmployeeGroupNode>>>;
  employeeGroupsSet?: Maybe<EmployeeGroupNodeConnection>;
  employeeGroupsSupervision: EmployeeGroupNodeConnection;
  enterprisehierarchySet: EnterpriseHierarchyNodeConnection;
  etihadCompetencyFrameworkResults?: Maybe<EtihadCompetencyFrameworkResultType>;
  evidenceSet: EvidenceNodeConnection;
  evidenceSetProvided: EvidenceNodeConnection;
  examSet: ExamNodeConnection;
  externalactivitySet: ExternalActivityNodeConnection;
  firstName: Scalars["String"]["output"];
  generatedAicoursesuggestion: AiCourseSuggestionNodeConnection;
  generatedAiproofreadingsuggestion: AiProofReadingSuggestionNodeConnection;
  generatedAisuggesteddefinition: AiSuggestedDefinitionNodeConnection;
  generatedAisuggestedlos: AiSuggestedLosNodeConnection;
  generatedAisuggestedmultiplechoicequestion: AiSuggestedMultipleChoiceQuestionNodeConnection;
  generatedAisuggestedtext: AiSuggestedTextNodeConnection;
  generatedExamcompetitionsuggestedexamproblem: ExamCompetitionSuggestedExamProblemNodeConnection;
  generatedExamsuggestedexamproblem: ExamSuggestedExamProblemNodeConnection;
  guidanceAssignments?: Maybe<ExternalActivityAssignmentNodeConnection>;
  guidanceFor: WorkshopNodeConnection;
  haveActiveAssignments?: Maybe<Scalars["Boolean"]["output"]>;
  haveActiveCompetitions?: Maybe<Scalars["Boolean"]["output"]>;
  hearts?: Maybe<UserHeartsNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars["Boolean"]["output"];
  isAllowedToChangeEmailAddress?: Maybe<Scalars["Boolean"]["output"]>;
  /** Boolean to return if user is assigned the activity sent */
  isAssignedActivity?: Maybe<Scalars["Boolean"]["output"]>;
  /** Boolean to return if User can be be assigned to campaign of version=2, if the version is not 2 will return None. */
  isCampaignAssignable?: Maybe<Scalars["Boolean"]["output"]>;
  /** Boolean to return if user has been congratulated by the user sending query. */
  isCongratulated?: Maybe<Scalars["Boolean"]["output"]>;
  /** Boolean to return if user is part of campaign sent */
  isPartOfCampaign?: Maybe<Scalars["Boolean"]["output"]>;
  /** Boolean to return if user is part of competition sent */
  isPartOfCompetition?: Maybe<Scalars["Boolean"]["output"]>;
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars["Boolean"]["output"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"]["output"];
  /** Boolean to return if User can beassigned to Training Program. */
  isTrainingProgramAssignable?: Maybe<Scalars["Boolean"]["output"]>;
  knowledgebasedocumentSet: KnowledgeBaseDocumentNodeConnection;
  lastLogin?: Maybe<Scalars["DateTime"]["output"]>;
  lastName: Scalars["String"]["output"];
  learningPlansAssignedByMe: UserLearningPlanNodeConnection;
  learningactivitysubscriberSet: LearningActivitySubscriberNodeConnection;
  learningplanSet: LearningPlanNodeConnection;
  learningplanassignmentSet: LearningPlanAssignmentNodeConnection;
  learningplanproductSet: LearningPlanProductNodeConnection;
  learningplansectionSet: LearningPlanSectionNodeConnection;
  lrsActor?: Maybe<ActorNode>;
  modified: Scalars["DateTime"]["output"];
  mustChangePassword: Scalars["Boolean"]["output"];
  myAssignments?: Maybe<AssignmentConnection>;
  notificationSettings?: Maybe<NotificationSettingsNode>;
  notifications?: Maybe<NotificationNodeConnection>;
  notifiedInSteps: StepNodeConnection;
  notifiedInTemplateSteps: StepTemplateNodeConnection;
  ownedLearningActivities: ClientCatalogLearningActivityNodeConnection;
  password: Scalars["String"]["output"];
  /** Summary for the learner progress on a period of time */
  performanceSummary?: Maybe<UserPerformanceSummaryNode>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerified: Scalars["Boolean"]["output"];
  /** Total number of points for every type */
  points?: Maybe<Array<Maybe<UserPointsNode>>>;
  pointsHistory?: Maybe<PointsHistory>;
  pointsrecordstoreSet?: Maybe<PointsRecordStoreConnection>;
  productSet: ProductNodeConnection;
  productbookmarkfolderSet: ProductBookmarkFolderNodeConnection;
  productcommentSet: ProductCommentNodeConnection;
  productrequestHandledByMe: ProductRequestNodeConnection;
  productrequestSet?: Maybe<ProductRequestNodeConnection>;
  productreviewSet: ProductReviewNodeConnection;
  publicAssessment?: Maybe<ExamNode>;
  quizSet: QuizNodeConnection;
  quoteSet: QuoteNodeConnection;
  recentActiveAssignment?: Maybe<AssignmentUnion>;
  recentActiveTrainingProgram?: Maybe<TrainingProgramNode>;
  recentIncompleteCompetition?: Maybe<AssignmentUnion>;
  recommendedLearningActivities?: Maybe<ProductNodeConnection>;
  rejectedAicoursesuggestion: AiCourseSuggestionNodeConnection;
  rejectedAiproofreadingsuggestion: AiProofReadingSuggestionNodeConnection;
  rejectedAisuggesteddefinition: AiSuggestedDefinitionNodeConnection;
  rejectedAisuggestedlos: AiSuggestedLosNodeConnection;
  rejectedAisuggestedmultiplechoicequestion: AiSuggestedMultipleChoiceQuestionNodeConnection;
  rejectedAisuggestedtext: AiSuggestedTextNodeConnection;
  rejectedExamcompetitionsuggestedexamproblem: ExamCompetitionSuggestedExamProblemNodeConnection;
  rejectedExamsuggestedexamproblem: ExamSuggestedExamProblemNodeConnection;
  reportsauditentrySet: ReportsAuditEntryNodeConnection;
  resourceobjectSet: ResourceObjectNodeConnection;
  responsibleInSteps: StepNodeConnection;
  responsibleInTemplateSteps: StepTemplateNodeConnection;
  roles?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  socialAuth?: Maybe<UserSocialAuthNodeConnection>;
  submittedcertificateSet: SubmittedCertificateNodeConnection;
  /** Total Number of CPD hours for learner over his entire career. */
  totalCpdHours?: Maybe<Scalars["String"]["output"]>;
  trainingHours?: Maybe<Scalars["Float"]["output"]>;
  /** Training Program Assignments for user */
  trainingProgramAssignmentSet?: Maybe<UserTrainingProgramNodeConnection>;
  trainingProgramProgress?: Maybe<Scalars["Float"]["output"]>;
  trainingProgramSet?: Maybe<TrainingProgramNodeConnection>;
  trainingProgramStatus?: Maybe<Scalars["String"]["output"]>;
  trainingprogramsCreatedByMe: TrainingProgramNodeConnection;
  trainingprogramsectionSet: TrainingProgramSectionNodeConnection;
  transactionSet: TransactionNodeConnection;
  treeSet: BodyOfKnowledgeTreeNodeConnection;
  treecategorySet: TreeCategoryNodeConnection;
  treetagSet: TreeTagNodeConnection;
  undefinedactivitySet: UndefinedActivityNodeConnection;
  /** Number of unread notifications for the user */
  unreadNotificationsCount?: Maybe<Scalars["Int"]["output"]>;
  userleaguerecordSet: UserLeagueRecordNodeConnection;
  userlearningplanSet: UserLearningPlanNodeConnection;
  userlearningplansectionSet: UserLearningPlanSectionNodeConnection;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"]["output"];
  useronboardingcheckitemSet: UserOnboardingCheckItemNodeConnection;
  userprofile?: Maybe<UserProfileUnionType>;
  userquizattemptSet: UserQuizAttemptNodeConnection;
  usersurveycheckitemSet: UserSurveyCheckItemNodeConnection;
  usertrainingprogramitemSet: UserTrainingProgramItemNodeConnection;
  usertutorialcheckitemSet: UserTutorialCheckItemNodeConnection;
  weeklyGoal?: Maybe<UserWeeklyGoalNode>;
  workflows: WorkFlowNodeConnection;
};

export type UserNodeAcceptedAicoursesuggestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedAiproofreadingsuggestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedAisuggesteddefinitionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedAisuggestedlosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedAisuggestedmultiplechoicequestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedAisuggestedtextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedExamcompetitionsuggestedexamproblemArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAcceptedExamsuggestedexamproblemArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeApproverInStepsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeApproverInTemplateStepsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeAssignmentSetArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  activityType?: InputMaybe<ProductTypesEnum>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  competitionAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  excludeTitleIcontains?: InputMaybe<Scalars["String"]["input"]>;
  excludeTrainingProgramAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  includeUndefinedActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeUserTrainingPrograms?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type UserNodeAssignmentcompletionrequestHandledByMeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type UserNodeAssignmentcompletionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentCompletionRequestStatusChoices>;
};

export type UserNodeAssignmentextensionrequestHandledByMeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type UserNodeAssignmentextensionrequestSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestAssignmentExtensionRequestStatusChoices>;
};

export type UserNodeBadgesEarnedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeBotuserconversationSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeBotusermessageSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCatalogcourseSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCertificateSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  assignment_User_Id?: InputMaybe<Scalars["ID"]["input"]>;
  assignment_User_Username?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  course_Title?: InputMaybe<Scalars["String"]["input"]>;
  course_Title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CourseCertificateCertificateStatusChoices>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeClientauthsettingSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeClientcataloglearningactivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCohortSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCompetitionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCompetitionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<CompetitionCustomStatus>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  nameIcontains?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompetitionStatuses>;
};

export type UserNodeContentauthorSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCourseTeamMembershipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCourseblockSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCoursecategorySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCourseproductioncommentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCoursetagSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeCreatedOrganizationalHierarchiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeEmployeeGroupsSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  underHierarchyId?: InputMaybe<Scalars["ID"]["input"]>;
  underHierarchy_Name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeEmployeeGroupsSupervisionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  basedOn_Isnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  created_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  modified?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  modified_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  underHierarchyId?: InputMaybe<Scalars["ID"]["input"]>;
  underHierarchy_Name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeEnterprisehierarchySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeEvidenceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeEvidenceSetProvidedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeExamSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<QuizzingExamTypeChoices>;
};

export type UserNodeExternalactivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedAicoursesuggestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedAiproofreadingsuggestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedAisuggesteddefinitionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedAisuggestedlosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedAisuggestedmultiplechoicequestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedAisuggestedtextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedExamcompetitionsuggestedexamproblemArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGeneratedExamsuggestedexamproblemArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeGuidanceAssignmentsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  excludeTitleIcontains?: InputMaybe<Scalars["String"]["input"]>;
  excludeTrainingProgramAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  searchText?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  workshopType?: InputMaybe<WorkshopTypesEnum>;
};

export type UserNodeGuidanceForArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeIsAssignedActivityArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeIsCampaignAssignableArgs = {
  campaignId: Scalars["ID"]["input"];
};

export type UserNodeIsPartOfCampaignArgs = {
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeIsPartOfCompetitionArgs = {
  competitionId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeIsTrainingProgramAssignableArgs = {
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeKnowledgebasedocumentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeLearningPlansAssignedByMeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeLearningactivitysubscriberSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeLearningplanSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeLearningplanassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeLearningplanproductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeLearningplansectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeMyAssignmentsArgs = {
  activityStatus?: InputMaybe<LearningActivityAssignmentStatusesEnum>;
  activityType?: InputMaybe<LearningActivityTypeEnum>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  excludeTrainingProgramAssignments?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  titleSearch?: InputMaybe<Scalars["String"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UserNodeNotificationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  learnerNotifications?: InputMaybe<Scalars["Boolean"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  trainingAdminNotifications?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserNodeNotifiedInStepsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeNotifiedInTemplateStepsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeOwnedLearningActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodePerformanceSummaryArgs = {
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UserNodePointsArgs = {
  pointsType?: InputMaybe<PointsTypes>;
};

export type UserNodePointsHistoryArgs = {
  source?: InputMaybe<GenericAwardSources>;
};

export type UserNodePointsrecordstoreSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeProductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeProductbookmarkfolderSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeProductcommentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  comment_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeProductrequestHandledByMeArgs = {
  activityType?: InputMaybe<RequestProductRequestActivityTypeChoices>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RequestProductRequestStatusChoices>;
};

export type UserNodeProductrequestSetArgs = {
  activityType?: InputMaybe<RequestProductRequestActivityTypeChoices>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  productType?: InputMaybe<ProductTypesEnum>;
  status?: InputMaybe<RequestProductRequestStatusChoices>;
};

export type UserNodeProductreviewSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  review?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeQuizSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeQuoteSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRecommendedLearningActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedAicoursesuggestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedAiproofreadingsuggestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedAisuggesteddefinitionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedAisuggestedlosArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedAisuggestedmultiplechoicequestionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedAisuggestedtextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedExamcompetitionsuggestedexamproblemArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  isRejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeRejectedExamsuggestedexamproblemArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  examId?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeReportsauditentrySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeResourceobjectSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeResponsibleInStepsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeResponsibleInTemplateStepsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeSocialAuthArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeSubmittedcertificateSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeTrainingProgramAssignmentSetArgs = {
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<AssignmentStatusesEnum>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeTrainingProgramProgressArgs = {
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeTrainingProgramSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  categoriesIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  exclude_Title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  hasActivityId?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  tagsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  trainingProgramId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorsIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UserNodeTrainingProgramStatusArgs = {
  trainingProgramId: Scalars["ID"]["input"];
};

export type UserNodeTrainingprogramsCreatedByMeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeTrainingprogramsectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeTransactionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeTreeSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeTreecategorySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeTreetagSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeUndefinedactivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeUnreadNotificationsCountArgs = {
  basedOnAuthGroup?: InputMaybe<AuthGroupBasedNotificationTypes>;
};

export type UserNodeUserleaguerecordSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeUserlearningplanSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeUserlearningplansectionSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeUseronboardingcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeUserquizattemptSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeUsersurveycheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  checkItem_IsActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<ChecklistUserSurveyCheckItemStatusChoices>;
};

export type UserNodeUsertrainingprogramitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserNodeUsertutorialcheckitemSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  checkItem_Platform?: InputMaybe<ChecklistTutorialCheckItemPlatformChoices>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<ChecklistUserTutorialCheckItemStatusChoices>;
};

export type UserNodeWorkflowsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeConnection = {
  __typename?: "UserNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: "UserNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserOnboardingCheckItemNode = Node & {
  __typename?: "UserOnboardingCheckItemNode";
  checkItem: OnboardingCheckItemNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDone: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  statement?: Maybe<StatementNode>;
  status: GamificationUserOnboardingCheckItemStatusChoices;
  user: UserNode;
};

export type UserOnboardingCheckItemNodeConnection = {
  __typename?: "UserOnboardingCheckItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserOnboardingCheckItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserOnboardingCheckItemNode` and its cursor. */
export type UserOnboardingCheckItemNodeEdge = {
  __typename?: "UserOnboardingCheckItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserOnboardingCheckItemNode>;
};

export type UserPerformanceSummaryNode = {
  __typename?: "UserPerformanceSummaryNode";
  leaderboardParticipation?: Maybe<LeaderboardParticipantNode>;
  overall?: Maybe<OverallPerformanceNode>;
  period?: Maybe<Array<Maybe<PeriodPerformanceNode>>>;
};

export type UserPointsNode = {
  __typename?: "UserPointsNode";
  points?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileNode = Node & {
  __typename?: "UserProfileNode";
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Country>;
  created: Scalars["DateTime"]["output"];
  employeeprofile?: Maybe<EmployeeProfileNode>;
  employmentStatus?: Maybe<UserprofileUserProfileEmploymentStatusChoices>;
  gender?: Maybe<UserprofileUserProfileGenderChoices>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDarkModeEnabled: Scalars["Boolean"]["output"];
  language: Scalars["String"]["output"];
  levelOfEducation?: Maybe<UserprofileUserProfileLevelOfEducationChoices>;
  modified: Scalars["DateTime"]["output"];
  nationality?: Maybe<UserprofileUserProfileNationalityChoices>;
  showInLeaderboard: Scalars["Boolean"]["output"];
  uploadedProfilePicture?: Maybe<Scalars["String"]["output"]>;
  user: UserNode;
  yearOfBirth?: Maybe<Scalars["Int"]["output"]>;
};

/** A graphql Union to represent different types of `UserProfile`'s */
export type UserProfileUnionType = EmployeeProfileNode | UserProfileNode;

export type UserQuizAttemptNode = Node & {
  __typename?: "UserQuizAttemptNode";
  attempt: Scalars["Int"]["output"];
  created: Scalars["DateTime"]["output"];
  grade: Scalars["Decimal"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDurationActive?: Maybe<Scalars["Boolean"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  quiz: QuizNode;
  startedTime?: Maybe<Scalars["DateTime"]["output"]>;
  status: QuizzingUserQuizAttemptStatusChoices;
  timeLeft?: Maybe<Scalars["Int"]["output"]>;
  user: UserNode;
};

export type UserQuizAttemptNodeConnection = {
  __typename?: "UserQuizAttemptNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserQuizAttemptNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserQuizAttemptNode` and its cursor. */
export type UserQuizAttemptNodeEdge = {
  __typename?: "UserQuizAttemptNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserQuizAttemptNode>;
};

export type UserSocialAuthNode = Node & {
  __typename?: "UserSocialAuthNode";
  created: Scalars["DateTime"]["output"];
  extraData?: Maybe<Scalars["JSONString"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  modified: Scalars["DateTime"]["output"];
  provider: Scalars["String"]["output"];
  uid: Scalars["String"]["output"];
  user: UserNode;
};

export type UserSocialAuthNodeConnection = {
  __typename?: "UserSocialAuthNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserSocialAuthNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserSocialAuthNode` and its cursor. */
export type UserSocialAuthNodeEdge = {
  __typename?: "UserSocialAuthNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserSocialAuthNode>;
};

export type UserSurveyCheckItemNode = Node & {
  __typename?: "UserSurveyCheckItemNode";
  checkItem: ClientSurveyCheckItemNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDone: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  statement?: Maybe<StatementNode>;
  status: ChecklistUserSurveyCheckItemStatusChoices;
  user: UserNode;
};

export type UserSurveyCheckItemNodeConnection = {
  __typename?: "UserSurveyCheckItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserSurveyCheckItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserSurveyCheckItemNode` and its cursor. */
export type UserSurveyCheckItemNodeEdge = {
  __typename?: "UserSurveyCheckItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserSurveyCheckItemNode>;
};

export type UserTrainingProgramAssignmentNode = {
  __typename?: "UserTrainingProgramAssignmentNode";
  /** Course, Exam, and External Activity assignments associated with the **Training Program** */
  assignments?: Maybe<AssignmentConnection>;
  assignmentsStatusStatistics?: Maybe<Scalars["JSONString"]["output"]>;
  progress?: Maybe<Scalars["Float"]["output"]>;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  trainingProgram?: Maybe<TrainingProgramNode>;
  user?: Maybe<UserNode>;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UserTrainingProgramAssignmentNodeAssignmentsArgs = {
  activityId?: InputMaybe<Scalars["ID"]["input"]>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  assignmentId?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  customStatus?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["Date"]["input"]>;
  inEmployeeGroupsIds?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<AssignmentStatusesEnum>;
  toDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UserTrainingProgramItemNode = Node & {
  __typename?: "UserTrainingProgramItemNode";
  assignment?: Maybe<AssignmentUnion>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDone: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  originalCampaign?: Maybe<CampaignNode>;
  previouslyAssigned?: Maybe<Scalars["Boolean"]["output"]>;
  statement?: Maybe<StatementNode>;
  trainingProgramItem: TrainingProgramItemNode;
  user: UserNode;
};

export type UserTrainingProgramItemNodeConnection = {
  __typename?: "UserTrainingProgramItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTrainingProgramItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserTrainingProgramItemNode` and its cursor. */
export type UserTrainingProgramItemNodeEdge = {
  __typename?: "UserTrainingProgramItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserTrainingProgramItemNode>;
};

export type UserTrainingProgramNodeConnection = {
  __typename?: "UserTrainingProgramNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTrainingProgramNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserTrainingProgramNode` and its cursor. */
export type UserTrainingProgramNodeEdge = {
  __typename?: "UserTrainingProgramNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserTrainingProgramAssignmentNode>;
};

export type UserTutorialCheckItemNode = Node & {
  __typename?: "UserTutorialCheckItemNode";
  checkItem: TutorialCheckItemNode;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isDone: Scalars["Boolean"]["output"];
  modified: Scalars["DateTime"]["output"];
  statement?: Maybe<StatementNode>;
  status: ChecklistUserTutorialCheckItemStatusChoices;
  user: UserNode;
};

export type UserTutorialCheckItemNodeConnection = {
  __typename?: "UserTutorialCheckItemNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTutorialCheckItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `UserTutorialCheckItemNode` and its cursor. */
export type UserTutorialCheckItemNodeEdge = {
  __typename?: "UserTutorialCheckItemNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserTutorialCheckItemNode>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  mustChangePassword?: InputMaybe<Scalars["Boolean"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserWeeklyGoalNode = Node & {
  __typename?: "UserWeeklyGoalNode";
  created: Scalars["DateTime"]["output"];
  /** Cpd goal for **current** week. this is the value which all calculations will be based on */
  currentCpdGoal?: Maybe<Scalars["Int"]["output"]>;
  /** Number of points gained so far for the **current** weekly goal */
  gainedPoints?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Maximum Number of points to be gained for the **current** weekly goal */
  maxPoints?: Maybe<Scalars["Int"]["output"]>;
  modified: Scalars["DateTime"]["output"];
  /** Cpd goal for **next** week. If value is the same as current_cpd_goal, means no changes occurred on the cpd goal */
  nextCpdGoal?: Maybe<Scalars["Int"]["output"]>;
  /** **Percentage** progress made so far on the **current** weekly goal */
  progress?: Maybe<Scalars["Float"]["output"]>;
  /** Number of points gained so far and not claimed for current and all previous weekly goals */
  toBeClaimedPoints?: Maybe<Scalars["Int"]["output"]>;
  user: UserNode;
};

/** An enumeration. */
export enum UserprofileUserProfileEmploymentStatusChoices {
  /** Freelancer */
  Freelancer = "FREELANCER",
  /** Full Time */
  Full = "FULL",
  /** Internship */
  Intern = "INTERN",
  /** Part Time */
  Part = "PART",
  /** Student */
  Student = "STUDENT",
  /** Unemployed */
  Unemployed = "UNEMPLOYED",
}

/** An enumeration. */
export enum UserprofileUserProfileGenderChoices {
  /** Female */
  F = "F",
  /** Male */
  M = "M",
  /** Other/Prefer Not to Say */
  O = "O",
  /** Unspecified */
  U = "U",
}

/** An enumeration. */
export enum UserprofileUserProfileLevelOfEducationChoices {
  /** Associate degree */
  Associate = "ASSOCIATE",
  /** Bachelor's degree */
  Bachelor = "BACHELOR",
  /** Elementary/primary school */
  Elementary = "ELEMENTARY",
  /** Secondary/high school */
  HighSchool = "HIGH_SCHOOL",
  /** Master's or professional degree */
  Masters = "MASTERS",
  /** No formal education */
  None = "NONE",
  /** Other education */
  Other = "OTHER",
  /** Doctorate */
  Phd = "PHD",
  /** Junior secondary/junior high/middle school */
  PreHighSchool = "PRE_HIGH_SCHOOL",
}

/** An enumeration. */
export enum UserprofileUserProfileNationalityChoices {
  /** Andorra */
  Ad = "AD",
  /** United Arab Emirates */
  Ae = "AE",
  /** Afghanistan */
  Af = "AF",
  /** Antigua and Barbuda */
  Ag = "AG",
  /** Anguilla */
  Ai = "AI",
  /** Albania */
  Al = "AL",
  /** Armenia */
  Am = "AM",
  /** Angola */
  Ao = "AO",
  /** Antarctica */
  Aq = "AQ",
  /** Argentina */
  Ar = "AR",
  /** American Samoa */
  As = "AS",
  /** Austria */
  At = "AT",
  /** Australia */
  Au = "AU",
  /** Aruba */
  Aw = "AW",
  /** Åland Islands */
  Ax = "AX",
  /** Azerbaijan */
  Az = "AZ",
  /** Bosnia and Herzegovina */
  Ba = "BA",
  /** Barbados */
  Bb = "BB",
  /** Bangladesh */
  Bd = "BD",
  /** Belgium */
  Be = "BE",
  /** Burkina Faso */
  Bf = "BF",
  /** Bulgaria */
  Bg = "BG",
  /** Bahrain */
  Bh = "BH",
  /** Burundi */
  Bi = "BI",
  /** Benin */
  Bj = "BJ",
  /** Saint Barthélemy */
  Bl = "BL",
  /** Bermuda */
  Bm = "BM",
  /** Brunei */
  Bn = "BN",
  /** Bolivia */
  Bo = "BO",
  /** Bonaire, Sint Eustatius and Saba */
  Bq = "BQ",
  /** Brazil */
  Br = "BR",
  /** Bahamas */
  Bs = "BS",
  /** Bhutan */
  Bt = "BT",
  /** Bouvet Island */
  Bv = "BV",
  /** Botswana */
  Bw = "BW",
  /** Belarus */
  By = "BY",
  /** Belize */
  Bz = "BZ",
  /** Canada */
  Ca = "CA",
  /** Cocos (Keeling) Islands */
  Cc = "CC",
  /** Congo (the Democratic Republic of the) */
  Cd = "CD",
  /** Central African Republic */
  Cf = "CF",
  /** Congo */
  Cg = "CG",
  /** Switzerland */
  Ch = "CH",
  /** Côte d'Ivoire */
  Ci = "CI",
  /** Cook Islands */
  Ck = "CK",
  /** Chile */
  Cl = "CL",
  /** Cameroon */
  Cm = "CM",
  /** China */
  Cn = "CN",
  /** Colombia */
  Co = "CO",
  /** Costa Rica */
  Cr = "CR",
  /** Cuba */
  Cu = "CU",
  /** Cabo Verde */
  Cv = "CV",
  /** Curaçao */
  Cw = "CW",
  /** Christmas Island */
  Cx = "CX",
  /** Cyprus */
  Cy = "CY",
  /** Czechia */
  Cz = "CZ",
  /** Germany */
  De = "DE",
  /** Djibouti */
  Dj = "DJ",
  /** Denmark */
  Dk = "DK",
  /** Dominica */
  Dm = "DM",
  /** Dominican Republic */
  Do = "DO",
  /** Algeria */
  Dz = "DZ",
  /** Ecuador */
  Ec = "EC",
  /** Estonia */
  Ee = "EE",
  /** Egypt */
  Eg = "EG",
  /** Western Sahara */
  Eh = "EH",
  /** Eritrea */
  Er = "ER",
  /** Spain */
  Es = "ES",
  /** Ethiopia */
  Et = "ET",
  /** Finland */
  Fi = "FI",
  /** Fiji */
  Fj = "FJ",
  /** Falkland Islands (Malvinas) */
  Fk = "FK",
  /** Micronesia (Federated States of) */
  Fm = "FM",
  /** Faroe Islands */
  Fo = "FO",
  /** France */
  Fr = "FR",
  /** Gabon */
  Ga = "GA",
  /** United Kingdom */
  Gb = "GB",
  /** Grenada */
  Gd = "GD",
  /** Georgia */
  Ge = "GE",
  /** French Guiana */
  Gf = "GF",
  /** Guernsey */
  Gg = "GG",
  /** Ghana */
  Gh = "GH",
  /** Gibraltar */
  Gi = "GI",
  /** Greenland */
  Gl = "GL",
  /** Gambia */
  Gm = "GM",
  /** Guinea */
  Gn = "GN",
  /** Guadeloupe */
  Gp = "GP",
  /** Equatorial Guinea */
  Gq = "GQ",
  /** Greece */
  Gr = "GR",
  /** South Georgia and the South Sandwich Islands */
  Gs = "GS",
  /** Guatemala */
  Gt = "GT",
  /** Guam */
  Gu = "GU",
  /** Guinea-Bissau */
  Gw = "GW",
  /** Guyana */
  Gy = "GY",
  /** Hong Kong */
  Hk = "HK",
  /** Heard Island and McDonald Islands */
  Hm = "HM",
  /** Honduras */
  Hn = "HN",
  /** Croatia */
  Hr = "HR",
  /** Haiti */
  Ht = "HT",
  /** Hungary */
  Hu = "HU",
  /** Indonesia */
  Id = "ID",
  /** Ireland */
  Ie = "IE",
  /** Israel */
  Il = "IL",
  /** Isle of Man */
  Im = "IM",
  /** India */
  In = "IN",
  /** British Indian Ocean Territory */
  Io = "IO",
  /** Iraq */
  Iq = "IQ",
  /** Iran */
  Ir = "IR",
  /** Iceland */
  Is = "IS",
  /** Italy */
  It = "IT",
  /** Jersey */
  Je = "JE",
  /** Jamaica */
  Jm = "JM",
  /** Jordan */
  Jo = "JO",
  /** Japan */
  Jp = "JP",
  /** Kenya */
  Ke = "KE",
  /** Kyrgyzstan */
  Kg = "KG",
  /** Cambodia */
  Kh = "KH",
  /** Kiribati */
  Ki = "KI",
  /** Comoros */
  Km = "KM",
  /** Saint Kitts and Nevis */
  Kn = "KN",
  /** North Korea */
  Kp = "KP",
  /** South Korea */
  Kr = "KR",
  /** Kuwait */
  Kw = "KW",
  /** Cayman Islands */
  Ky = "KY",
  /** Kazakhstan */
  Kz = "KZ",
  /** Laos */
  La = "LA",
  /** Lebanon */
  Lb = "LB",
  /** Saint Lucia */
  Lc = "LC",
  /** Liechtenstein */
  Li = "LI",
  /** Sri Lanka */
  Lk = "LK",
  /** Liberia */
  Lr = "LR",
  /** Lesotho */
  Ls = "LS",
  /** Lithuania */
  Lt = "LT",
  /** Luxembourg */
  Lu = "LU",
  /** Latvia */
  Lv = "LV",
  /** Libya */
  Ly = "LY",
  /** Morocco */
  Ma = "MA",
  /** Monaco */
  Mc = "MC",
  /** Moldova */
  Md = "MD",
  /** Montenegro */
  Me = "ME",
  /** Saint Martin (French part) */
  Mf = "MF",
  /** Madagascar */
  Mg = "MG",
  /** Marshall Islands */
  Mh = "MH",
  /** North Macedonia */
  Mk = "MK",
  /** Mali */
  Ml = "ML",
  /** Myanmar */
  Mm = "MM",
  /** Mongolia */
  Mn = "MN",
  /** Macao */
  Mo = "MO",
  /** Northern Mariana Islands */
  Mp = "MP",
  /** Martinique */
  Mq = "MQ",
  /** Mauritania */
  Mr = "MR",
  /** Montserrat */
  Ms = "MS",
  /** Malta */
  Mt = "MT",
  /** Mauritius */
  Mu = "MU",
  /** Maldives */
  Mv = "MV",
  /** Malawi */
  Mw = "MW",
  /** Mexico */
  Mx = "MX",
  /** Malaysia */
  My = "MY",
  /** Mozambique */
  Mz = "MZ",
  /** Namibia */
  Na = "NA",
  /** New Caledonia */
  Nc = "NC",
  /** Niger */
  Ne = "NE",
  /** Norfolk Island */
  Nf = "NF",
  /** Nigeria */
  Ng = "NG",
  /** Nicaragua */
  Ni = "NI",
  /** Netherlands */
  Nl = "NL",
  /** Norway */
  No = "NO",
  /** Nepal */
  Np = "NP",
  /** Nauru */
  Nr = "NR",
  /** Niue */
  Nu = "NU",
  /** New Zealand */
  Nz = "NZ",
  /** Oman */
  Om = "OM",
  /** Panama */
  Pa = "PA",
  /** Peru */
  Pe = "PE",
  /** French Polynesia */
  Pf = "PF",
  /** Papua New Guinea */
  Pg = "PG",
  /** Philippines */
  Ph = "PH",
  /** Pakistan */
  Pk = "PK",
  /** Poland */
  Pl = "PL",
  /** Saint Pierre and Miquelon */
  Pm = "PM",
  /** Pitcairn */
  Pn = "PN",
  /** Puerto Rico */
  Pr = "PR",
  /** Palestine, State of */
  Ps = "PS",
  /** Portugal */
  Pt = "PT",
  /** Palau */
  Pw = "PW",
  /** Paraguay */
  Py = "PY",
  /** Qatar */
  Qa = "QA",
  /** Réunion */
  Re = "RE",
  /** Romania */
  Ro = "RO",
  /** Serbia */
  Rs = "RS",
  /** Russia */
  Ru = "RU",
  /** Rwanda */
  Rw = "RW",
  /** Saudi Arabia */
  Sa = "SA",
  /** Solomon Islands */
  Sb = "SB",
  /** Seychelles */
  Sc = "SC",
  /** Sudan */
  Sd = "SD",
  /** Sweden */
  Se = "SE",
  /** Singapore */
  Sg = "SG",
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = "SH",
  /** Slovenia */
  Si = "SI",
  /** Svalbard and Jan Mayen */
  Sj = "SJ",
  /** Slovakia */
  Sk = "SK",
  /** Sierra Leone */
  Sl = "SL",
  /** San Marino */
  Sm = "SM",
  /** Senegal */
  Sn = "SN",
  /** Somalia */
  So = "SO",
  /** Suriname */
  Sr = "SR",
  /** South Sudan */
  Ss = "SS",
  /** Sao Tome and Principe */
  St = "ST",
  /** El Salvador */
  Sv = "SV",
  /** Sint Maarten (Dutch part) */
  Sx = "SX",
  /** Syria */
  Sy = "SY",
  /** Eswatini */
  Sz = "SZ",
  /** Turks and Caicos Islands */
  Tc = "TC",
  /** Chad */
  Td = "TD",
  /** French Southern Territories */
  Tf = "TF",
  /** Togo */
  Tg = "TG",
  /** Thailand */
  Th = "TH",
  /** Tajikistan */
  Tj = "TJ",
  /** Tokelau */
  Tk = "TK",
  /** Timor-Leste */
  Tl = "TL",
  /** Turkmenistan */
  Tm = "TM",
  /** Tunisia */
  Tn = "TN",
  /** Tonga */
  To = "TO",
  /** Turkey */
  Tr = "TR",
  /** Trinidad and Tobago */
  Tt = "TT",
  /** Tuvalu */
  Tv = "TV",
  /** Taiwan */
  Tw = "TW",
  /** Tanzania */
  Tz = "TZ",
  /** Ukraine */
  Ua = "UA",
  /** Uganda */
  Ug = "UG",
  /** United States Minor Outlying Islands */
  Um = "UM",
  /** United States of America */
  Us = "US",
  /** Uruguay */
  Uy = "UY",
  /** Uzbekistan */
  Uz = "UZ",
  /** Holy See */
  Va = "VA",
  /** Saint Vincent and the Grenadines */
  Vc = "VC",
  /** Venezuela */
  Ve = "VE",
  /** Virgin Islands (British) */
  Vg = "VG",
  /** Virgin Islands (U.S.) */
  Vi = "VI",
  /** Vietnam */
  Vn = "VN",
  /** Vanuatu */
  Vu = "VU",
  /** Wallis and Futuna */
  Wf = "WF",
  /** Samoa */
  Ws = "WS",
  /** Yemen */
  Ye = "YE",
  /** Mayotte */
  Yt = "YT",
  /** South Africa */
  Za = "ZA",
  /** Zambia */
  Zm = "ZM",
  /** Zimbabwe */
  Zw = "ZW",
}

export type ValidateInvitationToken = {
  __typename?: "ValidateInvitationToken";
  brandLogo?: Maybe<Scalars["String"]["output"]>;
  isValid?: Maybe<Scalars["Boolean"]["output"]>;
  loginOptionName?: Maybe<Scalars["String"]["output"]>;
  loginOptionUrl?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
};

export type VendorNode = Node & {
  __typename?: "VendorNode";
  campaignSet: CampaignNodeConnection;
  client?: Maybe<ClientNode>;
  clientCatalogLearningActivities?: Maybe<ClientCatalogLearningActivityNodeConnection>;
  country?: Maybe<Country>;
  created: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  logoUrl: Scalars["String"]["output"];
  modified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  nameAbbreviation?: Maybe<Scalars["String"]["output"]>;
  productSet: ProductNodeConnection;
  undefinedactivitySet: UndefinedActivityNodeConnection;
  undefinedactivityassignmentSet: UndefinedActivityAssignmentNodeConnection;
  visibleForClient: ClientNodeConnection;
};

export type VendorNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VendorNodeClientCatalogLearningActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VendorNodeProductSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<MarketplaceProductLanguageChoices>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<MarketplaceProductLevelChoices>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  title_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  title_Iexact?: InputMaybe<Scalars["String"]["input"]>;
  title_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
};

export type VendorNodeUndefinedactivitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VendorNodeUndefinedactivityassignmentSetArgs = {
  activityType_Iexact?: InputMaybe<ExternalActivityUndefinedActivityAssignmentActivityTypeChoices>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type VendorNodeVisibleForClientArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VendorNodeConnection = {
  __typename?: "VendorNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VendorNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `VendorNode` and its cursor. */
export type VendorNodeEdge = {
  __typename?: "VendorNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<VendorNode>;
};

export type VerbNode = {
  __typename?: "VerbNode";
  display?: Maybe<Scalars["GenericScalar"]["output"]>;
  id: Scalars["String"]["output"];
  statementRelatedVerbs: StatementNodeConnection;
  substatementSet: Array<SubStatementNode>;
};

export type VerbNodeStatementRelatedVerbsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"]["output"];
  user?: Maybe<UserNode>;
};

export type VerifyIdentityForAssignmentMutation = {
  __typename?: "VerifyIdentityForAssignmentMutation";
  identificationDocumentUrl?: Maybe<Scalars["String"]["output"]>;
  selfieUrl?: Maybe<Scalars["String"]["output"]>;
};

/** Mutation to verify a phone number using the OTP code. */
export type VerifyPhoneNumber = {
  __typename?: "VerifyPhoneNumber";
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type VideoBlockCuePointNode = Node & {
  __typename?: "VideoBlockCuePointNode";
  created: Scalars["DateTime"]["output"];
  cuePointTime: Scalars["Decimal"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  losBlock?: Maybe<LosBlockNode>;
  losResource?: Maybe<LosResourceNode>;
  modified: Scalars["DateTime"]["output"];
  problem?: Maybe<MultipleChoiceQuestionResourceNode>;
  questionResourceId?: Maybe<Scalars["UUID"]["output"]>;
  videoBlock?: Maybe<VideoBlockNode>;
  videoResource?: Maybe<VideoResourceNode>;
};

export type VideoBlockCuePointNodeConnection = {
  __typename?: "VideoBlockCuePointNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideoBlockCuePointNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `VideoBlockCuePointNode` and its cursor. */
export type VideoBlockCuePointNodeEdge = {
  __typename?: "VideoBlockCuePointNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<VideoBlockCuePointNode>;
};

/** Representation of the resource block`VideoBlock` in the graph */
export type VideoBlockNode = Node & {
  __typename?: "VideoBlockNode";
  activity: ActivityNode;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  courseblockPtr: CourseBlockNode;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  history?: Maybe<Array<Maybe<HistoryNode>>>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  level: Scalars["Int"]["output"];
  lft: Scalars["Int"]["output"];
  license?: Maybe<ContentLicenseNode>;
  modified: Scalars["DateTime"]["output"];
  next?: Maybe<CourseBlockUnion>;
  order?: Maybe<Scalars["Int"]["output"]>;
  parent?: Maybe<CourseBlockNode>;
  points: Scalars["Int"]["output"];
  previous?: Maybe<CourseBlockUnion>;
  resource?: Maybe<VideoResourceNode>;
  resourceId: Scalars["UUID"]["output"];
  rght: Scalars["Int"]["output"];
  status: CourseStructureCourseBlockStatusChoices;
  title: Scalars["String"]["output"];
  totalStates: Scalars["Int"]["output"];
  treeId: Scalars["Int"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  videoblockcuepointSet?: Maybe<VideoBlockCuePointNodeConnection>;
};

/** Representation of the resource block`VideoBlock` in the graph */
export type VideoBlockNodeVideoblockcuepointSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  exceptViewedPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoResourceNode = Node & {
  __typename?: "VideoResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  length: Scalars["Decimal"]["output"];
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  subtitle?: Maybe<VideoSubtitleResourceNode>;
  subtitles: VideoSubtitleResourceNodeConnection;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  url: Scalars["String"]["output"];
  videoblockcuepointSet: VideoBlockCuePointNodeConnection;
};

export type VideoResourceNodeSubtitlesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoResourceNodeVideoblockcuepointSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoResourceNodeConnection = {
  __typename?: "VideoResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideoResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `VideoResourceNode` and its cursor. */
export type VideoResourceNodeEdge = {
  __typename?: "VideoResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<VideoResourceNode>;
};

export type VideoSubtitleResourceNode = Node & {
  __typename?: "VideoSubtitleResourceNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  language: LinkBaseResourcesVideoSubtitleResourceLanguageChoices;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  losSet?: Maybe<Array<Maybe<LosResourceNode>>>;
  modified: Scalars["DateTime"]["output"];
  references?: Maybe<Array<Maybe<ReferenceObjectUnion>>>;
  resourceOrder: Scalars["Int"]["output"];
  resourceTemplate?: Maybe<ResourceObjectNode>;
  resourceobjectPtr: ResourceObjectNode;
  title: Scalars["String"]["output"];
  unit?: Maybe<UnitNode>;
  url: Scalars["String"]["output"];
  videoResources: VideoResourceNodeConnection;
  videoresourceSet: VideoResourceNodeConnection;
};

export type VideoSubtitleResourceNodeVideoResourcesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoSubtitleResourceNodeVideoresourceSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoSubtitleResourceNodeConnection = {
  __typename?: "VideoSubtitleResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideoSubtitleResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `VideoSubtitleResourceNode` and its cursor. */
export type VideoSubtitleResourceNodeEdge = {
  __typename?: "VideoSubtitleResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<VideoSubtitleResourceNode>;
};

export type ViewVideoBlockCuePointProblem = {
  __typename?: "ViewVideoBlockCuePointProblem";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type WebinarNode = Node & {
  __typename?: "WebinarNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  campaignSet: CampaignNodeConnection;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  externalactivityPtr: ExternalActivityNode;
  externalactivityassignmentSet: ExternalActivityAssignmentNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  meetingNumber: Scalars["String"]["output"];
  modified: Scalars["DateTime"]["output"];
  onlinecourse?: Maybe<OnlineCourseNode>;
  product?: Maybe<ProductNode>;
  schedule: ExternalActivityScheduleNodeConnection;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  title: Scalars["String"]["output"];
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
  webinar?: Maybe<WebinarNode>;
  workshop?: Maybe<WorkshopNode>;
};

export type WebinarNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WebinarNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WebinarNodeExternalactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type WebinarNodeScheduleArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkFlowNode = Node & {
  __typename?: "WorkFlowNode";
  course: CourseNode;
  created: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  involvedUsers: UserNodeConnection;
  modified: Scalars["DateTime"]["output"];
  stepSet: StepNodeConnection;
  title: Scalars["String"]["output"];
};

export type WorkFlowNodeInvolvedUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkFlowNodeStepSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkFlowNodeConnection = {
  __typename?: "WorkFlowNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkFlowNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `WorkFlowNode` and its cursor. */
export type WorkFlowNodeEdge = {
  __typename?: "WorkFlowNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<WorkFlowNode>;
};

/** An enumeration. */
export enum WorkshopGuidanceTypesEnum {
  Coach = "COACH",
  Guide = "GUIDE",
  Manager = "MANAGER",
  Mentor = "MENTOR",
}

export type WorkshopNode = Node & {
  __typename?: "WorkshopNode";
  activity?: Maybe<ActivityNode>;
  author?: Maybe<ContentAuthorNode>;
  campaignSet: CampaignNodeConnection;
  clientLearningActivity?: Maybe<ClientLearningActivityNode>;
  clientSet: ClientNodeConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  created: Scalars["DateTime"]["output"];
  createdBy?: Maybe<UserNode>;
  externalactivityPtr: ExternalActivityNode;
  externalactivityassignmentSet: ExternalActivityAssignmentNodeConnection;
  guide?: Maybe<UserNode>;
  guideName: Scalars["String"]["output"];
  guideType?: Maybe<ExternalActivityWorkshopGuideTypeChoices>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  institute: Scalars["String"]["output"];
  /** True if the user is assigned to this activity, False otherwise */
  isUserAssigned?: Maybe<Scalars["Boolean"]["output"]>;
  legacyObjectId?: Maybe<Scalars["BigInt"]["output"]>;
  legacyObjectType?: Maybe<Scalars["String"]["output"]>;
  license?: Maybe<ContentLicenseNode>;
  location?: Maybe<Scalars["String"]["output"]>;
  major: Scalars["String"]["output"];
  modified: Scalars["DateTime"]["output"];
  onlinecourse?: Maybe<OnlineCourseNode>;
  position?: Maybe<EmployeeGroupNode>;
  product?: Maybe<ProductNode>;
  requiredProof: Scalars["Boolean"]["output"];
  schedule: ExternalActivityScheduleNodeConnection;
  startingDate?: Maybe<Scalars["DateTime"]["output"]>;
  title: Scalars["String"]["output"];
  type: ExternalActivityWorkshopTypeChoices;
  validUntil?: Maybe<Scalars["DateTime"]["output"]>;
  webinar?: Maybe<WebinarNode>;
  workshop?: Maybe<WorkshopNode>;
};

export type WorkshopNodeCampaignSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<CampaignCampaignStatusChoices>;
  vendorId?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_Gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkshopNodeClientSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkshopNodeExternalactivityassignmentSetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type WorkshopNodeIsUserAssignedArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type WorkshopNodeScheduleArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkshopNodeConnection = {
  __typename?: "WorkshopNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkshopNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `WorkshopNode` and its cursor. */
export type WorkshopNodeEdge = {
  __typename?: "WorkshopNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<WorkshopNode>;
};

/** An enumeration. */
export enum WorkshopTypesEnum {
  CareerGuidance = "career_guidance",
  Conference = "conference",
  Education = "education",
  Internship = "internship",
  JobRotation = "job_rotation",
  Lecture = "lecture",
  OfflineCourse = "offline_course",
  Workshop = "workshop",
}

export type _Service = {
  __typename?: "_Service";
  sdl?: Maybe<Scalars["String"]["output"]>;
};

export type ChartQueryQueryVariables = Exact<{
  fromDate: Scalars["Date"]["input"];
  toDate: Scalars["Date"]["input"];
  prevFromDate: Scalars["Date"]["input"];
  prevToDate: Scalars["Date"]["input"];
  period: PeriodTypesEnum;
}>;

export type ChartQueryQuery = {
  __typename?: "Query";
  performanceSummary?: {
    __typename?: "PerformanceSummaryNode";
    period?: Array<{
      __typename?: "PeriodPerformanceNode";
      fromDate?: any | null;
      toDate?: any | null;
      watchTime?: number | null;
      certificatesTaken?: number | null;
      avgViewDuration?: number | null;
      actualCompletion?: number | null;
      targetCompletion?: number | null;
    } | null> | null;
    overall?: {
      __typename?: "OverallPerformanceNode";
      totalWatchTime?: number | null;
      avgViewDuration?: number | null;
    } | null;
  } | null;
  prevPerformanceSummary?: {
    __typename?: "PerformanceSummaryNode";
    overall?: {
      __typename?: "OverallPerformanceNode";
      totalWatchTime?: number | null;
      avgViewDuration?: number | null;
    } | null;
  } | null;
};

export type LeaderboardQueryQueryVariables = Exact<{
  fromDate: Scalars["Date"]["input"];
  toDate: Scalars["Date"]["input"];
  count?: InputMaybe<Scalars["Int"]["input"]>;
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  advancedSearch?: InputMaybe<Scalars["String"]["input"]>;
  campaignId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type LeaderboardQueryQuery = {
  __typename?: "Query";
  leaderBoard?: {
    __typename?: "LeaderboardParticipantConnection";
    totalCount?: number | null;
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: string | null;
      hasNextPage: boolean;
    };
    edges: Array<{
      __typename?: "LeaderboardParticipantEdge";
      node?: {
        __typename?: "LeaderboardParticipantNode";
        rank?: number | null;
        periodPoints?: number | null;
        user?: {
          __typename?: "UserNode";
          id: string;
          isCongratulated?: boolean | null;
          firstName: string;
          lastName: string;
          userprofile?:
            | {
                __typename?: "EmployeeProfileNode";
                id: string;
                uploadedProfilePicture?: string | null;
                employeeId: string;
                providedFullName?: string | null;
              }
            | { __typename?: "UserProfileNode" }
            | null;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export const ChartQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "chartQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prevFromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prevToDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "period" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PeriodTypesEnum" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "performanceSummary" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "fromDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "fromDate" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "toDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "toDate" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "periodType" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "period" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "period" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fromDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "toDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "watchTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "certificatesTaken" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avgViewDuration" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "actualCompletion" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "targetCompletion" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "overall" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalWatchTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avgViewDuration" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "prevPerformanceSummary" },
            name: { kind: "Name", value: "performanceSummary" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "fromDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prevFromDate" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "toDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prevToDate" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "periodType" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "period" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "overall" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalWatchTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avgViewDuration" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChartQueryQuery, ChartQueryQueryVariables>;
export const LeaderboardQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "leaderboardQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "count" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cursor" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "advancedSearch" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "campaignId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "leaderBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "count" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "fromDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "fromDate" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "toDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "toDate" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "cursor" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "advancedSearch" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "advancedSearch" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "campaignId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "campaignId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rank" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "periodPoints" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isCongratulated",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "firstName" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "lastName" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "userprofile",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                              kind: "Name",
                                              value: "EmployeeProfileNode",
                                            },
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value:
                                                    "uploadedProfilePicture",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "employeeId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "providedFullName",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LeaderboardQueryQuery,
  LeaderboardQueryQueryVariables
>;
