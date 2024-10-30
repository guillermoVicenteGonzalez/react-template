import { pascalCase } from '../../component/__kebabCase_name__/__kebabCase_name__.component'

interface {{pascalCase name}}ViewProps  {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export const {{pascalCase name}}View :React.FC<{{pascalCase name}}Props> = ({}) => {
    return <div data-testid="{{ kebabCase name }}-view" className={styles.container}></div>
}

