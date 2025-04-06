export interface ProjectDetails {
    id: number;
    metId: number;
    type: string;
    name: string;
    description: string;
    param1: string;
    status: number;
    createdDatetime: string;
    updatedDatetime: string;
    imageUrl: string;
  }
  
  export interface ClouthausData {
    id: number;
    projectName: string;
    projectShortName: string;
    currency: string;
    countryCode: string;
    phoneNo: string;
    tenure: string;
    propertyCategory: string;
    propertyType: string[];
    sizeUnit: string;
    address1: string;
    address2: string;
    address3: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    longitude: string;
    latitude: string;
    descriptionTitle: string;
    descriptionSubTitle: string;
    descriptionOverview: string;
    logo: string;
    sitePlan: string | null;
    landSize: number;
    metricUnit: string | null;
    bumiDiscount: string | null;
    totalUnit: number;
    showStoreyPlan: boolean;
    showSitePlan: boolean;
    email: string;
    projectDetails: ProjectDetails[];
    propertyInfo: any[];
    gallery: any[];
    layouts: any[];
    documents: any[];
    map: any[];
  }
  
  export interface ApiResponse {
    response: string;
    content: ClouthausData;
    content2: any | null;
    content3: any | null;
    pagination: any | null;
  }