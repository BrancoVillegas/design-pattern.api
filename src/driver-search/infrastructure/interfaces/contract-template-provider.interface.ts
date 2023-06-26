export interface ContractTemplateProvider {
  getTemplate(contractType: string): Promise<string>;
  saveTemplate(contractType: string, template: string): Promise<void>;
  deleteTemplate(contractType: string): Promise<void>;
}
