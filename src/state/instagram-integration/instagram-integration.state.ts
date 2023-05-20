export interface IInstagramIntegration {
  isIntegrationProcessing: boolean
  isIntegrationComplete: boolean
  externalProfileID: string
}

export const initialInstagramIntegrationState: IInstagramIntegration = {
  isIntegrationProcessing: false,
  isIntegrationComplete: false,
  externalProfileID: null
}