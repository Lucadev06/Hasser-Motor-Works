import useMediaQuery from '@mui/material/useMediaQuery';
import { MediaQueryRule } from '../headers/constans/mediaQueries';

export function useResponsiveValue(rules: MediaQueryRule[]): string | undefined {
    const matches = rules.map(rule => useMediaQuery(rule.query));
    const matchedRuleIndex = matches.findIndex(Boolean);
    return matchedRuleIndex !== -1 ? rules[matchedRuleIndex].value : undefined;
}
