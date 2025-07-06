import {Fragment, useState} from 'react'
import {
    Combobox,
    ComboboxInput, ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
    ExclamationCircleIcon,
    PencilSquareIcon,
} from '@heroicons/react/24/outline'

const items : Item[] = [
    {
        id: 1,
        name: 'Text',
        description: 'Add freeform text with basic formatting options.',
        url: '#',
        color: 'bg-indigo-500',
        icon: PencilSquareIcon,
    },
    // More items...
]
interface Item {
    id: number;
    name: string;
    description: string;
    url: string;
    color?: string;
    // Change type when product picture will be put or make sure that the picture is a component with svg props
    icon: React.ComponentType<React.ComponentProps<'svg'>>;
}
function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SearchbarComponent() {
    const [query, setQuery] = useState('')

    const [open] = useState(true)

    const filteredItems =
        query === ''
            ? []
            : items.filter((item) => {
                return item.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Transition show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
            <Dialog as="div" className="relative z-10" onClose={() => null}>
                <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <TransitionChild
                        as={Fragment}
                    >
                        <DialogPanel className="mx-auto max-w-xl divide-y divide-gray-100 overflow-hidden bg-neutral-800 rounded-full shadow-2xl ring-1 ring-black ring-opacity-5">
                            <Combobox<Item> onChange={(item) => {
                                if (item) {
                                    window.location.href = item.url
                                }
                            }}>
                                <div className="relative">
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-neutral-400"
                                        aria-hidden="true"
                                    />
                                    <ComboboxInput
                                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-neutral-400 font-light focus:ring-0 sm:text-sm"
                                        placeholder="Ieškoti prekės..."
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                </div>

                                {filteredItems.length > 0 && (
                                    <ComboboxOptions static anchor="bottom" className="bg-neutral-800 rounded-xl w-xl max-h-96 scroll-py-3 overflow-y-auto p-3 [--anchor-gap:10px]">
                                        {filteredItems.map((item) => (
                                            <ComboboxOption
                                                key={item.id}
                                                value={item}
                                                className={({ active }) =>
                                                    classNames('flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100')
                                                }
                                            >
                                                {({ active }) => (
                                                    <>
                                                        <div
                                                            className={classNames(
                                                                'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                                                item.color ?? ''
                                                            )}
                                                        >
                                                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4 flex-auto">
                                                            <p
                                                                className={classNames(
                                                                    'text-sm font-medium',
                                                                    active ? 'text-gray-900' : 'text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </p>
                                                            <p className={classNames('text-sm', active ? 'text-gray-700' : 'text-gray-500')}>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </>
                                                )}
                                            </ComboboxOption>
                                        ))}
                                    </ComboboxOptions>
                                )}

                                {query !== '' && filteredItems.length === 0 && (
                                    <div className="py-14 px-6 text-center text-sm sm:px-14">
                                        <ExclamationCircleIcon
                                            type="outline"
                                            name="exclamation-circle"
                                            className="mx-auto h-6 w-6 text-gray-400"
                                        />
                                        <p className="mt-4 font-semibold text-gray-900">No results found</p>
                                        <p className="mt-2 text-gray-500">No components found for this search term. Please try again.</p>
                                    </div>
                                )}
                            </Combobox>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}
