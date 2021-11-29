export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface FaqResponse {
  data: Faq[];
}
