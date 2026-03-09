import { HStack, Text, Center, TextProps, CenterProps } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface ListItemContentProps {
  title?: string
  text?: string | number
  titleProps?: TextProps
  textProps?: TextProps
}

export const ListItemContent = ({ title, text, titleProps, textProps }: ListItemContentProps) => {
  return (
    <HStack justifyContent='space-between' w='full'>
      <Text fontSize='md' fontWeight='semibold' color={colors.text.primary} {...titleProps}>
        {title}
      </Text>
      <Text fontSize='xs' fontWeight='medium' color={colors.text.secondary} {...textProps}>
        {text}
      </Text>
    </HStack>
  )
}

export interface ListItemIconProps extends CenterProps {
  icon: React.ReactNode
}

export const ListItemIcon = ({ icon, ...props }: ListItemIconProps) => {
  return (
    <Center {...props}>
      {icon}
    </Center>
  )
}

export interface ListItemSubtextProps extends TextProps {
  subtext: string
}

export const ListItemSubtext = ({ subtext, ...props }: ListItemSubtextProps) => {
  return (
    <Text fontSize='xs' fontWeight='regular' color={colors.text.secondary} {...props}>
      {subtext}
    </Text>
  )
}

export const ListItem = {
  Content: ListItemContent,
  Icon:    ListItemIcon,
  Subtext: ListItemSubtext,
}