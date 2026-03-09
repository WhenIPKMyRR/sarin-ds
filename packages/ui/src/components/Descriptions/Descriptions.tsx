import { Box, Grid, Text } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface DescriptionItem {
  label: string
  value: React.ReactNode
  span?: number
}

export interface DescriptionsProps {
  items: DescriptionItem[]
  columns?: number
  bordered?: boolean
}

export const Descriptions = ({ items, columns = 2, bordered = false }: DescriptionsProps) => {
  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={4}>
      {items.map((item, index) => (
        <Box
          key={index}
          gridColumn={item.span ? `span ${item.span}` : undefined}
          borderBottom={bordered ? `0.5px solid ${colors.border.muted}` : 'none'}
          pb={bordered ? 2 : 0}
        >
          <Text fontSize='xs' color={colors.text.secondary} mb={1}>
            {item.label}
          </Text>
          <Text fontSize='sm' color={colors.text.primary}>
            {item.value}
          </Text>
        </Box>
      ))}
    </Grid>
  )
}