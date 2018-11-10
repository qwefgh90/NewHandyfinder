import { Subject } from 'rxjs'

export interface KeywordSubjectLocator {
    keywordSubject(): Subject<string>
}