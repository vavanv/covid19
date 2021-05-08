export interface Vaccine {
  candidate: string;
  mechanism: string;
  sponsors: string[];
  details: string;
  trialPhase: string;
  institutions: string[];
}
export interface Phase {
  phase: string;
  candidates: string;
}
export interface VaccineInfo {
  source: string;
  totalCandidates: string;
  phases: Phase[];
  data: Vaccine[];
}

export type Vaccines = VaccineInfo;

export interface VaccineInfoState {
  items: VaccineInfo | null;
}
