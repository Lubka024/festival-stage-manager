import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PerformanceForm } from '../../../components/forms/PerformanceForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create performance
			</SlotSources.Title>
			<CreateScope entity="Performance" redirectOnSuccess="stageManager/performance/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create performance" labelSaved="Create performance" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="stageManager/performance/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Performances
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PerformanceForm />
				</>
			</CreateScope>
		</>
	)
}
