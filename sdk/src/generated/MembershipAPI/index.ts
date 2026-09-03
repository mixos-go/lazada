// AUTO-GENERATED from Lazada reference docs (references/api/Membership API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetLinkMemberRequest {
  /** seller id */
  "seller_id": string,
  /** buyer id */
  "buyer_id": string,
}
export interface GetLinkMemberData {
  "result"?: {
  "module"?: {
    "seller_id"?: number,
    "buyer_id"?: number,
    "partneruser_id"?: string,
  },
  },
}
export type GetLinkMemberResponse = ApiResponse<GetLinkMemberData>

export interface GetLinkMemberListRequest {
  /** page number */
  "page_num": string,
  /** page size */
  "page_size": string,
  /** seller id */
  "seller_id": string,
}
export interface GetLinkMemberListData {
  "result"?: Array<{
  "model_list"?: Array<{
    "seller_id"?: number,
    "buyer_id"?: number,
    "partneruser_id"?: string,
  }>,
  "total_count"?: number,
  }>,
}
export type GetLinkMemberListResponse = ApiResponse<GetLinkMemberListData>

export interface GetLinkMemberList2Request {
  /** page number */
  "page_num": string,
  /** page size */
  "page_size": string,
}
export interface GetLinkMemberList2Data {
  "result"?: Array<{
  "model_list"?: Array<{
    "seller_id"?: number,
    "buyer_id"?: number,
    "partneruser_id"?: string,
  }>,
  "total_count"?: number,
  }>,
}
export type GetLinkMemberList2Response = ApiResponse<GetLinkMemberList2Data>

export interface GetLinkMember2Request {
  /** buyer id */
  "buyer_id": string,
}
export interface GetLinkMember2Data {
  "result"?: {
  "module"?: {
    "seller_id"?: number,
    "buyer_id"?: number,
    "partneruser_id"?: string,
  },
  },
}
export type GetLinkMember2Response = ApiResponse<GetLinkMember2Data>

export interface LinkMembershipRequest {
  /** A unique identifier of the member on partner side, generated and stored at partner side, that identifies that member and will be referenced by Lazada in further communications. */
  "p_uid": string,
  /** Name of member on partner side, to easier identify the membership on My Account pages */
  "member_name"?: string,
  /** Customer’s tier in partner side, shown as-is */
  "tier"?: string,
  /** Expiry of the membership, shown as-is */
  "tier_expiry"?: string,
  /** Balance of the membership. */
  "balance"?: number,
  /** Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance */
  "valid_from"?: string,
  /** Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance */
  "valid_to"?: string,
  /** Linking token. */
  "linking_token": string,
}
export interface LinkMembershipData {
  "result"?: {
  "success"?: boolean,
  "data"?: Record<string, unknown>,
  "error_code"?: {
    "display_message"?: string,
    "key"?: string,
  },
  },
}
export type LinkMembershipResponse = ApiResponse<LinkMembershipData>

export interface PartnerLinkRequest {
  /** Name of member on partner side, to easier identify the membership on My Account pages */
  "member_name"?: string,
  /** Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance */
  "valid_from"?: string,
  /** Linking token. */
  "linking_token": string,
  /** Customer’s tier in partner side, shown as-is */
  "tier"?: string,
  /** Balance of the membership. */
  "balance"?: number,
  /** Expiry of the membership, shown as-is */
  "tier_expiry"?: string,
  /** A unique identifier of the member on partner side, generated and stored at partner side, that identifies that member and will be referenced by Lazada in further communications. */
  "p_uid": string,
  /** Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance */
  "valid_to"?: string,
  /** Where does this user come from.LAZADA or PARTNER */
  "from_source"?: string,
}
export interface PartnerLinkData {
  "result"?: {
  "success"?: boolean,
  "module"?: Record<string, unknown>,
  "errorCode"?: {
    "displayMessage"?: string,
    "key"?: string,
  },
  },
}
export type PartnerLinkResponse = ApiResponse<PartnerLinkData>

