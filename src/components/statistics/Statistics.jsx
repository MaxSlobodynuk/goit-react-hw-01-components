import css from './Statistics.module.css';
import PropTypes  from 'prop-types'

export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}> {
            stats.map( stat =>
                <li key={stat.id} className={css.item}>
                    <span className={css.percentage}>{stat.percentage}%</span>
                    <span className={css.label}>{stat.label}</span>
                </li>
            )}
        </ul>
    </section>
    )}

Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats:PropTypes.array,
}

