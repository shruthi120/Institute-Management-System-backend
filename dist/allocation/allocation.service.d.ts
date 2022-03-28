import { Model } from "mongoose";
import { ClaimDocument } from "../schemas/claim.schema";
export declare class AllocationService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    bucket_count(): Promise<any[][]>;
    tflexceed_webClaims(): Promise<ClaimDocument[]>;
    tflexceed_ivrClaims(): Promise<ClaimDocument[]>;
    tflexceed_manualClaims(): Promise<ClaimDocument[]>;
    fastapproach_web(): Promise<ClaimDocument[]>;
    fastapproach_ivr(): Promise<ClaimDocument[]>;
    fastapproach_manual(): Promise<ClaimDocument[]>;
    twotouch_web(): Promise<ClaimDocument[]>;
    twotouch_ivr(): Promise<ClaimDocument[]>;
    twotouch_manual(): Promise<ClaimDocument[]>;
    threetouch_web(): Promise<ClaimDocument[]>;
    threetouch_ivr(): Promise<ClaimDocument[]>;
    threetouch_manual(): Promise<ClaimDocument[]>;
    fourormore_web(): Promise<ClaimDocument[]>;
    fourormore_ivr(): Promise<ClaimDocument[]>;
    fourormore_manual(): Promise<ClaimDocument[]>;
    lessthan180daysclaims_web(): Promise<ClaimDocument[]>;
    lessthan180daysclaims_ivr(): Promise<ClaimDocument[]>;
    lessthan180daysclaims_manual(): Promise<ClaimDocument[]>;
    lowfollowupclaims_web(): Promise<ClaimDocument[]>;
    lowfollowupclaims_ivr(): Promise<ClaimDocument[]>;
    lowfollowupclaims_manual(): Promise<ClaimDocument[]>;
    morethan30days_web(): Promise<ClaimDocument[]>;
    morethan30days_ivr(): Promise<ClaimDocument[]>;
    morethan30days_manual(): Promise<ClaimDocument[]>;
    lessthan30days_web(): Promise<ClaimDocument[]>;
    lessthan30days_ivr(): Promise<ClaimDocument[][]>;
    lessthan30days_manual(): Promise<ClaimDocument[]>;
    morethan90days_web(): Promise<ClaimDocument[]>;
    morethan90days_ivr(): Promise<ClaimDocument[]>;
    morethan90days_manual(): Promise<ClaimDocument[]>;
    morethan60days_web(): Promise<ClaimDocument[]>;
    morethan60days_ivr(): Promise<ClaimDocument[]>;
    morethan60days_manual(): Promise<ClaimDocument[]>;
    morethan180days_web(): Promise<ClaimDocument[]>;
    morethan180days_ivr(): Promise<ClaimDocument[]>;
    morethan180days_manual(): Promise<ClaimDocument[]>;
    get_allocation_bucket(allocation_bucket: any, userid: any): Promise<void>;
    get_allocationbucket(allocation_bucket: any): Promise<ClaimDocument[]>;
    tflexceed_Claims(body: any): Promise<ClaimDocument[]>;
    fastapproach(body: any): Promise<ClaimDocument[]>;
    twotouch(body: any): Promise<ClaimDocument[]>;
    threetouch(body: any): Promise<ClaimDocument[]>;
    fourormore(body: any): Promise<ClaimDocument[]>;
    lessthan180daysclaims(body: any): Promise<ClaimDocument[]>;
    lowfollowupclaims(body: any): Promise<ClaimDocument[]>;
    morethan30daysclaims(body: any): Promise<ClaimDocument[][]>;
    lessthan30daysclaims(body: any): Promise<ClaimDocument[]>;
    morethan60daysclaims(body: any): Promise<ClaimDocument[]>;
    lessthan90daysclaims(body: any): Promise<ClaimDocument[]>;
}