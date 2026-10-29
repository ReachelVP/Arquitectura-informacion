import { joinURL } from 'ufo'

// Las rutas de imágenes del frontmatter son absolutas (/images/...), por lo que
// hay que anteponer el baseURL cuando el sitio se publica en un subdirectorio
// (por ejemplo, GitHub Pages).
export function useFormato() {
  const { app } = useRuntimeConfig()

  const urlPublica = (ruta: string) => joinURL(app.baseURL, ruta)

  const fecha = (valor: string | Date) =>
    new Date(valor).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    })

  return { urlPublica, fecha }
}
