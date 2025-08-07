export interface MediaQueryRule {
  query: string;
  value: string;
}

export const mediaQueryRulesMenu: MediaQueryRule[] = [
  { query: '(max-width: 999px) and (min-width: 850px)', value: '33%' },
  { query: '(max-width: 849px) and (min-width: 700px)', value: '30%' },
  { query: '(max-width: 799px) and (min-width: 550px)', value: '24%' },
  { query: '(max-width: 549px) and (min-width: 450px)', value: '14%' },
  { query: '(max-width: 449px) and (min-width: 320px)', value: '5%' },
];

export const mediaQueryRulesMain: MediaQueryRule[] = [
  { query: '(min-width: 1350px)', value: '50%' },
  { query: '(max-width: 1349px) and (min-width: 1110px)', value: '35%' },
  { query: '(max-width: 1109px)', value: '33%' }
];

export const smallScreenQuery = '(max-width: 999px) and (min-width: 320px)';
