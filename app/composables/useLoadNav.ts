export function useLoadNav(pages: { value: any; }, items: { value: { label: any; icon: string; active: boolean; to: any; children: { label: string; to: string; }[]; }[]; }, click: () => void) {

    const route = useRoute();

    if (!pages.value || !items) {
        return;
    }

    console.log(route.fullPath, pages.value)
    
    // Recorremos las páginas
    for (let page of pages?.value) {

        // Variable para almacenar los hijos de la ruta
        let childList: Array<{ label: string, to: string, active: boolean }> = [];

        // Sacamos la tabla de contenidos de la página
        for (let child of page.body.toc.links) {
            childList.push({
                label: child.text,
                to: `${page.path}#${child.id}`,
                active: route.fullPath === `${page.path}#${child.id}`,
            });
        }

        // Insertamos la página con sus hijos en la lista
        items.value.push({
            label: page.title,
            icon: 'i-lucide-book-open',
            to: page.path,
            active: route.path === page.path,
            children: childList
        })
        
    }

    return items;
}