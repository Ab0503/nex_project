import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import get from 'lodash.get';
import range from 'lodash.range';
const PaginationV1 = (props) => {
    console.log('PaginationV1', props);
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{get(props, 'page') * get(props, 'rowsPerPage') +1 }</span> to <span className="font-medium">{get(props, 'page') * get(props, 'rowsPerPage') + get(props, 'rowsPerPage')}</span> of{' '}
            <span className="font-medium">{get(props, 'totalRecords')}</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">

            {
                get(props, 'page') > 0  && (
                    <button
                        onClick={() => {props.applyPagination(get(props, 'page') - 1, get(props, 'rowsPerPage'))}}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                )
            }
            {
                get(props, 'page') <= 0  && (
                    <button
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                )
            }
            
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {
                range(get(props, 'totalRecords') / get(props, 'rowsPerPage')).map((number) => (
                    number == props.page ? <button
                        onClick={() => {props.applyPagination(number, get(props, 'rowsPerPage'))}}
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        {number + 1}
                        </button> : <button
                        onClick={() => {props.applyPagination(number, get(props, 'rowsPerPage'))}}
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                        {number + 1}
                        </button>
                    ))
            }
            {
                get(props, 'page') < parseInt(get(props,'totalRecords') / get(props,'rowsPerPage')) && <button
                        onClick={() => {props.applyPagination(get(props, 'page') + 1, get(props, 'rowsPerPage'))}}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Next1</span>
                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
            }
            {
                get(props, 'page') == parseInt(get(props,'totalRecords') / get(props,'rowsPerPage')) && <button
                        href="javascript:void(0)"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Next2</span>
                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
            }
            
          </nav>
        </div>
      </div>
    </div>
    );
}

PaginationV1.propTypes = {

}

PaginationV1.defaultProps = {

}

export default PaginationV1;