export interface PartnerTransactionRequest {
  /** When set, limits the returned set of orders to loose orders, which return only entries which fit the status provided. Possible values are unpaid, pending, canceled, ready_to_ship, delivered, returned, shipped , failed, topack,toship,shipping and lost */
  "status"?: string,
  /** Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional. */
  "update_before"?: string,
  /** Specify the sorting type. Possible values are ASC and DESC. */
  "sort_direction"?: string,
  /** Number of orders to skip at the beginning of the list. */
  "offset"?: number,
  /** The maximum number of orders that can be returned. The supported maximum number is 100. */
  "limit"?: number,
  /** Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory. */
  "update_after"?: string,
  /** Allows to choose the sorting column. Possible values are created_at and updated_at. */
  "sort_by"?: string,
  /** Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional. */
  "created_before"?: string,
  /** Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory. */
  "created_after"?: string,
}
export interface PartnerTransactionData {
  "result"?: Array<{
  "model_list"?: Array<{
    "shipping_fee_original"?: string,
    "shipping_fee_discount_seller"?: string,
    "shipping_fee_discount_platform"?: string,
    "address_shipping"?: {
      "address1"?: string,
      "phone2"?: string,
      "first_name"?: string,
      "phone"?: string,
      "address5"?: string,
      "post_code"?: string,
      "address4"?: string,
      "last_name"?: string,
      "country"?: string,
      "address3"?: string,
      "address2"?: string,
      "city"?: string,
    },
    "customer_last_name"?: string,
    "gift_option"?: string,
    "voucher_code"?: string,
    "updated_at"?: string,
    "delivery_info"?: string,
    "gift_message"?: string,
    "member_sub_order_list"?: Array<{
      "buyer_id"?: number,
      "partner_user_id"?: string,
      "seller_id"?: string,
      "pick_up_store_info"?: {
        "pick_up_store_name"?: string,
        "pick_up_store_address"?: string,
        "pick_up_store_code"?: string,
        "pick_up_store_open_hour"?: Array<string>,
      },
      "purchase_order_number"?: string,
      "name"?: string,
      "product_main_image"?: string,
      "item_price"?: string,
      "tax_amount"?: string,
      "status"?: string,
      "cancel_return_initiator"?: string,
      "voucher_platform"?: string,
      "voucher_seller"?: string,
      "order_type"?: string,
      "stage_pay_status"?: string,
      "warehouse_code"?: string,
      "voucher_seller_lpi"?: string,
      "voucher_platform_lpi"?: string,
      "shipping_fee_original"?: string,
      "shipping_fee_discount_seller"?: string,
      "shipping_fee_discount_platform"?: string,
      "voucher_code_seller"?: string,
      "voucher_code_platform"?: string,
      "is_fbl"?: number,
      "is_reroute"?: number,
      "reason"?: string,
      "digital_delivery_info"?: string,
      "promised_shipping_time"?: string,
      "order_id"?: number,
      "voucher_amount"?: string,
      "return_status"?: string,
      "shipping_type"?: string,
      "shipment_provider"?: string,
      "variation"?: string,
      "created_at"?: string,
      "invoice_number"?: string,
      "shipping_amount"?: string,
      "currency"?: string,
      "order_flag"?: string,
      "shop_id"?: string,
      "sla_time_stamp"?: string,
      "sku"?: string,
      "voucher_code"?: string,
      "wallet_credits"?: string,
      "updated_at"?: string,
      "is_digital"?: number,
      "tracking_code_pre"?: string,
      "order_item_id"?: number,
      "package_id"?: string,
      "tracking_code"?: string,
      "shipping_service_cost"?: string,
      "extra_attributes"?: string,
      "paid_price"?: string,
      "shipping_provider_type"?: string,
      "product_detail_url"?: string,
      "shop_sku"?: string,
      "reason_detail"?: string,
      "purchase_order_id"?: string,
      "sku_id"?: string,
      "product_id"?: string,
    }>,
    "branch_number"?: string,
    "tax_code"?: string,
    "extra_attributes"?: string,
    "address_updated_at"?: string,
    "shipping_fee"?: string,
    "customer_first_name"?: string,
    "payment_method"?: string,
    "statuses"?: Array<string>,
    "remarks"?: string,
    "order_number"?: number,
    "order_id"?: number,
    "voucher"?: string,
    "national_registration_number"?: string,
    "promised_shipping_times"?: string,
    "items_count"?: number,
    "voucher_platform"?: string,
    "voucher_seller"?: string,
    "created_at"?: string,
    "price"?: string,
    "address_billing"?: {
      "address1"?: string,
      "phone2"?: string,
      "first_name"?: string,
      "phone"?: string,
      "address5"?: string,
      "post_code"?: string,
      "address4"?: string,
      "last_name"?: string,
      "country"?: string,
      "address3"?: string,
      "address2"?: string,
      "city"?: string,
    },
    "warehouse_code"?: string,
  }>,
  "total_count"?: number,
  "page_no"?: number,
  "page_size"?: number,
  }>,
}
export type PartnerTransactionResponse = ApiResponse<PartnerTransactionData>

export interface PartnerUnlinkRequest {
  /** A unique identifier of the member on partner side, used to establish the link to partner ID. */
  "p_uid": string,
}
export interface PartnerUnlinkData {
  "result"?: {
  "success"?: boolean,
  "data"?: Record<string, unknown>,
  "error_code"?: {
    "display_message"?: string,
    "key"?: string,
  },
  },
}
export type PartnerUnlinkResponse = ApiResponse<PartnerUnlinkData>

