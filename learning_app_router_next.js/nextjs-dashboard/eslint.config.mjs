import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
    ...nextVitals,
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;

//El eslint sirve para poder encontrar errores en la ejecucion del codigo. Por ejemplo si falta agregar algun dato como "alt" una imagen
