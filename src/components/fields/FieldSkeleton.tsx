import { Box, Skeleton } from '@mui/material';

export interface FieldSkeletonProps {
  height?: number;
  width?: string | number;
  showLabel?: boolean;
  showHelperText?: boolean;
  labelWidth?: string | number;
  helperTextWidth?: string | number;
}

export function FieldSkeleton({
  height = 56,
  width = '100%',
  showLabel = false,
  showHelperText = false,
  labelWidth = '40%',
  helperTextWidth = '60%',
}: FieldSkeletonProps) {
  return (
    <Box sx={{ width }}>
      {showLabel && (
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={labelWidth}
          height={20}
          sx={{ mb: 1 }}
        />
      )}
      <Skeleton
        data-testid="skeleton"
        variant="rectangular"
        width="100%"
        height={height}
        sx={{ borderRadius: 1 }}
      />
      {showHelperText && (
        <Skeleton
          data-testid="skeleton"
          variant="text"
          width={helperTextWidth}
          height={16}
          sx={{ mt: 0.5 }}
        />
      )}
    </Box>
  );
}