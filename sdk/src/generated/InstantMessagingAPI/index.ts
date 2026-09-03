// AUTO-GENERATED from Lazada reference docs (references/api/Instant Messaging API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { LazadaClient } from '../../client'
import { ApiResponse, LazadaRequestOptions } from '../../types'

export interface GetMessagesRequest {
  /** session id */
  "session_id": string,
  /** when request the first page pls input current timestamp，get the next page pls input previous page response field next_start_time */
  "start_time": number,
  /** page size */
  "page_size": number,
  /** previous page output param [last_message_id];it could be null when get the first page, get the next page pls input previous page response field last_message_id */
  "last_message_id"?: string,
}
export interface GetMessagesData {
  "err_code"?: string,
  "data"?: Array<{
  "message_list"?: Array<{
    "from_account_type"?: number,
    "to_account_type"?: number,
    "from_account_id"?: string,
    "message_id"?: string,
    "to_account_id"?: string,
    "site_id"?: string,
    "session_id"?: string,
    "template_id"?: number,
    "type"?: number,
    "content"?: string,
    "send_time"?: number,
    "process_msg"?: string,
    "status"?: number,
    "auto_reply"?: boolean,
  }>,
  "has_more"?: boolean,
  "next_start_time"?: number,
  "last_message_id"?: string,
  }>,
  "success"?: boolean,
  "err_message"?: string,
}
export type GetMessagesResponse = ApiResponse<GetMessagesData>

export interface GetSessionDetailRequest {
  /** session id */
  "session_id": string,
}
export interface GetSessionDetailData {
  "err_code"?: string,
  "data"?: {
  "summary"?: string,
  "self_position"?: number,
  "to_position"?: number,
  "head_url"?: string,
  "unread_count"?: number,
  "last_message_time"?: number,
  "last_message_id"?: string,
  "session_id"?: string,
  "title"?: string,
  "buyer_id"?: number,
  "tags"?: Array<string>,
  "site_id"?: string,
  },
  "success"?: boolean,
  "err_message"?: string,
}
export type GetSessionDetailResponse = ApiResponse<GetSessionDetailData>

export interface GetSessionListRequest {
  /** previous page output param [last_session_id];The last session id on this page, it needs to be passed in as an input parameter when pulling the next page */
  "last_session_id"?: string,
  /** next page start time;when pull first page pls input current timestamp， when pull next page pls input last page response field next_start_time */
  "start_time": string,
  /** page size */
  "page_size": string,
}
export interface GetSessionListData {
  "success"?: boolean,
  "err_message"?: string,
  "err_code"?: string,
  "data"?: {
  "has_more"?: boolean,
  "next_start_time"?: number,
  "last_session_id"?: string,
  "session_list"?: Array<{
    "buyer_id"?: number,
    "tags"?: Array<string>,
    "site_id"?: string,
    "summary"?: string,
    "self_position"?: string,
    "to_position"?: string,
    "head_url"?: string,
    "unread_count"?: number,
    "last_message_time"?: number,
    "last_message_id"?: string,
    "session_id"?: string,
    "title"?: string,
  }>,
  },
}
export type GetSessionListResponse = ApiResponse<GetSessionListData>

export interface MessageRecallRequest {
  /** session id;conversation id */
  "session_id": string,
  /** the id of message that need to be recalled;1）Cannot be recalled more than two minutes since the message has been sent 2）system message could not be recalled */
  "message_id": string,
}
export interface MessageRecallData {
  "err_code"?: string,
  "success"?: boolean,
  "err_message"?: string,
}
export type MessageRecallResponse = ApiResponse<MessageRecallData>

export interface OpenSessionRequest {
  /** orderId */
  "order_id": number,
}
export interface OpenSessionData {
  "session_id"?: string,
}
export type OpenSessionResponse = ApiResponse<OpenSessionData>

export interface ReadSessionRequest {
  /** session id;unique id of a conversation */
  "session_id": string,
  /** last message id of user readed */
  "last_read_message_id": string,
}
export interface ReadSessionData {
  "err_code"?: string,
  "success"?: boolean,
  "err_message"?: string,
}
export type ReadSessionResponse = ApiResponse<ReadSessionData>

export interface SendMessageRequest {
  /** conversation id */
  "session_id": string,
  /** message template id, 1: normal text message 3: picture message 4: emoji message 10006: item message 10007: order message 10008: voucher message 10010: invite buyers to follow the store 6: video message, use this API to upload video (The video duration is greater than 3s and less than 180s) */
  "template_id": string,
  /** template_id=1 required */
  "txt"?: string,
  /** template_id=3 required */
  "img_url"?: string,
  /** template_id=3/6 required */
  "width"?: number,
  /** template_id=3/6 required */
  "height"?: number,
  /** template_id=10006 required */
  "item_id"?: string,
  /** template_id=10007 required */
  "order_id"?: string,
  /** template_id=10008 required */
  "promotion_id"?: string,
  /** template_id=6 required */
  "video_id"?: string,
}
export interface SendMessageData {
  "err_code"?: string,
  "data"?: {
  "current_time"?: number,
  "message_id"?: string,
  "template_id"?: number,
  },
  "success"?: boolean,
  "err_message"?: string,
}
export type SendMessageResponse = ApiResponse<SendMessageData>


export class LazadaInstantMessagingAPIApi {
  constructor(private client: LazadaClient) {}

  /**
   * GetMessages
   * /im/message/list (GET)
   */
  async getMessages(params: GetMessagesRequest, opts?: LazadaRequestOptions): Promise<GetMessagesResponse> {
    return this.client.request({"method":"GET","path":"/im/message/list","params":["session_id","start_time","page_size","last_message_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSessionDetail
   * /im/session/get (GET)
   */
  async getSessionDetail(params: GetSessionDetailRequest, opts?: LazadaRequestOptions): Promise<GetSessionDetailResponse> {
    return this.client.request({"method":"GET","path":"/im/session/get","params":["session_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * GetSessionList
   * /im/session/list (GET)
   */
  async getSessionList(params: GetSessionListRequest, opts?: LazadaRequestOptions): Promise<GetSessionListResponse> {
    return this.client.request({"method":"GET","path":"/im/session/list","params":["last_session_id","start_time","page_size"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * MessageRecall
   * /im/message/recall (GET)
   */
  async messageRecall(params: MessageRecallRequest, opts?: LazadaRequestOptions): Promise<MessageRecallResponse> {
    return this.client.request({"method":"GET","path":"/im/message/recall","params":["session_id","message_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * OpenSession
   * /im/session/open (GET)
   */
  async openSession(params: OpenSessionRequest, opts?: LazadaRequestOptions): Promise<OpenSessionResponse> {
    return this.client.request({"method":"GET","path":"/im/session/open","params":["order_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ReadSession
   * /im/session/read (POST)
   */
  async readSession(params: ReadSessionRequest, opts?: LazadaRequestOptions): Promise<ReadSessionResponse> {
    return this.client.request({"method":"POST","path":"/im/session/read","params":["session_id","last_read_message_id"]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * SendMessage
   * /im/message/send (POST)
   */
  async sendMessage(params: SendMessageRequest, opts?: LazadaRequestOptions): Promise<SendMessageResponse> {
    return this.client.request({"method":"POST","path":"/im/message/send","params":["session_id","template_id","txt","img_url","width","height","item_id","order_id","promotion_id","video_id"]}, params as unknown as Record<string, unknown>, opts)
  }
}