export interface PartnerUpdateRequest {
  /** Customer’s tier in partner side, shown as-is */
  "tier"?: string,
  /** Balance of the membership. */
  "balance": number,
  /** Expiry of the membership, shown as-is */
  "tier_expiry"?: string,
  /** A unique identifier of the member on partner side, used to establish the link to partner ID. */
  "p_uid": string,
  /** Name of member on partner side, to easier identify the membership on My Account pages */
  "member_name"?: string,
  /** Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance */
  "valid_from"?: string,
  /** One of: ‘active’ – For activated members ‘inactive’ – For inactive member ‘pending’ – For members that are pending activation */
  "status": string,
  /** Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance */
  "valid_to"?: string,
}
export interface PartnerUpdateData {
  "result"?: {
  "success"?: boolean,
  "data"?: Record<string, unknown>,
  "error_code"?: {
    "display_message"?: string,
    "key"?: string,
  },
  },
}
export type PartnerUpdateResponse = ApiResponse<PartnerUpdateData>

export interface UpdatePartnerUserIdRequest {
  /** the current partner user id to match up with a user */
  "old_p_uid": string,
  /** the new partner user id to be placed */
  "new_p_uid": string,
}
export interface UpdatePartnerUserIdData {
  "result"?: {
  "success"?: boolean,
  "module"?: Record<string, unknown>,
  "errorCode"?: {
    "displayMessage"?: string,
    "key"?: string,
  },
  },
}
export type UpdatePartnerUserIdResponse = ApiResponse<UpdatePartnerUserIdData>


export class LazadaMembershipAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetLinkMember
   * /membership/linkmember/get (GET)
   */
  async getLinkMember(params: GetLinkMemberRequest, opts?: LazadaRequestOptions): Promise<GetLinkMemberResponse> {
    return this.client.request({"method":"GET","path":"/membership/linkmember/get","params":["seller_id","buyer_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetLinkMemberList
   * /membership/linkmember/list (GET)
   */
  async getLinkMemberList(params: GetLinkMemberListRequest, opts?: LazadaRequestOptions): Promise<GetLinkMemberListResponse> {
    return this.client.request({"method":"GET","path":"/membership/linkmember/list","params":["page_num","page_size","seller_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetLinkMemberList 2
   * /partner/list (GET)
   */
  async getLinkMemberList2(params: GetLinkMemberList2Request, opts?: LazadaRequestOptions): Promise<GetLinkMemberList2Response> {
    return this.client.request({"method":"GET","path":"/partner/list","params":["page_num","page_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetLinkMember 2
   * /partner/get (GET)
   */
  async getLinkMember2(params: GetLinkMember2Request, opts?: LazadaRequestOptions): Promise<GetLinkMember2Response> {
    return this.client.request({"method":"GET","path":"/partner/get","params":["buyer_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * LinkMembership
   * /membership/link (POST)
   */
  async linkMembership(params: LinkMembershipRequest, opts?: LazadaRequestOptions): Promise<LinkMembershipResponse> {
    return this.client.request({"method":"POST","path":"/membership/link","params":["p_uid","member_name","tier","tier_expiry","balance","valid_from","valid_to","linking_token"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PartnerLink
   * /partner/link (GET)
   */
  async partnerLink(params: PartnerLinkRequest, opts?: LazadaRequestOptions): Promise<PartnerLinkResponse> {
    return this.client.request({"method":"GET","path":"/partner/link","params":["member_name","valid_from","linking_token","tier","balance","tier_expiry","p_uid","valid_to","from_source"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PartnerTransaction
   * /partner/transaction (GET)
   */
  async partnerTransaction(params: PartnerTransactionRequest, opts?: LazadaRequestOptions): Promise<PartnerTransactionResponse> {
    return this.client.request({"method":"GET","path":"/partner/transaction","params":["status","update_before","sort_direction","offset","limit","update_after","sort_by","created_before","created_after"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PartnerUnlink
   * /partner/unlink (GET)
   */
  async partnerUnlink(params: PartnerUnlinkRequest, opts?: LazadaRequestOptions): Promise<PartnerUnlinkResponse> {
    return this.client.request({"method":"GET","path":"/partner/unlink","params":["p_uid"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * PartnerUpdate
   * /partner/update (GET)
   */
  async partnerUpdate(params: PartnerUpdateRequest, opts?: LazadaRequestOptions): Promise<PartnerUpdateResponse> {
    return this.client.request({"method":"GET","path":"/partner/update","params":["tier","balance","tier_expiry","p_uid","member_name","valid_from","status","valid_to"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * UpdatePartnerUserId
   * /partner/updatePartnerUserId (GET)
   */
  async updatePartnerUserId(params: UpdatePartnerUserIdRequest, opts?: LazadaRequestOptions): Promise<UpdatePartnerUserIdResponse> {
    return this.client.request({"method":"GET","path":"/partner/updatePartnerUserId","params":["old_p_uid","new_p_uid"]}, params as unknown as Record<string, unknown>, opts)
  }
}
