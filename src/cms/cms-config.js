// Configure Article Preview in CMS
import CMS from 'netlify-cms';
import styles from '!css-loader!sass-loader!../main.scss';
CMS.registerPreviewStyle(styles.toString(), { raw: true });
