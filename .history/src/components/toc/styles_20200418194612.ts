// src/components/toc/styles.ts
import styled, { IProps } from "utils/styled"
import { css } from "@emotion/core"
import { FaList as BookContentIcon } from "react-icons/fa"
import { FaTimes as CrossIcon } from "react-icons/fa"

import mediaQuery from "utils/mediaQuery"
import { ITocListProps, ITocToggleProps } from "./types"

const openTocDiv = (props: IProps) => css`
  background: ${props.theme.colors.background};
  color: ${props.theme.colors.text.primary};
  padding: ${props.theme.space[3]} ${props.theme.space[5]};
  border-radius: ${props.theme.space[2]};
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: 1px solid ${props.theme.colors.ui.border};
`

export const TocDiv = styled.div`
  height: max-content;
  z-index: 3;
  line-height: 2em;
  right: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[3]};

  ${mediaQuery.maxMedium} {
    overscroll-behavior: none;
    nav {
      max-height: 60vh;
      overflow-y: scroll;
    }

    position: fixed;
    bottom: 1em;
    left: 1em;
    visibility: ${(props: any) => (props.open ? `visible` : `hidden`)};
    opacity: ${(props: any) => (props.open ? 1 : 0)};
    transition: 0.3s;
    background: white;
    max-width: 20em;

    ${(props: any) => (props.open ? openTocDiv : `height: 0;`)}
  }
  ${mediaQuery.minMedium} {
    font-size: ${props => props.theme.fontSizes[1]};
    position: sticky;
    top: ${props => props.theme.space[7]};
    padding-left: ${props => props.theme.space[4]};
    max-width: 100%;
  }
`

export const TocTitle = styled.p`
  margin: 0;
  padding-bottom: ${props => props.theme.space[2]};

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto 1fr;
  align-items: center;

  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[`bold`]};
  font-family: ${props => props.theme.fonts[`heading`]};
  line-height: ${props => props.theme.lineHeights[`dense`]};
`

export const TocLink = styled.a`
  font-weight: ${(props: ITocListProps) => props.active && `bold`};
  display: block;
  box-shadow: none;
`

const listItemShiftWidthEm = 1.5
const bulletRadiusPx = 4

export const TocListBullet = styled.span`
  position: absolute;

  border-color: #f0f0f2;
  border-width: 1px;
  border-style: solid;
  border-radius: ${bulletRadiusPx}px;

  background-color: ${(props: ITocListProps) => (props.active ? `rgba(34, 162, 201, 1);` : `#ffffff`)};
  width: ${bulletRadiusPx * 2}px;
  height: ${bulletRadiusPx * 2}px;
  content: "";
  position: absolute;
  display: block;
  z-index: 999;
  top: calc(50% - ${bulletRadiusPx}px);
  left: calc(${(props: ITocListProps) => `${(props.depth + 1 - 1) * listItemShiftWidthEm}em`} - ${bulletRadiusPx}px);
`

export const TocListItem = styled.li`
  margin: 0;
  list-style: none;

  /* You need to turn on relative positioning so the line is placed relative to the item rather than absolutely on the page */
  position: relative;

  /* Use padding to space things out rather than margins as the line would get broken up otherwise */
  padding-left: ${(props: ITocListProps) => `${(props.depth + 1) * listItemShiftWidthEm}em`};

  &::before {
    background-color: ${props => props.theme.colors.palette.grey[20]};
    width: 1px;
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: ${(props: ITocListProps) => `${(props.depth + 1 - 1) * listItemShiftWidthEm}em`};
  }

  &:hover {
    background-color: ${props => props.theme.colors.primaryShades[20]};
  }
`

export const TocIcon = styled(BookContentIcon)`
  width: 1em;
  margin-right: ${props => props.theme.space[1]};
`

const openerToggleCss = (props: ITocToggleProps & IProps) => css`
  position: fixed;
  bottom: calc(1vh + 4em);
  left: 0;
  margin-left: ${props.theme.space[2]};
  transform: translate(${props.open ? `-100%` : 0});
  padding: ${props.theme.space[1]};
  border-radius: 0 50% 50% 0;
  background: ${props.theme.colors.primary};
  color: ${props.theme.colors.background};
`

const closerToggleCss = () => css`
  margin-left: 1em;
  padding: 2px;
  border-radius: 0 50% 50% 0;
`

const toggleCss = () => css`
  width: 1.6em;
  height: auto;
  z-index: 2;
  transition: 0.3s;
  justify-self: end;
  &:hover {
    transform: scale(1.1);
  }
  ${mediaQuery.minMedium} {
    display: none;
  }
`

export const TocToggleOpener = styled(BookContentIcon)`
  ${toggleCss}
  ${openerToggleCss}
`

export const TocToggleCloser = styled(CrossIcon)`
  ${toggleCss}
  ${closerToggleCss}
`