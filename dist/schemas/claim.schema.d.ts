import { Document } from "mongoose";
export declare type ClaimDocument = Claim & Document;
export declare class Claim {
    ClaimID: string;
    MRN: string;
    PatientFirstName: string;
    PatientLastName: string;
    PatientDOB: Date;
    Physician: string;
    ClaimDate: Date;
    Pripayer: string;
    DateOfService: Date;
    PrimaryPolicyNo: string;
    ARClass: string;
    PayerID: string;
    Payercategory: string;
    ICD10Code: string;
    Age: number;
    AgeGrp: string;
    TotalBilledAmount: number;
    TotalBalanceAmount: number;
    TotalAmountPaid: number;
    ClaimStatus: string;
    OverallClaimStatus: string;
    CPTS: [];
    Tfl: number;
    Touch: number;
    Claimunder: string;
    ClaimCategory: string;
    claimSubCategory: string;
    Overallcptstatus: string;
    CreatedAt: Date;
    type: string;
    Reason: string;
    paidDate: Date;
    Followup_date: Date;
    Location: string;
    controlNumber: string;
    tradingPartnerServiceId: string;
    payerIdentification: string;
    Pripayerphone: string;
    TaxID: string;
    ServiceProvider: string;
    Npi: string;
    ServiceProviderType: string;
    BillingProviderType: string;
    Gender: string;
    BeginingDOS: string;
    EndDOS: string;
    statusCategoryCode: string;
    statusCategoryCodeValue: string;
    statusCode: string;
    statusCodeValue: string;
    effectiveDate: string;
    checkIssueDate: string;
    checkNumber: string;
    trackingNumber: string;
}
export declare const ClaimSchema: import("mongoose").Schema<Document<Claim, any, any>, import("mongoose").Model<Document<Claim, any, any>, any, any>, undefined, {}>;