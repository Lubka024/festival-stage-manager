import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PerformanceForm } from '../../../components/forms/PerformanceForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit performance
			</SlotSources.Title>
			<EditScope entity="Performance(id=$id)" redirectOnSuccess="admin/performance/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/performance/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<PerformanceForm />
			</EditScope>
		</>
	)
}
