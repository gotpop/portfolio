import { BiCode } from 'react-icons/bi'
import { CSSProperties } from 'react'
import Grid from '../Grid'
import GridWrap from '../GridWrap'
import Link from 'next/link'
import LogoSVG from '../LogoSVG'
import styles from './Header.module.css'

type Props = {
  vars: CSSProperties | undefined
}

const Header = ({ vars }: Props) => {
  return (
    <header className={styles.header} style={vars}>
      <GridWrap>
        <Grid>
          <>
            <LogoSVG />
            <nav className={styles.nav}>
              <Link href={`/skills`} data-cy="link-skills">
                <span>Skills</span>
                <BiCode />
              </Link>
            </nav>
          </>
        </Grid>
      </GridWrap>
    </header>
  )
}

Header.defaultProps = {
  vars: undefined
}

export default Header