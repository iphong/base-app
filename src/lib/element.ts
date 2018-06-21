import UIElement from '../interfaces/UIElement'

/**
 *
 * @param {UIElement} target
 * @return {Promise<UIElement>}
 */
export async function getParent(target: UIElement): Promise<UIElement> {
	// Do whatever shit to find its parent
	return null
}

export async function removeElement(target: UIElement): Promise<boolean> {
	// Do whatever shit to remove element
	return true
}